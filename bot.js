const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
let config = require('./config.json');
const token = config.token;

bot.login(token);