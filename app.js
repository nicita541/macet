const RAW="https://raw.githubusercontent.com/nicita541/game123/main/Assets/Art/";
const BG=RAW+"ui_library_background.png";
const STANDALONE={
  owl:RAW+"owl_mascot.png",
  owlShop:RAW+"owl_shop_v2.png",
  owlVictory:RAW+"owl_victory_v2.png",
  owlSad:RAW+"owl_sad_v2.png"
};
const SHEETS={
  surfaces:{src:RAW+"SpriteSheets/ui_surfaces_reference.png",sprites:{
    GreenButton:[5,1138,535,240],PurpleButton:[542,1138,544,240],BlueButton:[5,876,535,234],GoldButton:[542,876,544,234],
    Parchment:[5,378,535,470],CreamCard:[542,406,544,398],KeyboardKey:[115,31,306,317],TitleRibbon:[484,78,602,240]
  }},
  ui:{src:RAW+"SpriteSheets/ui_icons_reference.png",sprites:{
    Feather:[45,691,320,375],Crown:[387,741,319,283],Heart:[741,726,320,280],Bulb:[1058,706,390,380],Book:[35,361,358,315],
    Lightning:[440,359,255,338],Gear:[742,367,321,314],Statistics:[1100,382,317,284],Home:[39,33,330,310],
    Trophy:[382,16,344,332],Shop:[738,28,333,320],Coin:[1109,24,304,324]
  }},
  settings:{src:RAW+"SpriteSheets/settings_icons_v1.png",sprites:{
    Music:[93,698,506,444],Sound:[684,693,503,437],Vibration:[82,91,499,476],Text:[645,93,578,489]
  }},
  controls:{src:RAW+"SpriteSheets/reference_controls_v2.png",sprites:{
    CreamCircle:[123,708,419,410],LavenderCircle:[708,705,421,410],BlueCircle:[113,128,431,419],Capsule:[616,192,585,277]
  }},
  decor:{src:RAW+"SpriteSheets/reference_decor_v2.png",sprites:{
    Books:[49,845,575,304],Cat:[701,844,510,369],Ink:[184,417,267,417],Lantern:[712,423,481,394],Laurel:[154,41,419,331],Hourglass:[749,39,390,382]
  }},
  icons:{src:RAW+"SpriteSheets/reference_icons_v2.png",sprites:{
    Fire:[66,723,260,293],Target:[407,726,299,292],Star:[757,738,274,266],Calendar:[1121,718,277,294],Cap:[47,408,309,219],
    Moon:[445,403,240,246],Gift:[757,386,281,293],FeatherBundle:[1095,379,320,291],FeatherBag:[48,55,297,311],
    Video:[399,77,316,243],NoAds:[764,65,281,273],Sparkles:[1148,89,249,235]
  }},
  authors:{src:RAW+"SpriteSheets/authors_missing.png",sprites:{
    Pushkin:[0,512,512,512],Tolstoy:[512,512,512,512],Dostoevsky:[1024,512,512,512],Chekhov:[0,0,512,512],Gogol:[512,0,512,512],Turgenev:[1024,0,512,512]
  }}
};

const root=document.getElementById("screens");
const phone=document.getElementById("phone");
const shell=document.getElementById("viewportShell");
const select=document.getElementById("screenSelect");
const designer=document.getElementById("designerToggle");
const copyId=document.getElementById("copyId");
const hint=document.getElementById("hint");
let selected=null;

function el(tag,cls,style,ui){
  const n=document.createElement(tag);
  if(cls)n.className=cls;
  if(style)Object.assign(n.style,style);
  if(ui)n.dataset.ui=ui;
  return n;
}
function add(parent,node){parent.appendChild(node);return node}
function text(parent,html,x,y,w,h,cls,ui){
  const n=el("div","text "+(cls||""),{left:x+"px",top:y+"px",width:w+"px",height:h+"px"},ui);
  n.innerHTML=html;parent.appendChild(n);return n;
}
function plain(parent,src,x,y,w,h,cls,ui){
  const n=el("img","plain-img "+(cls||""),{left:x+"px",top:y+"px",width:w+"px",height:h+"px"},ui);
  n.src=src;parent.appendChild(n);return n;
}
function sprite(parent,sheet,name,x,y,w,h,ui){
  const rect=SHEETS[sheet].sprites[name];
  const sx=rect[0],sy=rect[1],sw=rect[2],sh=rect[3];
  const wrap=el("div","atlas",{left:x+"px",top:y+"px",width:w+"px",height:h+"px"},ui);
  const im=document.createElement("img");
  im.src=SHEETS[sheet].src;
  im.onload=function(){
    const kx=w/sw,ky=h/sh;
    im.style.width=(im.naturalWidth*kx)+"px";
    im.style.height=(im.naturalHeight*ky)+"px";
    im.style.left=(-sx*kx)+"px";
    im.style.top=(-(im.naturalHeight-sy-sh)*ky)+"px";
  };
  wrap.appendChild(im);parent.appendChild(wrap);return wrap;
}
function screen(name,pos,soft){
  const s=el("section","screen"+(soft?" bg-soft":""),null,null);
  s.dataset.screen=name;
  s.style.setProperty("--bg",'url("'+BG+'")');
  s.style.setProperty("--bg-pos",pos||"center center");
  root.appendChild(s);return s;
}
function nav(parent,label,nav,x,y,w,h,cls,ui){
  const b=el("button","ui click "+(cls||""),{left:x+"px",top:y+"px",width:w+"px",height:h+"px"},ui);
  b.type="button";b.dataset.nav=nav;b.innerHTML=label;parent.appendChild(b);return b;
}
function ribbon(parent,label,x,y,w,h,ui){
  const r=el("div","ribbon",{left:x+"px",top:y+"px",width:w+"px",height:h+"px"},ui);
  sprite(r,"surfaces","TitleRibbon",0,0,w,h);
  const t=document.createElement("div");t.className="ribbon-text";t.textContent=label;t.style.fontSize=Math.round(h*.34)+"px";r.appendChild(t);
  parent.appendChild(r);return r;
}
function back(parent,navTo,x,y,ui){
  return nav(parent,"‹",navTo||"home",x||25,y||34,43,43,"back",ui||"global/back");
}
function bottomNav(parent,active){
  const n=el("div","bottomnav",null,"global/bottom-nav");
  const items=[["home","Home","Главная"],["stats","Statistics","Статистика"],["achievements","Trophy","Достижения"],["shop","Shop","Магазин"]];
  items.forEach(function(it){
    const b=document.createElement("button");b.type="button";b.dataset.nav=it[0];if(it[0]===active)b.classList.add("active");
    const ico=document.createElement("div");ico.className="nav-icon";sprite(ico,"ui",it[1],0,0,32,32);
    const lab=document.createElement("span");lab.textContent=it[2];
    b.appendChild(ico);b.appendChild(lab);n.appendChild(b);
  });
  parent.appendChild(n);return n;
}
const API={RAW,BG,STANDALONE,SHEETS,el,add,text,plain,sprite,screen,nav,ribbon,back,bottomNav};

Object.keys(window.SCREEN_BUILDERS||{}).forEach(function(name){
  window.SCREEN_BUILDERS[name](API);
});

function show(name){
  if(!window.SCREEN_BUILDERS[name])name="home";
  document.querySelectorAll(".screen").forEach(function(s){s.classList.toggle("active",s.dataset.screen===name)});
  select.value=name;
  if(selected){selected.classList.remove("selected");selected=null}
  copyId.textContent="ID: —";
  history.replaceState(null,"","#"+name);
}
document.addEventListener("click",function(e){
  if(designer.checked){
    const target=e.target.closest("[data-ui]");
    if(target && !target.classList.contains("screen")){
      e.preventDefault();e.stopPropagation();
      if(selected)selected.classList.remove("selected");
      selected=target;selected.classList.add("selected");
      copyId.textContent="ID: "+target.dataset.ui;
      hint.textContent=target.dataset.ui+" — это отдельный HTML/спрайт-объект.";
      return;
    }
  }
  const n=e.target.closest("[data-nav]");
  if(n){e.preventDefault();show(n.dataset.nav)}
});
select.addEventListener("change",function(){show(select.value)});
designer.addEventListener("change",function(){
  phone.classList.toggle("design-mode",designer.checked);
  hint.textContent=designer.checked?"Нажми на любой объект — получишь его ID.":"Макет собран из отдельных спрайтов проекта. Скриншоты используются только как эталон.";
});
copyId.addEventListener("click",async function(){
  if(selected)try{await navigator.clipboard.writeText(selected.dataset.ui);hint.textContent="Скопировано: "+selected.dataset.ui}catch(_){}
});
function fit(){
  const top=window.innerWidth<=760?92:54;
  const maxW=Math.max(260,window.innerWidth-20),maxH=Math.max(380,window.innerHeight-top-24);
  const k=Math.min(1,maxW/475,maxH/957);
  phone.style.transform="scale("+k+")";
  shell.style.width=475*k+"px";shell.style.height=957*k+"px";
}
window.addEventListener("resize",fit);fit();
show(location.hash.slice(1)||"home");