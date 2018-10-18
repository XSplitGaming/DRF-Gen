const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

let prefix = "drf!";

client.on("ready", () => {
	client.user.setActivity("drf!help | In " + client.guilds.size + " servers.");
    client.user.setStatus("dnd");
    console.log("Ready!");
});

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome-leave');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to the server, ${member}`)
        .addField(':id: | User :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Your are the member', `${member.guild.memberCount}`)
        .addField("Name", `<@` + `${member.id}` + `>`, true)
        .addField('Server', `${member.guild.name}`, true )
        .setFooter(`**${member.guild.name}**`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

client.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'welcome-leave');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Name:', `${member}`)
        .addField('Has Let the Server', ';(')
        .addField('Bye Bye :(', 'We will all miss you!')
        .addField('The server now as', `${member.guild.memberCount}` + " members")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

client.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
    console.log("Leave Message Sent")
});

client.on("message", (message) => {
    if(!message.content.startsWith("drf!")) return;
    if(message.author.bot) return;

    if(message.content.startsWith(prefix + "help")){
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

    message.author.send(embed);
    message.channel.send(":ballot_box_with_check: Check your PMs, **" + message.author.username + "**!");
}

if(message.content.startsWith(prefix + "uptime")){
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);

    totalSeconds %= 3600;

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    message.reply("**The bot was uptime** : " + uptime);
}

if(message.content.startsWith(prefix + "minecraft")){
    var filename = "Minecraft.txt";

    fs.readFile(filename, "utf8", function(err, data){
        if(err) throw err;

        const splitData = data.split("\n");
        const randomNum = Math.floor(Math.random() * splitData.length);
        const line = splitData.splice(randomNum, 1);

        let embed = new Discord.RichEmbed()
        .setAuthor("Minecraft")
        .setColor("#23272a")
        .setThumbnail(message.author.avatarURL)
        .addField(generate(line), "This is your Minecraft account.")

        message.author.send(embed);
        message.channel.send(":ballot_box_with_check: Check your PMs, **" + message.author.username + "**!");
    });
}

function generate(account){
    return account[~~(account.length * Math.random())];
}

if(message.content.startsWith(prefix + "spotify")){
    var filename = "Spotify.txt";

    fs.readFile(filename, "utf8", function(err, data){
        if(err) throw err;

        const splitData = data.split("\n");
        const randomNum = Math.floor(Math.random() * splitData.length);
        const line = splitData.splice(randomNum, 1);

        let embed = new Discord.RichEmbed()
        .setAuthor("Spotify")
        .setColor("#23272a")
        .setThumbnail(message.bot.avatarURL)
        .addField(generate(line), "This is your Spotify account.")

        message.author.send(embed);
        message.channel.send(":ballot_box_with_check: Check your PMs, **" + message.author.username + "**!");
    });
}

function generate(account){
    return account[~~(account.length * Math.random())];
}
	
if(message.content.startsWith(prefix + "uplay")){
    var filename = "Uplay.txt";

    fs.readFile(filename, "utf8", function(err, data){
        if(err) throw err;

        const splitData = data.split("\n");
        const randomNum = Math.floor(Math.random() * splitData.length);
        const line = splitData.splice(randomNum, 1);

        let embed = new Discord.RichEmbed()
        .setAuthor("Uplay")
        .setColor("#23272a")
        .setThumbnail(message.author.avatarURL)
        .addField(generate(line), "This is your Uplay account.")

        message.author.send(embed);
        message.channel.send(":ballot_box_with_check: Check your PMs, **" + message.author.username + "**!");
    });
}
	
module.exports.run = async (bot, message, args) => {
if(message.content.startsWith(prefix + "serverinfo")) {
  let serverembed = new Discord.RichEmbed()
  .setTitle("Server Information")
  .setColor("0ED4DA")
  .setThumbnail(message.guild.iconURL)
  .addField('Name', `${message.guild.name} (${message.guild.nameAcronym})`, true)
  .addField('Server Owner', message.guild.owner.user.tag, true)
  .addField("Server Create Date", message.guild.createdAt, true)
  .addField("Member Count", message.guild.memberCount, true)

  message.channel.send(serverembed);
}


module.exports.help = {
  name: "serverinfo",
  description: "Gathers information about the server."
}
	
if(message.content.startsWith(prefix + "invite")) {
		message.member.hasPermission("EMBED_LINKS")
		message.channel.send("`https://discordapp.com/oauth2/authorize?client_id=494229360266706945&scope=bot&permissions=2146958847`"); 
		message.channel.send("This is your link :white_check_mark: !")
	}
	
if(message.content.startsWith(prefix + "ping")) {
		let cms = client.ping
		let cmss = client.pings
		let embed = new Discord.RichEmbed()
		.setColor("#3498db")
		.setTitle("Latency: " + cms + "." + " Heartbeat: " + cmss + ".")
		message.channel.send(embed)
}
	
if(message.content.startsWith(prefix + "userinfo")) {
	let username = message.author.username
	let embed = new Discord.RichEmbed()
	.setTitle(username)
	.setAuthor("Nickname")
	.addField(ID)
	message.channel.send(embed)

}
	
});

client.login(process.env.TOKEN);
