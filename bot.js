const Discord = require('discord.js');
const devs = ['389090790984515594'];
const db = require('quick.db');
const premium = ['470896018603376640']
const client = new Discord.Client();   
const bot = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const pretty = require('pretty-ms') 
const prefix = '$';
var table = require('table').table
var ti={}  
,spee={}
,attentions={};

client.on('ready', function(){
    var ms = 60000 ;
    var setGame = ['Type $help'];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/barontube`);
    }, ms);
    console.log(` ????????? |> Name: ${client.user.username}`);
 console.log(` ????????? |> Servers: ${client.guilds.size}`);
 console.log(` ???????????????????? |> Members: ${client.users.size}`);
 console.log(` ????????????????????? |> Channels: ${client.channels.size}`);
 console.log(` ???????????????????? |> Channels: ${client.channels.size}`);
 console.log(` ???????????????????? |> Id: ${client.user.id}`);
 console.log(` ???????????????????`);
 console.log(` ???????????????????`);
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { /// This is The DMS Code Send The Help In DMS // Code By NotGucci
    let pages = [`**
        ***__General orders__***
**
${prefix}allbots/áÚÑÖ ÌãíÚ ÇáÈæÊÇÊ Çáí ÈÇáÓíÑİÑ
${prefix}server/íÚÑÖ áß ãÚáæãÇÊ Úä ÇáÓíÑİÑ
${prefix}bot/íÚÑÖ áß ßá ãÚáæãÇÊ ÇáÈæÊ
${prefix}count/íÚÑÖ áß ÚÏÏ ÇáÇÔÎÇÕ ÈÇáÓíÑİÑ ÈÏæä ÈæÊÇÊ
${prefix}invites/ íÚÑÖ áß  ÚÏÏ ÇäİÇíÊÇÊß ÈÇáÓíÑİÑ 
${prefix}invinfo <invitelink here> / áãÚáæãÇÊ Úä ÇáÏÚæå
 ãËÇá : invinfo m82n8P
${prefix}invite-codes/íÚÑÖ áß ÑæÇÈØ ÇáÇäİÇíÊÇÊ Íßß İí ÇáÓíÑİÑ 
${prefix}cal/Çáå ÍÇÓÈÉ
${prefix}trans <language> <any thing>/íÊÑÌã áß Çáí ÊÈíå ãä Çí áÛÉ
${prefix}short/íÎÊÕÑ áß ÑÇÈØ ßÈíÑ Çáì ÑÇÈØ ÕÛíÑ
${prefix}tag/íßÊÈ áß ÇáßáãÉ ÈÔßá Ìãíá æßÈíÑ
${prefix}google/ááÈÍË İí ŞæŞá Úä ØÑíŞ ÇáÏÓßæÑÏ
${prefix}perms/íÚÑÖ áß ÈÑãÔäÇÊß ÈÇáÓíÑİÑ
${prefix}z5rf/íÒÎÑİ áß ßáãÉ Çæ ÌãáÉ
${prefix}rooms/íÚÑÖ áß ßá ÇáÑæãÇÊ Çáí ÈÇáÓíÑİÑ ãÚ ÚÏÏåÇ
${prefix}roles/íÚÑÖ áß ßá ÇáÑÇäßÇÊ ÈÇáÓíÑİÑ ÈÔßá Ìãíá
${prefix}emojilist/íÚÑÖ áß ßá ÇáÇíãæÌíÇÊ Çáí ÈÇáÓíÑİÑ
${prefix}say/íßÑÑ ÇáßáÇã Çáí ÊßÊÈæ
${prefix}image/ÕæÑÉ ÇáÓíÑİÑ
${prefix}members/ÚÑÖ áß ÚÏÏ ßá ÍÇáÇÊ ÇáÇÔÎÇÕ æÚÏÏ ÇáÈæÊÇÊ æÚÏÏ ÇáÇÔÎÇÕ
${prefix}id/ãÚáæãÇÊ Úäß
${prefix}bans / ÚÏÏ ÇáÇÔÎÇÕ ÇáãÈäÏÉ 
${prefix}avatar/ÕæÑÊß Çæ ÕæÑÉ Çáí ÊãäÔäæ
${prefix}embed/íßÑÑ Çáí ÊŞæáæ ÈÔßá Íáæ
${prefix}emoji <any things>/áÊÍæíá Çí ßáãå ÊŞæáåÇ Çáí ÇíãæÌí
${prefix}inv/áÏÚæÉ ÇáÈæÊ Çáì ÓíÑİÑß
${prefix}support/ÓíÑİÑ ÇáÏÚã
${prefix}contact/ÇÑÓÇá ÇŞÊÑÇÍ Çæ áãÑÇÓáÉ ÕÇÍÈ ÇáÈæÊ
**
  `
,`
        ***__Administrative Orders__***
**
${prefix}move @user /  áÓÍÈ ÇáÔÎÕ Çáì Ñææãß
${prefix}bc / ÑÓÇáÉ ÌãÇÚíÉ Çáì ßá ÇÚÖÇÁ ÇáÓíÑİÑ
${prefix}bk / ÑÓÇáÉ ÌãÇÚíå ãÚ
${prefix}rolebc <everyone or @role> / ÑÇÓÇá ÑÓÇáå ÌãÇÚíå áÑÊÈå ãÍÏÏå
${prefix}role @user <rank> / áÃÚØÇÁ ÑÊÈÉ áÚÖæ ãÚíä
${prefix}roleremove @user <rank> / áÇÒÇáÉ ÇáÑÊÈÉ ãä ÔÎÕ ãÚíä
${prefix}give all <rank> / áÃÚØÇÁ ÑÊÈÉ ááÌãíÚ
${prefix}give humans <rank> / áÃÚØÇÁ ÑÊÈÉ ááÇÔÎÇÕ İŞØ
${prefix}give bots <rank> / áÃÚØÇÁ ÑÊÈÉ áÌãíÚ ÇáÈæÊÇÊ
${prefix}hchannel / ÇÎİÇÁ ÇáÔÇÊ
${prefix}schannel / ÇÖåÇÑ ÇáÔÇÊ ÇáãÎİíÉ
${prefix}clr <numbr> / ãÓÍ ÇáÔÇÊ ÈÚÏÏ
${prefix}clear / ãÓÍ ÇáÔÇÊ
${prefix}mute @user <time> / ÇÚØÇÁ ÇáÚÖæ ãíæÊ 
${prefix}unmute @user / áİß ÇáãíæÊ Úä ÇáÔÎÕ 
${prefix}kick @user <reason> / ØÑÏ ÇáÔÎÕ ãä ÇáÓíÑİÑ
${prefix}ban @user <reason> / ÍÖÑ ÇáÔÎÕ ãä ÇáÓíÑİÑ
${prefix}mutechannel / ÊŞİíá ÇáÔÇÊ
${prefix}unmutechannel / İÊÍ ÇáÔÇÊ
${prefix}dc / ãÓÍ ßá ÇáÑæãÇÊ
${prefix}dr / <ãÓÍ ßá ÇáÑÇäßÇÊ <áÇÒã Êßæä ÑÇäß ÇáÈæÊ İæŞ ßá ÇáÑÇäßÇÊ
${prefix}ct <name> / ÇäÔÇÁ ÔÇÊ
${prefix}cv <name> / ÇäÔÇÁ Ñææã İæíÓ
${prefix}temp / áÇäÔÇÁ Ñæã ãÄŞÊ
${prefix}delet <name> / ãÓÍ ÇáÔÇÊ Çæ ÇáÑææã İæíÓ
${prefix}make <number> / íäÔÇ áß ÇáæÇä ãÚ ßã ÇáæÇä ÊÈí
${prefix}color <number> / áÎÊíÇÑ áæä
${prefix}deletecolors <number> / áÍĞİ ÇáÇáæÇä
**
   `,`
        ***__Music orders__***
**
${prefix}play / áÊÔÛíá ÃÛäíÉ ÈÑÂÈØ Ãæ ÈÃÓã
${prefix}skip / áÊÌÂæÒ ÇáÃÛäíÉ ÇáÍÂáíÉ
${prefix}pause / ÅíŞÂİ ÇáÃÛäíÉ ãÄŞÊÇ
${prefix}resume / áãæÂÕáÉ ÇáÅÛäíÉ ÈÚÏ ÅíŞÂİåÂ ãÄŞÊÇ
${prefix}vol / áÊÛííÑ ÏÑÌÉ ÇáÕæÊ 100 - 0
${prefix}stop / áÅÎÑÂÌ ÇáÈæÊ ãä ÇáÑæã
${prefix}np / áãÚÑİÉ ÇáÃÛäíÉ ÇáãÔÛáÉ ÍÂáíÇ
${prefix}queue / áãÚÑİÉ ŞÂÆãÉ ÇáÊÔÛíá
**
        ***__Games orders__***
 **       
${prefix}rps / ÍÌÑ æÑŞÉ ãŞÕ
${prefix}speed / ÇÓÑÚ ßÊÇÈÉ
${prefix}quas / ÇÓÆáÉ ÚÇãÉ
${prefix}äßÊ / äßÊ 
${prefix}áÚÈÉ İßß / İßß
${prefix}ÚæÇÕã ÚÔæÇÆí/ÚæÇÕã
${prefix}áÚÈÉ ßÊ ÊæíÊ / ßÊ ÊæíÊ
${prefix}roll <number> / ŞÑÚÉ
${prefix}áæ ÎíÑæß ÈØÑíŞÉ ÍáæÉ / áæ ÎíÑæß
${prefix}áÚÈÉ ãÑíã / ãÑíã
${prefix}İæÇÆÏ æäÕÇÆÍ  / åá ÊÚáã
${prefix}íÚØíß ÚŞÇÈÇÊ ŞÇÓíÉ / ÚŞÇÈ 
=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.
welcome íÊã ÇáÊÑÍíÈ İì Ñæã ÈÇÓã
G.setwelcomer <text channel name> áÇÎÊíÇÑ Ñæã ááÊÑÍíÈ
${prefix}voiceonline / áÊİÚíá Ñæã ÇáİæíÓ ÇæäáÇíä
**
   
`]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('?').then( r => {
            msg.react('?')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
      
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
}); 

const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
const coolDown = new Set();

client.on('message',async message => {
    
if(message.author.bot) return;
if(!credits[message.author.id]) credits[message.author.id] = {
    credits: 50
};

let userData = credits[message.author.id];
let m = userData.credits;

fs.writeFile("./creditsCode.json", JSON.stringify(credits), (err) => {
    if (err) console.error(err);
  });
  credits[message.author.id] = {
      credits: m + 0.5,
  }
  
    if(message.content.startsWith(prefix + "credit" || prefix + "credits")) {
message.channel.send(`**${message.author.username}, your :credit_card: balance is \`\`${userData.credits}\`\`.**`);
}
});

client.on('message', async message => {
    let amount = 250;
    if(message.content.startsWith(prefix + "daily")) {
    if(message.author.bot) return;
    if(coolDown.has(message.author.id)) return message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes in \`\`1 Day\`\`.**`);
    
    let userData = credits[message.author.id];
    let m = userData.credits + amount;
    credits[message.author.id] = {
    credits: m
    };

    fs.writeFile("./creditsCode.json", JSON.stringify(userData.credits + amount), (err) => {
    if (err) console.error(err);
    });
    
    message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${amount} credits!**`).then(() => {
        coolDown.add(message.author.id);
    });
    
    setTimeout(() => {
       coolDown.remove(message.author.id);
    },86400000);
    }
});

client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`**Showing Details Of** ${msg.guild.name}`)
      .addField('`Server Region`',`[${msg.guild.region}]`,true)
      .addField('`Roles Count`',`[${msg.guild.roles.size}]`,true)
      .addField('`Members Count`',`[${msg.guild.memberCount}]`,true)
      .addField('`Online Members`',`[${msg.guild.members.filter(m=>m.presence.status == 'online').size}]`,true)
      .addField('`Text Channels`',`[${msg.guild.channels.filter(m => m.type === 'text').size}]`,true)
      .addField('`Voice Channels`',`[${msg.guild.channels.filter(m => m.type === 'voice').size}]`,true)
      .addField('`Server Owner`',`**${msg.guild.owner}**`,true)
      .addField('`Server Id`',`**${msg.guild.id}**`,true)
      .addField('`Server was created in`',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed})
    }
});
 client.on('message', message => {
    if (message.content.startsWith(prefix + "bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO iiCaea_YT Community ©`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ ! ]` , true)
			      .addField('``My Language``' , `[ Java Script ]` , true)
			      .setFooter('By | cara')
    })
}
});
 client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='G.count')
	 
      message.reply(`**${message.guild.memberCount}**`);
    });
    client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});
 client.on("message", async message => {
            if(!message.channel.guild) return;
             if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **áŞÏ ŞãÊ ÈÃÑÓÇá ÌãíÚ ÑæÇÈØ ÇáÏÚæÇÊ ÇáÊí ŞãÊ ÈÃäÔÇÆåÇ İí ÇáÎÇÕ**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});
client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'cal')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('Specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }
    
    const embed = new Discord.RichEmbed()
    .addField("**Input**: ",`**${question}**`, true)
    .addField("**Output**: ",`**${answer}**`, true)
    msg.channel.send(embed)  .catch(console.error);

    }
};
});
client.on('message', message => {
    if (message.content.startsWith("G.trans")) {
      
    let toTrans = message.content.split(' ').slice(1);
    let language;

    language = toTrans[toTrans.length - 2] === 'to' ? toTrans.slice(toTrans.length - 2, toTrans.length)[1].trim() : undefined;
    if (!language) {
        return message.reply(`Please supply valid agruments.\n**Example** \`G.trans [text] to [language]\``);
    }
    let finalToTrans = toTrans.slice(toTrans.length - toTrans.length, toTrans.length - 2).join(' ');
    translate(finalToTrans, {to: language}).then(res => {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: 'cara Community ©\'s translator',
                  icon_url: client.user.avatarURL
                },
                fields: [{
                    name: "Translator",
                    value: `**From:** ${res.from.language.iso}\n\`\`\`${finalToTrans}\`\`\`\n**To: **${language}\n\`\`\`${res.text}\`\`\``
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "cara Community ©"
                }
            }}
            )
    })  .catch(console.error);

    }
});
client.on('message', message => { 
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    if(!message.channel.guild) return;  

        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('Error!');
            
        });
}
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('ãÑÌæ ßÊÇÈÉ äÕ ÇáÏí ÊÑíÏ');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })

}
});
client.on('message', message => {
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'google')) {
    const input = args.join(' ');

google({ query: input, disableConsole: true }).then(results => {
    return message.channel.send(`\n\n**Title**: ${results[0].title}\n***Link***: ${results[0].link}\nDescription: ${results[0].snippet}`);
}).catch(error => {
    if (error) throw error;
});

}});
client.on('message', message => {
if (message.content.startsWith(prefix + 'perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)

                  message.channel.send({embed:zPeRms});

    }
});
 client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "z5rf") {
    let say = new Discord.RichEmbed()
    .setTitle('Text emboss :')

   message.reply(`\n ${zalgo(args.join(' '))}`);
  }

});

client.on('message', message => {
    if (message.content === "G.rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
        
    }
});
var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content.startsWith(prefix + "roles")){
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});

client.on('message', message => { 
    if (message.content.startsWith(prefix + 'emojilist')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('? Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 

    }
});
client.on('message', message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// +say
  if (command === "say") {
if(!message.channel.guild) return message.channel.send('**åĞÇ ÇáÃãÑ İŞØ ááÓíÑİÑÇÊ**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**ááÃÓİ áÇ ÊãÊáß ÕáÇÍíÉ** `ADMINISTRATOR`' );
          message.delete()
    message.channel.sendMessage(args.join(" "))
  }
  
 

if (command == "embed") {
if(!message.channel.guild) return message.channel.send('**åĞÇ ÇáÃãÑ İŞØ ááÓíÑİÑÇÊ**').then(m => m.delete(5000));
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**ááÃÓİ áÇ ÊãÊáß ÕáÇÍíÉ** `MANAGE_MESSAGES`' );
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
    
  }


});
client.on("message", message => {

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  
   client.on('message',function(message) {
  if (message.author.bot) return;
                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info 
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
:bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });  
    client.on('message', message => {
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing...";
}
if (z.bot) {
var w = 'BOT';
}else {
var w = 'MEMBER';
}
let embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(`**INFO** ${z.username}`)
.addField('`Your Name`',`**<@` + `${z.id}` + `>**`, true)
.addField('`ID`', "**"+ `${z.id}` +"**",true)
.addField('`Status`','**'+y+'**' , true)
.addField('`Acount Type`',"**"+ w + "**",true)    
.addField('`Your Tag`',"**#" +  `${z.discriminator}**`,true)
.addField('`Your account created in`' ,year + "-"+ month +"-"+ day)    
.addField("`Entered the server in`", message.member.joinedAt.toLocaleString())    
.addField("`Last Message`", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ÖÚ ÇáãíäÔÇä ÈÔßá ÕÍíÍ  ? **')

}
});
client.on('message', message => {
    if (message.content.startsWith("G.bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`Number of banned persons **${bans.size}** `))
}
});
client.on('message', message => {
    if (message.content.startsWith("G.avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};

'$bcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});


client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "emoji")) {
          let args = message.content.split(" ").slice(1);
  if (args.length < 1) {
    message.channel.send('You must provide some text to emojify!');
}

message.channel.send(
    args.join(' ')
        .split('')
        .map(c => mapping[c] || c)
        .join('')
);
};
});


   client.on('message', message => {
     if (message.content === "support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/xA8s2AU**")
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message' , message => {
if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");


client.users.get("516473846983950336").send(
    "\n" + "**" + "? ÇáÓíÑİÑ :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ? ÇáãÑÓá : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ? ÇáÑÓÇáÉ : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail: Êã ÇÑÓÇá ÇáÑÓÇáÉ Çáì ÕÇÍÈ ÇáÈæÊ ÈäÌÇÍ')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : cara")
                                                

message.channel.send(embed);


}
    
});
client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``áÇÓÊÎÏÇã ÇáÃãÑ ÇßÊÈ åĞå ÇáÃãÑ : " +prefix+ "ÇÓÍÈ [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`áŞÏ ŞãÊ ÈÓÍÈ <@${usermentioned}> Çáì ÇáÑæã ÇáÕæÊí ÇáÎÇÕ Èß? `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``áÇ ÊÓÊØíÚ ÓÍÈ "+ message.mentions.members.first() +" `íÌÈ Çä íßæä åĞå ÇáÚÖæ İí Ñæã ÕæÊí`")
}
} else {
 message.channel.send("**``íÌÈ Çä Êßæä İí Ñæã ÕæÊí áßí ÊŞæã ÈÓÍÈ ÇáÚÖæ Ãáíß``**")
}
} else {
message.react("?")
 }}});
 client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith('ab$')) {
if(!message.channel.guild) return message.channel.send('**åĞÇ ÇáÃãÑ İŞØ ááÓíÑİÑÇÊ**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**ááÃÓİ áÇ ÊãÊáß ÕáÇÍíÉ** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "cara Community ©";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**íÌÈ Úáíß ßÊÇÈÉ ßáãÉ Çæ ÌãáÉ áÅÑÓÇá ÇáÈÑæÏßÇÓÊ**');message.channel.send(`**åá ÃäÊ ãÊÃßÏ ãä ÅÑÓÇáß ÇáÈÑæÏßÇÓÊ¿ \nãÍÊæì ÇáÈÑæÏßÇÓÊ:** \` ${args}\``).then(msg => {
msg.react('?')
.then(() => msg.react('?'))
.then(() =>msg.react('?'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`? | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bk')) {
if(!message.channel.guild) return message.channel.send('**åĞÇ ÇáÃãÑ İŞØ ááÓíÑİÑÇÊ**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**ááÃÓİ áÇ ÊãÊáß ÕáÇÍíÉ** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`ãÍÊæì ÇáÑÓÇáå ${args}`)
.setDescription(`ÈÑæÏßÇÓÊ ÈÜ ÇãÈÏ ??\nÈÑæÏßÇÓÊ ÈÏæä ÇãÈÏ? \náÏíß ÏŞíŞå ááÃÎÊíÇÑ ŞÈá ÇáÛÇÁ ÇáÈÑæÏßÇÓÊ`)
if (!args) return message.reply('**íÌÈ Úáíß ßÊÇÈÉ ßáãÉ Çæ ??ãáÉ áÅÑÓÇá ÇáÈÑæÏßÇÓÊ**');message.channel.send(BcList).then(msg => {
msg.react('??')
.then(() => msg.react('?'))
.then(() =>msg.react('??'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
EmbedBc.on("collect", r => {
message.channel.send(`:ballot_box_with_check: Êã ÇÑÓÇá ÇáÑÓÇáå ÈäÌÇÍ`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`Message : ${args}`)
.setAuthor(`Server : ${message.guild.name}`)
.setFooter(`Sender : ${message.author.username}`)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: Êã ÇÑÓÇá ÇáÑÓÇáå ÈäÌÇÍ`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
m.send(args);
msg.delete();
})
})
})
}
});
client.on('message' , message => {
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "rolebc")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("Şã ÈßÊÇÈÉ ÇáÑÓÇáÉ | !rolebc @everyone message")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("áÇ ÊæÌÏ ÑÊÈÉ ÈåĞÇ ÇáÇÓã")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + "ÇáÓíÑİÑ :" + "\n" +
              `${message.guild.name}` + "\n" +
              "ÇáãÑÓá :" + "\n" +
              `${message.author.tag}` + "\n" +
              "ÇáÑÓÇáÉ :" + "\n" +
              `${codes}` + "**"
              )
            })
            message.channel.send(`áŞÏ Êã ÇÑÓÇá åĞå ÇáÑÓÇáÉ Çáì ${message.guild.members.filter(m => m.roles.get(role.id)).size} ÚÖæ`)
        }
    });
client.on('message', message => { 
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "role") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:ÇäÊ áÇ Êãáß ÕáÇÍíÇÊ **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("ÇáÈæÊ áÇíãáß ÕáÇÍíÇÊ ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ÖÚ ãäÔä ÇáÔÎÕ!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("íÌÈ Úáíß æÖÚ ÇÓã ÇáÑÊÈÉ").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('** Done ? **').then(msg => {msg.delete(10000)});
    }
    });
    client.on('message', message => { 
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "roleremove") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:ÇäÊ áÇ Êãáß ÕáÇÍíÇÊ **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("ÇáÈæÊ áÇíãáß ÕáÇÍíÇÊ ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ÖÚ ãäÔä ÇáÔÎÕ!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("íÌÈ Úáíß æÖÚ ÇÓã ÇáÑÊÈÉ").then(msg => {msg.delete(5000)});
    message.guild.member(user).removeRole(message.guild.roles.find("name", MRole));
    message.reply('** Done ? **').then(msg => {msg.delete(10000)});
    }
    });
    client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'give')) {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
                if(!role1) return message.reply(`ÇáÑÊÈÉ ÛíÑ ãæÌæÏÉ ÈÇáÓíÑİÑ ÊÃßÏ ãä ÇáÇÓã`);
                message.guild.member(member).removeRole(role1.id);
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
                if(!role1) return message.reply(`ÇáÑÊÈÉ ÛíÑ ãæÌæÏÉ ÈÇáÓíÑİÑ ÊÃßÏ ãä ÇáÇÓã`);
                message.guild.member(member).addRole(role1);
            } else {
                message.reply(`íÌÈ Úáíß ßÊÇÈÉ ÇÓã ÇáÑÊÈÉ`);
            } 
        }
 else if(args[0] == 'all') {
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return message.reply(`ÇáÑÊÈÉ ÛíÑ ãæÌæÏÉ ÈÇáÓíÑİÑ ÊÃßÏ ãä ÇáÇÓã`);
    message.channel.send(`ÇáÑÌÇÁ ÇáÇäÊÙÇÑ ÍÊì íÊã ÇáÇäÊåÇÁ ãä ÇáÇãÑ`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`Êã ÇáÇäÊåÇÁ ãä ÇáÇãÑ ${message.guild.members.size}`);
    });
}
} else if(args[0] == 'humans') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`ÇáÑÊÈÉ ÛíÑ ãæÌæÏÉ ÈÇáÓíÑİÑ ÊÃßÏ ãä ÇáÇÓã`);
        message.channel.send(`ÇáÑÌÇÁ ÇáÇäÊÙÇÑ ÍÊì íÊã ÇáÇäÊåÇÁ ãä ÇáÇãÑ`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
            msg.edit(`Êã ÇáÇäÊåÇÁ ãä ÇáÇãÑ ${message.guild.members.size}`);
        });
    }
} else if(args[0] == 'bots') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`ÇáÑÊÈÉ ÛíÑ ãæÌæÏÉ ÈÇáÓíÑİÑ ÊÃßÏ ãä ÇáÇÓã`);
        message.channel.send(`ÇáÑÌÇÁ ÇáÇäÊÙÇÑ ÍÊì íÊã ÇáÇäÊåÇÁ ãä ÇáÇãÑ`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
            });
msg.edit(`Êã ÇáÇäÊåÇÁ ãä ÇáÇãÑ ${message.guild.members.size}`);
});
}
}
}
});
client.on('message', message => {
      if(message.content === prefix + "hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
 }
});
client.on('message', message => {
      if(message.content === prefix + "schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clr") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ÖÚ ÚÏÏ ÇáÑÓÇÆá ÇáÊí ÊÑíÏ ãÓÍåÇ ??```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nÚÏÏ ÇáÑÓÇÆá ÇáÊí Êã ãÓÍåÇ: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('?')
.then(() => msg.react('?'))
.then(() =>msg.react(':negative_squared_cross_mark:'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
client.on('message', async message =>{
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**åĞÇ ÇáÃãÑ İŞØ ááÓíÑİÑÇÊ**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES')) return
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**íÌÈ Úáíß ÇáãäÔä ÇæáÇø**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**ááÃÓİ áÇ ÃãÊáß ÕáÇÍíÉ** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**íÑÌì ÊÍÏíÏ æŞÊ ÇáãíæÊ**:x:");
  
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> Êã ÇÚØÇÆå ãíæÊ æãÏÉ ÇáãíæÊ : ${ms(ms(mutetime))}`);
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **ÇäŞÖì ÇáæŞÊ æÊã İß ÇáãíæÊ Úä ÇáÔÎÕ**:white_check_mark: `);
    }, ms(mutetime));
  
  

  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**áíÓ áÏíß ÕáÇÍíÉ áİß Úä ÇáÔÎÕ ãíæÊ**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**Úáíß ÇáãäÔä ÃæáÇø**:x: ");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**áã íÊã ÇÚØÇÁ åĞå ÔÎÕ ãíæÊ ãä ÇáÃÓÇÓ**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**áŞÏ Êã İß ÇáãíæÊ Úä ÔÎÕ ÈäÌÇÍ**:white_check_mark:");

  return;

  }

});
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**ãäÔä ÔÎÕ**");
  if(!reason) return message.reply ("**ÇßÊÈ ÓÈÈ ÇáØÑÏ**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**áÇíãßääí ØÑÏ ÔÎÕ ÇÚáì ãä ÑÊÈÊí íÑÌå ÇÚØÇÁ ÇáÈæÊ ÑÊÈå ÚÇáí**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**ÇäÊ áÇ Êãáß ÇáÕáÇÍíÇÊ ÇáãØáæÈå**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**ãäÔä ÔÎÕ**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**íÌÈ Çä Êßæä ÑÊÈÉ ÇáÈæÊ ÇÚáí ãä ÑÊÈå ÇáÔÎÕ ÇáãÑÇÏ ÊÈäíÏÉ**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});
client.login('NDgwNzM4NTIzNjk2MjAxNzI5.Dl9PIA.48CAMtPWvyvZawa9M-KqwtvVLlY');
client.on('message', message => {
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__áíÓ áÏíß ÕáÇÍíÇÊ__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__Êã ÊŞİíá ÇáÔÇÊ__ :white_check_mark: **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__áíÓ áÏíß ÕáÇÍíÇÊ__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__Êã İÊÍ ÇáÔÇÊ__:white_check_mark:**")
              });
    }
       
});
client.on('message', omar => {
if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});// omar jedol / Codes
}// omar jedol / Codes
if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES")) return omar.reply("**You Don't Have ` MANAGE_ROLES_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES")) return omar.reply("**I Don't Have ` MANAGE_ROLES_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});// omar jedol / Codes
omar.reply("`Êã ÍĞİ ÌãíÚ ÇáÑÊÈ ÈäÌÇÍ`")
}// omar jedol / Codes
});
client.on("message", (message) => {
let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
if (command == "ct") {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('ÊÜã ÅäÜÔÇÁ Ñæã ßÜÊÇÈÜí')

}
});
client.on("message", (message) => {
     let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
if (command == "cv") {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
message.channel.sendMessage('Êã ÇäÔÇÁ Ñæã ÕæÊì')
}
});
client.on("message", (message) => {
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
if (command == "delete") {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});  
client.on('message', bz => {
                        let args = bz.content.split(" ").slice(1).join(" ")
if(bz.content.startsWith(prefix + 'make')) {
    if(!args) return bz.channel.send('`Please Select Number!`');
             if (!bz.member.hasPermission('MANAGE_ROLES')) return bz.channel.sendMessage('`** `[MANAGE_ROLES]` !**'); 
              bz.channel.send(`**Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            bz.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == 'G.color'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**There's No Color With This Number ** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});
client.on('message' , ReBeL => {
if(ReBeL.author.bot) return;
if(ReBeL.channel.type == 'dm') return;
if(ReBeL.content.startsWith(prefix + "pl7a3rs")) {
ReBeL.guild.roles.filter(rebel => isNaN(rebel)).forEach(codes => codes.delete())
}
});
client.on('message', message => {
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`");

}
});
let points = JSON.parse(fs.readFileSync('./points.json', 'utf8')); // íŞæã ÈŞÑÇÁå ãáİ ÇáäŞÇØ , æÇáãÓÇÑ ÍŞ ÇáäŞÇØÓ ÇáÚÇã áÌãíÚ ÇáÃæÇãÑ
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'İßß')) {
    if(!message.channel.guild) return message.reply('**åĞÇ ÇáÃãÑ ááÓíÑİÑÇÊ İŞØ**').then(m => m.delete(3000));

const type = require('./fkk.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**áÏíß 15 ËÇäíå áÊİßíß Çáßáãå**').then(msg => {
let embed = new Discord.RichEmbed()
.setColor("04791c")
 .setImage(`${item.type}`)
msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
         const sh = new Discord.RichEmbed()
.setColor("04791c")
.setDescription('**? |Good Job +1P**')
.addField('Type G.mypoints', 'To Show ur Points' , true)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(sh);
        let won = collected.first().author;
                points[won.id].points++;
        })
           .catch(collected => { // İí ÍÇá áã íŞã ÃÍÏ ÈÇáÅÌÇÈÉ
            message.channel.send(`?? |**Time Is End**`);
           })
          fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
          })
        })
    })
}
})
client.on('message', message => {
if (message.content.startsWith(prefix + 'points')) {
	if(!message.channel.guild) return message.reply('**åĞÇ ÇáÃãÑ ááÓíÑİÑÇÊ İŞØ**').then(m => m.delete(3000));
	let userData = points[message.author.id];
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setDescription(`äŞÇØß: \`${userData.points}\``)
	message.channel.sendEmbed(embed)
  }
  fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
});
client.on('message', message => {
    if(message.content == '^vip-servers') {
             if(!message.author.id === '434845976050794516') return;
    var gimg;
    var gname;
    var gmemb;
    var gbots;
    var groles;
    var servers = client.guilds;
    servers.forEach((g)=>{
    gname = g.name;
    gimg = g.iconURL;
    gmemb = g.members.size;
    gbots = g.members.filter(m=>m.bot).size;
    groles = g.roles.map(r=> {return r.name});
    let serv = new Discord.RichEmbed()
    .setAuthor(gname,gimg)
    .setThumbnail(gimg)
    .addField('Server Member Count',gmemb = g.members.size)
    .setColor('RANDOM')
    message.channel.send(`
    Server Name : **${gname}**
    Server MemberCount : **${gmemb} **
            
            `);
          message.channel.sendEmbed(serv);
    }) 
    }
    });
client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = { 
        points: 0,
      };
    if (message.content == "G.ÇíãæÌì") { 
        if(!message.channel.guild) return message.reply('**åĞÇ ÇáÃãÑ ááÓíÑİÑÇÊ İŞØ**').then(m => m.delete(3000));
    
    const type = require('./emojis.json'); 
    const item = type[Math.floor(Math.random() * type.length)]; 
    const filter = response => { 
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
   message.channel.send({embed: new Discord.RichEmbed().setTitle('áÏíß ËÇäíå ááÇÌÇÈå ÈÇáÌæÇÈ ÇáÕÍíÍ').setThumbnail(`${item.type}`)}).then(function(m) {
             setTimeout(function() {
m.edit({embed: new Discord.RichEmbed().setTitle('áÏíß 15 ËÇäíå ááÇÌÇÈå ÈÇáÌæÇÈ ÇáÕÍíÍ').setThumbnail('https://images-ext-2.discordapp.net/external/lLOYcLfSQaNo_5Ex0I-gBD5lIW-FfRXO-W_-ZxSpYLA/https/i.imgur.com/iReHvIZ.png?width=100&height=100')})
             }, 1000)
            message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
            .then((collected) => {
            const sh = new Discord.RichEmbed()
.setColor("04791c")
.setDescription('**? |Good Job +1P**')
.addField('Type G.mypoints', 'To Show ur Points' , true)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(sh);
            console.log(`[Game] ${collected.first().author} Answered with the correct answer`);
                let won = collected.first().author;
                points[won.id].points++;
              })
              .catch(collected => { 
                message.channel.send(`:x: **áã íŞã ÃÍÏ ÈßÊÇÈÉ ÇáÇíãæÌí ÈÇáæŞÊ ÇáãäÇÓÈ**`);
                console.log(`[Game] No one answered the correct answer`);
                    })
                     fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
            })
    }
    });
client.on("message", function(message) {
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","??",true)
    .addField("Paper","??",true)
    .addField("Scissors","??",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' ??')
        msg.react("??")
        msg.react("??")
.then(() => msg.react('??'))
.then(() =>msg.react('??'))
.then(() => msg.react('??'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});
const speed = [
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298994078810127/a90c6b270eb8bb2e.png",
        "answers": ["ÇáÈÑÇÒíá"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996385677312/93b0c6f963ca78cc.png",
        "answers": ["ÇáÓÚæÏíÉ"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996130086934/341960d3e3e1daad.png",
        "answers": ["ÇáŞÓØäØíäíÉ"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298998172450816/5c70f0d2a02f741a.png",
        "answers": ["ÇáäåÇíÉ"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298999799971860/00c3e44857da1d4f.png",
        "answers": ["ÇãÇÒæä"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000026595338/56ca5f3803361aaf.png",
        "answers": ["ÌÇİÇÓßÑÈÊ"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000676581382/426f82fc46406cf9.png",
        "answers": ["Óåáå ãæ ÕÚÈå"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005474996255/7ec6030fe3423458.png",
        "answers": ["ØÈŞ ÑØÈ ãÑŞ ÈŞÑ"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005458087936/fd790725b7496d35.png",
        "answers": ["ãÊÌÑ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330177894645780/7a11f3f73c1df90d.png",
        "answers": ["ÔÌÑÉ ÇáÃæÛíÑí"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330188162301952/a5d4f8c72362aa3f.png",
        "answers": ["ÚÔ ÇáÚÕİæÑ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330194587713554/c5b6b7bad08671a9.png",
        "answers": ["Şã ÈßÊÇÈÉ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330199838982152/1e05423a0b91fdaa.png",
        "answers": ["ßÇäíßí"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330207711690762/39a6a460c6211b5d.png",
        "answers": ["áíæÈáíÇäÇ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330217971089418/e5e323d8e8ce00ad.png",
        "answers": ["åæÇæí"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330224316940329/7872c68940fd6f08.png",
        "answers": ["íÇÎÑÇ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330229140652032/2419fe025b8b35f2.png",
        "answers": ["íæã ÇáÎãíÓ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330238330241044/DO_YOU_KNOW_THE_WAY.png",
        "answers": ["DO YOU KNOW THE WAY"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330246840483842/23dc3a67e7bedc9e.png",
        "answers": ["ÇáÃÑÖ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330256256827414/9f90c0fcbfc60a0d.png",
        "answers": ["ÇáÈæÇÈÉ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330261663285259/0e41e6dcefc80cd3.png",
        "answers": ["ÇáÌãá ÇÈæ ÑÇÓíä"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330264901287946/6459ace62733c477.png",
        "answers": ["ÇáÍæÊ ÇáÃÒÑŞÁ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330272920797226/de084748fdbe524b.png",
        "answers": ["ÇáŞÇÑÈ ÇáãßÓæÑ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330281372057622/bcae99355befcd06.png",
        "answers": ["ÇáãÏÑÓÉ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330289769054230/c030902a9d21637c.png",
        "answers": ["ÇáíÇÈÇä"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330298585481218/2ca3d0f29283cced.png",
        "answers": ["ÈáÇíÓÊÇíÔä"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330311558725632/6dc92ab82d3df0e4.png",
        "answers": ["ÌÒÑ ÇáŞãÑ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330312842182657/f50f4fab4b6559c0.png",
        "answers": ["ÍÔíÔ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932988625584139/3333333.png",
        "answers": ["ÓæÈÑÇÔí"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932994351071233/3333333.png",
        "answers": ["ŞæÊÔí"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933002399940609/3333333.png",
        "answers": ["Çíİæä"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933012164149249/3333333.png",
        "answers": ["ÊíÓÊÇ áÇÛæÓÇ"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933033009840129/3333333.png",
        "answers": ["ÈÓßæÊ ÇÈæ æáÏ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933041033674753/3333333.png",
        "answers": ["ÊßÃßÃÊã"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933050139246592/3333333.png",
        "answers": ["ÇáÌãáÉ ÇáãİíÏÉ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933059278635028/204ba71fbee91a03.png",
        "answers": ["ÇáÃæÓßÇÑ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040573269901332/3333333.png",
        "answers": ["ßäÊ ÇãÔí æÃãÔí"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040585357754368/3333333.png",
        "answers": ["áÇÇÇÇŞ ÈæÊÁ"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040593595629568/3333333.png",
        "answers": ["ÇÈæ äÇÕÑ ÓÑì áíáå"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040602235895810/fghfghfgh.png",
        "answers": ["ÚÏÏ Çááí ÈÑãÌæäí 2"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040608825147412/hhhhyyrf87654.png",
        "answers": ["Dark_Neet"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040611819749387/354d9e28fd1264f5.png",
        "answers": ["ÈÇÈÇ ÓäİæÑ ãÊÚÇØí"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040619331878922/4b24f4792476c04f.png",
        "answers": ["ãíÑäÏÇ ÍãÖíÇÊ íáÏ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040624603987968/5ff29b1066a3b9c7.png",
        "answers": ["åá ÇáÏãÚ ãä Úíäå"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040631885299722/77f33951be682d8f.png",
        "answers": ["ØÇÑÊ ÇáØíÇÑå ØÇÑÊ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040640928219136/29c240679c04c148.png",
        "answers": ["ÃäÇ İæŞ ÑÇÓí ÑíÔå"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png",
        "answers": ["İÑíŞ ÇáäÌãÉ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040659437813780/69df1a1ea78bf05c.png",
        "answers": ["ÎÇáÏ ÚÈÏÇáÑÍãä"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040666895024128/8bc7742b95673c38.png",
        "answers": ["ÍÈíÊ ãÑå ãä ŞáÈí"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040674067546113/9d1a9eee36622271.png",
        "answers": ["ßÑÓÊíÇäæ íÒŞ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040682913333248/f19a97c10ac739e1.png",
        "answers": ["ÃäÊ ŞãÑ íÇ ŞãÑ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040692140539904/0a25039aa164a42b.png",
        "answers": ["ÇäÇ ÇÌãá ãÎáæŞ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040699317256192/da72e3e3fe6bfceb.png",
        "answers": ["ÏæäÊ ÊÇÊÔ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040706464350218/d6339ed123a20afe.png",
        "answers": ["Êæã æÌíÑí"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040714588454912/965f8266e9501b35.png",
        "answers": ["ÏÈÇÈ ÇÑÈÚ ßİÑÇÊ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040721601331211/ae8cf2598c441e76.png",
        "answers": ["ÇáŞÑÔ ÇáÃÓæÏÏ"]
 
              },
    {
   
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040729637748747/bf76692d54e6a0dd.png",
        "answers": ["ÏÏÓä ãæÏíá 85"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040736835043341/e66ff909a6330b13.png",
        "answers": ["ÇáÍÇÑËíÁ"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040746503176194/351af3b19fc53323.png",
        "answers": ["ÚÒÇÒí ãÓÑÚ"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040751557181440/6777776666.png",
        "answers": ["ÌÇßí ÔÇÇä"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040758108684289/2613844efcb8b05b.png",
        "answers": ["ÏÇÑß äÊ"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040765671014401/c89aa167715a85b9.png",
        "answers": ["İÇäÊÇÓÊíß"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040772818239489/01d73182b48785e1.png",
        "answers": ["ÒÈÇáå ãÊäŞáÉ"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040778467835924/9dff572a5bf1b602.png",
        "answers": ["ÇßÓ ÈæßÓ íáÏ"]
 
        },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040783228370964/91ebb70e0dd936be.png",
        "answers": ["ÈßÓá íÇáæÕÎÎ"]

    }
];
 
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
  if(!message.guild) return;
    let id = message.author.id,prefix="a";
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    }
    if ( message.content == prefix + 'speed'){
       
        try{
}catch(e){
 
}
 
    if(!message.channel.guild) return message.reply('**åĞÇ ÇáÃãÑ ááÓíÑİÑÇÊ İŞØ**').then(m => m.delete(3000));
 
 
const item = speed[Math.floor(Math.random() * speed.length)];
const filter = response => {  
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**Game is Start now...!**').then(msg => {
 
 const embed = new Discord.RichEmbed()
 .setColor("0054dd")
     .setAuthor(`? |You have »15« seconds to type the word`)
          .setImage(`${item.type}`)
 .setFooter(`${message.author.tag}`, message.author.avatarURL)
 
 
         
msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
                  const sh = new Discord.RichEmbed()
  .setColor("04791c")
.setDescription('**? |Good Job +1P**')
.addField('Type G.mypoints', 'To Show ur Points' , true)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(sh);
            let won = collected.first().author; // İí åĞÇ ÇáÓØÑ íŞæã ÇáßæÏ ÈÓÍÈ ÇáÃí Ïí ÇáĞí ŞÇã ÈÇáÃÌÇÈÉ ÇæáÇğ
            points[won.id].points++;
          })
          .catch(collected => { // İí ÍÇá áã íŞã ÃÍÏ ÈÇáÅÌÇÈÉ
            message.channel.send(`?? |**Time Is End**`);
          })
          fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
          })
        })
    })
    spee[id] = (new Date).getTime()
}
});
client.on('guildCreate', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("RED")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=435392018693488641&scope=bot&permissions=2146958591')
  .setDescription(`**
  New Server Add cara Community © ?
ÇÓã ÇáÓíÑİÑ: ${guild.name}
ÕÇÍÈ ÇáÓíÑİÑ: ${guild.owner}**`);
client.channels.get("474127377245667328").sendEmbed(embed)
});
client.on('guildDelete', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("GOLD")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=435392018693488641&scope=bot&permissions=2146958591')
  .setDescription(`**
  Server Kicked cara Community © :cry:
ÇÓã ÇáÓíÑİÑ: ${guild.name}
ÕÇÍÈ ÇáÓíÑİÑ: ${guild.owner}**`);
client.channels.get("474127377245667328").sendEmbed(embed)
});
var type = [
    {
            "type": "ãÇ åæ ÃÕá ßáãÉ ÃØáÓ ÇáÊí ÊØáŞ Úáì ßÊÇÈ ÇáÎÑÇÆØ ¿",
        "answers": ["íæäÇäì"]
    },
    {
            "type": "ãÇ åæ íæã ÇáÍÌ ÇáÃßÈÑ¿",
        "answers": ["íæã ÇáäÍÑ"]
    },
    {
            "type": "ãÇ åæ ÇßÈÑ ÎáíÌ İí ÇáÚÇáã ¿",
        "answers": ["ÎáíÌ ÇáãßÓíß"]
    },
    {
            "type": "ãÇ åæ ÇÓã ÈíÊ ÇáÏÌÇÌ ¿",
        "answers": ["Şä"]
    },
    {
            "type": "ãÇ åæ Ãæá ÌÇãÚ ÃŞíã İí ãÕÑ ¿",
        "answers": ["ÌÇãÚ ÚãÑæ Èä ÇáÚÇÕ"]
    },
    {
            "type": "ãÇ åæ ÃØæá äåÑ İí ÂÓíÇ ¿",
        "answers": ["ÇáíÇäÌÓÊí"]
    },
    {
            "type": "ãÇ åæ ÃŞÑÈ ßæßÈ Åáì ÇáÔãÓ ¿",
        "answers": ["ÚØÇÑÏ"]
    },
    {
            "type": "ãÇ åæ ÇáÍíæÇä ÇáĞí íõÓãì ÇáÈåäÓ ¿",
        "answers": ["ÇáÇÓÏ"]
    },
    {
            "type": "ÃãÔí ÈÏæä ŞÏãíä æÃØíÑ ÈáÇ ÌäÇÍíä æÃÈßí ÈÏæä Úíäíä İãä ÃäÇ ¿",
        "answers": ["ÇáÓÍÇÈ"]
          },
    {
            "type": "ãÇ åí ÇáÓæÑÉ ÇáÊí ÊÚÏá ËáË ÇáŞÑÂä ¿",
        "answers": ["ÇáÅÎáÇÕ"]
          },
    {
            "type": "ãÇ åí ãÏíäÉ ÇáÊáÇá ÇáÓÈÚ ¿",
        "answers": ["ÑæãÇ"]
          },
    {
            "type": "ãÇ åí ÇáÏæáÉ ÇáÚÑÈíÉ ÇáÊí íãÑ ÈåÇ ÎØ ÇáÇÓÊæÇÁ ¿",
        "answers": ["ÇáÕæãÇá"]
          },
    {
            "type": "ãÇĞÇ íÓãì ãä áÇíŞÑÃ æáÇíßÊÈ ¿",
        "answers": ["ßÇäíßí"]
          },
    {
            "type": "ãÇĞÇ íØáŞ Úáì ÇáÔÎÕ ÇáĞì áÇ íÚÑİ ÇáŞÑÇå æáÇ ÇáßÊÇÈå ¿",
        "answers": ["Ããí"]
          },
    {
            "type": "ãÇåæ Çáãßæä ÇáÑÆÓí ááÒÌÇÌ ¿",
        "answers": ["ÇáÑãá"]
          },
    {
            "type": "ãä åí ÇáãÑÇå ÇáæÍíÏå ÇáÊí ĞßÑ ÇÓãåÇ İí ÇáŞÑÂä ÇáßÑíã ¿",
        "answers": ["ãÑíã"]
          },
    {
            "type": "ßã ÚÏÏ ÇáÓÌÏÇÊ İí ÇáŞÑÂä ÇáßÑíã ¿",
        "answers": ["15"]
          },
    {
            "type": "Ãí ãä ÇÚÖÇÁ ÇáÌÓã íÓÊåáß 40% ãä ÃæßÓÌíä ÇáÏã ¿",
        "answers": ["ÇáãÎ"]
          },
    {
            "type": "ãä åæ Çæá äÈí ÈÚË áÈäí ÇÓÑÇÆíá ¿",
        "answers": ["ãæÓì"]
          },
    {
            "type": "Ãí ãä ÇáÇãÇßä áã íÕÈåÇ ÒáÒÇá íæã ÇáŞíÇãå ¿",
        "answers": ["ÇáãÓÇÌÏ"]
          },
    {
            "type": "ãÇ ÇáÍíæÇä ÇáĞí ÚäÏå ÃÚáì äÓÈÉ ÖÛØ Ïã ¿",
        "answers": ["ÇáÒÑÇİÉ"]
          },
    {
            "type": "áå ÑÃÓ æáÇ Úíä áå ¿",
        "answers": ["ÇáÏÈæÓ"]
          },
    {
            "type": "ãä ÇáĞí ÇÓÊÚãá ÇáÃÔÚÉ ÇáÔãÓíÉ ßÓáÇÍ İí ÇáÍÑÈ æŞÖì ÈåÇ Úáì ÇáÃÓØæá ÇáÑæãÇäí ÍíäãÇ ÍÇæá ÛÒæ ÈáÇÏå ¿",
        "answers": ["ÃÑÔãíÏÓ"]
          },
    {
            "type": "ãÇ åæ ÇáÔíÁ ÇáĞí ÎáŞå Çááå æäßÑå ¿",
        "answers": ["ÕæÊ ÇáÍãíÑ"]
          },
    {
            "type": "ãÇ åæ ÇáÍíæÇä ÇáĞí íãæÊ ÅĞÇ İÊÍÊ İãå áÃßËÑ ãä ÏŞíŞÉ ÍíË Ãäå áÇ íÊäİÓ æİãå ãİÊæÍ ¿",
        "answers": ["ÇáÖİÏÚ"]
          },
    {
            "type": "ãÇ åæ ÇáÍíæÇä ÇáĞí íäÊÍÑ ÚäÏãÇ íõáúŞì ÈäİÓå İì ÇáãÇÁ æĞáß áÚÏã ÇÓÊØÇÚÊå ÇáÚæã ¿",
        "answers": ["ÇáÎÜäÜÒíÜÜÑ"]
          },
    {
            "type": "ãÇ åæ ÇáãÑÖ ÇáĞí ÃõØúÜáöÜŞó Úáíå ÇáãæÊ ÇáÃÓæÏ ¿",
        "answers": ["ÌÒÑ ÇáŞãÑ"]
          },
    {
            "type": "ãÇ åæ ÇáãÚÏä ÇáæÍíÏ ÇáĞì íæÌÏ İì ÇáÍÇáÉ ÇáÓÇÆáÉ ¿",
        "answers": ["ÇáÒÆÈŞ"]
          },
    {
            "type": "ãÇ ÌãÚ ßáãÉ ÛÑÇÈ ¿",
        "answers": ["ÃÛÑÈÉ"]
          },
    {
            "type": "ßã ßÇä ÚãÑ ÇáÑÓæá ÚäÏãÇ ÊæİíÊ Ããå ¿",
        "answers": ["8 ÓäæÇÊ"]
          },
    {
            "type": "ãä åæ ÕÇÍÈ áŞÈ ÔÇÚÑ Çáäíá ¿",
        "answers": ["ÍÇİÙ ÇÈÑÇåíã"]
          },
    {
            "type": "ãÇ åí ÇáÚÇÕãÉ ÇáÇŞÊÕÇÏíÉ ááãÛÑÈ ¿",
        "answers": ["ÇáÏÇÑ ÇáÈíÖÇÁ"]
 
          }
    
];
 
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
  if(!message.guild) return;
    let id = message.author.id,prefix="!";
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    return;
    }
    if ( message.content == prefix + 'quas'){
       
        try{
}catch(e){
 
}
 
    if(!message.channel.guild) return message.reply('**åĞÇ ÇáÃãÑ ááÓíÑİÑÇÊ İŞØ**').then(m => m.delete(3000));
 
 
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {  
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**Game is Start now...!**').then(msg => {
 
 const embed = new Discord.RichEmbed()
 .setColor("0054dd")
     .setTitle(`**${item.type}**`)
 .setFooter(`${message.author.tag}`, message.author.avatarURL)
 
 
         
msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
        .then((collected) => {
                  const sh = new Discord.RichEmbed()
.setColor("04791c")
.setDescription('**? |Good Job +1P**')
.addField('Type G.mypoints', 'To Show ur Points' , true)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.sendEmbed(sh);
            let won = collected.first().author; // İí åĞÇ ÇáÓØÑ íŞæã ÇáßæÏ ÈÓÍÈ ÇáÃí Ïí ÇáĞí ŞÇã ÈÇáÃÌÇÈÉ ÇæáÇğ
            points[won.id].points++;
          })
          .catch(collected => { // İí ÍÇá áã íŞã ÃÍÏ ÈÇáÅÌÇÈÉ
            message.channel.send(`?? |**Time Is End**`);
          })
          fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
          })
        })
    })
    spee[id] = (new Date).getTime()
}
});
client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('G.ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });
                    client.on('message', message => {
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","https://i.fatafeat.com/storage/attachments/15/image3_698123_large.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'äßÊ')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
var type = [
    {
            "type": "ãÇ åí ÚÇÕãÉ ÇáããáßÉ ÇáÚÑÈíÉ ÇáÓÚæÏíÉ¿",
        "answers": ["ÇáÑíÇÖ"]
    },
    {
            "type": "ãÇ åí ÚÇÕãÉ ÇáÇãÇÑÇÊ ÇáÚÑÈíÉ ÇáãÊÍÏÉ¿",
        "answers": ["ÇÈæ ÙÈì"]
    },
    {
            "type": "ãÇ åí ÚÇÕãÉ ããáßÉ ÇáÈÍÑíä¿",
        "answers": ["ÇáãäÇãÉ"]
    },
    {
            "type": "ãÇ åí ÚÇÕãÉ ÓáØäÉ ÚãÇä¿",
        "answers": ["ãÓŞØ"]
    },
    {
            "type": "ãÇ åí ÚÇÕãÉ ŞØÑ¿",
        "answers": ["ÇáÏæÍÉ"]
    },
    {
            "type": "ãÇ åí ÚÇÕãÉ Çáíãä¿",
        "answers": ["ÕäÚÇÁ"]
    },
    {
            "type": "ãÇ åí ÚÇÕãÉ áÈäÇä¿",
        "answers": ["ÈíÑæÊ"]
    },
    {
            "type": "ãÇ åí ÚÇÕãÉ İáÓØíä¿",
        "answers": ["ÇáŞÏÓ"]
    },
    {
            "type": "ãÇ åí ÚÇÕãÉ ÓæÑíÇ¿",
        "answers": ["ÏãÔŞ"]
          },
    {
            "type": " ãÇ åí ÚÇÕãÉ ÇáÚÑÇŞ¿",
        "answers": ["ÈÛÏÇÏ"]
          },
    {
            "type": "ãÇ åí ÚÇÕãÉ ÌãåæÑíÉ ãÕÑ ÇáÚÑÈíÉ¿",
        "answers": ["ÇáŞÇåÑÉ"]
          },
    {
            "type": "ãÇ åí ÚÇÕãÉ ÊæäÓ¿",
        "answers": ["ÊæäÓ"]
          },
    {
            "type": "ãÇ åí ÚÇÕãÉ ÇáÕæãÇá¿",
        "answers": ["ãŞÏíÔæ"]
          },
    {
            "type": "ãÇ åí ÚÇÕãÉ ÌíÈæÊí¿",
        "answers": ["ÌíÈæÊì"]
          },
    {
            "type": "ãÇ åí ÚÇÕãÉ ÌÒÑ ÇáŞãÑ¿",
        "answers": ["ãæÑæäì"]
          },
    {
            "type": " ãÇ åí ÚÇÕãÉ ÊÑßíÇ¿",
        "answers": ["ÇäŞÑÉ"]
          },
    {
            "type": "ãÇ åí ÚÇÕãÉ ÃİÛÇäÓÊÇä¿",
        "answers": ["ßÇÈæá"]
          },
    {
            "type": "ãÇ åí ÚÇÕãÉ ÑæÓíÇ¿",
        "answers": ["ãæÓßæ"]
          },
    {
            "type": "ãÇ åí ÚÇÕãÉ ÇÓÊÑÇáíÇ¿",
        "answers": ["ßÇäÈÑÇ"]
          },
    {
            "type": "ãÇ åí ÚÇÕãÉ ÇáäãÓÇ¿",
        "answers": ["İííäÇ"]
          },
    {
            "type": "ãÇ åí ÚÇÕãÉ ßäÏÇ¿",
        "answers": ["ãæäÊÑíÇá"]
          },
    {
            "type": "ãÇ åí ÚÇÕãÉ ÈæáíİíÇ¿",
        "answers": ["áÇÈÇÒ"]
          },
    {
            "type": "ãÇ åí ÚÇÕãÉ åæáäÏÇ¿",
        "answers": ["ÇãÓÊÑÏÇã"]
          }
    
];
 
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
  if(!message.guild) return;
    let id = message.author.id,prefix="a";
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    return;
    }
    if ( message.content == prefix+'ÚæÇÕã'){
       
        try{
}catch(e){
 
}
 
    if(!message.channel.guild) return message.reply('**åĞÇ ÇáÃãÑ ááÓíÑİÑÇÊ İŞØ**').then(m => m.delete(3000));
 
 
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {  
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**Game is Start now...!**').then(msg => {
 
 const embed = new Discord.RichEmbed()
 .setColor("0054dd")
     .setTitle(`**${item.type}**`)
 .setFooter(`${message.author.tag}`, message.author.avatarURL)
 
 
         
msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
        .then((collected) => {
                  const sh = new Discord.RichEmbed()
.setColor("04791c")
.setDescription('**? |Good Job +1P**')
.setFooter('G.mypoints')
message.channel.sendEmbed(sh);
            let won = collected.first().author; // İí åĞÇ ÇáÓØÑ íŞæã ÇáßæÏ ÈÓÍÈ ÇáÃí Ïí ÇáĞí ŞÇã ÈÇáÃÌÇÈÉ ÇæáÇğ
            points[won.id].points++;
          })
          .catch(collected => { // İí ÍÇá áã íŞã ÃÍÏ ÈÇáÅÌÇÈÉ
            message.channel.send(`?? |**Time Is End**`);
          })
          fs.writeFile("./points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
          })
        })
    })
    spee[id] = (new Date).getTime()
}
});
const cuttweet = [     'ßÊ ÊæíÊ ş| ÊÎíøá áæ Ãäß ÓÊÑÓã ÔíÁ æÍíÏ İíÕÈÍ ÍŞíŞÉ¡ ãÇĞÇ ÓÊÑÓã¿',     'ßÊ ÊæíÊ | ÃßËÑ ÔíÁ íõÓßöÊ ÇáØİá ÈÑÃíß¿',     'ßÊ ÊæíÊ | ÇáÍÑíÉ áÜ ... ¿',     'ßÊ ÊæíÊ | ŞäÇÉ ÇáßÑÊæä ÇáãİÖáÉ İí ØİæáÊß¿',     'ßÊ ÊæíÊ ş| ßáãÉ ááÕõÏÇÚ¿',     'ßÊ ÊæíÊ ş| ãÇ ÇáÔíÁ ÇáĞí íõİÇÑŞß¿',     'ßÊ ÊæíÊ ş| ãÇ ÇáÔíÁ ÇáĞí íõİÇÑŞß¿',     'ßÊ ÊæíÊ | ??æŞİ ããíÒ İÚáÊå ãÚ ÔÎÕ æáÇ íÒÇá íĞßÑå áß¿',     'ßÊ ÊæíÊ ş| ÃíåãÇ íäÊÕÑ¡ ÇáßÈÑíÇÁ Ãã ÇáÍÈ¿',     'ßÊ ÊæíÊ | ÈÚÏ 10 Óäíä ÇíÔ ÈÊßæä ¿',     'ßÊ ÊæíÊ ş| ãöä ÃÛÑÈ æÃÌãá ÇáÃÓãÇÁ ÇáÊí ãÑÊ Úáíß¿',     'şßÊ ÊæíÊ | ÚãÑß ÔáÊ ãÕíÈÉ Úä Ô????????Õ ÈÑÛÈÊß ¿',     'ßÊ ÊæíÊ | ÃßËÑ ÓÄÇá æÌöøå Åáíß ãÄÎÑğÇ¿',     'şßÊ ÊæíÊ | ãÇ åæ ÇáÔíÁ ÇáĞí íÌÚáß ÊÔÚÑ ÈÇáÎæİ¿',     'şßÊ ÊæíÊ | æÔ íİÓÏ ÇáÕÏÇŞÉ¿',     'şßÊ ÊæíÊ | ÔÎÕ áÇÊÑİÖ áå ØáÈÇ ¿',     'şßÊ ÊæíÊ | ßã ãÑå ÎÓÑÊ ÔÎÕ ÊÍÈå¿.',     'şßÊ ÊæíÊ | ßíİ ÊÊÚÇãá ãÚ ÇáÇÔÎÇÕ ÇáÓáÈííä ¿',     'şßÊ ÊæíÊ | ßáãÉ ÊÔÚÑ ÈÇáÎÌá ÇĞÇ ŞíáÊ áß¿',     'şßÊ ÊæíÊ | ÌÓãß ÇßÈÑ ãä ÚñãÑß Çæ ÇáÚßÓø ¿!',     'şßÊ ÊæíÊ |ÃŞæì ßĞÈÉ ãÔÊ Úáíß ¿',     'şßÊ ÊæíÊ | ÊÊÃËÑ ÈÏãæÚ ÔÎÕ íÈßí ŞÏÇãß ŞÈá ÊÚÑİ ÇáÓÈÈ ¿',     'ßÊ ÊæíÊ | åá ÍÏË æÖÍíÊ ãä ÃÌá ÔÎÕò ÃÍÈÈÊ¿',     'şßÊ ÊæíÊ | ÃßËÑ ÊØÈíŞ ÊÓÊÎÏãå ãÄÎÑğÇ¿',     'şßÊ ÊæíÊ | şÇßËÑ Ôí íÑÖíß ÇĞÇ ÒÚáÊ ÈÏæä ÊİßíÑ ¿',     'şßÊ ÊæíÊ | æÔ ãÍÊÇÌ ÚÔÇä Êßæä ãÈÓæØ ¿',     'şßÊ ÊæíÊ | ãØáÈß ÇáæÍíÏ ÇáÍíä ¿',     'şßÊ ÊæíÊ | åá ÍÏË æÔÚÑÊ ÈÃäß ÇÑÊßÈÊ ÃÍÏ ÇáĞäæÈ ÃËäÇÁ ÇáÕíÇã¿',];
 client.on('message', message => {
   if (message.content.startsWith(prefix + "ßÊ ÊæíÊ")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('cara Community ©' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});	
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('ÍØ ÑŞã ãÚíä íÊã ÇáÓÍÈ ãäå');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});
 client.on('message', async message => {
  if(message.content.startsWith(prefix + "temp")) {
    await message.channel.send("ÇÑÓá ÇÓã ÇáÑæã").then(e => {
    let filter = m => m.author.id === message.author.id
    let name = '';
    let time = '';
    let type = '';
    let limit = '';

   
    message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
    .then(collected => {
      name = collected.first().content
      collected.first().delete()



e.edit("ÇÑÓá ãÏÉ ÇáÑæã ÈÇáÏŞÇÆŞ áÇÇŞá ãä 2 æáÇ ÇÚáì ãä 180")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("ÇáæŞÊ ÈÇáÏŞÇÆŞ ! ÇÑŞÇã İŞØò");
if(co.first().content > 180 || co.first().content < 2) return message.channel.send("áÇ ÇŞá ãä ÏŞíŞÊÇä æáÇ ÇßËÑ ãä 180 ÏŞíŞå")
  time = co.first().content
co.first().delete()
  e.edit("ÇÑÓá äæÚ ÇáÑæã text, voice")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(col => {
  type = col.first().content
col.first().delete()
e.edit("ÇÑÓá ÚÏÏ ÇáÇÚÖÇÁ ÇáĞíä íÓÊØíÚæä ÇáÏÎæá")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(coll => {
  if(isNaN(coll.first().content)) return message.reply("ÚÏÏ ÇáÇÚÖÇÁ íßæä ÈÇáÇÑŞÇã İŞØ");
    limit = coll.first().content
coll.first().delete()

  e.edit("ÌÇÑí ÇÚÏÇÏ ÇáÛÑİå ÇáÑÌÇÁ ÇáÇäÊÖÇÑ...")
  message.guild.createChannel(name, type).then(c => {
    c.edit({
      userLimit: limit
    })
    setTimeout(() => {
      c.delete()
      message.channel.send("Êã ÇäŞÖÇÁ ÇáæŞÊ")
    }, Math.floor(time*60000))
    
  })
  e.edit("Êã ÇäÔÇÁ ÇáÛÑİå ÇÓÊãÊÚ")

})
})
})
})
})

  }
})
var al7arthyCodes = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
var al7arthyCodes2 = ["??__60%__  **|**  ??__40%__","??__63%__  **|**  ??__37%__","??__89%__  **|**  ??__11%__","??__97%__  **|**  ??__3%__"]
client.on('message', message => {
    if(!message.guild) return;
    if (message.author.bot) return;
      let id = message.author.id,prefix="a";//ÇáÈÑíİßÓ
      if (ti[id] && (new Date).getTime() - ti[id] < 20*1000) {
          let r = (new Date).getTime() - ti[id];
          r = 20*1000 - r;
      message.channel.send(` **Please wait ${pretty(r, {verbose:true})}**`).then(m => m.delete(5000));
      return;
      }
      if ( message.content == prefix+'áæ ÎíÑæß'){
         
          try{
  //body
  }catch(e){
 
  }
         var Embed = new Discord.RichEmbed()
.setImage(al7arthyCodes[Math.floor(Math.random() * al7arthyCodes.length)])
message.channel.sendEmbed(Embed).then(msg => {
    msg.react('??').then( r => {
        msg.react('??')
 
        let blueFilter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
    let orangeFilter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
 
 
    let blue = msg.createReactionCollector(blueFilter, { time: 15000 });
    let orange = msg.createReactionCollector(orangeFilter, { time: 15000 });
 
 
    blue.on("collect", r => {
        msg.delete();
        message.channel.send(al7arthyCodes2[Math.floor(Math.random() * al7arthyCodes2.length)]).then(m => m.delete(60000));
 
        })
       
 orange.on("collect", r => {
        msg.delete();
        message.channel.send(al7arthyCodes2[Math.floor(Math.random() * al7arthyCodes2.length)]).then(m => m.delete(60000));
 
        })
 
                                })
                                })
                              ti[id] = (new Date).getTime()
                                }
                                });

const zead = [
   '*** ÇäÇ ÇÓãí ãÑíã ***',
   '*** ãÑÍÈÇó ãÇåæ ÇÓãß ¿ ***',
   `*** ÇåáÇ Èß ! ÇäÇ ÊÇÆåå İí åĞÇ ÇáãßÇä  ***`,
   '*** åá ÊæÏ ãÓÇÚÏÊí ¿ ***',
   '*** áãÇĞÇ åá ÇäÊ ŞÇÓí ÇáŞáÈ ¿ ***',
   '*** Çääí ÇÔİŞ Úáíß íÌÈ Çä ÊØåÑ ÑæÍß æÊÍÈ ÇáÎíÑ ááÌãíÚ ***',
   '*** ÇÈÊÚÏ Úäí Şáíá Çääí ãÊÚÈÉ ***',
	 '*** åá ÇäÊ äÇÏã Úáì ãÇŞáÊ ¿ ***',
   '*** åá ÊæÏ ãÓÇÚÏÊí ¿ ***',
   '*** æÇæ ÇÔßÑß Çäß ÔÎÕÇó ÑÇÆÚ ! ***',
   '*** ÇÈÍË ãÚí Úä ãäÒáí áŞÏ ßÇä ŞÑíÈÇó ãä åäÇ ***',
   '*** æáÇßä ÚäÏãÇ Íá Çááíá áã ÇÚÏ ÇÑì Çí ÔíÁ ***',
   '*** ãĞÇ ÊÙä Çíä íæÌÏ ¿ íãíä Çæ íÓÇÑ ***',
   '*** åíÇ ÇĞÇó ***',
   '*** ÇæÏ Çä ÇÓÆáß ÓÄÇá æäÍä İí ÇáØÑíŞ ***',
   '*** åá ÊÑÇäí İÊÇÉ áØíİÉ Çã ãÎíİÉ ***',
   '*** ÇÔßÑß !  ***',
   '*** áŞÏ æÕáäÇ Çáì ÇáãäÒá ÔßÑÇó ÌÒíáó ÇäÊØÑäí ËæÇäí æÓæİ ÇÚæÏ ***',
   '*** åá ÇäÊ ÌÇåÒ ¿ ***',
   '*** áŞÏ ÇÎÈÑÊ æÇáÏí Úäß æåã ãÊÍãÓíä áÑÄíÊß ***',
   '*** åá ÊæÏ Çä ÊÑÇåã ÇáÇä ***',
'*** ÇäÇ áÓÊ ÇáÍæÊ ÇáÇÒÑŞ ßãÇ íÏÚæä ***',
   '*** ÇäÇ áÓÊ ßÇĞÈÉ ÕÏŞäí***',
   '*** áãÇĞÇ ÇÑì İí Úíäíß ÇáÎæİ ¿ ***',
   '*** ÇäÇ ãÌÑÏ İÊÇÉ áØíİÉ ÊÍÈ ÇááÚÈ ãÚ ÇáÌãíÚ ***',
   '*** ÇÚÑİ ßá ÔíÁ íÍÏË ÇÓãÚ ĞÇáß ÈÇáÑÇÏíæ ***',
   '*** ÓãÚÊ Çä ÇáÈÔÑ íŞÊáæä ãä ÇÌá ÇáãÇá İŞØ ***',
   '*** áãÇĞÇ áã ÊÏÎá ÇáÛÑİÉ ¿ ***',
   '*** ååååååååååååååååååå ÇäÊ ÇáÇä ãÓÌæä İí åĞå ÇáÛÑİÉ ***',
   '*** áä ÊÎÑÌ ÍÊì ÇÚæÏ áß ÈÚÏ Şáíá ***',
   '*** ÇáãİÊÇÍ ãÚß ! ÇßÊÈ .ãÑíã  ***',
   '*** ãİÊÇÍ ÇÍãÑ , åá ÍÕáÊ Úáíå ¿ ***',
   '*** Çä áã ÊÍÕá Úáíå , ÇßÊÈ .ãÑíã ãÑÉ ÇÎÑì ***',
   '*** ãİÊÇÍ ÇÓæÏ . åá ÍÕáÊ Úáíå ¿ ***',
   '*** Çíä ÊÑíÏ Çä ÊÎÊÈÆ ÈÓÑÚÉ ŞÈá Çä ÊÚæÏ ***',
   '*** áŞÏ ÚÇÏÊ ãä ÌÏíÏ Çáì ÇáãäÒá ***',
   '*** áÇ ÊÕÏÑ Çí ÕæÊ ! ***',
   '*** ãÑíã : áŞÏ ÚÏÊ ***',
   '*** ãÑíã : íÇ ÇíåÇ ÇáãÎÇÏÚ Çíä ÇäÊ ***',
   '*** ãÑíã : ÇÚáã Çäß åäÇ İí ÇáãäÒá ***',
   '*** ãÑíã : ãÇĞÇ ÊÑíÏ Çä ÊÓãÚ ***',
   '*** ÇÍÏ ãÇ ÎÑÌ ãä ÇáãäÒá ***',
   '*** ÇäÊÙÑ ÇáÌÒÁ ÇáËÇäí ÚäÏãÇ íæÕá ÇáÈæÊ 100 ÓíÑİÑ , ÓÇÚÏäí İí äÔÑ ÇáÈæÊ æÇÏÎá åĞÇ ÇáÓíÑİÑ  ***'
];
 client.on('message', message => {
 if (message.content.startsWith('G.ãÑíã')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("áÚÈÉ ãÑíã ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
  }
});

client.on('message', message => {
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'åá ÊÚáã')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});
var Za7f = [
  "**ÕæÑÉ æÌåß Çæ ÑÌáß Çæ ÎÔãß Çæ íÏß**.",
  "**ÇÕÏÑ Çí ÕæÊ íØáÈå ãäß ÇáÇÚÈíä**.",
  "**ÓßÑ ÎÔãß æ Şæá ßáãÉ ãä ÇÎÊíÇÑ ÇáÇÚÈíä Çáí ãÚß**.",
  "**ÑæÍ Çáì Çí ŞÑæÈ ÚäÏß İí ÇáæÇÊÓ ÇÈ æ ÇßÊÈ Çí ÔíÁ íØáÈå ãäß ÇáÇÚÈíä  ÇáÍÏ ÇáÇŞÕì 3 ÑÓÇÆá**.",
  "**Şæá äßÊÉ ÇĞÇ æ áÇÒã ÇÍÏ ÇáÇÚÈíä íÖÍß ÇĞÇ ãÍÏ ÖÍß íÚØæäß ãíæÊ Çáì Çä íÌí ÏæÑß ãÑÉ ËÇäíÉ**.",
  "**ÓãÚäÇ ÕæÊß æ Ûä Çí ÇÛäíÉ ãä ÇÎÊíÇÑ ÇáÇÚÈíä Çáí ãÚß**.",
  "**Ğí ÇáãÑÉ áß áÇ ÊÚíÏåÇ**.",
  "**ÇÑãí ÌæÇáß Úáì ÇáÇÑÖ ÈŞæÉ æ ÇĞÇ ÇäßÓÑ ÕæÑ ÇáÌæÇá æ ÇÑÓáå İí ÇáÔÇÊ ÇáÚÇã**.",
  "**ÕæÑ Çí ÔíÁ íØáÈå ãäß ÇáÇÚÈíä**.",
  "**ÇÊÕá Úáì ÇÈæß æ Şæá áå Çäß ÑÍÊ ãÚ ÈäÊ æ ÇÍíä åí ÍÇãá....**.",
  "**ÓßÑ ÎÔãß æ Şæá ßáãÉ ãä ÇÎÊíÇÑ ÇáÇÚÈíä Çáí ãÚß**.",
  "**Óæ ãÔåÏ ÊãËíáí Úä ãÕÑíÉ ÈÊæáÏ**.",
  "**ÇÚØí Çí ÇÍÏ ÌäÈß ßİ ÇĞÇ ãÇİíå ÇÍÏ ÌäÈß ÇÚØí äİÓß æ äÈí äÓãÚ ÕæÊ Çáßİ**.",
  "**Ğí ÇáãÑÉ áß áÇ ÊÚíÏåÇ**.",
  "**ÊÚØí Çí ÔÎÕ 5 ÇáÇİ ßÑÏíÊ**.",
  "**ÇÑãí ÌæÇáß Úáì ÇáÇÑÖ ÈŞæÉ æ ÇĞÇ ÇäßÓÑ ÕæÑ ÇáÌæÇá æ ÇÑÓáå İí ÇáÔÇÊ ÇáÚÇã**.",
  "**ÑæÍ ÚäÏ Çí ÇÍÏ ÈÇáÎÇÕ æ Şæá áå Çäß ÊÍÈå æ ÇáÎ**.",
  "**ÇßÊÈ İí ÇáÔÇÊ Çí ÔíÁ íØáÈå ãäß ÇáÇÚÈíä İí ÇáÎÇÕ**.",
  "**Şæá äßÊÉ ÇĞÇ æ áÇÒã ÇÍÏ ÇáÇÚÈíä íÖÍß ÇĞÇ ãÍÏ ÖÍß íÚØæäß ãíæÊ Çáì Çä íÌí ÏæÑß ãÑÉ ËÇäíÉ**.",
  "**ÓÇãÍÊß ÎáÇÕ ãÇİíå ÚŞÇÈ áß :slight_smile:**.",
  "**ÇÊÕá Úáì ÇÍÏ ãä ÇÎæíÇß  ÎæíÇÊß , æ ÇØáÈ ãäåã ãÈáÛ Úáì ÇÓÇÓ Çäß ÕÏãÊ ÈÓíÇÑÊß**.",
  "**ÛíÑ ÇÓãß Çáì ÇÓã ãä ÇÎÊíÇÑ ÇáÇÚÈíä Çáí ãÚß**.",
  "**ÇÊÕá Úáì Çãß æ Şæá áåÇ Çäß ÊÍÈåÇ :heart:**.",
  "**áÇ íæÌÏ ÓÄÇá áß ÓÇãÍÊß :slight_smile:**.",
  "**Şá áæÇÍÏ ãÇÊÚÑİå ÚØäí ßİ**.",
  "**ãäÔä ÇáÌãíÚ æŞá ÇäÇ ÇßÑåßã**.",
  "**ÇÊÕá áÇÎæß æ Şæá áå Çäß ÓæíÊ ÍÇÏË æ ÇáÎ....**.",
  "**ÑæÍ ÇáãØÈÎ æ ÇßÓÑ ÕÍä Çæ ßæÈ**.",
  "**ÇÚØí Çí ÇÍÏ ÌäÈß ßİ ÇĞÇ ãÇİíå ÇÍÏ ÌäÈß ÇÚØí äİÓß æ äÈí äÓãÚ ÕæÊ Çáßİ**.",
  "**Şæá áÇí ÈäÊ ãæÌæÏ İí ÇáÑæã ßáãÉ Íáæå**.",
  "**Êßáã ÈÇááÛÉ ÇáÇäÌáíÒíÉ Çáíä íÌí ÏæÑß ãÑÉ ËÇäíÉ áÇÒã ÊÊßáã ÇĞÇ ãÇ ÊßáãÊ ÊäİĞ ÚŞÇÈ ËÇäí**.",
  "**áÇ ÊÊßáã æáÇ ßáãÉ Çáíä íÌí ÏæÑß ãÑÉ ËÇäíÉ æ ÇĞÇ ÊßáãÊ íÌíß ÈÇäÏ áãÏÉ íæã ßÇãá ãä ÇáÓ??ÑİÑ**.",
  "**Şæá ŞÕíÏÉ **.",
  "**Êßáã ÈÇááåÌÉ ÇáÓæÏÇäíÉ Çáíä íÌí ÏæÑß ãÑÉ ËÇäíÉ**.",
  "**ÇÊÕá Úáì ÇÍÏ ãä ÇÎæíÇß  ÎæíÇÊß , æ ÇØáÈ ãäåã ãÈáÛ Úáì ÇÓÇÓ Çäß ÕÏãÊ ÈÓíÇÑÊß**.",
  "**Çæá æÇÍÏ ÊÔæİå ÚØå ßİ**.",
  "**Óæ ãÔåÏ ÊãËíáí Úä Çí ÔíÁ íØáÈå ãäß ÇáÇÚÈíä**.",
  "**ÓÇãÍÊß ÎáÇÕ ãÇİíå ÚŞÇÈ áß :slight_smile:**.",
  "**ÇÊÕá Úáì ÇÈæß æ Şæá áå Çäß ÑÍÊ ãÚ ÈäÊ æ ÇÍíä åí ÍÇãá....**.",
  "**ÑæÍ Çßá ãáÍ + áíãæä ÇĞÇ ãÇİíå Çßá Çí ÔíÁ ãä ÇÎÊíÇÑ Çáí ãÚß**.",
  "**ÊÇÎĞ ÚŞÇÈíä**.",
  "**Şæá ÇÓã Çãß ÇİÊÎÑ ÈÃÓã Çãß**.",
  "**ÇÑãí Çí ÔíÁ ŞÏÇãß Úáì Çí ÇÍÏ ãæÌæÏ Çæ Úáì äİÓß**.",
  "**ÇĞÇ ÇäÊ æáÏ ÇßÓÑ ÇÛáì Çæ ÇÍÓä ÚØæÑ ÚäÏß ÇĞÇ ÇäÊí ÈäÊ ÇßÓÑí ÇáÑæÌ ÍŞß Çæ Çáãíß ÇÈ ÍŞß**.",
  "**ÇĞåÈ Çáì æÇÍÏ ãÇÊÚÑİå æŞá áå ÇäÇ ßíæÊ æÇÈí ÈæÓå**.",
  "**ÊÊÕá Úáì ÇáæÇáÏå  æ ÊŞæá áåÇ ÎØİÊ ÔÎÕ**.",
  "** ÊÊÕá Úáì ÇáæÇáÏå  æ ÊŞæá áåÇ ÊÒæÌÊ ÈÇ ÓÑ**.",
  "**????ÊÕá Úáì ÇáæÇáÏå  æ ÊŞæá áåÇ  ÇÍÈ æÍÏå**.",
    "**ÊÊÕá Úáì ÔÑØí ÊŞæá áå ÚäÏßã ãØÇİí**.",
    "**ÎáÇÕ ÓÇãÍÊß**.",
    "** ÊÕíÍ İí ÇáÔÇÑÚ ÇäÇ  ãÌäææä**.",
    "** ÊÑæÍ ÚäÏ ÔÎÕ ÊŞæá áå ÇÍÈß**.",

];

client.on('message', message => {
 if (message.content.startsWith("G.ÚŞÇÈ")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
.addField('cara Community ©' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[38ab] Send By: ' + message.author.username)
  }
});
client.on('message', message => {
    if(message.content.includes('discord.gg')){
if(!message.channel.guild) return 
if (message.author.bot) return;
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** Not allowed to advertising Here :angry: ! **`)
    }
}
});
client.on('messageUpdate', (oldRebel, newRebel) => {
    console.log("ÚÕæ ãÂ íÍÂæá ÇáÊÚÏíá.");
   if (newRebel.content.toUpperCase().match(/DISCORD.GG/i))
    {
        console.log(newRebel.author.name + " ÍÇæá ÇáäÔÑ ÚÈÑ ÊÚÏíá ÇáÑÓÂáÉ - " + newRebel);
           newRebel.delete().catch(O_o=>{}); 
           newRebel.author.send("ããäæÚ ÑæÂÈØ ÇáÏÓßæÑÏ. \n ÅĞÂ ßäÊ ÊÑíÏ ÇáäÔÑ ÊæÂÕá ãä ÇáÅÏÂÑÉ.");
    }
});
const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

let sWlc = JSON.parse(fs.readFileSync("./setWlc.json", "UTF8"))   
client.on('message', message => {
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
   fs.writeFile('./setWlc.json', JSON.stringify(sWlc), (err) => {
if (err) console.error(err);
})
});
client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const yumz = member.guild.channels.find("name", `${sChannel}`);
     yumz.send(`<@${member.user.id}> joined by <@${inviter.id}>`);
   //  yumz.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  }); 
      var Canvas = require('canvas')
      var jimp = require('jimp')
      
      const w = ['./w1.png'];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(400, 200),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 400, 200);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = "bold 12px Arial";
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#f1f1f1";
                                ctx.fillText(member.user.username, 200, 150);
                              
                              //NAMEğ
                              ctx.font = "bold 12px Arial";
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#f1f1f1";
      ctx.fillText(`Welcome To Server`, 260, 125);
      
                              //AVATARğ
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126); 

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
                          
      })
      })
      
      }
      });
   client.on('message',async message => {
  if(message.content.startsWith(prefix + "voiceonline")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **áíÓ áÏíß ÇáÕáÇÍíÇÊ ÇáßÇİíÉ**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **áíÓ ãÚí ÇáÕáÇÍíÇÊ ÇáßÇİíÉ**');
  message.channel.send(':white_check_mark:| **Êã Úãá ÇáÑæã ÈäÌÇÍ**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});
client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('íÌÈ ÊæÂÌÏ ÍÖÑÊß ÈÑæã ÕæÊí .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
			return msg.channel.send('áÇ íÊæÂÌÏ áÏí ÕáÇÍíÉ ááÊßáã ÈåĞÂ ÇáÑæã');
		}//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('áÇ íÊæÂÌÏ áÏí ÕáÇÍíÉ ááÊßáã ÈåĞÂ ÇáÑæã');
		}//by ,$ ReBeL Á , ??#4777 'CODES SERVER'

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**íÌÈ ÊæÂİÑ ÈÑãÔä `EMBED LINKS`áÏí **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
			return msg.channel.send(` **${playlist.title}** Êã ÇáÅÖÂİÉ Åáì ŞÃÆãÉ ÇáÊÔÛíá`);
		} else {
			try {//by ,$ ReBeL Á , ??#4777 'CODES SERVER'

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**ÇáÑÌÂÁ ãä ÍÖÑÊß ÅÎÊíÂÑ ÑŞã ÇáãŞØÚ** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
					.setFooter("cara Community ©")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
					} catch (err) {
						console.error(err);
						return msg.channel.send('áã íÊã ÅÎÊíÂÑ ãŞØÚ ÕæÊí');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: áÇ íÊæİÑ äÊÂÆÌ ÈÍË ');
				}
			}//by ,$ ReBeL Á , ??#4777 'CODES SERVER'

			return handleVideo(video, msg, voiceChannel);
		}//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('ÃäÊ áÓÊ ÈÑæã ÕæÊí .');
		if (!serverQueue) return msg.channel.send('áÇ íÊæİÑ ãŞØÚ áÊÌÂæÒå');
		serverQueue.connection.dispatcher.end('Êã ÊÌÂæÒ åĞÂ ÇáãŞØÚ');
		return undefined;
	} else if (command === `stop`) {//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
		if (!msg.member.voiceChannel) return msg.channel.send('ÃäÊ áÓÊ ÈÑæã ÕæÊí .');
		if (!serverQueue) return msg.channel.send('áÇ íÊæİÑ ãŞØÚ áÅíŞÂİå');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Êã ÅíŞÂİ åĞÂ ÇáãŞØÚ');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('ÃäÊ áÓÊ ÈÑæã ÕæÊí .');
		if (!serverQueue) return msg.channel.send('áÇ íæÌÏ ÔíÁ ÔÛÂá.');
		if (!args[1]) return msg.channel.send(`:loud_sound: ãÓÊæì ÇáÕæÊ **${serverQueue.volume}**`);
		serverQueue.volume = args[1];//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: Êã ÊÛíÑ ÇáÕæÊ Çáí **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('áÇ íæÌÏ ÔíÁ ÍÇáí İ ÇáÚãá.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: ÇáÇä íÊã ÊÔÛíá : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
		if (!serverQueue) return msg.channel.send('áÇ íæÌÏ ÔíÁ ÍÇáí İ ÇáÚãá.');
		let index = 0;
		//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
		const embedqu = new Discord.RichEmbed()
//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**ÇáÇä íÊã ÊÔÛíá** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('Êã ÅíŞÇİ ÇáãæÓíŞì ãÄŞÊÇ!');
		}//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
		return msg.channel.send('áÇ íæÌÏ ÔíÁ ÍÇáí İ ÇáÚãá.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('ÇÓÊÃäİÊ ÇáãæÓíŞì ÈÇáäÓÈÉ áß !');
		}//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
		return msg.channel.send('áÇ íæÌÏ ÔíÁ ÍÇáí İí ÇáÚãá.');
	}

	return undefined;
});
//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
		queue.set(msg.guild.id, queueConstruct);
//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
		queueConstruct.songs.push(song);
//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`áÇ ÃÓÊØíÚ ÏÎæá åĞÂ ÇáÑæã ${error}`);
		}
	} else {//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** Êã ÇÖÇİå ÇáÇÛäíÉ Çáí ÇáŞÇÆãÉ!`);
	}
	return undefined;
}//by ,$ ReBeL Á , ??#4777 'CODES SERVER'

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
	}//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
	console.log(serverQueue.songs);
//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
			play(guild, serverQueue.songs[0]);
		})//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
		.on('error', error => console.error(error));//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);//by ,$ ReBeL Á , ??#4777 'CODES SERVER'

	serverQueue.textChannel.send(`ÈÏÁ ÊÔÛíá : **${song.title}**`);
}//by ,$ ReBeL Á , ??#4777 'CODES SERVER'

const adminprefix = "$vip";//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
client.on('message', message => {//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
  var argresult = message.content.split(` `).slice(1).join(' ');//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
    if (!devs.includes(message.author.id)) return;//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
    message.reply("**`only for Bot Owner`**")
if (message.content.startsWith(adminprefix + 'setgame')) {//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} Êã ÊÛííÑ ÈáÇíäŞ ÇáÈæÊ Åáì **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : Êã ÊÛííÑ ÃÓã ÇáÈæÊ Åáì`)
return message.reply("**áÇ íãßäß ÊÛííÑ ÇáÇÓã íÌÈ Úáíß ÇáÇäÊÙÂÑ áãÏÉ ÓÇÚÊíä . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : Êã ÊÛíÑ ÕæÑÉ ÇáÈæÊ`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**Êã ÊÛííÑ ÊæíÊÔ ÇáÈæÊ Åáì  ${argresult}**`)
}

});

client.on("message", message => {
 if (message.content === `${prefix}`) {
  const embed = new Discord.RichEmbed() //by ,$ ReBeL Á , ??#4777 'CODES SERVER'
      .setColor("#000000")//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
      .setDescription(`
${prefix}play ? áÊÔÛíá ÃÛäíÉ ÈÑÂÈØ Ãæ ÈÃÓã
${prefix}skip ? áÊÌÂæÒ ÇáÃÛäíÉ ÇáÍÂáíÉ
${prefix}pause ? ÅíŞÂİ ÇáÃÛäíÉ ãÄŞÊÇ
${prefix}resume ? áãæÂÕáÉ ÇáÅÛäíÉ ÈÚÏ ÅíŞÂİåÂ ãÄŞÊÇ
${prefix}vol ? áÊÛííÑ ÏÑÌÉ ÇáÕæÊ 100 - 0
${prefix}stop ? áÅÎÑÂÌ ÇáÈæÊ ãä ÇáÑæã
${prefix}np ? áãÚÑİÉ ÇáÃÛäíÉ ÇáãÔÛáÉ ÍÂáíÇ
${prefix}queue ? áãÚÑİÉ ŞÂÆãÉ ÇáÊÔÛíá
 `)//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
   message.channel.sendEmbed(embed)//by ,$ ReBeL Á , ??#4777 'CODES SERVER'
    
   }
   });
 client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('G.users')){
 if(!message.author.id === '434263373077544961') return;
message.channel.sendMessage('ÌÇÑ ÇÑÓÇá ÇáÑÓÇáÉ |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 410835593451405312) return;


if (message.content.startsWith(prefix + 'playing')) {
if (message.author.id !== '434845976050794516') return message.reply('** åĞÇ ÇáÃãÑ İŞØ áÕÇÍÈ ÇáÈæÊ æ ÔßÑÇğğ **')
client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : Êã ÊÛííÑ ÇáÍÇáÉ`)
} else

if (message.content.startsWith(prefix + 'streem')) {
if (message.author.id !== '434845976050794516') return message.reply('** åĞÇ ÇáÃãÑ İŞØ áÕÇÍÈ ÇáÈæÊ æ ÔßÑÇğğ **')
client.user.setGame(argresult, "http://twitch.tv/y04zgamer");
    message.channel.sendMessage(`**${argresult}** :Êã ÊÛííÑ ÇáÍÇáÉ Çáì ÓÊÑíãäÌ`)
} else

if (message.content.startsWith(prefix + 'setname')) {
if (message.author.id !== '434845976050794516') return message.reply('** åĞÇ ÇáÃãÑ İŞØ áÕÇÍÈ ÇáÈæÊ æ ÔßÑÇğğ **')
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Êã ÊÛíÑ ÇáÃÓã`)
  return message.reply("**áÇ ÊÓÊØíÚ ÊÛíÑ ÇáÃÓã ÇáÇ ÈÚÏ ÓÇÚÊíä**");
} else

if (message.content.startsWith(prefix + 'setavatar')) {
if (message.author.id !== '434845976050794516') return message.reply('** åĞÇ ÇáÃãÑ İŞØ áÕÇÍÈ ÇáÈæÊ æ ÔßÑÇğğ **')
client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : Êã ÊÛíÑ ÕæÑÉ ÇáÈæÊ`);
} else


if (message.content.startsWith(prefix + 'watching')) {
if (message.author.id !== '434845976050794516') return message.reply('** åĞÇ ÇáÃãÑ İŞØ áÕÇÍÈ ÇáÈæÊ æ ÔßÑÇğğ **')
    client.user.setActivity(argresult, {type : 'watching'});
 message.channel.sendMessage(`**${argresult}** : Êã ÊÛííÑ ÇáææÊÔíäŞ Çáì`)
}
});
client.on('message', async message => {
  let messageArray = message.content.split(' ');
  let args = messageArray.slice(1);
  if(message.content.startsWith(prefix + "invinfo")) {
    if(!args) return message.reply('**ÍÏÏ ÇÓã ÏÚæÉ**');
    message.guild.fetchInvites().then(i => {
      let inv = i.get(args[0]);
      if(!inv) return message.reply(`**áã ÇŞÏÑ Úáì ÇíÌÇÏ ${args}**`);
      var iNv = new Discord.RichEmbed()
      .setAuthor(message.author.username,message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .addField('# - ÕÇÍÈ ÇáÏÚæÉ',inv.inviter,true)
      .addField('# - Ñæã ÇáÏÚæÉ',inv.channel,true)
      .addField('# - ÊÇÑíÎ ÇäÊåÇÁ ÇáÏÚæÉ',moment(inv.expiresAt).format('YYYY/M/DD:h'),true)
      .addField('# - Êã ÇäÔÇÁ ÇáÏÚæÉ',moment(inv.createdAt).format('YYYY/M/DD:h'),true)
      .addField('# - ãÏÉ ÇáÏÚæÉ',moment(inv.maxAge).format('DD **ÓÇÚÉ** h **íæã**'),true)
      .addField('# - ÇáÇÓÊÎÏÇãÇÊ',inv.uses || inv.maxUses,true)
      message.channel.send(iNv);
    });
  }
});
client.on('guildMemberAdd', member => {
    let memberavatar = member.user.avatarURL
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Hello Dude' , `Welcome to the server **${member}**`)
        .addField('User Id :', "**[" + `${member.id}` + "]**" )
                .addField(' Member Number',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' Server', `${member.guild.name}`,true)
.setFooter(member.user.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  

                                       
        .setTimestamp()
    
    member.createDM().then(function (channel) {
return channel.send(embed)
    }
    )});
client.on('message',   eyad =>{
    
    var  args = eyad.content.split(" ").slice(2).join(" ")
    var men = eyad.mentions.users.first()|| client.users.get(eyad.content.split(' ')[1])
    var  mas = eyad.author
                              if(eyad.content == 'G.sar7') {
                              if(eyad.channel.type === "dm"){
if(!args) return  eyad.channel.send(":black_medium_square: **Şã ÈæÖÚ ÑÓÇáÉ ÇáÕÑÇÍÉ **");
if(!men) return  eyad.channel.send(":black_medium_square:**Şã ÈæÖÚ ÇíÏí ÇáãÑÇÏ ãÕÇÑÍÊÉ , ÑÈãÇ íßæä ÇáÔÎÕ ÛíÑ ãæÌæÏ İí ÓíÑİÑÇÊ ãÔÊÑßÉ Èíäß æÈíäÉ áĞáß áä íÓÊØíÚ ÇáÈæÊ ÇáÃÑÓÇá** ");
                      var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
     var eyadandr3d = new Discord.RichEmbed()
     .setAuthor(eyad.author.username , eyad.author.avatarURL)
     .setThumbnail(men.avatarURL)
     .setDescription(`**:black_medium_square:  åá ÇäÊ ãæÇİŞ áÂÑÓÇá åĞå ÇáÕÑÇÍÉ  ¿  \nãÍÊæí ÇáÑÓÇáÉ : ${args}**`)
     .setTimestamp() 
     .setFooter(`- By , message.author.name .`)
     eyad.channel.send(eyadandr3d).then(message => {
 message.react('?').then(r=>{
 message.react('?').then(r=>{            
    var kk = (reaction, user) => reaction.emoji.name === '?' && user.id === eyad.author.id;    
    var nn = (reaction, user) => reaction.emoji.name === '?' && user.id === eyad.author.id;
    var kkk = message.createReactionCollector(kk, { time: 60000 });
    var nnn = message.createReactionCollector(nn, { time: 60000 });
kkk.on("collect", r => {
          const embed = new Discord.RichEmbed()
               .setThumbnail("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")   
               .setColor("RANDOM")
               .addField('**• ÇáÓáÇã Úáíßã ** ', `<@${men.id}>` , true)
                    .addField('**• áŞÏ ŞÇã ÔÎÕ ãÇ ÈãÕÇÑÍÊß **' ,       ` __${args}__ ` , true)
                    .addField('**• ÊÇÑíÎ ÇáãÕÇÑÍÉ**' , Day + "-" + Month + "-" + Year , true)
          client.users.get(men.id).sendEmbed(embed)
          eyad.reply(`áŞÏ Êã ÇÑÓÇá ÇáÕÑÇÍå ááÔÎÕ \n <@${men.id}>`)
message.delete()
          eyad.delete();
})
nnn.on("collect", r => {
message.delete()
eyad.reply("`Êã ÇáÛÇÁ ÇáÕÑÇÍÉ`")
eyad.delete();
})
})
}) 
})
}}
});
var EpicEdiTeD = {};
client.on("message", function(message){
if (message.content.startsWith(prefix + "rank")) {
    if (!EpicEdiTeD[message.author.id]) {
        EpicEdiTeD[message.author.id] = {Money:0,Xp:0,Level:0}
    }
     var mentionned = message.mentions.users.first();
 
      var epic;
      if(mentionned){
          var epic = mentionned;
      } else {
          var epic = message.author;
 
      }
 
   
    var CulLevel = Math.floor(0.25 * Math.sqrt(EpicEdiTeD[message.author.id].Xp +1));
    if (CulLevel > EpicEdiTeD[message.author.id].Level) {EpicEdiTeD[message.author.id].Level +=CulLevel}
    let edited = new Discord.RichEmbed()
    .setColor("Random")
    .addField("ÇáÃÓã :", message.author.tag)
    .addField("Çááíİá :", EpicEdiTeD[message.author.id].Level)
    .addField("ÇáÃßÓ Èí :",Math.floor(EpicEdiTeD[message.author.id].Xp))
    message.channel.send(edited);
}
if (!EpicEdiTeD[message.author.id]) {
    EpicEdiTeD[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
    }
 
EpicEdiTeD[message.author.id].Xp+= 0.25;
EpicEdiTeD[message.author.id].Money+= 0.25;
 
});
client.on("message", async message => {
           let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'fastrandom')) {
    if(!message.channel.guild) return message.channel.send('**åĞÇ ÇáÃãÑ İŞØ ááÓíÑİÑÇÊ**').then(m => m.delete(5000));
    if (message.author.id !== message.guild.owner.id) {     
    message.channel.send('**åÇÏÇ ÇáÇãÑ áÕÇÍÈ ÇáÓíÑİÑ İŞØ**' );
      return;
    }
    const array = [];
    message.guild.members.forEach((member) => {
      array.push(member.user.tag);
    });
    const rand = array[Math.floor(Math.random() * array.length)];
    message.channel.send(rand).then((m) => {
      m.split('#');
      m.edit(array);
    });
      
    };
});
client.on('message' , async (message) => {
    if(message.content.startsWith("topinvite")) {
if(message.author.bot) return;
if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
  var invites = await message.guild.fetchInvites();
    invites = invites.array();
    arraySort(invites, 'uses', { reverse: true });
    let possibleInvites = ['User Invited |  Uses '];
    invites.forEach(i => {
        if (i.uses === 0) { 
            return;
        }
      possibleInvites.push(['\n\ ' +'<@'+ i.inviter.id +'>' + '  :  ' +   i.uses]);
      if (i.uses === 30) {//íãÏíß ÊÚÏá ÑŞã æÕæá ÇáÚÏÏ ÍŞ ÇáÇäİÇíÊ Çáì ÇÃŞá Ãæ ÃßËÑ
          message.member.addRole(message.member.guild.roles.find("name","??Special?şş?  ?"))//åäÂ ÃÓã ÃáÑÊÈå Çááí ÊÌíåå
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 30) {
message.member.addRole(message.member.guild.roles.find("name","??Special?şş?  ?"))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
}
if (i.uses === 30) {
message.member.addRole(message.member.guild.roles.find("name","??Special?şş?  ?"))
.catch(RebeL =>{
console.log('`Error`: ' + RebeL);
});
      }//ãÚáæãå ÈÓíØå íãÏíß ÊßÑÑ ÇáÚãáíåå ÃßËÑ ãä ãÑå
    })
    const embed = new Discord.RichEmbed()
 .setColor('#36393e')
    .addField("Top Invites." ,`${(possibleInvites)}`)

    message.channel.send(embed)
    }
});
const voice = JSON.parse(fs.readFileSync("./voicerank.json", "utf8"));
 var returned;
client.on('voiceStateUpdate', (user, member) => {
  if(member.selfDeaf || member.selfMute || member.serverDeaf || member.serverMute) {
    returned = false;
  }
  if(!member.selfDeaf || !member.selfMute ||!member.serverDeaf || !member.serverMute) {
    returned = true;
  }
  setInterval(() => {
    if(returned === true) {
      if(member.bot) return;
      if(!member.voiceChannel) returned = false;
      if(!voice[member.id]) voice[member.id] = {
        xp: 1,
        level: 1
      };
      voice[member.id] = {
        xp: voice[member.id].xp + Math.floor(Math.random() * 4) + 1,
        level: voice[member.id].level
      };
      var curXp = voice[member.id].xp;
      var curLvl = voice[member.id].level;
      if(curXp >= 300) {
        voice[member.id] = {
          xp: 1,
          level: curLvl + 1
        };
      }
      fs.writeFile('./voicerank.json', JSON.stringify(voice, null, 4), (e) => {
        if(e) console.log(e);
      });
    } else if(returned === false) {
      return null;
    }
  },5000);
});
client.on('message', async message => {
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content.startsWith(prefix + 'voicerank')) {
message.channel.send(`Your XP : ${voice[message.member.id].xp}
Your Level : ${voice[message.member.id].level}`);
        if(e) console.log(e);
      };
}});
 client.on('message', message => {
if(message.content.startsWith(prefix + "slots")) {
  let slot1 = ['??', '??', '??', '??', '??', '??', '??', '??'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});
client.on('message', message => {
    var command = message.content.split(" ")[0];
    var args1 = message.content.split(" ").slice(1).join(" ");
    if(command == prefix + 'find') { // ÇáÇãÑ : $find
        let sizePlayers = 1;
        
        if(message.author.bot) return;
        if(!message.channel.guild) return;
        if(!args1) return message.channel.send(`**? Useage:** ${prefix}find (Çí ÍÑİ ãä ÇáÇÓã Çáí ÊÈíå)`).then(msg => msg.delete(5000));
        
        var playersFind = new Discord.RichEmbed()
        .setTitle(`:white_check_mark: **ÎÇÕíÉ ÇáÈÍË Úä ÇáÇÚÖÇÁ**`)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`**\n? ÇáÈÍË Úä ÇáÇÚÖÇÁ ÇáãæÌæÏ ÈÏÇÎá ÇÓãÇÆåã:**\n " ${args1} "\n\n**? ÚÏÏ ÇáÇÚÖÇÁ:**\n " ${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).size} "\n\n\`\`\`????????????????????????????????????????????????????????????????????????????????????????\n\n${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).map(m=>sizePlayers++ + '. ' + m.user.tag).slice(0,20).join('\n') || 'áÇ íæÌÏ ÇÚÖÇÁ ÈåĞå ÇáÇÍÑİ'}\n\n????????????????????????????????????????????????????????????????????????????????????????\`\`\``)
        .setColor('GRAY')
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL)
        
        message.channel.send(playersFind);
        message.delete();
    }
});
client.on('message',async message => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
     //return message.channel.send(':heavy_multiplication_x:| **åĞÇ ÇáÇãÑ ãÚØá ÍÇáíÇ.. ``ÍÇæá İí æŞÊ áÇÍŞ``**');
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **íÌÈ Ãä íßæä áÏíß ÎÇÕíÉ ÇáÊÚÏíá Úáì ÇáÓíÑİÑ**');
    message.channel.send(`:eight_pointed_black_star:| **ãä İÖáß ÇßÊÈ ÇÓã ÇáÑæã**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **áã ÇŞÏÑ Úáì ÇíÌÇÏ ÇáÑæã ÇáãØáæÈ**');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':eight_pointed_black_star:| **ÇßÊÈ ãÏÉ ÇáŞíİ ÇæÇí ÈÇáÏŞÇÆŞ , ãËÇá : 60**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **íÌÈ Úáíß Çä ÊÍÏÏ æŞÊ Òãäí ÕÍíÍ.. ``íÌÈ Úáíß ÇÚÇÏÉ ßÊÇÈÉ ÇáÇãÑ``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':eight_pointed_black_star:| **æÇÎíÑÇ ÇßÊÈ Úáì ãÇĞÇ ÊÑíÏ ÇáŞíİ ÇæÇí**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, message.guild.iconURL)
                  .setTitle(title)
                  .setDescription(`ÇáãÏÉ : ${duration / 60000} ÏŞÇÆŞ`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('??');
                     setTimeout(() => {
                       let users = m.reactions.get("??").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**áã íÊã ÇáÊÍÏíÏ**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('ÇäÊåì ÇáŞíİ ÇæÇí !',`ÇáİÇÆÒ åæ : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:heavy_check_mark:| **Êã ÇÚÏÇÏ ÇáŞíİ ÇæÇí**`);
                } catch(e) {
                  msgg.edit(`:heavy_multiplication_x:| **áã ÇŞÏÑ Úáì ÇÚÏÇÏ ÇáŞíİ ÇæÇí ÈÓÈÈ äŞÕ ÇáÎÕÇÆÕ**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
});
var KinG66S = {};
client.on('guildMemberRemove', member => {
KinG66S[member.id] = {roles: member.roles.array()};
});
client.on('guildMemberAdd', member => {
if(!KinG66S[member.user.id]) return;
console.log(KinG66S[member.user.id].roles.length);
for(let i = 0; i < KinG66S[member.user.id].roles.length + 1; i++) {
member.addRole(KinG66S[member.user.id].roles.shift());
}
});
 client.on('message', message => {
    if(message.content.startsWith (prefix  + 'user')) {
     moment.locale('ar-ly');
var args = message.content.split(" ").slice(1); 
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}
let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 
  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
  message.guild.fetchInvites().then(invs => {
    let member = client.guilds.get(message.guild.id).members.get(oi);
    let personalInvites = invs.filter(i => i.inviter.id === oi);
    let urll = invs.filter(i => i.inviter.id === oi);
    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   let exec = personalInvites.reduce((p, v) => v.inviter);
 let possibleInvites = [['Total de membros recrutados:']];
possibleInvites.push([inviteCount, exec]);
        let user = message.mentions.users.first() || message.author;
        let mem = message.guild.member(user);
        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(':ÏÎæáß áÏíÓßæÑÏ', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
        .addField(':ÇäÖãÇãß áÓíÑİäÇ', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
        .setTitle(`__${z.username}__ **Info**`)
         .addField('ÚÏÏ ÇáÏÚæÇÊ', `**${Number(inviteCount)}**`, true)
.setThumbnail(imagemm)
.setFooter(message.author.username, message.author.avatarURL);

     message.channel.send({embed:heroo});    
    });

};
});
 client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted Ads")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('` ÇäÊ ãÚÇŞÈ ãíæÊ ÔÇÊí ÈÓÈÈ äÔÑ ÓÑİÑÇÊ Çä ßÇä Úä ØÑíŞ ÇáÎØÇ ãä İÖáß Êßáã ãÚ ÇáÇÏÇÑÉ `');
   
       
    }
})
 client.on('message', message => {
    if(message.content.startsWith(prefix + 'alljoin')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**áÇíæÌÏ áÏíß ÕáÇÍíÉ ÓÍÈ ÇáÃÚÖÇÁ**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**áÇíæÌÏ áÏí ÕáÇÍíÉ ÇáÓÍÈ**");
    if (message.member.voiceChannel == null) return message.channel.send(`**ÇáÑÌÇÁ ÇáÏÎæá áÑæã ÕæÊí**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**Êã ÓÍÈ ÌãíÚ ÇáÃÚÖÇÁ Çáí ÇáÑæã ÇáÕæÊí ÍŞß.**`)


     }
       });
client.on('message' , async message => {
            if(message.content.startsWith(prefix + "ads")) {
     await message.channel.send("`ÇÑÓÇá ÇáÑÓÇáå .`").then(e => {
    let filter = m => m.author.id === message.author.id
    let tests = '';
    let time = '';
    let channel = '';
    let chaTests = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
    .then(collected => {
      tests = collected.first().content
      collected.first().delete()
e.edit("`ÊßÑÇÑ ÇáÑÓÇáå ßá ....... ÏŞÇÆŞ`")
let chaTime = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("`ÇáæŞÊ ÈÇáÏŞÇÆŞ ! ÇÑŞÇã İŞØò`");
if(co.first().content > 1500 || co.first().content < 1) return message.channel.send("`áÇ ÇŞá ãä ÏŞíŞå æáÇ ÇßËÑ ãä íæã`")
  time = co.first().content
co.first().delete()
  e.edit("`ÇÏÎá ÇÓã ÇáÑæã`")
  let chaChannel = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(col => {
  channel = col.first().content
col.first().delete()
  e.edit("`ÌÇÑí ÇÚÏÇÏ ÇáãÚáæãÇÊ ÇáÑÌÇÁ ÇáÇäÊÙÇÇÑ...`").then(b => {
              setTimeout(() => {
    b.edit(`** Êã ÇÚÏÇÏ ÇáãÚáæãÇÊ ÈäÌÇÍ .**`)
        },2000);
  })
  var room = message.guild.channels.find('name' , channel)
  if(!room) return;
  if (room) {
setInterval(() => {
room.send(tests);
}, time*60000)
  }
})
})
})
        
})
}
});
client.on('message', message => {
if(message.content.includes("<@435392018693488641>")) {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 7000);
}
});
var json = JSON.parse(fs.readFileSync("json.json", "utf8"));

client.on("message", (message) => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (!message.content.startsWith(prefix)) return;
    switch(command) {
        case "mut" : 
        
        if (!message.channel.type =="text") return;
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("**Sorry, You Don't Have `MANAGE_CHANNELS` permission**")
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(6000))
        if (!message.mentions.members.first()) return message.reply("**Mention a user!??**")
        message.guild.channels.forEach(c => {
            c.overwritePermissions(message.mentions.members.first().id, {
                SEND_MESSAGES : false,
                CONNECT : false
            })
        })
        json[message.guild.id + message.mentions.members.first().id] = {muted : true};
        fs.writeFile("json.json", JSON.stringify(json), err => {
            if (err) console.error(err);
        });
        message.channel.send(`** <@${message.mentions.members.first().id}> Muted in the server!??**`);
        break;
        case "unmut" : 
        if (!message.channel.type =="text") return;
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("**Sorry, You Don't Have `MANAGE_CHANNELS` permission**")
        if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have `MANAGE_CHANNELS` Permission**").then(msg => msg.delete(10000))
        if (!message.mentions.members.first()) return message.reply("**Mention a user!??**")
        if (!message.mentions.members.first()) return;
        message.guild.channels.forEach(c => {
            c.overwritePermissions(message.mentions.members.first().id, {
                SEND_MESSAGES : null,
                CONNECT : null
            })
        })
        json[message.guild.id + message.mentions.members.first().id] = {muted : false};
        fs.writeFile("json.json", JSON.stringify(json), err => {
            if (err) console.error(err);
        });
        message.channel.send(`** <@${message.mentions.members.first().id}> Unmuted!??**`);
    }
})
client.on('guildMemberAdd', member => {
    member.createDM().then(function (channel) {
return channel.send("")
    }
    )});
client.login(process.env.BOT_TOKEN)
