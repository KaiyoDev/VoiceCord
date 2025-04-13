require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(`Đăng nhập với tên: ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content === '!listen') {
    const listenCommand = require('./commands/listen');
    await listenCommand.execute(message);
  }
});

client.login(process.env.DISCORD_TOKEN);