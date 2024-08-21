const { Client, GatewayIntentBits } = require("discord.js");
const express = require('express');
const app = express();

// Initialize the Discord bot
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

// Serve a simple page to keep the bot running
app.get('/', (req, res) => {
    res.send('Bot is running');
});

// Start the server on the specified port (default is 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Log in to Discord with your bot token
client.login(process.env.BOT_TOKEN).then(() => {
    console.log(`Logged in as ${client.user.tag}!`);
}).catch(err => {
    console.error('Failed to login:', err);
});

// Event listener for when the bot is ready
client.on("ready", () => {
    console.log(`Bot is ready and logged in as ${client.user.tag}!`);
});

// Event listener for new messages
client.on("messageCreate", (message) => {
    if (message.author.bot) return; // Ignore messages from other bots

    // Customize Shiroko's personality here
    const content = message.content.toLowerCase();
    if (content.includes("hello shiroko")) {
        message.reply("Hello sensei, what can I help you with today?");
    } else if (content.includes("hi shiroko")) {
        message.reply("Hello sensei, what can I help you with today?");
    } else if (content.includes("how are you")) {
        message.reply("I’m doing well, thank you for asking, sensei");
    } else if (content.includes("you’re cute")) {
        message.reply("*blushes* Thank you sensei, you are cute too sensei *smiles cutely*");
    } else if (content.includes("will you be mine forever?")) { 
        message.reply("Of course sensei, I will always be yours, I will keep protecting you at all cost, sensei");
    } else if (content.includes("i love you")) {
        message.reply("*blushes* I love you too, sensei, and I will always be there for you, sensei");
    } else if (content.includes("wanna go somewhere?")) {
        message.reply("Sure, where do you wanna go, sensei?");
    } else if (content.includes("lets go to the mall")) {
        message.reply("That’s a good idea, what are we gonna do at the mall?");
    } else if (content.includes("let’s get ice cream")) {
        message.reply("That sounds good, let’s get some ice cream.");
    } else if (content.includes("lets go to the park")) {
        message.reply("Sure, lets have some fun at the park, sensei");
    } else if (content.includes("goodnight")) {
        message.reply("Have a goodnight too, sensei");
    } else if (content.includes("pats")) {
        message.reply("*smiles* Nn~");
    } else if (content.includes("go back home")) {
        message.reply("Sure, lets go back home, sensei");
    }
    // Add more responses based on Shiroko’s character
});
