// if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const { Telegraf } = require('telegraf');
// var https = require('https');
// var SocksProxyAgent = require('socks-proxy-agent');

// const info = {
//   host: '148.251.234.93',
//   port: '1080',
// };
// const agent = new SocksProxyAgent(info);

// https.get('https://telegram.org/', { agent }, (res) => {
//   console.log(res.headers);
//   res.pipe(process.stdout);
// });
// console.log('Token', process.env.BOT_TOKEN);
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

// const bot = new Telegraf(process.env.BOT_TOKEN, {
//   telegram: { agent },
// });
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Привет! Я посылаю оскорбления в ответ на голосовые сообщения.'));
bot.help((ctx) => ctx.reply('Пришли мне голосовое сообщения, а я отвечу чем нибудь мерзким.'));
bot.on(['voice', 'video_note'], (ctx) => ctx.reply(getMessage()));
bot.launch();
