module.exports = (err, ctx) => {
  const adminChatId = process.env.ADMIN_ID;
  const errorMessage = `Error: ${err.name} ${err.message} type: ${ctx.updateType}`;
  // eslint-disable-next-line no-console
  console.log(errorMessage, err);
  ctx.telegram.sendMessage(adminChatId, errorMessage);
  ctx.reply('Произошла ошибка ☹️');
};