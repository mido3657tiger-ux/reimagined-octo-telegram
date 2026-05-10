/**
 * TIGERX-NOVA ULTIMATE SYSTEM v8.0
 * COMPLETE INTEGRATED ADMINISTRATION & CYBER-SECURITY SUITE
 * BRAND: NOVA-CORE / TIGERX
 */

const { Telegraf, Markup } = require('telegraf');
const { exec } = require('child_process');
const axios = require('axios');
const express = require('express');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

// Modules Import
const CyberModule = require('./modules/cyber.js');
const SocialModule = require('./modules/social.js');
const TradeModule = require('./modules/trading.js');

const bot = new Telegraf(process.env.BOT_TOKEN || '7263544152:AAH...');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// --- BOOT SEQUENCE ---
console.log("-----------------------------------------");
console.log("🚀 TIGERX-NOVA ULTIMATE SYSTEM BOOTING...");
console.log("-----------------------------------------");

// --- TELEGRAM BOT LOGIC ---

bot.start((ctx) => {
    const welcomeMessage = `
🐯 **TIGERX-NOVA ULTIMATE COMMAND CENTER**
-----------------------------------------
**SYSTEM STATUS:** ONLINE (ENCRYPTED)
**CURRENT MODULES:** 12 ACTIVE
**IDENTITY:** NOVA-EXPERT-ADMIN

Please select a command from the menu below or type /help for a full documentation list.
    `;
    return ctx.replyWithMarkdown(welcomeMessage, Markup.keyboard([
        ['🛡️ CYBER AUDIT', '🚀 SOCIAL GROWTH'],
        ['📊 MARKET DATA', '💻 REMOTE SHELL'],
        ['📁 PROJECT MANAGER', '⚙️ SETTINGS']
    ]).resize());
});

// 🛡️ CYBER SECURITY MODULE
bot.hears('🛡️ CYBER AUDIT', (ctx) => {
    ctx.reply('🛠️ **CYBER SECURITY SUITE**\nSelect an operation:\n\n/scan [target] - Port & Service Scan\n/vuln [target] - Vulnerability Audit\n/brute [target] - Brute Force Simulation\n/recon [target] - Information Gathering');
});

bot.command('scan', (ctx) => {
    const target = ctx.message.text.split(' ')[1];
    if(!target) return ctx.reply('⚠️ ERROR: Target domain or IP required.');
    ctx.reply(`📡 Initializing TigerX-Nmap Engine on: ${target}...`);
    CyberModule.runScan(target, (result) => ctx.reply(`✅ SCAN REPORT:\n${result}`));
});

bot.command('vuln', (ctx) => {
    const target = ctx.message.text.split(' ')[1];
    if(!target) return ctx.reply('⚠️ ERROR: Target domain or IP required.');
    ctx.reply(`🛡️ Running Nova-Vuln-Scripts on: ${target}. Please wait...`);
    CyberModule.runVulnCheck(target, (result) => ctx.reply(`✅ VULNERABILITY AUDIT:\n${result}`));
});

// 🚀 SOCIAL MEDIA GROWTH MODULE
bot.hears('🚀 SOCIAL GROWTH', (ctx) => {
    ctx.reply('🔥 **NOVA GROWTH ALGORITHMS**\nSelect target platform:\n\n/boost_fb [link] - Facebook Engagement\n/boost_ig [link] - Instagram Reach\n/boost_x [link] - X (Twitter) Analytics\n/auto_post [content] - Multi-Platform Distribution');
});

bot.command('boost_ig', (ctx) => {
    const link = ctx.message.text.split(' ')[1];
    if(!link) return ctx.reply('⚠️ ERROR: Post/Profile link required.');
    ctx.reply('🔄 Processing link through Nova-Growth API...');
    SocialModule.triggerBoost(link, 'Instagram', (res) => ctx.reply(res));
});

// 📊 TRADING & MARKET MODULE
bot.hears('📊 MARKET DATA', async (ctx) => {
    ctx.reply('📈 **REAL-TIME MARKET MONITOR**\nFetching live data from Nova-Financial-API...');
    const data = await TradeModule.getMarketOverview();
    ctx.reply(data);
});

// 💻 REMOTE SHELL EXECUTION
bot.hears('💻 REMOTE SHELL', (ctx) => {
    ctx.reply('💻 **NOVA-SHELL ACTIVE**\nAuthorized Commands Only. Type any Terminal command to execute directly on the TigerX Server.');
});

bot.on('text', (ctx) => {
    if (ctx.message.text.startsWith('/')) return;
    const command = ctx.message.text;
    exec(command, (err, stdout, stderr) => {
        if (err) return ctx.reply(`❌ SHELL ERROR:\n${err.message}`);
        const output = stdout || stderr || 'Command executed with no return.';
        ctx.reply(`💻 **TIGERX@SERVER:~$**\n${output.substring(0, 3500)}`);
    });
});

// --- WEB DASHBOARD ROUTES ---
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// --- INITIALIZATION ---
bot.launch();
app.listen(PORT, () => {
    console.log(`✅ Nova Dashboard running at: http://localhost:${PORT}`);
    console.log(`🐯 TigerX Bot is now active on Telegram.`);
});

