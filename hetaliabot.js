const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
  console.log("I am ready!");
	client.user.setActivity('YouTube', { type: 'WATCHING' });
});

  client.on('message', async (message) => {
    if(message.content.toLowerCase().includes ('hewwo')){
    try  {
        await message.react("413948959908823041");
        await message.react("🇵");
        await message.react("🇪");
        await message.react("🇷");
        await message.react("🇮");
        await message.react("🇸");
        await message.react("🇭");
    } catch (err) {
        console.log(err)
    }
};
});

client.on("message", (message) => {
if (message.content.includes ('good morning')) {
    message.channel.send("https://pbs.twimg.com/media/CvIUqUPUAAAGKEg.jpg");
  }
});
 
client.on("guildMemberAdd", (member) => {
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  member.guild.channels.get('name', 'rules_and_entry').send(`Welcome,"${member.user.username}"! Read the rules to enter! 💖`);
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }else if(message.content.startsWith("dong")){
   message.channel.send("long :eyes:"); 
  }
});


client.on("message", (message) => {
if (message.content.includes ('whos a good boi')) {
    message.channel.send("me!! :heart:");
  }
});

client.on("message", (message) => {
if (message.content.toLowerCase().includes ('bezos')) {
    message.channel.send(":heart:");
  }
});

client.on('message', message =>{
	if (message.content.toLowerCase().includes ('romano bot') || message.content.toLowerCase().includes ('romanobot') || message.content.toLowerCase().includes ('romabot') || message.content.toLowerCase().includes ('roma bot')) {
		var choices = ['yeah.. i owe him .3 BTC but i spent .1 BTC on mcdonalds last week so im a bit short... :thinking:','I sent him an IOU but I think he just deleted it..','I tried to pay him back in coupons to olive garden and he sent me malware','I know him!','i told him about pineapple pizza once... he gave me a glitch after that','Pizza, pasta, put it in a box-'];
		var response = Math.floor(Math.random() * choices.length);
    message.channel.send(+response);
	}
});

client.on("message", (message) => {
if (message.content.includes ('good night')) {
    message.channel.send("http://s2.storage.akamai.coub.com/get/b19/p/coub/simple/cw_timeline_pic/30ccab81aae/01bf7c4bc51b8db5adcde/ios_large_1475540748_image.jpg");
  }
});

client.on("message", (message) => {
if (message.content.includes ('goodnight')) {
    message.channel.send("http://s2.storage.akamai.coub.com/get/b19/p/coub/simple/cw_timeline_pic/30ccab81aae/01bf7c4bc51b8db5adcde/ios_large_1475540748_image.jpg");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("fight me bitch")) {
    message.channel.send(":muscle::eyes::muscle:");
  }
});

client.on("message", (message) => {
if (message.content.startsWith ('asl')) {
    message.channel.send("241/Country/USA");
  }
});



client.on("message", (message) => {
if (message.content.includes ('╯°□°）╯︵ ┻━┻')) {
    message.channel.send("┬─┬ ノ( ゜-゜ノ)");
  }
});

client.on("message", (message) => {
if (message.content.includes ('vore')) {
    client.users.get("264945356884672524").sendMessage("***RAT JAIL***");
  }
});

client.on("message", (message) => {
if (message.content.includes ('sad')) {
    message.channel.send("i love you!");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("*shrugs*")) {
    message.channel.send(" ¯\\_(ツ)_/¯ ");
  }
});





client.on("message", (message) => {
if (message.content.includes ('depressed')) {
    message.channel.send("i love you!");
  }
});

client.on("message", (message) => {
if (message.author.id !== '264945356884672524' && message.content.includes ('joe')) {
    message.channel.send(":eyes:");
  }
});

client.on("message", (message) => {
if (message.author.id !== '264945356884672524' && message.content.includes ('oliver')) {
    client.users.get("264945356884672524").sendMessage("oli kirklunn mention");
  }
});

var http = require("http");
setInterval(function() {
    http.get("http://hetaliabot2.herokuapp.com");
}, 900000);


client.on("message", (message) => {
if (message.author.id !== '264945356884672524' && message.content.includes ('2p america')) {
    client.users.get("264945356884672524").sendMessage("al mention");
  }
});

client.on("message", (message) => {
if (message.author.id !== '264945356884672524' && message.content.includes ('2p england')) {
    client.users.get("264945356884672524").sendMessage("oli kirklun mention");
  }
});

client.on("message", (message) => {
if (message.author.id !== '264945356884672524' && message.content.includes ('hitler')) {
    client.users.get("264945356884672524").sendMessage("moustache man mention");
  }
});

client.on("message", (message) => {
if (message.author.id !== '264945356884672524' && message.content.includes ('nazi')) {
    client.users.get("264945356884672524").sendMessage("idea mention");
  }
});


client.on("message", (message) => {
if (message.author.id !== '264945356884672524' && message.content.includes ('allan')) {
    client.users.get("264945356884672524").sendMessage("hoseph mention");
  }
});


client.on("message", (message) => {
if (message.content.includes ('good boi') && message.content.includes ('al')) {
    message.channel.send("( ͡° ᴥ ͡°)");
  }
});

client.on("message", (message) => {
if (message.content.includes ('good boi') && message.content.includes ('alfie')) {
    message.channel.send("( ͡° ᴥ ͡°)");
  }
});

client.on("message", (message) => {
if (message.content.includes ('good boi') && message.content.includes ('alfred')) {
    message.channel.send("(◡‿◡✿)");
  }
});

client.on("message", (message) => {
if (message.content.includes ('veggie burgers')) {
    client.users.get("264945356884672524").sendMessage("vb mention");
  }
});

client.on("message", (message) => {
if (message.author.id === '258431184785113094' && message.content.includes ('gross')) {
    message.channel.send("I LOVE YOU SO MUCH AL AND I BELIEVE IN YOU!!!");
  }
});

client.on("message", (message) => {
if (message.author.id === '258431184785113094' && message.content.includes ('disgusting')) {
    message.channel.send("I LOVE YOU SO MUCH AL AND I BELIEVE IN YOU!!!");
  }
});

client.on("message", (message) => {
if (message.content.toLowerCase().includes ('texas')) {
    message.channel.send(":cowboy:");
  }
});

client.on("message", (message) => {
if (message.content.toLowerCase().includes ('georgia')) {
    message.channel.send(":smiling_imp: :violin:");
  }
});

client.on("message", (message) => {
if (message.author.id === '258431184785113094' && message.content.includes ('sad')) {
    message.channel.send("I LOVE YOU SO MUCH AL AND I BELIEVE IN YOU!!!");
  }
});

client.on("message", (message) => {
if (message.author.id === '258431184785113094' && message.content.includes ('fail')) {
    message.channel.send("I LOVE YOU SO MUCH AL,  I BELIEVE IN YOU!!! <3");
  }
});

client.on("message", (message) => {
if (message.author.id === '258431184785113094' && message.content.includes ('cant')) {
    message.channel.send("I LOVE YOU SO MUCH AL AND I BELIEVE IN YOU!!!");
  }
});


client.on('message', message =>{
	if (message.content.includes ('rock paper scissors')) {
		var choices = ['rock','paper','scissors'];
		var response = choices[Math.floor(Math.random()*3)];
		setTimeout(function(){
    message.channel.send(' :heart: I choose '+response);}, 10000);
	}
});

client.on('message', message =>{
	if (message.content.includes ('roll die')) {
		var choices = ['1','2','3','4','5','6'];
		var response = choices[Math.floor(Math.random()*6)];
    message.channel.send(' :sweat_drops:'+response);
	}
});



client.on('message', message =>{
	if (message.content.includes ('dnd20')) {
		var choices = ['17','16','15','20','18','19','14','13','12','11','10','9','8','7','6','5','4','3','2','1'];
		var response = choices[Math.floor(Math.random()*20)];
    message.channel.send(' :sweat_drops:'+response);
	}
});
	 


client.login(process.env.FUCKYOUNAZIS);
