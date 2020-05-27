require('dotenv').config();
const express = require('express');
const { Telegraf } = require('telegraf');
const messages = require('./messages');
const sendError = require('./utils/sendError');
const getMessage = require('./utils/getMessage');

// env variables
const token = process.env.BOT_TOKEN;
const port = process.env.PORT || 3000;
const url = process.env.URL || 'https://i-hate-voice-bot.herokuapp.com';

const bot = new Telegraf(token);
bot.start(ctx => ctx.reply('Привет! Я посылаю оскорбления в ответ на голосовые сообщения.'));
bot.help(ctx => ctx.reply('Пришли мне голосовое сообщения, а я отвечу чем нибудь мерзким.'));
bot.on(['voice', 'video_note'], ctx => ctx.reply(getMessage(messages)));
bot.catch((err, ctx) => sendError(err, ctx));

if (process.env.NODE_ENV === 'production') {
  // app init
  const expressApp = express();
  // setting up a bot to work with express
  expressApp.use(bot.webhookCallback(`/bot${token}`));
  bot.telegram.setWebhook(`${url}/bot${token}`);
  // express server for web
  expressApp.get('/', (req, res) => {
    res.send('iHateVoiceBot is working');
  });
  expressApp.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${port}`);
  });
} else {
  // We are running in development mode
  bot.launch();
}
