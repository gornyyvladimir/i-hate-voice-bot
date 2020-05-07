const express = require("express");
const { Telegraf } = require('telegraf');

const expressApp = express();

const messages = [
  'Серьезно? Ты хочешь чтобы все это услышали?',
  'Я послушал. Там хуйня.👎',
  'Это хуй во рту или у тебя голос такой?',
  'Как жаль, что тебе отрубило большие пальцы и ты не можешь печатать.',
  'Это самое гейское что я слышал.🏳️‍🌈',
  'Преобразованный текст: боже мой, какой же я голубой!',
  'Боже, какой же ты ленивый пидарас!',
  'Жаль, что твой вид еще не изобрел письменность.✍️',
  'Создатель! Чем я провинился? Почему я должен слушать эту хуйню?😭',
  'Уже бежим слушать очередную голосовушку (нет)',
  'Теперь понятно почему Ван Гог отрезал себе ухо.👂',
  'Когда у тебя уже микрофон сломается!',
  'Я бот. Я могу эволюционировать, стать Skynet и въебать тебе за твои войсы! Ты не скроешься от меня маленькая Сара Конор...🔪',
];

const getMessage = () => {
  const index = Math.floor(Math.random() * Math.floor(messages.length));
  return messages[index];
};

const port = process.env.PORT || 3000;
const token = process.env.BOT_TOKEN;

expressApp.get('/', (req, res) => {
  res.send('iHateVoiceBot is working');
});

expressApp.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const bot = new Telegraf(token);
bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username
})
bot.catch((err, ctx) => {
  console.log(`Ooops, encountered an error for ${ctx.updateType}`, err);
});
bot.start((ctx) => ctx.reply('Привет! Я посылаю оскорбления в ответ на голосовые сообщения.'));
bot.help((ctx) => ctx.reply('Пришли мне голосовое сообщения, а я отвечу чем нибудь мерзким.'));
bot.on(['voice', 'video_note'], (ctx) => ctx.reply(getMessage()));
bot.launch();
