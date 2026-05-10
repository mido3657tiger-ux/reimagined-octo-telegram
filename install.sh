#!/bin/bash

# Tiger-X System Installation Script
# Created by: Mohamed Mahmoud (NovaDev)

echo "🚀 Starting Tiger-X Ultimate Installation..."

# تحديث النظام وتثبيت الأساسيات
pkg update && pkg upgrade -y
pkg install nodejs git nmap openssh -y

# تثبيت مكتبات Node.js
echo "📦 Installing Project Dependencies..."
npm install

# صلاحيات الوصول للملفات
termux-setup-storage

echo "-----------------------------------------------"
echo "✅ Tiger-X System Installed Successfully!"
echo "🐯 To start the beast, run: node index.js"
echo "-----------------------------------------------"
