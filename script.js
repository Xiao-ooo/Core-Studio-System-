
const artists = 
["ImagineDragon","Drake","Adele","Taylor Swift","Kanye West","Jennie","Junny","TINY7","Juggshots","Kenshi Yonezu","Mariah Carey","Jay Chou","Khalil Fong","GIVĒON","PiXXiE","Fith Harmony","Masiwei","Maroon 5","2NE1","Grasshopper","YOASOBI","ONER","Jisoo","Doechii","Yuki Chiba","Joker Xue","WizTheMc","Gareth T","Aespa","Michael Jackson","AOA","ENHYPEN","en","JHIN","8Bite","Ed Sheeran","Lee Young Ji","LeeHi","KATESEYE","CODE KUNST","Post Malone"," The Kid LAROI","Travis Scott","EXO","Metro Boomin","Michael Bublé","Marc Indigo","Bon Jovi","Tyga","Offset","Chris Brown","Sam Smith","Cardi B","Bruno Mars","The Weekend","G.E.M.","Rosé","Camila Cabello","Jae Jong","Kendrick Lamar","Lil Tecca","T-Pain","Zed-X","Suda Masaki","XXXTENTACION","BigXthaPlug","Earl Klugh","Lisa","Miyauchi","YSB Tril","Playboi Carti","TLC","Lil Wayne","XG","Rick Ross","PSY.P","Jeremih","Jamie Miller","Megan Thee Stallion","Lil Uzi Vert","AKMU","TAEYEON","PIggy","EXID","FIFTY FIFTY","JORDANN","Kana Hanazawa","ZICO","Jonas Blue","Jake Miller","Dua Lipa","Dynamicduo","Troye Sivan","J.Sheon","Jay Park","Sunset Rollercoaster","DADOLL","GALI","Future","Cigarettes After Sex","RADWIMPS","MISIA","OneRepublic","Trouble Maker","Nicki Minaj","MayDay","Sia","Charlie Puth","HyunA","Shawn Mendes","TXT","Jonas Brothers","YUQI","Scott Bradlee's Postmodern Jukebox","Haley Reinhart","Dave Koz","Puddles Pity Party"];


for(let i=0;i<artists.length;i++){

  const a = document.createElement("div");

  a.className="artist";
  a.textContent=artists[i];
  a.style.top=Math.random()*window.innerHeight+"px";
  a.style.left=window.innerWidth+"px";
  a.speed=1+Math.random()*20;

  document.body.appendChild(a);

}

function animate(){
  document.querySelectorAll(".artist").forEach(a=>{
    let l=parseFloat(a.style.left);
    l-=a.speed;
    if(l<-200){ 
      l=window.innerWidth;
      a.style.top=Math.random()*window.innerHeight+"px";
    }
    a.style.left=l+"px";
  });
  requestAnimationFrame(animate);
}

animate();