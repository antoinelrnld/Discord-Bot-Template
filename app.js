/**
 * @file main file
 * @author xxx
 */

const { token } = require("./config/config");
const fs = require('fs');
const Discord = require("discord.js");

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => require('./events/ready')());

client.on('message', message => require('./events/message')(message));

client.login(token);