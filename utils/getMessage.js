module.exports = messages => {
  const index = Math.floor(Math.random() * Math.floor(messages.length));
  return messages[index];
};
