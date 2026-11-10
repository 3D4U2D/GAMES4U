// GAMES4U – gedeelde spelersfiguren (pixel-art).
// Laadt ../img/p1_back.png enz. als die bestaan, anders tijdelijke figuurtjes.
// Elk figuur levert loopframes: [rust, linkerbeen, rust, rechterbeen].
(function(){
  const PAL={
    p1:{hair:'#6b4a2e',hair2:'#4e3520',skin:'#f0c39b',top:'#2b4a7a',top2:'#203a62',pants:'#3f5f93',pants2:'#2f4b78',shoe:'#f2f2f2',long:false},
    p2:{hair:'#b8894f',hair2:'#8f6837',skin:'#f3c9a6',top:'#d9465f',top2:'#b3344b',pants:'#2a2a33',pants2:'#1c1c24',shoe:'#f2f2f2',long:true},
  };
  const OUT='#20161c';
  function cnv(w,h){const c=document.createElement('canvas');c.width=w;c.height=h;return c;}
  function placeholder(who,view){
    const p=PAL[who],c=cnv(16,32),x=c.getContext('2d');
    const R=(a,b,w,h,col)=>{x.fillStyle=col;x.fillRect(a,b,w,h);};
    // omtrek
    R(4,0,8,1,OUT);R(3,1,10,8,OUT);R(2,9,12,13,OUT);R(3,22,10,9,OUT);R(2,30,12,2,OUT);
    // hoofd
    R(4,1,8,8,view==='back'?p.hair:p.skin);
    if(view==='back'){R(4,1,8,2,p.hair2);R(5,8,6,1,p.skin);}
    else{R(4,1,8,3,p.hair);R(4,4,1,2,p.hair);R(11,4,1,2,p.hair);R(6,5,1,1,OUT);R(9,5,1,1,OUT);R(7,7,2,1,'#c26a5a');}
    if(p.long){R(3,3,1,9,p.hair);R(12,3,1,9,p.hair);if(view==='back')R(4,8,8,4,p.hair);}
    // romp + armen
    R(3,9,10,12,p.top);R(3,9,10,2,p.top2);R(2,10,1,9,p.top2);R(13,10,1,9,p.top2);R(2,19,1,2,p.skin);R(13,19,1,2,p.skin);
    if(view==='front'){R(7,10,2,10,p.top2);}else{R(7,12,2,1,p.top2);}
    if(p.long&&view==='back')R(4,9,8,3,p.hair);
    // benen
    R(4,21,3,9,p.pants);R(9,21,3,9,p.pants);R(4,21,8,1,p.pants2);R(6,22,1,8,p.pants2);
    // schoenen
    R(3,30,5,2,p.shoe);R(8,30,5,2,p.shoe);
    return c;
  }
  // loopframes maken: onderkant (benen) per helft verschuiven
  function frames(src){
    const w=src.width,h=src.height,leg=Math.round(h*0.66),half=Math.floor(w/2);
    const mk=(dl,dr)=>{const c=cnv(w,h+3),x=c.getContext('2d');x.imageSmoothingEnabled=false;
      x.drawImage(src,0,0,w,leg,0,0,w,leg);
      x.drawImage(src,0,leg,half,h-leg,0,leg+dl,half,h-leg);
      x.drawImage(src,half,leg,w-half,h-leg,half,leg+dr,w-half,h-leg);return c;};
    const s=Math.max(1,Math.round(h/16));
    const a=mk(0,0),b=mk(-s,0),c=mk(0,-s);
    return [a,b,a,c];
  }
  // eigen (realistische) figuren: niet knippen, alleen licht veren; __art = glad schalen
  function bob(src){const s=Math.max(1,Math.round(src.height*0.025));
    const mk=d=>{const c=cnv(src.width,src.height+s),x=c.getContext('2d');x.drawImage(src,0,s+d);c.__art=true;return c;};
    const a=mk(0),u=mk(-s);return [a,u,a,u];}
  function load(url){return new Promise(r=>{const i=new Image();i.onload=()=>r(i);i.onerror=()=>r(null);i.src=url;});}
  async function getChars(base){
    base=base||'../img/';
    const out={};
    for(const who of ['p1','p2']){
      out[who]={};
      for(const view of ['back','front']){
        const img=await load(base+who+'_'+view+'.png');
        let src=img;
        if(img){const c=cnv(img.width,img.height);c.getContext('2d').drawImage(img,0,0);src=c;}
        else src=placeholder(who,view);
        out[who][view]=img?bob(src):frames(src);
      }
    }
    return out;
  }
  window.G4U_CHARS=getChars;
})();
