const express = require('express');
const { Telegraf } = require('telegraf');
const messages = require('./messages');

//helper
const getMessage = () => {
  const index = Math.floor(Math.random() * Math.floor(messages.length));
  return messages[index];
};

// env variables
const token = process.env.BOT_TOKEN;
const port = process.env.PORT || 3000;
const url = process.env.URL || 'https://i-hate-voice-bot.herokuapp.com';

// express server
const expressApp = express();
expressApp.get('/', (req, res) => {
  res.send('iHateVoiceBot is working');
});

expressApp.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// setting up a bot to work with express
const bot = new Telegraf(token);
expressApp.use(bot.webhookCallback(`/bot${token}`));
bot.telegram.setWebhook(`${url}/bot${token}`);
// for bot working in chats
bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username;
});
bot.start((ctx) => ctx.reply('Привет! Я посылаю оскорбления в ответ на голосовые сообщения.'));
bot.help((ctx) => ctx.reply('Пришли мне голосовое сообщения, а я отвечу чем нибудь мерзким.'));
bot.on(['voice', 'video_note'], (ctx) => ctx.reply(getMessage()));
