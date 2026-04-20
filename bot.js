// create a .env file and put
// const TELEGRAM_TOKEN = "telegram_token";
// const CHAT_ID = "chat_id";

const env = require('dotenv').config();
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const axios = require('axios');

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

const client = new Client({
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', qr => {
    if (process.env.RAILWAY_ENVIRONMENT) {
        console.log("QR:", qr); // Railway
    } else {
        const qrcode = require('qrcode-terminal');
        qrcode.generate(qr, { small: true }); // Local
    }
});

client.on('ready', () => {
    console.log('Bot is ready!');
});
client.on('message', async message => {

    console.log("----- NEW MESSAGE -----");
    console.log("Body:", message.body);
    console.log("From:", message.from);
    console.log("To:", message.to);
    console.log("FromMe:", message.fromMe);
    console.log("IsGroup:", message.from.includes('@g.us'));
});


client.initialize();
