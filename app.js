const RAW="https://raw.githubusercontent.com/nicita541/game123/main/";
const CONFIG={
 home:{
  bg:RAW+"Assets/Art/Backgrounds/home_reference_v1.png",
  ref:RAW+"Review/FeedbackPass/Home.png",
  slices:[
   ["home/settings",43,47,52,52,"settings"],
   ["home/feathers",160,61,158,43],
   ["home/title",127,113,222,162],
   ["home/hero",91,274,294,291],
   ["home/continue",53,567,370,111,"gameplay"],
   ["home/levels",68,708,339,82,"collections"],
   ["home/bottom-nav",69,861,337,70]
  ],
  hotspots:[
   ["home",101,861,62,70],["stats",171,861,62,70],["achievements",246,861,68,70],["shop",329,861,65,70]
  ]
 },
 settings:{
  bg:RAW+"Assets/Art/Backgrounds/settings_reference_v1.png",
  ref:RAW+"Review/FeedbackPass/Settings.png",
  slices:[
   ["settings/back",22,27,45,45,"home"],
   ["settings/title",116,67,244,76],
   ["settings/owl",177,150,121,101],
   ["settings/music",49,275,377,83],
   ["settings/sound",49,375,377,84],
   ["settings/vibration",49,476,377,84],
   ["settings/large-text",49,578,377,84],
   ["settings/library",64,798,350,42,"home"],
   ["settings/credits",132,840,211,103]
  ]
 },
 stats:{
  bg:RAW+"Assets/Art/Backgrounds/stats_reference_v1.png",
  ref:RAW+"Review/FeedbackPass/Statistics.png",
  slices:[
   ["stats/header-hero",37,31,401,296],
   ["stats/level",50,319,376,148],
   ["stats/solved",50,475,188,94],
   ["stats/accuracy",242,475,188,94],
   ["stats/streak",50,574,188,94],
   ["stats/today",242,574,188,94],
   ["stats/activity",49,671,379,193],
   ["stats/bottom-nav",82,870,313,62]
  ],
  hotspots:[
   ["home",99,870,66,62],["stats",167,870,67,62],["achievements",236,870,72,62],["shop",311,870,70,62]
  ]
 },
 achievements:{
  bg:RAW+"Assets/Art/Backgrounds/achievements_reference_v1.png",
  ref:RAW+"Review/FeedbackPass/Achievements.png",
  slices:[
   ["achievements/header",44,30,388,241],
   ["achievements/tabs",49,251,378,42],
   ["achievements/card-1",49,301,378,75],
   ["achievements/card-2",49,380,378,75],
   ["achievements/card-3",49,459,378,75],
   ["achievements/card-4",49,538,378,75],
   ["achievements/card-5",49,617,378,75],
   ["achievements/card-6",49,696,378,75],
   ["achievements/card-7",49,775,378,75],
   ["achievements/bottom-nav",75,861,327,69]
  ],
  hotspots:[
   ["home",91,861,66,69],["stats",165,861,66,69],["achievements",238,861,72,69],["shop",318,861,67,69]
  ]
 },
 shop:{
  bg:RAW+"Assets/Art/Backgrounds/shop_reference_v1.png",
  ref:RAW+"Review/FeedbackPass/Shop.png",
  slices:[
   ["shop/back",30,43,48,48,"home"],
   ["shop/title",106,42,266,91],
   ["shop/resources",94,124,286,39],
   ["shop/owl",79,154,318,183],
   ["shop/feathers-panel",48,338,380,239],
   ["shop/hints-panel",48,589,380,116],
   ["shop/bottom-nav",80,875,315,64]
  ],
  hotspots:[
   ["home",97,875,65,64],["stats",166,875,65,64],["achievements",238,875,70,64],["shop",315,875,67,64]
  ]
 },
 gameplay:{
  bg:RAW+"Assets/Art/Backgrounds/gameplay_reference_v1.png",
  ref:RAW+"03_gameplay_classic.png",
  slices:[
   ["gameplay/back",35,42,45,45,"home"],
   ["gameplay/mode",83,44,140,38],
   ["gameplay/erudition",241,43,91,39],
   ["gameplay/hint",388,37,48,55],
   ["gameplay/hearts",182,91,116,42],
   ["gameplay/owl",150,123,176,129],
   ["gameplay/parchment",43,230,389,428],
   ["gameplay/keyboard",43,681,390,203]
  ]
 },
 collections:{
  bg:RAW+"Assets/Art/Backgrounds/collections_reference_v1.png",
  ref:RAW+"Review/FeedbackPass/Collections.png",
  slices:[
   ["collections/header",35,27,405,219],
   ["collections/tabs",46,236,383,48],
   ["collections/author-1",48,298,379,78],
   ["collections/author-2",48,387,379,78],
   ["collections/author-3",48,476,379,78],
   ["collections/author-4",48,565,379,78],
   ["collections/author-5",48,654,379,78],
   ["collections/author-6",48,743,379,78],
   ["collections/bottom-nav",71,866,330,69]
  ],
  hotspots:[
   ["home",88,866,68,69],["stats",165,866,68,69],["achievements",241,866,73,69],["shop",319,866,68,69]
  ]
 }
};

const screensRoot=document.getElementById("screens");
const phone=document.getElementById("phone");
const shell=document.getElementById("viewportShell");
const select=document.getElementById("screenSelect");
const designer=document.getElementById("designerToggle");
const compare=document.getElementById("compareToggle");
const compareLayer=document.getElementById("compareLayer");
const compareOpacity=document.getElementById("compareOpacity");
const copyId=document.getElementById("copyId");
const hint=document.getElementById("objectHint");
let current="home",selected=null;

function sliceEl(screen,s){
 const [id,x,y,w,h,nav]=s;
 const el=document.createElement(nav?"button":"div");
 el.className="slice";
 el.dataset.ui=id;
 if(nav)el.dataset.nav=nav;
 Object.assign(el.style,{
  left:x+"px",top:y+"px",width:w+"px",height:h+"px",
  "--x":x,"--y":y
 });
 if(el.tagName==="BUTTON"){el.type="button";el.style.border="0";el.style.padding="0";}
 return el;
}
function hotspotEl(h){
 const [nav,x,y,w,ht]=h;
 const b=document.createElement("button");
 b.type="button";b.className="nav-hotspot";b.dataset.nav=nav;b.setAttribute("aria-label",nav);
 Object.assign(b.style,{left:x+"px",top:y+"px",width:w+"px",height:ht+"px"});
 return b;
}
function build(){
 for(const [name,cfg] of Object.entries(CONFIG)){
  const s=document.createElement("section");
  s.className="screen";s.dataset.screen=name;
  s.style.backgroundImage=`url("${cfg.ref}")`;
  cfg.slices.forEach(x=>s.appendChild(sliceEl(name,x)));
  (cfg.hotspots||[]).forEach(x=>s.appendChild(hotspotEl(x)));
  screensRoot.appendChild(s);
 }
}
build();

function show(name){
 if(!CONFIG[name])name="home";
 current=name;
 document.querySelectorAll(".screen").forEach(x=>x.classList.toggle("is-active",x.dataset.screen===name));
 select.value=name;
 compareLayer.src=CONFIG[name].ref;
 if(selected){selected.classList.remove("is-selected");selected=null}
 copyId.textContent="ID: —";
 history.replaceState(null,"","#"+name);
}
document.addEventListener("click",e=>{
 const nav=e.target.closest("[data-nav]");
 if(nav){e.preventDefault();show(nav.dataset.nav);return}
 if(designer.checked){
  const obj=e.target.closest(".slice");
  if(obj){
   e.preventDefault();e.stopPropagation();
   if(selected)selected.classList.remove("is-selected");
   selected=obj;selected.classList.add("is-selected");
   copyId.textContent="ID: "+obj.dataset.ui;
   hint.textContent=obj.dataset.ui+" — скажи мне этот ID и нужную правку";
  }
 }
});
select.addEventListener("change",()=>show(select.value));
designer.addEventListener("change",()=>{phone.classList.toggle("design-mode",designer.checked);hint.textContent=designer.checked?"Нажми на любой выделенный объект.":"Включи «Объекты» и нажми на элемент."});
compare.addEventListener("change",()=>phone.classList.toggle("compare-on",compare.checked));
compareOpacity.addEventListener("input",()=>compareLayer.style.opacity=compareOpacity.value/100);
copyId.addEventListener("click",async()=>{if(selected){try{await navigator.clipboard.writeText(selected.dataset.ui);hint.textContent="Скопировано: "+selected.dataset.ui}catch{}}});

function fit(){
 const top=window.innerWidth<=760?94:54;
 const maxW=Math.max(280,window.innerWidth-24);
 const maxH=Math.max(420,window.innerHeight-top-30);
 const scale=Math.min(1,maxW/475,maxH/957);
 phone.style.transform=`scale(${scale})`;
 shell.style.width=(475*scale)+"px";
 shell.style.height=(957*scale)+"px";
}
window.addEventListener("resize",fit);
fit();
const initial=location.hash.slice(1);
show(CONFIG[initial]?initial:"home");
compareLayer.style.opacity=compareOpacity.value/100;
