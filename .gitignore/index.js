const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

let prefix = "drf!";

client.on("ready", () => {
	client.user.setActivity("drf!help | In " + client.guilds.size + " servers.");
    client.user.setStatus("dnd");
    console.log("Ready!");
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
    .addField("hulu", "Get a Hulu account.")
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
        message.channel.send("The details of the accounts have been sent in **MP**! \nCheck it :white_check_mark: **" + message.author.username + "**");
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
        .setThumbnail(message.author.avatarURL)
        .addField(generate(line), "This is your Spotify account.")

        message.author.send(embed);
        message.channel.send("The details of the accounts have been sent in **MP**! \nCheck it :white_check_mark: **" + message.author.username + "**");
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
        .setAuthor("Spotify")
        .setColor("#23272a")
        .setThumbnail(message.author.avatarURL)
        .addField(generate(line), "This is your Uplay account.")

        message.author.send(embed);
        message.channel.send("The details of the accounts have been sent in **MP**! \nCheck it :white_check_mark: **" + message.author.username + "**");
    });
}

function generate(account){
    return account[~~(account.length * Math.random())];
}
	
});

client.login(process.env.TOKEN);
