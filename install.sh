#!/bin/bash
echo "🐯 Deploying TigerX Ultimate Environment..."
pkg update && pkg upgrade -y
pkg install nodejs git nmap sqlmap openssh -y
npm install
termux-setup-storage
echo "------------------------------------------------"
echo "✅ NOVA-CORE DEPLOYED SUCCESSFULLY"
echo "🚀 COMMAND: node index.js"
echo "------------------------------------------------"

