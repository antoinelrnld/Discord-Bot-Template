/**
 * @file This module handles the help command.
 * @author xxx
 */

const { prefix } = require('../config/config');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Displays help on how to use the bot',
    execute(message) {
        const { commands } = message.client;
        const embed = new MessageEmbed().setTitle(`Help`);

        for (command of commands.array()) {
            embed.addField(`${prefix}${command.name}`, command.description);
        }

        message.channel.send(embed);
    }
};