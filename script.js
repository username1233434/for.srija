const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const photos=["IMG-20260418-WA0027.jpg","IMG-20260428-WA0061.jpg","IMG-20260529-WA0146.jpg","IMG-20260529-WA0457.jpg","IMG-20260627-WA0067.jpg","IMG-20260628-WA0033.jpg","IMG-20260703-WA0047.jpg","IMG-20260709-WA0050.jpg","IMG-20260709-WA0055.jpg","IMG-20260711-WA0116.jpg","IMG-20260711-WA0197.jpg","IMG-20260711-WA0218.jpg","IMG-20260910-WA0139.jpg","IMG-20260916-WA0108.jpg","IMG-20260916-WA0139.jpg","IMG-20260916-WA0209.jpg","IMG-20260916-WA0231.jpg","IMG-20260916-WA0232(1).jpg","Peachy_20260911_024836584.jpg"];
const captions=["the beginning of another little chapter.","you, exactly as you are.","one of those moments I wish I could pause.","somewhere between a normal day and a memory.","still one of my favourites.","I remember this feeling.","the kind of picture that makes me smile before I even realise it.","just us.","you made an ordinary moment feel like something worth keeping.","a tiny piece of our story.","this one still feels warm.","the chaos, the laughter, the two of us.","one more memory I never want to lose.","you looked happy. I remember that.","another day I got lucky enough to call ours.","the little things really were the big things.","if I could keep a year in photographs, I’d keep these.","almost nineteen, and already so many memories.","and there are still so many to come."];
const reasons=[`I love your oompa loompa 😋.`,`I love your eyes, your little nose, your lips, your chin, your eyebrows, and that little bindi between them. Basically, I love every little part of your face.`,`I love your smile, especially the ones you make without realizing how cute you look.`,`I love how you can make me laugh even when I’m having the worst day.`,`I love how you are willing to accept your mistakes and actually work on them to become a better person.`,`I love how daring and fun you can be; your side that makes random things feel like an adventure.`,`I love you being a drama queen 😂❤️.`,`I love our random conversations that somehow turn into hours of talking.`,`I love how stupid and chaotic we can be together and still have the best time.`,`I love how comfortable I feel being completely myself around you.`,`I love the little things you do that you probably don’t even realize I’ve noticed.`,`I love how much you care about the people you love.`,`I love that every memory with you somehow becomes a memory I want to keep forever.`,`I love how you’ve become such a beautiful part of my everyday life.`,`I love that even after all the conversations we’ve had, I still never seem to run out of things I want to tell you.`,`I love the way you make me want to become a better version of myself, simply by being someone worth becoming better for.`,`I love the person you are today, but I also love watching you grow, change, and become the person you’re meant to be.`,`I love all the memories we’ve already made, but I love knowing there are so many more waiting for us.`,`I love you because you’re you.\n\nNot because of one particular thing,\nnot because you have to be perfect,\nand not because I can put it into 19 reasons.\n\nI just love you, Srija.\n\nAnd somehow, out of all the people in this world,\nI’m so fucking lucky that it’s you. ❤️`];
const letter=[`I’m really glad to be sharing this last teenage year with you.`,`I still remember all the moments since the beginning, the little conversations, the random laughs, the stupid things we’ve done, the good times, the difficult times, and everything in between. Somehow, all those little moments became some of the memories I cherish the most.`,`I know things get difficult from time to time, and I know we won’t always agree on everything. But no matter what happens, I want us to always find our way through it together. I’ll always try to understand you, listen to you, and put you first.`,`I hope I’ve made you feel loved, cared for, and heard enough. And if there are ever moments when I haven’t, I hope you know that I’ll keep trying, because you deserve to feel all of those things.`,`I hope we grow together, as a couple, but also individually and personally, in every aspect of our lives. I want to see you become everything you dream of becoming, and I hope you always get the things you dream of and the things you truly deserve.`,`I love that you’re willing to accept your mistakes, learn from them, and try to become a better person. I genuinely admire that about you.`,`And honestly, I love all the little things that make you you, your drama queen moments 😂, your daring and crazy side, your stupid jokes, your expressions, your smile, and all those tiny things that somehow became my favourite things.`,`I will always remember the good times we’ve had.`,`And I look forward to sharing one more year with you, your last year as a teenager.`,`It’s crazy to think that you’re going to be 20 after this year. But before that happens, I want us to make this year something we’ll look back on and smile about.`,`Thank you for being you.`,`Thank you for the love, the chaos, the laughter, the drama, the memories, and for choosing to stay.`,`Whatever the future brings, I’ll always be grateful that somewhere along my timeline, I got to meet you.`];
const toast=msg=>{const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(window._toast);window._toast=setTimeout(()=>t.classList.remove('show'),2600)};
$('#enterBtn').addEventListener('click',()=>{$('#intro').classList.add('exit');$('#story').setAttribute('aria-hidden','false');setTimeout(()=>document.querySelector('.hero').scrollIntoView({behavior:'smooth'}),450)});
const stage=$('#memoryStage');photos.forEach((src,i)=>{const f=document.createElement('figure');f.className='memory';f.innerHTML=`<img loading="lazy" src="assets/photos/${src}" alt="A memory of Srija and us"><figcaption>${captions[i]}</figcaption>`;stage.appendChild(f)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.14});$$('.memory').forEach(x=>io.observe(x));
let reason=0;const reasonText=$('#reasonText'),reasonIndex=$('#reasonIndex');function renderReason(){reasonText.innerHTML=reasons[reason].replace(/\n/g,'<br>');reasonIndex.textContent=String(reason+1).padStart(2,'0');reasonText.animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'none'}],{duration:600,easing:'cubic-bezier(.2,.8,.2,1)'})}renderReason();$('#nextReason').addEventListener('click',()=>{reason=(reason+1)%19;renderReason()});
const audio=$('#song');
const audioFile="'City of Stars' (Duet ft. Ryan Gosling, Emma Stone), La La Land Original Motion Picture Soundtrack, (320 Kbps).mp3";
audio.src='assets/audio/'+encodeURIComponent(audioFile).replace(/'/g,'%27');
const status=$('#musicStatus');
audio.addEventListener('loadedmetadata',()=>status.textContent='City of Stars · ready');
audio.addEventListener('error',()=>status.textContent='The soundtrack could not be loaded.');$('#musicToggle').addEventListener('click',async()=>{if(audio.paused){try{await audio.play();$('#musicLabel').textContent='pause the night';status.textContent='City of Stars · playing'}catch{status.textContent='Playback was blocked. Tap again to start it.'}}else{audio.pause();$('#musicLabel').textContent='play the night';status.textContent='City of Stars · paused'}});
$('#envelope').addEventListener('click',()=>{const e=$('#envelope');if(e.classList.contains('open'))return;e.classList.add('open');setTimeout(()=>{$('#letterPaper').classList.add('show');document.querySelector('.tap-hint').textContent='a little piece of my heart';let i=0;const target=$('#letterText');const next=()=>{if(i>=letter.length)return;const p=document.createElement('p');p.textContent=letter[i++];target.appendChild(p);p.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'none'}],{duration:800});setTimeout(next,450)};next()},850)});
const candleBox=$('#candles');for(let i=0;i<19;i++){const c=document.createElement('div');c.className='candle';c.innerHTML='<div class="flame"></div><div class="smoke"></div><div class="wax"></div>';candleBox.appendChild(c)}let blown=false;function blow(){if(blown)return;blown=true;$$('.candle').forEach((c,i)=>setTimeout(()=>c.classList.add('off'),i*45));$('#candlePrompt').textContent='Make it a good one.';setTimeout(()=>{document.querySelector('.wish').classList.add('revealed');document.querySelector('.wish').scrollIntoView({behavior:'smooth'})},1700)}$('#blowBtn').addEventListener('click',blow);let last=0;window.addEventListener('devicemotion',e=>{const a=e.accelerationIncludingGravity;if(!a)return;const mag=Math.abs(a.x||0)+Math.abs(a.y||0)+Math.abs(a.z||0);if(mag>28&&Date.now()-last>1200){last=Date.now();blow()}});
$('#secretHeart').addEventListener('click',()=>toast('There are still so many little things I love about you.'));$('.secret-star').addEventListener('click',()=>toast('You found one. I knew you would.'));
const intro=$('#intro'); const lightsBtn=$('#lightsBtn'); const midnightClock=$('#midnightClock'); const midnightDate=$('#midnightDate'); const midnightMessage=$('#midnightMessage'); const musicStartBtn=$('#musicStartBtn');
let openingStarted=false;
lightsBtn.addEventListener('click',()=>{if(openingStarted)return;openingStarted=true;intro.classList.add('lights-on');lightsBtn.textContent='The lights are on';setTimeout(()=>{intro.classList.add('midnight');let ticks=0;const times=['11:59:59','12:00:00'];const timer=setInterval(()=>{midnightClock.textContent=times[Math.min(ticks,1)];if(ticks===1){clearInterval(timer);midnightDate.textContent='1 October 2026';midnightMessage.textContent='Happy birthday, Srija.'}},1100);ticks=1},1600)});
musicStartBtn.addEventListener('click',async()=>{intro.classList.add('music-ready');try{await audio.play();musicLabel.textContent='pause the night';status.textContent='City of Stars · playing';musicStartBtn.textContent='The night has begun ♪';setTimeout(()=>intro.classList.add('exit'),1400)}catch{status.textContent='Tap again to start the music.'}});
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
