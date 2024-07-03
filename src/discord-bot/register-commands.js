require('dotenv').config()
const { REST, Routes } = require('discord.js')

const commands = [
    {
        name: 'lootcount',
        description: 'Replies with the number of items you looted from raids.'
    }
]

const rest = new REST({version: '10'}).setToken(process.env.DISCORD_TOKEN)



initializeCommands = async () => {
        try {
            await rest.put(
                Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
                {body: commands}
            )            
            console.log('Slash Commands Applied to Server Successfully!')
        } catch (error) {
            console.log(`There was an error: ${error}`)
        }
    }
    
initializeCommands()