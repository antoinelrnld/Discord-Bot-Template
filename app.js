/**
 * @file main file
 * @author xxx
 */

const { token } = require("./config/config");
const fs = require('fs');
const Discord = require("discord.js");

const client = new Discord.Client();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const onReady = require('./events/ready');
const onMessage = require('./events/message');

client.commands = new Discord.Collection();

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', onReady);

client.on('message', message => onMessage(message));

client.login(token);