const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config()
const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent
] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  // test
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }

  if (interaction.commandName === 'lootcount') {
    await interaction.reply("You'll own nothing and you'll be happy ✨");
  }
});

client.on('messageCreate', (msg) => {
  if (msg.author.bot){
    return;
  }
  console.log(msg.content)
  if (msg.content === 'yello') {
    msg.reply("I'm glad Longfellow is on a dirge. The scene is safe.")
  }


  
})
client.login(process.env.DISCORD_TOKEN);