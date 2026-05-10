#!/bin/bash

# TIGERX-NOVA SYSTEM AUTO-INSTALLER
# TARGET: TERMUX / LINUX / UBUNTU

echo "------------------------------------------------"
echo "🐯 INITIALIZING TIGERX ULTIMATE DEPLOYMENT..."
echo "------------------------------------------------"

# Update Repositories
pkg update -y && pkg upgrade -y

# Install Essential Languages & Tools
pkg install nodejs git openssh curl php nmap sqlmap -y

# Install Python for specialized exploits
pkg install python python-pip -y

# Clone (if not already in directory)
# git clone https://github.com/mido3657tiger-ux/reimagined-octo-telegram.git

# Install Project Dependencies
npm install

# Setup Storage Permissions
termux-setup-storage

# Final Setup
mkdir -p modules public
echo "------------------------------------------------"
echo "✅ NOVA CORE SYSTEM SUCCESSFULLY DEPLOYED"
echo "🚀 INSTRUCTIONS:"
echo "1. Put your BOT_TOKEN in the .env file"
echo "2. Run command: node index.js"
echo "------------------------------------------------"
