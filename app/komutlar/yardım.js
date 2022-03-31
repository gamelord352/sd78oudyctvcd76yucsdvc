const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle(" DOEDA Bot | Yardım Menüsü")
.setThumbnail("https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1")
    .setDescription(`


╔════════════════════════════════════╗
║**»** **a!ananınamına** : Sunucudan bir üyeyi yasaklar.
║**»** **a!kick** : Sunucudan bir üyeyi atar.
║**»** **a!sil** : Belirli bir kanaldaki mesajları siler.
║**»** **a!antiraid** : Sunucuya izinsiz bot girmez.
║**»** **a!antiraidbotizni** : Sunucuya gelecek bot için izin verirsin.
║**»** **a!yavaş-mod** : Sohbete yazma sınır (süre) ekler.
║**»** **a!sunucu-kur** : Bot sunucu kurar.
║**»** **a!küfür-engel** : Küfür engel açıp kapatırsın.
║**»** **a!reklam-engel** : Reklam engel açıp kapatırsın.
║**»** **a!modlog** : Modlog ayarlarsın.
║**»** **a!emoji-ekle** : Sunucuya emoji eklersin.
║**»** **a!nuke** : Kanala nuke atarsın.
║**»** **a!everyone-engel** : Everyone engel açıp kapatırsın.
║
║
╚════════════════════════════════════╝
`) 
       .addField(`»  `, `  [](http://gweepcreative.com) **|** [](https://discord.gg/G5CZFT3) **|** [](http://dc.gweepcreative.com/) `)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz 
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["y","yardım"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'yardım', 
    description: 'yardım menüsü',
    usage: 'yardım'
  };