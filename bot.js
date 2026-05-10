const { Telegraf } = require('telegraf');
const bot = new Telegraf('7263544152:AAH...'); // حط التوكن بتاعك هنا

bot.start((ctx) => ctx.reply('🐯 مرحباً بك في نظام TigerX الملكي!'));
bot.help((ctx) => ctx.reply('أرسل أي أمر لتنفيذه في السيرفر.'));

bot.launch();
console.log("TigerX Bot is Online!");

