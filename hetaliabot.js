const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

 


client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }else if(message.content.startsWith("dong")){
   message.channel.send("long :eyes:"); 
  }
});




client.on("message", (message) => {
if (message.content.includes ('good morning')) {
    message.channel.send("https://pbs.twimg.com/media/CvIUqUPUAAAGKEg.jpg");
  }
});

client.on("message", (message) => {
if (message.content.includes ('whos a good boi')) {
    message.channel.send("me!! :heart:");
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
if (message.content.includes ('asl')) {
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
    message.channel.send("***RAT JAIL*** <@264945356884672524>");
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
if (message.content.includes ('joe')) {
    message.channel.send(":eyes:");
  }
});

client.on("message", (message) => {
if (message.content.includes ('oliver')) {
    message.channel.send("<@264945356884672524>");
  }
});

client.on("message", (message) => {
if (message.content.includes ('2p england')) {
    message.channel.send("<@264945356884672524>");
  }
});

client.on("message", (message) => {
if (message.content.includes ('2p america')) {
    message.channel.send("<@264945356884672524>");
  }
});

client.on("message", (message) => {
if (message.content.includes ('hitler')) {
    message.channel.send("<@264945356884672524>");
  }
});

client.on("message", (message) => {
if (message.content.includes ('nazi')) {
    message.channel.send("<@264945356884672524>");
  }
});

client.on("message", (message) => {
if (message.content.includes ('good morning')) {
    message.channel.send("");
  }
});

client.on("message", (message) => {
if (message.author.id !== '264945356884672524' && message.content.includes ('allan')) {
    message.channel.send("<@264945356884672524>");
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
    message.channel.send("<@264945356884672524>");
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
if (message.author.id === '258431184785113094' && message.content.includes ('texas')) {
    message.channel.send(":cowboy:");
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
	 


client.login("MzYyMjk4MTcyNzU3NzcwMjUz.DKwoDw.Ta-39UJ9Cyr-bZ5GjrtOCP4VvPI");
