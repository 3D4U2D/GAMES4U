// GAMES4U – eigen plaatjes inladen.
// Zet een PNG met de juiste naam in de art/-map van een spel; het spel gebruikt hem dan
// automatisch in plaats van het getekende onderdeel. Ontbreekt het bestand, dan blijft het origineel.
(function(){
  function load1(url){return new Promise(r=>{const i=new Image();i.onload=()=>{i.__art=true;r(i);};i.onerror=()=>r(null);i.src=url;});}
  // tot 3 pogingen: een haperende verbinding mag geen plaatje laten wegvallen
  async function load(url,tries){tries=tries||3;for(let t=0;t<tries;t++){const i=await load1(t?url+(url.includes('?')?'&':'?')+'r='+Date.now():url);if(i)return i;await new Promise(z=>setTimeout(z,300*(t+1)));}return null;}
  // vaste namen: target[naam] wordt vervangen
  window.G4U_ART=async function(base,names,target,onEach){
    await Promise.all(names.map(async n=>{const i=await load(base+n+'.png');if(i){target[n]=i;onEach&&onEach(n,i);}}));
  };
  // genummerde reeks (vis_01.png, vis_02.png, ...): stopt na 3 ontbrekende op rij
  window.G4U_ART_SERIES=async function(base,prefix,max,onEach){
    const out=[];let miss=0;
    for(let i=1;i<=max&&miss<3;i++){
      const n=prefix+String(i).padStart(2,'0');const img=await load(base+n+'.png');
      // vaste plek per nummer (vis_03 = index 2), ook als een eerder nummer ontbreekt
      if(img){miss=0;out[i-1]=img;onEach&&onEach(i-1,img);}else miss++;
    }
    out.length=out.reduce((m,_,k)=>k+1,0);return out;
  };
  window.G4U_JSON=async function(url){try{const r=await fetch(url,{cache:'no-cache'});return r.ok?await r.json():null;}catch(e){return null;}};
})();
