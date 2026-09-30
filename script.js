const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const mediaItems=[
{type:'photo',src:'IMG-20260418-WA0027.jpg',caption:'the first little page of a very beautiful chapter.'},
{type:'photo',src:'IMG-20260428-WA0061.jpg',caption:'just you, being effortlessly you.'},
{type:'photo',src:'IMG-20260521-WA0096.jpg',caption:'a little glimpse of the person I adore.'},
{type:'photo',src:'IMG-20260529-WA0146.jpg',caption:'one of those smiles that makes a whole screen feel warmer.'},
{type:'photo',src:'IMG-20260529-WA0457.jpg',caption:'somehow, you make ordinary light look better.'},
{type:'photo',src:'IMG-20260606-WA0003.jpg',caption:'your kind of pretty has never needed an occasion.'},
{type:'photo',src:'IMG-20260627-WA0067.jpg',caption:'a tiny frame from a year full of little stories.'},
{type:'video',src:'VID-20260627-WA0080.mp4',caption:'a little moving piece of the story.'},
{type:'photo',src:'IMG-20260628-WA0033.jpg',caption:'a little piece of the chaos I love.'},
{type:'photo',src:'IMG-20260703-WA0047.jpg',caption:'you have a way of making every frame feel alive.'},
{type:'photo',src:'IMG-20260709-WA0050.jpg',caption:'you make being yourself look beautiful without even trying.'},
{type:'photo',src:'IMG-20260709-WA0055.jpg',caption:'the smile, the eyes, the whole you.'},
{type:'photo',src:'IMG-20260711-WA0116.jpg',caption:'soft, silly, beautiful, completely you.'},
{type:'photo',src:'IMG-20260711-WA0197.jpg',caption:'you and that face I could look at for way too long.'},
{type:'photo',src:'IMG-20260711-WA0218.jpg',caption:'the girl behind so many of my favourite thoughts.'},
{type:'video',src:'VID-20260711-WA0203.mp4',caption:'some moments move too — press play.'},
{type:'video',src:'VID-20260711-WA0204.mp4',caption:'and some little moments deserve a second look.'},
{type:'video',src:'signal-2026-09-01-19-37-32-765.mp4',caption:'a tiny moving piece of September.'},
{type:'photo',src:'IMG-20260908-WA0052~2.jpg',caption:'September brought a little more of your sunshine.'},
{type:'photo',src:'IMG-20260910-WA0139.jpg',caption:'another little glimpse of you.'},
{type:'photo',src:'Peachy_20260911_024836584.jpg',caption:'you make cute look dangerously easy.'},
{type:'photo',src:'IMG-20260916-WA0108.jpg',caption:'a little sparkle, a little chaos.'},
{type:'photo',src:'IMG-20260916-WA0139.jpg',caption:'this is what happens when you simply exist and somehow look this lovely.'},
{type:'photo',src:'IMG-20260916-WA0199.jpg',caption:'another tiny piece of your September.'},
{type:'photo',src:'IMG-20260916-WA0202.jpg',caption:'a face worth stopping the scroll for.'},
{type:'photo',src:'IMG-20260916-WA0209.jpg',caption:'one more little version of you to keep close.'},
{type:'photo',src:'IMG-20260916-WA0218.jpg',caption:'pretty, playful, and very, very you.'},
{type:'photo',src:'IMG-20260916-WA0231.jpg',caption:'somewhere between sweet and completely chaotic.'},
{type:'photo',src:'IMG-20260916-WA0232(1).jpg',caption:'and somehow, there is still more of you I want to see.'}
];
const reasons=[`I love your oompa loompa 😋.`,`I love your eyes, your little nose, your lips, your chin, your eyebrows, and that little bindi between them. Basically, I love every little part of your face.`,`I love your smile, especially the ones you make without realizing how cute you look.`,`I love how you can make me laugh even when I’m having the worst day.`,`I love how you are willing to accept your mistakes and actually work on them to become a better person.`,`I love how daring and fun you can be; your side that makes random things feel like an adventure.`,`I love you being a drama queen 😂❤️.`,`I love our random conversations that somehow turn into hours of talking.`,`I love how stupid and chaotic we can be together and still have the best time.`,`I love how comfortable I feel being completely myself around you.`,`I love the little things you do that you probably don’t even realize I’ve noticed.`,`I love how much you care about the people you love.`,`I love that every memory with you somehow becomes a memory I want to keep forever.`,`I love how you’ve become such a beautiful part of my everyday life.`,`I love that even after all the conversations we’ve had, I still never seem to run out of things I want to tell you.`,`I love the way you make me want to become a better version of myself, simply by being someone worth becoming better for.`,`I love the person you are today, but I also love watching you grow, change, and become the person you’re meant to be.`,`I love all the memories we’ve already made, but I love knowing there are so many more waiting for us.`,`I love you because you’re you.\n\nNot because of one particular thing,\nnot because you have to be perfect,\nand not because I can put it into 19 reasons.\n\nI just love you, Srija.\n\nAnd somehow, out of all the people in this world,\nI’m so fucking lucky that it’s you. ❤️`];
const letter=[`I’m really glad to be sharing this last teenage year with you.`,`I still remember all the moments since the beginning, the little conversations, the random laughs, the stupid things we’ve done, the good times, the difficult times, and everything in between. Somehow, all those little moments became some of the memories I cherish the most.`,`I know things get difficult from time to time, and I know we won’t always agree on everything. But no matter what happens, I want us to always find our way through it together. I’ll always try to understand you, listen to you, and put you first.`,`I hope I’ve made you feel loved, cared for, and heard enough. And if there are ever moments when I haven’t, I hope you know that I’ll keep trying, because you deserve to feel all of those things.`,`I hope we grow together, as a couple, but also individually and personally, in every aspect of our lives. I want to see you become everything you dream of becoming, and I hope you always get the things you dream of and the things you truly deserve.`,`I love that you’re willing to accept your mistakes, learn from them, and try to become a better person. I genuinely admire that about you.`,`And honestly, I love all the little things that make you you, your drama queen moments 😂, your daring and crazy side, your stupid jokes, your expressions, your smile, and all those tiny things that somehow became my favourite things.`,`I will always remember the good times we’ve had.`,`And I look forward to sharing one more year with you, your last year as a teenager.`,`It’s crazy to think that you’re going to be 20 after this year. But before that happens, I want us to make this year something we’ll look back on and smile about.`,`Thank you for being you.`,`Thank you for the love, the chaos, the laughter, the drama, the memories, and for choosing to stay.`,`Whatever the future brings, I’ll always be grateful that somewhere along my timeline, I got to meet you.`];
const toast=msg=>{const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(window._toast);window._toast=setTimeout(()=>t.classList.remove('show'),2600)};
$('#enterBtn').addEventListener('click',()=>{$('#intro').classList.add('exit');$('#story').setAttribute('aria-hidden','false');switchToAngelEyes();setTimeout(()=>document.querySelector('.hero').scrollIntoView({behavior:'smooth'}),450)});
const stage=$('#memoryStage');mediaItems.forEach((item,i)=>{const f=document.createElement('figure');f.className='memory '+(item.type==='video'?'video-memory':'photo-memory');if(item.type==='video'){f.innerHTML=`<div class="memory-media"><video loading="lazy" muted loop playsinline preload="metadata" src="assets/photos/${item.src}" aria-label="A little video from Srija's story"></video><span class="video-badge">moving memory · ${String(i+1).padStart(2,'0')}</span></div><figcaption>${item.caption}</figcaption>`}else{f.innerHTML=`<div class="memory-media"><img loading="lazy" src="assets/photos/${item.src}" alt="A photo of Srija"></div><figcaption>${item.caption}</figcaption>`}stage.appendChild(f)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');const v=e.target.querySelector('video');if(v)v.play().catch(()=>{})}else{const v=e.target.querySelector('video');if(v)v.pause()}}),{threshold:.14});$('.memory').forEach(x=>io.observe(x));
let reason=0;const reasonText=$('#reasonText'),reasonIndex=$('#reasonIndex');function renderReason(){reasonText.innerHTML=reasons[reason].replace(/\n/g,'<br>');reasonIndex.textContent=String(reason+1).padStart(2,'0');reasonText.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'none'}],{duration:600,easing:'cubic-bezier(.2,.8,.2,1)'})}renderReason();$('#nextReason').addEventListener('click',()=>{reason=(reason+1)%19;renderReason()});
const audio=$('#song');
const cityFile="'City of Stars' (Duet ft. Ryan Gosling, Emma Stone) - La La Land Original Motion Picture Soundtrack - (320 Kbps).mp3";
const angelFile="Pretty Little Angel Eyes.mp3";
let currentTrack='city';
const status=$('#musicStatus');
function setTrack(kind){const file=kind==='angel'?angelFile:cityFile;currentTrack=kind;audio.src='assets/audio/'+encodeURIComponent(file);audio.load();if(kind==='angel'){status.textContent='Pretty Little Angel Eyes · ready';$('#musicEyebrow').textContent='05 · pretty little angel eyes';$('#musicTitle').innerHTML='A little sunshine,<br>a little mischief.';$('#musicDescription').textContent='The dreamy part was City of Stars. This is the part where the night gets brighter, happier, and a little more us.';$('#trackName').textContent='Pretty Little Angel Eyes';$('#trackMood').textContent='jolly · romantic · for dancing around the room';$('#musicLabel').textContent='play the happy part'}else{status.textContent='City of Stars · ready'}}
function switchToAngelEyes(){setTrack('angel');}
setTrack('city');
audio.addEventListener('loadedmetadata',()=>{status.textContent=currentTrack==='angel'?'Pretty Little Angel Eyes · ready':'City of Stars · ready'});
audio.addEventListener('error',()=>status.textContent='The soundtrack could not be loaded.');
$('#musicToggle').addEventListener('click',async()=>{if(audio.paused){try{await audio.play();$('#musicLabel').textContent=currentTrack==='angel'?'pause the happy part':'pause the night';status.textContent=currentTrack==='angel'?'Pretty Little Angel Eyes · playing':'City of Stars · playing'}catch{status.textContent='Playback was blocked. Tap again to start it.'}}else{audio.pause();$('#musicLabel').textContent=currentTrack==='angel'?'play the happy part':'play the night';status.textContent=currentTrack==='angel'?'Pretty Little Angel Eyes · paused':'City of Stars · paused'}});
$('#envelope').addEventListener('click',()=>{const e=$('#envelope');if(e.classList.contains('open'))return;e.classList.add('open');setTimeout(()=>{$('#letterPaper').classList.add('show');document.querySelector('.tap-hint').textContent='a little piece of my heart';let i=0;const target=$('#letterText');const next=()=>{if(i>=letter.length)return;const p=document.createElement('p');p.textContent=letter[i++];target.appendChild(p);p.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'none'}],{duration:800});setTimeout(next,450)};next()},850)});

const cutCake=$('#cutCake'),birthdayCake=$('#birthdayCake'),cakeStatus=$('#cakeStatus');
if(cutCake&&birthdayCake){
  cutCake.addEventListener('click',()=>{
    if(birthdayCake.classList.contains('cut'))return;
    birthdayCake.classList.add('cut');
    cutCake.textContent='That’s one beautiful slice 🍰';
    cakeStatus.textContent='Happy birthday, birthday girl. Now somebody get a plate.';
    launchPartyConfetti();
  });
}
$$('.party-balloon').forEach((balloon,index)=>{
  balloon.addEventListener('click',()=>{
    if(balloon.classList.contains('popped'))return;
    balloon.classList.add('popped');
    const messages=['POP! 🎈','There goes one!','Another one bites the dust.','No balloons were safe tonight.','Okay, chaos officially started.'];
    toast(messages[index%messages.length]);
    launchBalloonBurst(balloon);
  });
});
function launchBalloonBurst(el){
  const rect=el.getBoundingClientRect(),x=rect.left+rect.width/2,y=rect.top+rect.height/2;
  const colors=['#ff7eb6','#72d8ff','#ffd166','#b994ff','#82e4bd'];
  for(let i=0;i<14;i++){
    const p=document.createElement('i');p.className='pop-particle';p.style.left=x+'px';p.style.top=y+'px';p.style.setProperty('--dx',(Math.cos(i*Math.PI*2/14)*(25+Math.random()*45))+'px');p.style.setProperty('--dy',(Math.sin(i*Math.PI*2/14)*(25+Math.random()*45))+'px');p.style.background=colors[i%colors.length];document.body.appendChild(p);setTimeout(()=>p.remove(),700);
  }
}
function launchPartyConfetti(){
  const colors=['#ff7eb6','#ffd166','#72d8ff','#b994ff','#82e4bd'];
  for(let i=0;i<55;i++){
    const p=document.createElement('i');p.className='party-confetti';p.style.left=(50+(Math.random()-.5)*20)+'%';p.style.top='48%';p.style.setProperty('--dx',((Math.random()-.5)*500)+'px');p.style.setProperty('--dy',((Math.random()-.7)*500)+'px');p.style.background=colors[i%colors.length];document.body.appendChild(p);setTimeout(()=>p.remove(),1300);
  }
}

const candleBox=$('#candles');for(let i=0;i<19;i++){const c=document.createElement('div');c.className='candle';c.innerHTML='<div class="flame"></div><div class="smoke"></div><div class="wax"></div>';candleBox.appendChild(c)}let blown=false;function blow(){if(blown)return;blown=true;$('.candle').forEach((c,i)=>setTimeout(()=>c.classList.add('off'),i*45));$('#candlePrompt').textContent='Make it a good one.';setTimeout(()=>{document.querySelector('.wish').classList.add('revealed');document.querySelector('.wish').scrollIntoView({behavior:'smooth'})},1700)}
$('#blowBtn').addEventListener('click',blow);

let motionEnabled=false,shakeHits=0,lastShake=0,lastMotion=0,prevMotion=null;
async function enableMotion(){
  try{
    if(typeof DeviceMotionEvent!=='undefined' && typeof DeviceMotionEvent.requestPermission==='function'){
      const permission=await DeviceMotionEvent.requestPermission();
      motionEnabled=permission==='granted';
    }else{
      motionEnabled=true;
    }
  }catch(e){
    motionEnabled=false;
  }
}
const candleSection=document.querySelector('.candles');
if(candleSection)candleSection.addEventListener('pointerdown',()=>{if(!motionEnabled)enableMotion()},{passive:true});

window.addEventListener('devicemotion',e=>{
  if(blown||!motionEnabled)return;
  const a=e.acceleration;
  const g=e.accelerationIncludingGravity;
  if(!a && !g)return;

  const x=a?.x??g?.x??0;
  const y=a?.y??g?.y??0;
  const z=a?.z??g?.z??0;
  const now=Date.now();

  if(!prevMotion){
    prevMotion={x,y,z};
    lastMotion=now;
    return;
  }

  const dx=x-prevMotion.x,dy=y-prevMotion.y,dz=z-prevMotion.z;
  const delta=Math.sqrt(dx*dx+dy*dy+dz*dz);
  prevMotion={x,y,z};

  if(delta>9 && now-lastMotion>70){
    if(now-lastShake>350){
      shakeHits++;
      lastShake=now;
      if(shakeHits>=3){
        shakeHits=0;
        blow();
      }
    }
  }

  if(now-lastShake>1300)shakeHits=0;
  lastMotion=now;
});

if(candleSection){
  candleSection.addEventListener('touchstart',()=>{if(!motionEnabled)enableMotion()},{passive:true});
}
$('#secretHeart')?.addEventListener('click',()=>toast('There are still so many little things I love about you.'));$('.secret-star').forEach(x=>x.addEventListener('click',()=>toast('You found one. I knew you would.')));
const intro=$('#intro');const lightsBtn=$('#lightsBtn');const midnightClock=$('#midnightClock');const midnightDate=$('#midnightDate');const midnightMessage=$('#midnightMessage');const musicStartBtn=$('#musicStartBtn');const enterBtn=$('#enterBtn');const countdown=$('#birthdayCountdown');let openingStarted=false;let openingTimer=null;
function revealStory(){intro.classList.add('exit');$('#story').setAttribute('aria-hidden','false');setTimeout(()=>document.querySelector('.hero')?.scrollIntoView({behavior:'smooth',block:'start'}),120);}
function finishMidnight(){if(intro.classList.contains('midnight'))return;clearInterval(openingTimer);if(countdown)countdown.textContent='';intro.classList.add('midnight');midnightClock.textContent='12:00:00';midnightDate.textContent='1 October 2026';midnightMessage.textContent='Happy birthday, Srija.';try{launchMidnightFireworks()}catch(e){console.warn(e)}if(musicStartBtn)musicStartBtn.focus({preventScroll:true});}
lightsBtn?.addEventListener('click',()=>{if(openingStarted)return;openingStarted=true;intro.classList.add('lights-on');lightsBtn.textContent='The lights are on ✨';try{launchOpeningCelebration()}catch(e){console.warn('Opening celebration skipped:',e)}let remaining=19;if(countdown){countdown.textContent=remaining;countdown.style.opacity='1'}openingTimer=setInterval(()=>{remaining-=1;if(countdown)countdown.textContent=remaining>0?remaining:'';if(remaining<=0)finishMidnight()},1000);});
musicStartBtn?.addEventListener('click',async()=>{musicStartBtn.disabled=true;musicStartBtn.textContent='starting the music...';intro.classList.add('music-ready');let played=false;try{audio.currentTime=0;await audio.play();played=true}catch(error){console.warn('Music playback was blocked:',error)}status.textContent=played?'City of Stars · playing':'Continue to the birthday ♪';musicStartBtn.textContent=played?'The night has begun ♪':'Continue to the birthday ♪';setTimeout(revealStory,650);});
enterBtn?.addEventListener('click',revealStory);
const journeyLines=[
"Here’s to a happy journey ahead, Srija. I hope this new phase of your life brings you places you never imagined you’d reach.",
"A new chapter does not have to be perfect to be beautiful. I hope you enjoy every little part of becoming who you are meant to be.",
"Things may not always get easier. But I hope you become strong enough to face them without letting them take away your peace.",
"I hope life goes a little easier on you. And on the days it doesn’t, I hope you remember how capable you are.",
"I hope you never feel like you have to have everything figured out. You’re allowed to grow slowly, change your mind, and find your way.",
"There will be new people, new places, new responsibilities, new dreams, and probably a few unexpected turns. I hope you enjoy the journey through all of them.",
"I’m genuinely looking forward to seeing where life takes you, and to all the versions of you that you’re still going to become.",
"I hope you collect more moments that make you laugh until your stomach hurts, more sunsets worth stopping for, and more memories you’ll want to keep forever.",
"Whatever this next phase brings, I hope you meet it with courage, curiosity, and that little bit of madness that makes you you.",
"And when life feels heavy, I hope you remember that a difficult day is only a difficult day. It does not define the life waiting for you.",
"Here’s to growing older without losing the parts of yourself that make you smile.",
"Here’s to the dreams you haven’t told anyone about yet, the places you haven’t seen, and the memories you haven’t made.",
"I’m looking forward to all of it. The easy days, the difficult ones, the unexpected ones, and especially the ordinary ones that somehow become our favourites."
];
const journeyBox=document.querySelector('#journeyLines'); if(journeyBox){journeyBox.innerHTML=journeyLines.map(x=>'<p>'+x+'</p>').join('');}
const prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function setupStars(id,count){
  const canvas=document.getElementById(id); if(!canvas)return;
  const ctx=canvas.getContext('2d'); let w=0,h=0,dpr=1,stars=[],shooters=[];
  const resize=()=>{
    dpr=Math.min(devicePixelRatio||1,2); w=innerWidth; h=innerHeight;
    canvas.width=w*dpr; canvas.height=h*dpr; canvas.style.width=w+'px'; canvas.style.height=h+'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);
    stars=Array.from({length:count},()=>({x:Math.random()*w,y:Math.random()*h,r:Math.random()*1.2+.2,a:Math.random()*.65+.15,s:Math.random()*.018+.004,p:Math.random()*6.28}));
  };
  const frame=t=>{
    ctx.clearRect(0,0,w,h);
    for(const star of stars){const a=star.a+Math.sin(t*star.s+star.p)*.12;ctx.fillStyle='rgba(255,244,235,'+Math.max(.04,a)+')';ctx.beginPath();ctx.arc(star.x,star.y,star.r,0,Math.PI*2);ctx.fill();}
    if(!prefersReduced && Math.random()<.006)shooters.push({x:Math.random()*w*.8,y:Math.random()*h*.45,len:70+Math.random()*100,v:7+Math.random()*5,a:1});
    shooters=shooters.filter(x=>x.a>0);
    for(const sh of shooters){ctx.strokeStyle='rgba(242,220,218,'+sh.a+')';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(sh.x,sh.y);ctx.lineTo(sh.x+sh.len,sh.y+sh.len*.28);ctx.stroke();sh.x+=sh.v;sh.y+=sh.v*.28;sh.a-=.025;}
    if(!prefersReduced)requestAnimationFrame(frame);
  };
  addEventListener('resize',resize,{passive:true}); resize(); requestAnimationFrame(frame);
}
setupStars('introStars',180);
setupStars('ambientStars',220);

(function createConfetti(){
  const box=document.getElementById('confetti'); if(!box)return;
  const pieces=window.matchMedia('(max-width:700px)').matches?55:95;
  for(let i=0;i<pieces;i++){
    const p=document.createElement('i');
    p.style.left=(Math.random()*100)+'%';
    p.style.top=(-10-Math.random()*80)+'%';
    p.style.setProperty('--drift',((Math.random()-.5)*180)+'px');
    p.style.animationDuration=(6+Math.random()*9)+'s';
    p.style.animationDelay=(-Math.random()*12)+'s';
    p.style.transform='rotate('+Math.random()*360+'deg)';
    const shapes=['4px 12px','7px 7px','3px 15px'];
    p.style.width=shapes[i%shapes.length].split(' ')[0];
    p.style.height=shapes[i%shapes.length].split(' ')[1];
    p.style.background=['#e6a7b6','#c8add9','#e5c27d','#a9c9d8','#e8e1d7'][i%5];
    box.appendChild(p);
  }
})();


function launchOpeningCelebration(){const box=$('#openingConfetti');if(box&&!box.children.length){const colors=['#ff6fae','#ffd166','#64d8ff','#c084fc','#7ee787','#ff8f70'];for(let i=0;i<100;i++){const p=document.createElement('i');p.style.left=Math.random()*100+'%';p.style.setProperty('--drift',(Math.random()-.5)*220+'px');p.style.background=colors[i%colors.length];p.style.animation='openingConfettiFall '+(3.5+Math.random()*4)+'s ease-out '+Math.random()*.9+'s forwards';p.style.transform='rotate('+Math.random()*360+'deg)';box.appendChild(p)}}const canvas=$('#openingFireworks');if(!canvas)return;const ctx=canvas.getContext('2d'),dpr=Math.min(devicePixelRatio||1,2);let w=innerWidth,h=innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);const bursts=[];for(let b=0;b<7;b++){setTimeout(()=>{const x=w*(.12+Math.random()*.76),y=h*(.12+Math.random()*.5),color=['#ff6fae','#ffd166','#64d8ff','#c084fc','#7ee787'][b%5];for(let i=0;i<55;i++){const a=i*Math.PI*2/55,v=1.5+Math.random()*3.5;bursts.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,color,life:1})}},b*330)}let frame=0;const draw=()=>{ctx.clearRect(0,0,w,h);for(const p of bursts){p.x+=p.vx;p.y+=p.vy;p.vy+=.035;p.life-=.012;ctx.globalAlpha=Math.max(0,p.life);ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x,p.y,1.6,0,Math.PI*2);ctx.fill()}ctx.globalAlpha=1;if(frame++<230)requestAnimationFrame(draw)};requestAnimationFrame(draw)}

function launchMidnightFireworks(){const canvas=$('#openingFireworks');if(!canvas)return;const ctx=canvas.getContext('2d'),dpr=Math.min(devicePixelRatio||1,2);let w=innerWidth,h=innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);canvas.style.opacity='1';const bursts=[];const colors=['#fff1b8','#ff7eb6','#7bdcff','#d7a8ff','#ffffff'];const makeBurst=(delay,scale=1)=>setTimeout(()=>{const x=w*(.16+Math.random()*.68),y=h*(.14+Math.random()*.42),color=colors[Math.floor(Math.random()*colors.length)];for(let i=0;i<85;i++){const a=i*Math.PI*2/85,v=(2.2+Math.random()*4.2)*scale;bursts.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,color,life:1,size:1.4+Math.random()*2.2})}},delay);makeBurst(0,1.15);makeBurst(240,.9);makeBurst(520,1.05);makeBurst(900,.75);let frame=0;const draw=()=>{ctx.clearRect(0,0,w,h);for(const p of bursts){p.x+=p.vx;p.y+=p.vy;p.vy+=.045;p.life-=.009;ctx.globalAlpha=Math.max(0,p.life);ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill()}ctx.globalAlpha=1;if(frame++<430)requestAnimationFrame(draw);else{ctx.clearRect(0,0,w,h);canvas.style.opacity='0'}};requestAnimationFrame(draw)}
const keepGoing=$('#keepGoing');if(keepGoing)keepGoing.addEventListener('click',()=>document.querySelector('.chapter-world')?.scrollIntoView({behavior:'smooth',block:'start'}));

$('.flower-bloom').forEach(btn=>{
  btn.addEventListener('click',()=>{
    $('.flower-bloom').forEach(x=>x.classList.remove('bloomed'));
    btn.classList.remove('bloomed'); void btn.offsetWidth; btn.classList.add('bloomed');
    const name=btn.dataset.flower;
    const messages={
      tulip:'A little tulip, because you deserve a spring that keeps coming back. 🌷',
      rose:'A rose for the girl who makes ordinary days feel a little more romantic. 🌹',
      lily:'A lily for you — soft, pretty, and impossible not to notice. ♡'
    };
    const box=$('#flowerMessage'); if(box)box.textContent=messages[name];
    for(let i=0;i<10;i++){
      const p=document.createElement('i');p.className='flower-petal';p.textContent=['✦','♡','✿'][i%3];
      p.style.left=(50+(Math.random()-.5)*25)+'%';p.style.top='55%';
      p.style.setProperty('--dx',((Math.random()-.5)*260)+'px');p.style.setProperty('--dy',(-80-Math.random()*180)+'px');
      document.querySelector('.flowers')?.appendChild(p);setTimeout(()=>p.remove(),1100);
    }
  });
});

(function addNeonStars(){
  const targets=['.hero','.chapter-world','.memories','.reasons','.love-notes','.music','.letter','.flowers','.party','.candles','.wish','.final'];
  const colors=['#ff4fa3','#42e8ff','#a875ff','#ffe45c','#54f5b5','#5f9dff'];
  targets.forEach((selector,si)=>{
    const section=document.querySelector(selector);if(!section)return;
    const field=document.createElement('div');field.className='neon-starfield';field.setAttribute('aria-hidden','true');
    const count=window.innerWidth<700?10:18;
    for(let i=0;i<count;i++){
      const star=document.createElement('i');star.className='neon-star';
      star.style.setProperty('--x',Math.random()*100+'%');star.style.setProperty('--y',Math.random()*100+'%');
      star.style.setProperty('--size',(Math.random()*3+1)+'px');star.style.setProperty('--star',colors[(i+si)%colors.length]);
      star.style.setProperty('--speed',(1.8+Math.random()*3.5)+'s');star.style.setProperty('--delay',(-Math.random()*4)+'s');
      field.appendChild(star);
    }
    section.appendChild(field);
  });
})();
function sparkleAt(x,y){
  const chars=['✦','✧','♡','✿','·'];const colors=['#ff4fa3','#42e8ff','#a875ff','#ffe45c','#54f5b5'];
  for(let i=0;i<5;i++){
    const p=document.createElement('i');p.className='float-spark';p.textContent=chars[i];p.style.setProperty('--spark',colors[i]);
    p.style.left=x+'px';p.style.top=y+'px';p.style.setProperty('--dx',((Math.random()-.5)*90)+'px');p.style.setProperty('--dy',(-20-Math.random()*70)+'px');
    document.body.appendChild(p);setTimeout(()=>p.remove(),1700);
  }
}
document.addEventListener('pointerdown',e=>{if(e.target.closest('button,.memory,.flower-bloom,.party-balloon'))sparkleAt(e.clientX,e.clientY)},{passive:true});
$('.flower-bloom').forEach(btn=>btn.addEventListener('animationend',()=>{if(btn.classList.contains('bloomed')){const r=btn.getBoundingClientRect();sparkleAt(r.left+r.width/2,r.top+r.height/2)}}));
$('.party-balloon').forEach(btn=>btn.addEventListener('animationend',()=>{if(btn.classList.contains('popped')){const r=btn.getBoundingClientRect();sparkleAt(r.left+r.width/2,r.top+r.height/2)}}));
document.querySelectorAll('button').forEach(btn=>btn.addEventListener('pointermove',e=>{const r=btn.getBoundingClientRect();btn.style.setProperty('--mx',(e.clientX-r.left)+'px');btn.style.setProperty('--my',(e.clientY-r.top)+'px')},{passive:true}));

(function addHiddenSurprise(){
  const heart=document.querySelector('#secretHeart');
  if(!heart)return;
  heart.addEventListener('dblclick',()=>{toast('Okay, okay… you found the secret secret. ♡');for(let i=0;i<12;i++)setTimeout(()=>sparkleAt(innerWidth/2,innerHeight/2),i*45)});
})();
