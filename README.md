# iHateVoiceBot 🤬

![](ihatevoice.png)

Бот материться каждый раз когда ему присылают голосове или видео сообщение,
лично или в группу в которой он состоит.

[@ihatevoicebot](https://t.me/ihatevoicebot "@ihatevoicebot")
## Commands

Запустить бота
>/start

Получить информацию о боте

>/help

## Development
Убедитесь что у Вас установлена nodejs нужной версии `node 12.x`

Для работы бота нужен токен, его можно получить у 
[@botfather](https://t.me/BotFather "@botfather").

⚠️ Если вы из России нужно запустить любой VPN с подключением из другой страны, так как сервер на вашем компьютере не сможет подключиться к серверам Telegram.

### Quick start
```sh
git clone https://github.com/gornyyvladimir/i-hate-voice-bot.git
cd i-hate-voice-bot
echo 'BOT_TOKEN=<YOUR_TOKEN>' > .env
npm install
npm start
```
🎉🎉🎉

### Nodemon
```sh
npx nodemon
```

## Contributing
Вы всегда можете добавить новые ответы для бота, просто создайте PR в файл `messages.js`
