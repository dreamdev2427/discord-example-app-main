import { Client , GatewayIntentBits} from 'discord.js';
import dotenv from 'dotenv'
dotenv.config();


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

// Replace with your bot token from the Discord Developer Portal
const token = process.env.DISCORD_TOKEN;

// Replace with the desired server ID and channel ID
const targetServerId = process.env.TARGET_SERVER_ID;
const targetChannelId = process.env.TARGET_CHANNEL_ID;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    //  const targetServer = client.guilds.cache.get(targetServerId);
    //     if (!targetServer) {
    //         return message.reply('Target server not found.');
    //     }

    //     const targetChannel = targetServer.channels.cache.get(targetChannelId);
    //     if (!targetChannel) {
    //         return message.reply('Target channel not found.');
    //     }

    //     // Replace with the message you want to broadcast
    //     const broadcastMessage = 'This is a broadcast message!';
        
    //     // Send the broadcast message to the target channel
    //     targetChannel.send(broadcastMessage);
});

client.on('messageCreate', async (message) => {
    // Ignore messages from bots
    if (message.author.bot) return;
console.log(message.content);
    // Replace with the command you want to trigger the broadcast
    if (message.content.toLowerCase() === '!broadcast') {
        // Find the target server and channel
        const targetServer = client.guilds.cache.get(targetServerId);
        if (!targetServer) {
            return message.reply('Target server not found.');
        }

        const targetChannel = targetServer.channels.cache.get(targetChannelId);
        if (!targetChannel) {
            return message.reply('Target channel not found.');
        }

        // Replace with the message you want to broadcast
        const broadcastMessage = 'This is a broadcast message!';
        
        // Send the broadcast message to the target channel
        targetChannel.send(broadcastMessage);
        message.reply('Message broadcasted successfully!');
    }
});

client.login(token);
