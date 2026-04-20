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
    console.log("Message received:", message.body);

    if (message.from !== message.to) return;

    const text = message.body.toLowerCase();

    // =========================
    // ⏱️ REMIND IN (time)
    // =========================
    let match = text.match(/remind me in (\d+)\s*(second|seconds|minute|minutes|hour|hours)\s*to (.+)/);

    if (match) {
        let time = parseInt(match[1]);
        let unit = match[2];
        let task = match[3];

        let delay = time * 1000;
        if (unit.includes('minute')) delay *= 60;
        if (unit.includes('hour')) delay *= 3600;

        message.reply(`Got it. I’ll remind you to "${task}" in ${time} ${unit}`);

        setTimeout(async () => {
            try {
                await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
                    chat_id: CHAT_ID,
                    text: `⏰ Reminder: ${task}`
                });
            } catch (err) {
                console.error("Telegram error:", err.message);
            }
        }, delay);

        return;
    }

    // =========================
    // 🕒 REMIND AT (exact time)
    // =========================
    match = text.match(/remind me at (\d{1,2}):(\d{2})\s*(am|pm)?\s*to (.+)/);

    if (match) {
        let hour = parseInt(match[1]);
        let minute = parseInt(match[2]);
        let ampm = match[3];
        let task = match[4];

        // convert to 24h
        if (ampm === 'pm' && hour < 12) hour += 12;
        if (ampm === 'am' && hour === 12) hour = 0;

        let now = new Date();
        let target = new Date();

        target.setHours(hour, minute, 0);

        // if time passed → tomorrow
        if (target < now) {
            target.setDate(target.getDate() + 1);
        }

        let delay = target - now;

        message.reply(`Got it. I’ll remind you at ${hour}:${minute.toString().padStart(2, '0')}`);

        setTimeout(async () => {
            try {
                await axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
                    chat_id: CHAT_ID,
                    text: `⏰ Reminder: ${task}`
                });
            } catch (err) {
                console.error("Telegram error:", err.message);
            }
        }, delay);

        return;
    }

});

client.initialize();
