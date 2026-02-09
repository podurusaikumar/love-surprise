let isFinalPopup=false;
let message="❤️ Opening these memories may cause excessive smiling and sudden hugs ❤️";
let i=0;

function typeEffect(){
if(i<message.length){
document.getElementById("typingText").innerHTML+=message.charAt(i);
i++;
setTimeout(typeEffect,40);
}
}

window.onload=typeEffect;

let completed=[false,false,false,false,false];

function openStep(step){
let text="";

if(step===1){
text=`
<h3 style="color:#ff4d6d;">❤️ How We Met</h3>
<ul>
<li><b>You already know how we met… no need to rewind the sweetest bug that changed my life forever ❤️</b></li>
</ul>`;
completed[0]=true;
}

if(step===2){
text=`
<h3 style="color:#ff4d6d;">😄 Funniest Moment</h3>
<ul>
<li><b>Honestly… every time we try to be serious and end up laughing like idiots those are my favorite funniest moments 😂❤️</b></li>
</ul>`;
completed[1]=true;
}

if(step===3){
text=`
<h3 style="color:#ff4d6d;">💍 Why I Love You</h3>
<ul>
<li><b>I love you because you make my normal days feel special ❤️, you understand my silence, and you laugh at my nonsense 😂 </b></li>
</ul>`;
completed[2]=true;
}

if(step===4){
text=`
<h3 style="color:#ff4d6d;">🤝 Thank You</h3>
<ul>
<li><b>For standing beside me always ❤️</b></li>
<li><b>For believing in me 🤍</b></li>
<li><b>You are my biggest strength 🤝</b></li>
</ul>`;
completed[3]=true;
}

if(step===5){
text=`
<h3 style="color:#ff4d6d;">🧡 My Promises</h3>
<ul>
<li><b>Always listen… even during fights 😄</b></li>
<li><b>Make you smile on tough days ❤️</b></li>
<li><b>Grow together every year 🚀</b></li>
<li><b>Forever love subscription 💖</b></li>
</ul>`;
completed[4]=true;
}

document.getElementById("popupText").innerHTML=text;
document.getElementById("popup").style.display="block";
}

function closePopup(){

document.getElementById("popup").style.display="none";

if(isFinalPopup){

const videoSection=document.getElementById("videoSection");


videoSection.style.display="block";
videoSection.classList.add("fade-in");

}

}



isFinalPopup=false;

function showVideo(){

if(completed.includes(false)){
alert("Please complete all memories first ❤️");
return;
}

isFinalPopup=true;   // ⭐ mark as final popup

document.getElementById("popupText").innerHTML=
"<h3 style='color:#ff4d6d;'>🎁 Final Surprise</h3><p>You unlocked all memories ❤️ Now watch this message from my heart 😊</p>";

document.getElementById("popup").style.display="block";

}


window.addEventListener("DOMContentLoaded",()=>{
const video = document.getElementById("lovevideo");

video.addEventListener("ended",()=>{


document.getElementById("finalConfirm").style.display="flex";

launchCelebration();

});


const declineBtn=document.getElementById("declineBtn");
const acceptBtn=document.getElementById("acceptBtn");

declineBtn.addEventListener("mouseenter",()=>{

const maxX = window.innerWidth - declineBtn.offsetWidth - 40;
const maxY = window.innerHeight - declineBtn.offsetHeight - 40;

const x = Math.random() * maxX;
const y = Math.random() * maxY;

declineBtn.style.position = "absolute";
declineBtn.style.left = x + "px";
declineBtn.style.top = y + "px";

});


acceptBtn.addEventListener("click",()=>{

showYesExplosion();

});

});

function showYesExplosion(){

const div=document.createElement("div");

div.style.position="fixed";
div.style.top="0";
div.style.left="0";
div.style.width="100%";
div.style.height="100%";
div.style.background="linear-gradient(135deg,#ff2e63,#ff4d6d,#ff758c)";
div.style.border="6px solid black";   // clean romantic
div.style.boxSizing="border-box";
div.style.display="flex";
div.style.justifyContent="center";
div.style.alignItems="center";
div.style.flexDirection="column";
div.style.zIndex="10000";
div.style.textShadow="0 0 15px rgba(255,255,255,0.8)";
div.style.fontSize="38px";
div.style.textAlign="center";
div.style.animation="pulseHeart 3.5s infinite";

div.innerHTML=`
<div style="
background:rgba(255,255,255,0.12);
padding:40px;
border-radius:20px;
backdrop-filter:blur(8px);
">

<div style="font-size:48px;font-weight:bold;">
 Love Successfully Deployed ❤️ 
</div>

<div style="font-size:32px;margin-top:20px;">
💖 Happy Valentines Day Baby… Love You Forever 😍💖
</div>

</div>
`;

function launchCelebration(){

// teddy throw flowers
const teddy=document.createElement("video");

teddy.src="teddyCelebrate.mp4";
teddy.autoplay=true;
teddy.loop=true;
teddy.muted=true;

teddy.style.left="10px";
teddy.style.zIndex="9999";

document.body.appendChild(teddy);


// sparkles
for(let i=0;i<30;i++){

const sparkle=document.createElement("div");
sparkle.innerHTML="✨";

sparkle.style.position="fixed";
sparkle.style.left=Math.random()*100+"%";
sparkle.style.top=Math.random()*100+"%";
sparkle.style.fontSize="22px";
sparkle.style.animation="floatHearts 3s linear";

document.body.appendChild(sparkle);

}

}

document.body.appendChild(div);


// ❤️ HEART SPRINKLE
for(let i=0;i<70;i++){

const heart=document.createElement("div");
heart.innerHTML="❤️";
heart.style.position="absolute";
heart.style.left=Math.random()*100+"%";
heart.style.top=Math.random()*100+"%";
heart.style.fontSize="25px";
heart.style.animation="floatHearts 4s linear";

div.appendChild(heart);

}


// 🧸 TEDDY CELEBRATION
// 🧸 LEFT TEDDY
const teddyLeft=document.createElement("video");

teddyLeft.src="teddyCelebrate.mp4";
teddyLeft.autoplay=true;
teddyLeft.loop=true;
teddyLeft.muted=true;
teddyLeft.playsInline=true;

teddyLeft.style.position="absolute";
teddyLeft.style.bottom="20px";
teddyLeft.style.left="20px";
teddyLeft.style.width="100px";
teddyLeft.style.zIndex="10001";

div.appendChild(teddyLeft);


// 🧸 RIGHT TEDDY
const teddyRight=document.createElement("video");

teddyRight.src="teddyCelebrate1.mp4";
teddyRight.autoplay=true;
teddyRight.loop=true;
teddyRight.muted=true;
teddyRight.playsInline=true;

teddyRight.style.position="absolute";
teddyRight.style.bottom="20px";
teddyRight.style.right="20px";
teddyRight.style.width="100px";
//<!--teddyRight.style.transform="scaleX(-1)";-->
teddyRight.style.zIndex="10001";

div.appendChild(teddyRight);



// ✨ SPARKLE EFFECT
for(let i=0;i<40;i++){

const sparkle=document.createElement("div");
sparkle.innerHTML="✨";
sparkle.style.position="absolute";
sparkle.style.left=Math.random()*100+"%";
sparkle.style.top=Math.random()*100+"%";
sparkle.style.fontSize="20px";
sparkle.style.animation="floatHearts 3s linear";

div.appendChild(sparkle);

}

}


