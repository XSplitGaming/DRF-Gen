const Discord = require("discord.js");

module.exports.run = async (client, message) => {
let embed = new Discord.RichEmbed()
.setAuthor("Help Menu")
.setColor("#23272a")
.setThumbnail(message.author.avatarURL)
.addField("help", "This command.")
.addField("minecraft", "Get a Minecraft account.")
.addField("spotify", "Get a Spotify account.")
.addField("uplay", "Get a Uplay account.")
.addField("invite", "Invite the bot on your server.")
.addField("uptime", "Show the bot's uptime.")
.addField("serverinfo", "Gathers information about the server.")
.addField("userinfo", "All informations about a user.")
.addField("ping", "See bot latency.")

message.author.send(embed);
message.channel.send(":ballot_box_with_check: Check your PMs, **" + message.author.username + "**!");
}
module.exports.help = {
    name: "help"
  }