const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

message.channel.send('**Arena Development** - Türkiye`nin En Büyük Kod Sunucusu \n\n Ssunucumuza Gelebilirsiniz: https://discord.gg/kRkHsq9BbT')
};

exports.config = {
  name: "arena",
  guildOnly: true,
  aliases: ["Arena Development"],
};