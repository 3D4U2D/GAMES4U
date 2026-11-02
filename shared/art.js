// GAMES4U – eigen plaatjes inladen.
// Zet een PNG met de juiste naam in de art/-map van een spel; het spel gebruikt hem dan
// automatisch in plaats van het getekende onderdeel. Ontbreekt het bestand, dan blijft het origineel.
(function(){
  function load(url){return new Promise(r=>{const i=new Image();i.onload=()=>{i.__art=true;r(i);};i.onerror=()=>r(null);i.src=url;});}
  // vaste namen: target[naam] wordt vervangen
  window.G4U_ART=async function(base,names,target,onEach){
    await Promise.all(names.map(async n=>{const i=await load(base+n+'.png');if(i){target[n]=i;onEach&&onEach(n,i);}}));
  };
  // genummerde reeks (vis_01.png, vis_02.png, ...): stopt na 3 ontbrekende op rij
  window.G4U_ART_SERIES=async function(base,prefix,max,onEach){
    const out=[];let miss=0;
    for(let i=1;i<=max&&miss<3;i++){
      const n=prefix+String(i).padStart(2,'0');const img=await load(base+n+'.png');
      if(img){miss=0;out.push(img);onEach&&onEach(out.length-1,img);}else miss++;
    }
    return out;
  };
  window.G4U_JSON=async function(url){try{const r=await fetch(url,{cache:'no-cache'});return r.ok?await r.json():null;}catch(e){return null;}};
})();
