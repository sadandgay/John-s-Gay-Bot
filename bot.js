var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !imgay
            case 'imgay':
                bot.sendMessage({
                    to: channelID,
                    message: ':tada::tada::tada:CONGRATS, ME TOO!:tada::tada::tada:'
            });
        break;
                case 'loveme':
            bot.sendMessage({
                to: channelID,
                message: ':sparkling_heart: You are loved! :sparkling_heart:'
            });
        break;
		case 'imhungry':
            bot.sendMessage({
                to: channelID,
                message: 'Here, have a cookie! :cookie:'
            });
        break;
		case 'mytummyfull':
            bot.sendMessage({
                to: channelID,
                message: '(megalovania plays)'
            });
        break;
		case 'help':
            bot.sendMessage({
                to: channelID,
                message: 'Commands \n !loveme - you will be loved \n !imgay - meet an ally \n !hungry - feeds you \n !mytummyfull - what happens when your tummy full \n More commands coming soon'
            });
        break;
        // Just add any case commands if you want to..
         }
     }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
