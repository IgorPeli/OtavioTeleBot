const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const { PrismaClient } = require("@prisma/client");

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });
const prisma = new PrismaClient();

// Função para verificar se está dentro do horário de funcionamento
function isBusinessHours() {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 9 && hours < 19;
}

bot.onText(/\/echo (.+)/, (msg, match) => {
    const chatId = msg.chat.id;

    if (match) {
        const resp = match[1];
        bot.sendMessage(chatId, resp);
    }
});

let waitingForEmail = false;

bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    if (isBusinessHours()) {
        bot.sendMessage(chatId, "Oi, estamos funcionando, segue aqui o link: https://uvv.br");
    } else {
        if (waitingForEmail) {
            if (messageText.includes("@")) {
                try {
                    await prisma.email.create({
                        data: {
                            address: messageText
                        }
                    });
                    bot.sendMessage(chatId, "Email armazenado com sucesso!");
                } catch (error) {
                    bot.sendMessage(chatId, "Desculpe, ocorreu um erro ao armazenar o email.");
                    console.error("Erro ao armazenar o email:", error);
                }
                waitingForEmail = false;
            } else {
                bot.sendMessage(chatId, "Por favor, envie um email válido.");
            }
        } else {
            bot.sendMessage(chatId, "Oi! Por favor, me forneça seu email para entrar em contato depois.");
            waitingForEmail = true;
        }
    }
});
