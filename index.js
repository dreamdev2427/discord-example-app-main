import { Client, GatewayIntentBits }  from "discord.js";
import dotenv from 'dotenv'
dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.on("ready", () => {
    console.log("The bot is ready")
})

client.on("messageCreate", message => {
    if(message.content === "ping" ){
        message.reply("pong");
        message.
    }
})

client.login(process.env.DISCORD_TOKEN);
