const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'loop',
  description: 'Set loop mode to current track',
  inVc: true,
  sameVc: true,
  run: (client, interaction) => {
    const player = client.poru.players.get(interaction.guild.id);

    if (player.loop === "NONE")) {
      player.setLoop('TRACK');

      const embed = new EmbedBuilder()
        .setColor('White')
        .setDescription('Track loop enabled');

      interaction.reply({
        embeds: [embed],
      });
    } else if (player.loop === "TRACK") {
      player.setLoop('QUEUE');

      const embed = new EmbedBuilder()
        .setColor('White')
        .setDescription('Queue loop enabled');

      interaction.reply({
        embeds: [embed],
      });
    } else if (player.loop === "QUEUE" {
      player.setLoop('NONE');

      const embed = new EmbedBuilder()
        .setColor('White')
        .setDescription('Loop disabled');

      interaction.reply({
        embeds: [embed],
      });
    }
  },
};
