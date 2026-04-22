<p align="center">
  <img src="logo.jpg" width="120" />
</p>

# Remin

A simple bot that lets you set reminders using WhatsApp and receive notifications on Telegram.

## **⚠️ Disclaimer**

This bot is completely vibecoded, so feel free to fix any mistakes. I have tried my best making sure that there wont be any errors. I am looking forward to learning javascript and improving this project.

## ✨ Features

* Set reminders using natural messages
* Supports:

  * `remind me in X time`
  * `remind me at HH:MM`
* Reliable Telegram notifications (no WhatsApp notification issues)
* First-time setup prompts (no manual config editing)

---

## 📦 Requirements

* Node.js (v18 or higher recommended)
* A WhatsApp account
* A Telegram account
* A PC

---

## 🚀 Installation

### 1. Clone the repository

```
git clone https://github.com/rapidSpeed4652/remin.git
cd remin

```

### 2. Install dependencies

```
npm install

```

---

## 🤖 Creating a Telegram Bot

1. Open Telegram
2. Search for "**BotFather"**
3. Run:

```
/start
/newbot
```

4. Name the bot whatever you want
5. You will receive the bot token, make sure not to leak that anywhere.

---

## 🆔 Getting Your Chat ID

1. Search for "userinfobot" in Telegram
2. Send a message
3. The bot will send all the info along with the chat ID

---

## 🔐 Adding the `.env` File

### 1. Create a `.env` file

In the project root, create a file named:

```
.env
```

### 2. Add your credentials

Paste the following format:

```
TELEGRAM_TOKEN=your_telegram_bot_token_here
CHAT_ID=your_chat_id_here
```

---

## ▶️ Running the Bot & Scanning QR Code

After creating .env file, start the bot with:

```
node bot.js
```

When you run it for the first time, a QR code will appear in your terminal.

### 📱 How to Scan the QR Code

1. Open WhatsApp on your phone
2. Tap the three dots (top right) → **Linked Devices**
3. Tap **Link a Device**
4. Scan the QR code shown in your terminal

### 🔁 Important Notes

* You only need to scan the QR code once (unless session is restarted)
* Keep the terminal running while using the bot
* If QR doesn’t show, restart the bot

---

## ▶️ Usage

Send messages to yourself on WhatsApp like:

```
remind me in 10 minutes to study
remind me at 7:30 pm to join class
```

---

## 🔔 How It Works

* You send a message on WhatsApp
* Bot reads it automatically
* Reminder is sent to Telegram
* You get a notification there

---

## ☁️ Deployment on Cloud (Removed)

You cannot deploy this app on cloud platforms. This can change if anyone can contribute to add it.

---

## 💡 Future Improvements

* Recurring reminders
* Natural language parsing (e.g. "tomorrow morning")
* Web dashboard

---

## 📜 License

Apache 2.0 License

---

## 🙌 Contributing

Feel free to fork and improve the project!
