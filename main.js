
// This Repository made by @NandhaBots


const Telegraf = require('telegraf');

const config = require('./config');

const nandha = new Telegraf(config.BOT_TOKEN);



nandha.start((message) => {
  message.reply('Hello ' + message.from.first_name + '!');
});


nandha.help((message) => {
    const name = message.from.first_name
    message.reply(
      `Hello ${name} We are continuously updating this Bot to add more futures in the near future.`);
})


bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));