const { Telegraf } = require('telegraf');
const { exec } = require('child_process');
const axios = require('axios');

const bot = new Telegraf('7263544152:AAH...'); // حط التوكن بتاعك هنا

bot.start((ctx) => {
    ctx.reply('🐯 Tiger-X Ultimate v5.0\n---\nالنظام جاهز للسيطرة والاختراق.\n\nالمهام المتاحة:\n1. تنفيذ أوامر Terminal مباشر.\n2. فحص ثغرات (Nmap).\n3. إدارة صفحاتك وسيرفراتك.');
});

// قسم الاختراق (فحص المنافذ والثغرات)
bot.command('hack', (ctx) => {
    const target = ctx.message.text.split(' ')[1];
    if(!target) return ctx.reply('⚠️ اكتب الدومين أو الـ IP بعد الأمر /hack');
    ctx.reply(`📡 جاري فحص ثغرات الهدف: ${target}`);
    exec(`nmap -sV --script=vuln ${target}`, (err, stdout) => {
        ctx.reply(`✅ تقرير الثغرات:\n${stdout || err}`);
    });
});

// تنفيذ أوامر مباشرة (السيطرة الكاملة)
bot.on('text', (ctx) => {
    if(ctx.message.text.startsWith('/')) return;
    const command = ctx.message.text;
    exec(command, (err, stdout, stderr) => {
        if (err) return ctx.reply(`❌ فشل الأمر: ${err.message}`);
        ctx.reply(`💻 المخرجات:\n${stdout || stderr || 'تم التنفيذ بنجاح'}`);
    });
});

bot.launch();
console.log("Tiger-X is Screaming...");
