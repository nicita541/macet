const RAW="https://raw.githubusercontent.com/nicita541/game123/main/Assets/Art/";
const SHEETS={
 surfaces:{src:RAW+"SpriteSheets/ui_surfaces_reference.png",sprites:{
  GreenButton:[5,1138,535,240],PurpleButton:[542,1138,544,240],BlueButton:[5,876,535,234],GoldButton:[542,876,544,234],Parchment:[5,378,535,470],CreamCard:[542,406,544,398],KeyboardKey:[115,31,306,317],TitleRibbon:[484,78,602,240]}},
 ui:{src:RAW+"SpriteSheets/ui_icons_reference.png",sprites:{
  Feather:[45,691,320,375],Crown:[387,741,319,283],Heart:[741,726,320,280],Bulb:[1058,706,390,380],Book:[35,361,358,315],Lightning:[440,359,255,338],Gear:[742,367,321,314],Statistics:[1100,382,317,284],Home:[39,33,330,310],Trophy:[382,16,344,332],Shop:[738,28,333,320],Coin:[1109,24,304,324]}},
 settings:{src:RAW+"SpriteSheets/settings_icons_v1.png",sprites:{Music:[93,698,506,444],Sound:[684,693,503,437],Vibration:[82,91,499,476],Text:[645,93,578,489]}},
 controls:{src:RAW+"SpriteSheets/reference_controls_v2.png",sprites:{CreamCircle:[123,708,419,410],LavenderCircle:[708,705,421,410],BlueCircle:[113,128,431,419],Capsule:[616,192,585,277]}},
 decor:{src:RAW+"SpriteSheets/reference_decor_v2.png",sprites:{Books:[49,845,575,304],Cat:[701,844,510,369],Ink:[184,417,267,417],Lantern:[712,423,481,394],Laurel:[154,41,419,331],Hourglass:[749,39,390,382]}},
 stats:{src:RAW+"SpriteSheets/reference_icons_v2.png",sprites:{Fire:[66,723,260,293],Target:[407,726,299,292],Star:[757,738,274,266],Calendar:[1121,718,277,294],Cap:[47,408,309,219],Moon:[445,403,240,246],Gift:[757,386,281,293],FeatherBundle:[1095,379,320,291],FeatherBag:[48,55,297,311],Video:[399,77,316,243],NoAds:[764,65,281,273],Sparkles:[1148,89,249,235]}},
 authors:{src:RAW+"SpriteSheets/authors_missing.png",sprites:{Pushkin:[0,512,512,512],Tolstoy:[512,512,512,512],Dostoevsky:[1024,512,512,512],Chekhov:[0,0,512,512],Gogol:[512,0,512,512],Turgenev:[1024,0,512,512]}}
};
const BG={
 home:RAW+"ui_library_background.png",
 settings:RAW+"ui_library_background.png",
 stats:RAW+"ui_library_background.png",
 achievements:RAW+"ui_library_background.png",
 shop:RAW+"ui_library_background.png",
 gameplay:RAW+"ui_library_background.png",
 collections:RAW+"ui_library_background.png"
};
const O={normal:RAW+"owl_mascot.png",shop:RAW+"owl_shop_v2.png",victory:RAW+"owl_victory_v2.png"};

const root=document.getElementById("screens"),phone=document.getElementById("phone"),shell=document.getElementById("viewportShell"),select=document.getElementById("screenSelect"),designer=document.getElementById("designerToggle"),copyId=document.getElementById("copyId"),hint=document.getElementById("objectHint");
let current="home",selected=null;

function E(tag,cls,style={},ui){
 const e=document.createElement(tag); if(cls)e.className=cls; Object.assign(e.style,style); if(ui)e.dataset.ui=ui; return e;
}
function text(t,x,y,w,h,cls="",ui){const e=E("div","ui "+cls,{left:x+"px",top:y+"px",width:w+"px",height:h+"px"},ui);e.innerHTML=t;return e}
function image(src,x,y,w,h,cls="",ui){const e=E("img","plain-img "+cls,{left:x+"px",top:y+"px",width:w+"px",height:h+"px"},ui);e.src=src;return e}
function sprite(sheetKey,name,x,y,w,h,ui){
 const [sx,sy,sw,sh]=SHEETS[sheetKey].sprites[name],wrap=E("div","atlas",{left:x+"px",top:y+"px",width:w+"px",height:h+"px"},ui),im=document.createElement("img");
 im.src=SHEETS[sheetKey].src; wrap.appendChild(im);
 im.onload=()=>{const kx=w/sw,ky=h/sh;im.style.width=(im.naturalWidth*kx)+"px";im.style.height=(im.naturalHeight*ky)+"px";im.style.left=(-sx*kx)+"px";im.style.top=(-(im.naturalHeight-sy-sh)*ky)+"px"};
 return wrap;
}
function buttonNav(label,nav,x,y,w,h,cls="",ui){const b=E("button","ui click "+cls,{left:x+"px",top:y+"px",width:w+"px",height:h+"px"},ui);b.dataset.nav=nav;b.innerHTML=label;return b}
function ribbon(screen,label,x,y,w,h,ui){
 const r=E("div","ribbon-title",{left:x+"px",top:y+"px",width:w+"px",height:h+"px"},ui);r.appendChild(sprite("surfaces","TitleRibbon",0,0,w,h));const s=document.createElement("span");s.textContent=label;s.style.fontSize=Math.round(h*.34)+"px";r.appendChild(s);screen.appendChild(r);return r
}
function iconSprite(parent,sheet,name,x,y,w,h,ui){const s=sprite(sheet,name,x,y,w,h,ui);parent.appendChild(s);return s}
function back(screen,nav="home",x=24,y=28){const b=buttonNav("‹",nav,x,y,42,42,"back","global/back");screen.appendChild(b)}
function bottomNav(screen,active){
 const n=E("div","bottomnav",{}, "global/bottom-nav");
 const items=[["home","Home","Главная"],["stats","Statistics","Статистика"],["achievements","Trophy","Достижения"],["shop","Shop","Магазин"]];
 items.forEach(([nav,ic,lab])=>{const b=document.createElement("button");b.dataset.nav=nav;if(nav===active)b.classList.add("active");const c=document.createElement("div");c.className="ico";c.appendChild(sprite("ui",ic,0,0,31,31));b.appendChild(c);const sp=document.createElement("span");sp.textContent=lab;b.appendChild(sp);n.appendChild(b)});
 screen.appendChild(n)
}
function newScreen(name){const s=E("section","screen",{backgroundImage:'url("'+BG[name]+'")'});s.dataset.screen=name;root.appendChild(s);return s}

function home(){
 const s=newScreen("home");
 const gear=E("button","ui click gear-circle",{left:"44px",top:"56px",width:"50px",height:"50px"},"home/settings");gear.dataset.nav="settings";gear.appendChild(sprite("ui","Gear",8,8,34,34));s.appendChild(gear);

 const res=E("div","ui resource-pill",{left:"159px",top:"61px",width:"154px",height:"39px"},"home/feathers");
 res.appendChild(sprite("ui","Feather",13,6,25,29));res.insertAdjacentHTML("beforeend","<b style='font-size:16px'>5</b><button class='plus'>+</button>");s.appendChild(res);

 s.appendChild(sprite("ui","Crown",208,116,60,53,"home/crown"));
 ribbon(s,"Эрудиция",116,151,244,76,"home/title");
 s.appendChild(sprite("decor","Laurel",144,210,70,55,"home/laurel-left"));
 const rr=sprite("decor","Laurel",261,210,70,55,"home/laurel-right");rr.style.transform="scaleX(-1)";s.appendChild(rr);

 const num=text("<b>0</b>",190,218,95,49,"panel round","home/erudition");
 num.style.display="grid";num.style.placeItems="center";num.style.fontSize="29px";s.appendChild(num);

 s.appendChild(image(O.normal,144,279,190,238,"","home/owl"));

 const cont=buttonNav("", "gameplay",53,569,370,109,"hero-button green","home/continue");
 cont.appendChild(sprite("ui","Book",20,25,55,49));
 cont.insertAdjacentHTML("beforeend",
  "<div class='hero-copy'><b>Продолжить</b><span>Истории и цитаты<br>от простого к сложному</span></div><em>›</em>");
 s.appendChild(cont);

 const levels=buttonNav("", "collections",68,709,339,79,"hero-button blue","home/levels");
 levels.appendChild(sprite("ui","Book",18,18,50,44));
 levels.insertAdjacentHTML("beforeend","<b class='levels-label'>Уровни</b><em>›</em>");
 s.appendChild(levels);

 bottomNav(s,"home");return s
}
function settings(){
 const s=newScreen("settings");back(s,"home",20,28);ribbon(s,"Настройки",116,65,244,69,"settings/title");s.appendChild(image(O.normal,177,146,121,111,"","settings/owl"));
 [["Music","Музыка",278,true],["Sound","Звук",378,true],["Vibration","Вибрация",479,true],["Text","Крупный текст",580,false]].forEach(([ic,lab,y,on],i)=>{const c=E("div","ui setting-card",{top:y+"px"},"settings/"+ic.toLowerCase());const well=E("div","iconwell");c.appendChild(well);c.appendChild(sprite("settings",ic,26,17,47,47));c.appendChild(text(lab,92,25,190,30,"stext"));const t=E("div","toggle "+(on?"on":""),{},null);t.style.right="22px";t.style.top="24px";c.appendChild(t);s.appendChild(c)});
 const lib=buttonNav("<b style='font-size:15px;color:white'>В библиотеку</b>","collections",68,800,340,40,"","settings/library");lib.style.borderRadius="22px";lib.style.background="linear-gradient(#36b5ff,#087aec)";lib.style.border="2px solid #fff6d1";lib.style.boxShadow="0 2px 5px #0002";s.appendChild(lib);
 s.appendChild(text("Музыка: Э. Сати · Robin Alcicatore / Musopen<br>Звуки: Kenney · CC0",120,842,235,38,"","settings/credits"));s.lastChild.style.cssText+=";font-size:9px;text-align:center;color:#5d4e4e";
 s.appendChild(text("Инструменты разработчика",145,908,185,18,"","settings/dev"));s.lastChild.style.cssText+=";font-size:8px;text-align:center;color:#8b796f";return s
}
function stats(){
 const s=newScreen("stats");ribbon(s,"Статистика",134,66,208,69,"stats/title");s.appendChild(sprite("ui","Crown",216,37,45,40));s.appendChild(image(O.normal,131,109,215,192,"","stats/owl"));
 const lvl=E("div","ui stat-card",{left:"50px",top:"319px",width:"376px",height:"148px"},"stats/level");lvl.innerHTML="<b style='position:absolute;left:50px;top:18px;font-size:16px'>Уровень эрудиции</b><b style='position:absolute;left:85px;top:53px;font-size:48px'>0</b><div style='position:absolute;left:205px;top:82px;width:157px;height:21px;border-radius:7px;background:#d6d9ed'></div><small style='position:absolute;left:210px;top:108px;font-size:10px;color:#706a83'>До следующего уровня: 50</small>";lvl.appendChild(sprite("ui","Crown",244,27,66,60));lvl.appendChild(sprite("decor","Laurel",20,72,50,40));const lr=sprite("decor","Laurel",140,72,50,40);lr.style.transform="scaleX(-1)";lvl.appendChild(lr);s.appendChild(lvl);
 const boxes=[
  [50,475,"Fire","Решено задач","0","Всего заданий"],[242,475,"Target","Верных ответов","100%","Точность"],
  [50,574,"Star","Серия побед","0","Лучший результат: 0"],[242,574,"Calendar","Решено сегодня","0","Ваша активность"]
 ];
 boxes.forEach(([x,y,ic,t,v,sm])=>{const c=E("div","ui stat-card",{left:x+"px",top:y+"px",width:"188px",height:"94px"},"stats/"+t.toLowerCase().replaceAll(" ","-"));c.appendChild(sprite("stats",ic,10,17,49,51));c.insertAdjacentHTML("beforeend",'<b style="position:absolute;left:76px;top:14px;font-size:11px">'+t+'</b><strong style="position:absolute;left:85px;top:34px;font-size:29px">'+v+'</strong><small style="position:absolute;left:76px;bottom:10px;color:#817793;font-size:8px">'+sm+'</small>');s.appendChild(c)});
 const act=E("div","ui stat-card",{left:"50px",top:"671px",width:"376px",height:"193px"},"stats/activity");act.innerHTML="<b style='position:absolute;left:43px;top:17px;font-size:17px'>Активность</b><small style='position:absolute;left:43px;top:44px;color:#83798e'>Решённые задачи по дням</small><div style='position:absolute;right:31px;top:13px;display:flex;gap:7px'><b style='background:#168ff3;color:#fff;padding:5px 10px;border-radius:12px;font-size:9px'>Неделя</b><b style='background:#ebebf5;padding:5px 10px;border-radius:12px;font-size:9px'>Месяц</b><b style='background:#ebebf5;padding:5px 10px;border-radius:12px;font-size:9px'>Год</b></div>";
 const bars=E("div","activity-bars");[2,2,2,2,2,2,2].forEach((h,i)=>{const b=document.createElement("i");b.style.height=h+"px";bars.appendChild(b)});act.appendChild(bars);act.insertAdjacentHTML("beforeend","<div style='position:absolute;left:39px;right:39px;bottom:18px;display:flex;justify-content:space-between;font-size:9px;color:#766d88'><span>Чт</span><span>Пт</span><span>Сб</span><span>Вс</span><span>Пн</span><span>Вт</span><span>Ср</span></div>");s.appendChild(act);bottomNav(s,"stats");return s
}
function achievements(){
 const s=newScreen("achievements");s.appendChild(image(O.victory,70,25,340,215,"","achievements/owl"));ribbon(s,"Достижения",85,144,305,82,"achievements/title");
 const tabs=E("div","ui tabs",{left:"49px",top:"251px",width:"378px",height:"42px"},"achievements/tabs");["Все","Прогресс","Особые"].forEach((x,i)=>{const b=document.createElement("button");b.textContent=x;if(i===0)b.className="active";tabs.appendChild(b)});s.appendChild(tabs);
 const data=[["Star","Первые шаги","Реши 10 задач","0/10"],["Book","Любознательный","Реши 50 задач","0/50"],["Trophy","Эрудит","Достигни 5 уровня","0/5"],["Cap","Ценитель классики","Прочитай 10 произведений","0/10"],["Heart","Коллекционер","Собери 20 разных историй","0/20"],["Target","Мастер точности","Реши 30 задач без ошибок","0/30"],["Moon","Ночной гений","Реши 5 задач подряд вечером","0/5"]];
 data.forEach((d,i)=>{const y=301+i*79,c=E("div","ui achievement-card",{top:y+"px"},"achievements/card-"+(i+1)),badge=E("div","badge");c.appendChild(badge);let sheet=d[0]==="Book"||d[0]==="Heart"||d[0]==="Trophy"?"ui":"stats";c.appendChild(sprite(sheet,d[0],15,13,47,47));c.insertAdjacentHTML("beforeend",'<div class="atext"><b>'+d[1]+'</b><small>'+d[2]+'</small></div><div class="prog"><i style="width:0"></i></div><span class="count">'+d[3]+'</span><span class="arrow">›</span>');s.appendChild(c)});
 bottomNav(s,"achievements");return s
}
function shop(){
 const s=newScreen("shop");
 back(s,"home",29,43);
 ribbon(s,"Магазин",111,48,250,73,"shop/title");

 const r=E("div","ui shop-resource",{left:"94px",top:"126px",width:"286px",height:"40px"},"shop/resources");
 const left=E("div","shop-resource-half");left.appendChild(sprite("ui","Feather",11,6,25,28));left.insertAdjacentHTML("beforeend","<b>5</b><button class='plus'>+</button>");
 const right=E("div","shop-resource-half");right.appendChild(sprite("ui","Coin",9,6,26,28));right.insertAdjacentHTML("beforeend","<b>0</b><button class='plus'>+</button>");
 r.append(left,right);s.appendChild(r);

 s.appendChild(image(O.shop,107,158,260,180,"","shop/owl"));

 const f=E("div","ui shop-section",{top:"338px",height:"239px"},"shop/feathers");
 f.insertAdjacentHTML("beforeend","<b style='position:absolute;left:54px;top:14px;font-size:20px'>Перья</b>");
 f.appendChild(sprite("ui","Feather",14,12,31,36));

 const p1=E("div","productbox",{left:"14px",top:"59px"},"shop/feather-pack");
 p1.appendChild(sprite("stats","FeatherBundle",37,5,95,86));
 p1.insertAdjacentHTML("beforeend","<b style='position:absolute;left:28px;top:95px;font-size:13px'>Пачка перьев</b><small style='position:absolute;left:52px;top:115px;color:#82748b'>5 перьев</small><div class='price' style='left:14px;right:14px;bottom:6px'><span class='coin'>◉</span>100</div>");
 f.appendChild(p1);

 const p2=E("div","productbox",{left:"198px",top:"59px"},"shop/feather-bag");
 p2.appendChild(sprite("stats","FeatherBag",38,4,92,90));
 p2.insertAdjacentHTML("beforeend","<b style='position:absolute;left:27px;top:95px;font-size:13px'>Большая пачка</b><small style='position:absolute;left:55px;top:115px;color:#82748b'>15 перьев</small><div class='price' style='left:14px;right:14px;bottom:6px'><span class='coin'>◉</span>250</div>");
 f.appendChild(p2);s.appendChild(f);

 const h=E("div","ui shop-section",{top:"589px",height:"116px"},"shop/hints");
 h.insertAdjacentHTML("beforeend","<b style='position:absolute;left:24px;top:14px;font-size:20px'>Подсказки</b><span style='position:absolute;left:82px;top:67px;font-size:11px;color:#746b83'>5 подсказок</span>");
 h.appendChild(sprite("ui","Bulb",28,48,43,42));
 h.insertAdjacentHTML("beforeend","<div class='price' style='right:14px;top:55px;width:115px'><span class='coin'>◉</span>150</div>");
 s.appendChild(h);

 bottomNav(s,"shop");return s
}
function gameplay(){
 const s=newScreen("gameplay");back(s,"home",26,45);
 const mode=buttonNav("📖 &nbsp; Классика","home",85,46,140,34,"game-top-pill","gameplay/mode");s.appendChild(mode);
 const crown=E("div","ui panel round",{left:"245px",top:"46px",width:"87px",height:"34px",display:"flex",alignItems:"center",justifyContent:"center",gap:"7px"},"gameplay/erudition");crown.appendChild(sprite("ui","Crown",9,4,29,26));crown.insertAdjacentHTML("beforeend","<b>0</b>");s.appendChild(crown);
 const hintb=E("div","ui panel round",{left:"392px",top:"39px",width:"45px",height:"45px"},"gameplay/hints");hintb.appendChild(sprite("ui","Bulb",7,7,31,31));hintb.insertAdjacentHTML("beforeend","<b style='position:absolute;right:-5px;top:-8px;background:#168ff3;color:white;width:22px;height:22px;border-radius:50%;display:grid;place-items:center;font-size:11px'>2</b>");s.appendChild(hintb);
 const hearts=E("div","ui hearts",{left:"189px",top:"91px",width:"100px",height:"35px"},"gameplay/hearts");hearts.innerHTML="<span class='heart'>♥</span><span class='heart'>♥</span><span class='heart'>♥</span>";s.appendChild(hearts);s.appendChild(image(O.normal,153,124,171,129,"","gameplay/owl"));
 s.appendChild(sprite("surfaces","Parchment",44,230,388,429,"gameplay/parchment"));s.appendChild(text("Лёгкий · Цитаты и мысли<br>Осталось 35 букв · 6 слов<br><small>Открыто 6 из 41 букв</small>",99,250,278,48,"game-copy","gameplay/info"));
 const cipher=E("div","ui cipher",{},"gameplay/cipher");const rows=[[["","И","","","Е"],["","","",""]],[["С","","","","","",""],["","Л","",""]],[["","В","","","",""],["","Р","","","","",""]]];rows.forEach((r,ri)=>{const row=E("div","cipher-row");r.forEach((w,wi)=>{const word=E("div","word");w.forEach((ch,ci)=>{const c=E("div","cell"+(ri===0&&wi===0&&ci===0?" sel":""));c.textContent=ch;c.appendChild(Object.assign(document.createElement("small"),{textContent:String((ri*7+wi*4+ci)%19+1)}));word.appendChild(c)});row.appendChild(word)});cipher.appendChild(row)});s.appendChild(cipher);
 const kb=E("div","ui keyboard",{},"gameplay/keyboard"),letters=["Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Ё","Я","Ч","С","М","И","Т","Ь","Б","Ю"];letters.forEach(l=>{const k=document.createElement("button");k.className="key"+(["Е","В","Р","Л","С"].includes(l)?" used":"")+(l==="И"?" disabled":"");k.textContent=l;kb.appendChild(k)});s.appendChild(kb);return s
}
function collections(){
 const s=newScreen("collections");s.appendChild(image(O.normal,28,24,165,175,"","collections/owl"));ribbon(s,"Уровни",112,75,247,83,"collections/title");s.appendChild(sprite("decor","Hourglass",365,144,72,70,"collections/hourglass"));
 const tabs=E("div","ui tabs",{left:"46px",top:"236px",width:"383px",height:"48px"},"collections/tabs");["Авторы","Темы","Книги","Типы"].forEach((x,i)=>{const b=document.createElement("button");b.textContent=x;if(i===0)b.className="active";tabs.appendChild(b)});s.appendChild(tabs);
 const authors=[["Pushkin","А. С. Пушкин","Стихи, поэмы, письма"],["Tolstoy","Л. Н. Толстой","Романы, рассказы, мысли"],["Dostoevsky","Ф. М. Достоевский","Романы, повести, мысли"],["Chekhov","А. П. Чехов","Рассказы, пьесы, цитаты"],["Gogol","Н. В. Гоголь","Повести, поэмы, проза"],["Turgenev","И. С. Тургенев","Проза, рассказы, мысли"]];
 authors.forEach((a,i)=>{const c=E("div","ui author-card",{top:(299+i*89)+"px"},"collections/author-"+(i+1));c.appendChild(sprite("authors",a[0],11,3,70,70));c.insertAdjacentHTML("beforeend",'<div class="author-txt"><b>'+a[1]+'</b><small>'+a[2]+'</small></div><div class="line"></div><span class="n">0/50</span><button class="go">›</button>');s.appendChild(c)});
 bottomNav(s,"collections");return s
}
home();settings();stats();achievements();shop();gameplay();collections();

function show(name){current=name;document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("active",s.dataset.screen===name));select.value=name;if(selected){selected.classList.remove("selected");selected=null}copyId.textContent="ID: —";history.replaceState(null,"","#"+name)}
document.addEventListener("click",e=>{const nav=e.target.closest("[data-nav]");if(nav&&!designer.checked){show(nav.dataset.nav);return}if(designer.checked){const u=e.target.closest("[data-ui]");if(u){e.preventDefault();e.stopPropagation();if(selected)selected.classList.remove("selected");selected=u;u.classList.add("selected");copyId.textContent="ID: "+u.dataset.ui;hint.textContent=u.dataset.ui+" — скажи этот ID и что изменить"}}});
select.addEventListener("change",()=>show(select.value));designer.addEventListener("change",()=>{phone.classList.toggle("design-mode",designer.checked);hint.textContent=designer.checked?"Нажми на элемент — получишь его ID.":"Макет собран по присланным тобой скриншотам."});copyId.addEventListener("click",async()=>{if(selected)try{await navigator.clipboard.writeText(selected.dataset.ui);hint.textContent="Скопировано: "+selected.dataset.ui}catch{}});
function fit(){const top=window.innerWidth<=760?92:54,maxW=Math.max(260,window.innerWidth-20),maxH=Math.max(380,window.innerHeight-top-24),k=Math.min(1,maxW/475,maxH/957);phone.style.transform="scale("+k+")";shell.style.width=475*k+"px";shell.style.height=957*k+"px"}window.addEventListener("resize",fit);fit();show(location.hash.slice(1)||"home");