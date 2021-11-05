const Discord = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders")
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "!"

const { token } = require('./config.json');

Client.on("ready", async () =>{

    //Client.application.commands.create(data);
    //Client.guilds.cache.get("849195458786230323").commands.create(data);

    console.log(Client.guilds.cache.get("849195458786230323").commands.cache);
    await Client.guilds.cache.get("849195458786230323").commands.fetch();
    console.log(Client.guilds.cache.get("849195458786230323").commands.cache);


    console.log(`Connecté en tant que ${Client.user.tag} -  (${Client.user.id})`)
    Client.user.setStatus("dnd")
    Client.user.setActivity("En train d'être dév par DelTaZz")
});

Client.on("interactionCreate", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "ping"){
            let user = interaction.options.getUser("utilisateur");

            if(user != undefined){
                interaction.reply("pong <@" + user.id + ">");

            }
            else {
                interaction.reply("pong !");
            }
        }
    }
});

Client.login(process.env.TOKEN);

//!ping
Client.on("messageCreate", message => {
    if (message.author.bot) return;

    if(message.content === prefix + "ping"){
        message.channel.send("pong !")
    }
});

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //!help
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Liste des commandes")
            .setURL("https://discord.js.org/")
            .setAuthor("Auteur de bot DelTaZz#9999", "https://cdn.discordapp.com/attachments/852172969929342977/906087497119965184/unknown.png")
            .setDescription("***Voici une liste des commandes***")
            .setThumbnail("https://cdn.discordapp.com/attachments/852172969929342977/906087497119965184/unknown.png")
            .addField("__!help__", "Affiche la liste des commandes")
            .addField("__!ping__", "Vous renvoie pong")
            .setTimestamp()
            .setFooter("Si tu as besoin d'aide n'hésite pas a faire un ticket", "https://cdn.discordapp.com/attachments/852172969929342977/906087497119965184/unknown.png");

        message.channel.send({ embeds: [embed]});
    }
});

const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Vous renvoie pong")
    .addUserOption(option => option
        .setName("utilisateur")
        .setDescription("utilisateur que vous avez mentioner")
        .setRequired(false)
);

//!clear
Client.on("message", message => {
    if(message.member.permissions.has("MANAGE_MESSAGES")){
        if(message.content.startsWith(prefix + "clear")){
            let args = message.content.split(" ");
            
            if(args[1] == undefined){
                message.channel.send("Nombre mal défini")
            }
            else {
                let number = parseInt(args[1]);

                if(isNaN(number)){
                    message.channel.send("Nombre de message mal défini");
                }
                else {
                    message.channel.bulkDelete(number).then(messages => {
                        console.log("Supression de " + messages.size + " message réussi !");
                    }).catch(err => {
                        console.log("Erreur de clear : " + err)
                    });
                }
            }
        }
    }
});



//reaction message salut
Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "DM") return;

    if(message.content == "salut"){
message.react("👋")
    }
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "DM") return;

    if(message.content == "Salut"){
message.react("👋")
    }
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "DM") return;

    if(message.content == "cc"){
message.react("👋")
    }
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "DM") return;

    if(message.content == "bonjour"){
message.react("👋")
    }
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "DM") return;

    if(message.content == "hello"){
message.react("👋")
    }
});

