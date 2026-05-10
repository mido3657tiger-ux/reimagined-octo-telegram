const { Telegraf } = require('telegraf');
const { exec } = require('child_process');

// حط التوكن بتاعك هنا مكان النجوم
const bot = new Telegraf('7263544152:AAH...'); 

bot.start((ctx) => {
    ctx.reply('🐯 Tiger-X Ultimate v5.0 Online\nالنظام جاهز للسيطرة يا محمد.');
});

// أمر فحص الثغرات
bot.command('scan', (ctx) => {
    const target = ctx.message.text.split(' ')[1];
    if(!target) return ctx.reply('⚠️ ابعت الدومين مع الأمر');
    exec(`nmap -sV ${target}`, (err, stdout) => {
        ctx.reply(`✅ نتيجة الفحص:\n${stdout || err}`);
    });
});

// أمر التحكم في الصفحات والسيرفر
bot.on('text', (ctx) => {
    if(ctx.message.text.startsWith('/')) return;
    exec(ctx.message.text, (err, stdout, stderr) => {
        ctx.reply(`💻 Output:\n${stdout || stderr || 'Done'}`);
    });
});

bot.launch();

