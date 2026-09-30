window.SCREENS=window.SCREENS||{};
window.UI=(function(){
  const RAW="https://raw.githubusercontent.com/nicita541/game123/main/Assets/Art/";
  const SHEETS={
    surfaces:{src:RAW+"SpriteSheets/ui_surfaces_reference.png",sprites:{GreenButton:[5,1138,535,240],PurpleButton:[542,1138,544,240],BlueButton:[5,876,535,234],GoldButton:[542,876,544,234],Parchment:[5,378,535,470],CreamCard:[542,406,544,398],KeyboardKey:[115,31,306,317],TitleRibbon:[484,78,602,240]}},
    ui:{src:RAW+"SpriteSheets/ui_icons_reference.png",sprites:{Feather:[45,691,320,375],Crown:[387,741,319,283],Heart:[741,726,320,280],Bulb:[1058,706,390,380],Book:[35,361,358,315],Lightning:[440,359,255,338],Gear:[742,367,321,314],Statistics:[1100,382,317,284],Home:[39,33,330,310],Trophy:[382,16,344,332],Shop:[738,28,333,320],Coin:[1109,24,304,324]}},
    settings:{src:RAW+"SpriteSheets/settings_icons_v1.png",sprites:{Music:[93,698,506,444],Sound:[684,693,503,437],Vibration:[82,91,499,476],Text:[645,93,578,489]}},
    decor:{src:RAW+"SpriteSheets/reference_decor_v2.png",sprites:{Books:[49,845,575,304],Cat:[701,844,510,369],Ink:[184,417,267,417],Lantern:[712,423,481,394],Laurel:[154,41,419,331],Hourglass:[749,39,390,382]}},
    stats:{src:RAW+"SpriteSheets/reference_icons_v2.png",sprites:{Fire:[66,723,260,293],Target:[407,726,299,292],Star:[757,738,274,266],Calendar:[1121,718,277,294],Cap:[47,408,309,219],Moon:[445,403,240,246],Gift:[757,386,281,293],FeatherBundle:[1095,379,320,291],FeatherBag:[48,55,297,311],Video:[399,77,316,243],NoAds:[764,65,281,273],Sparkles:[1148,89,249,235]}},
    authors:{src:RAW+"SpriteSheets/authors_missing.png",sprites:{Pushkin:[0,512,512,512],Tolstoy:[512,512,512,512],Dostoevsky:[1024,512,512,512],Chekhov:[0,0,512,512],Gogol:[512,0,512,512],Turgenev:[1024,0,512,512]}}
  };
  const BG={home:RAW+"Backgrounds/home_reference_v1.png",settings:RAW+"Backgrounds/settings_reference_v1.png",stats:RAW+"Backgrounds/stats_reference_v1.png",achievements:RAW+"Backgrounds/achievements_reference_v1.png",shop:RAW+"Backgrounds/shop_reference_v1.png",gameplay:RAW+"Backgrounds/gameplay_reference_v1.png",collections:RAW+"Backgrounds/collections_reference_v1.png"};
  const OWL={normal:RAW+"owl_mascot.png",shop:RAW+"owl_shop_v2.png",victory:RAW+"owl_victory_v2.png"};

  function el(tag,cls,style,ui){const e=document.createElement(tag);if(cls)e.className=cls;if(style)Object.assign(e.style,style);if(ui)e.dataset.ui=ui;return e}
  function screen(name){const s=el("section","screen",{backgroundImage:'url("'+BG[name]+'")'});s.dataset.screen=name;return s}
  function group(parent,id,x,y,w,h,cls){const g=el("div","ui-group "+(cls||""),{left:x+"px",top:y+"px",width:w+"px",height:h+"px"},id);parent.appendChild(g);return g}
  function image(parent,src,x,y,w,h,cls,ui){const e=el("img","plain-img "+(cls||""),{left:x+"px",top:y+"px",width:w+"px",height:h+"px"},ui);e.src=src;parent.appendChild(e);return e}
  function sprite(parent,sheetKey,name,x,y,w,h,ui){
    const r=SHEETS[sheetKey].sprites[name],sx=r[0],sy=r[1],sw=r[2],sh=r[3],wrap=el("div","atlas",{left:x+"px",top:y+"px",width:w+"px",height:h+"px"},ui),im=document.createElement("img");
    im.onload=function(){const kx=w/sw,ky=h/sh;im.style.width=(im.naturalWidth*kx)+"px";im.style.height=(im.naturalHeight*ky)+"px";im.style.left=(-sx*kx)+"px";im.style.top=(-(im.naturalHeight-sy-sh)*ky)+"px"};
    im.src=SHEETS[sheetKey].src;wrap.appendChild(im);parent.appendChild(wrap);return wrap
  }
  function ribbon(parent,label,x,y,w,h,ui,fontSize){const r=el("div","ribbon-title",{left:x+"px",top:y+"px",width:w+"px",height:h+"px"},ui);parent.appendChild(r);sprite(r,"surfaces","TitleRibbon",0,0,w,h);const sp=document.createElement("span");sp.textContent=label;sp.style.fontSize=(fontSize||Math.round(h*.34))+"px";r.appendChild(sp);return r}
  function back(parent,nav,x,y,w,h,ui){const b=el("button","back click",{left:x+"px",top:y+"px",width:w+"px",height:h+"px"},ui||"global/back");b.dataset.nav=nav||"home";b.type="button";b.textContent="‹";parent.appendChild(b);return b}
  function bottomNav(parent,active,x,y,w,h){const n=el("div","bottomnav",{left:x+"px",top:y+"px",width:w+"px",height:h+"px"},"global/bottom-nav");[["home","Home","Главная"],["stats","Statistics","Статистика"],["achievements","Trophy","Достижения"],["shop","Shop","Магазин"]].forEach(function(item){const b=document.createElement("button");b.type="button";b.dataset.nav=item[0];if(item[0]===active)b.classList.add("active");const ic=document.createElement("div");ic.className="ico";sprite(ic,"ui",item[1],0,0,31,31);const sp=document.createElement("span");sp.textContent=item[2];b.appendChild(ic);b.appendChild(sp);n.appendChild(b)});parent.appendChild(n);return n}
  function coin(parent,x,y,size){return sprite(parent,"ui","Coin",x,y,size,size)}
  return {RAW:RAW,SHEETS:SHEETS,BG:BG,OWL:OWL,el:el,screen:screen,group:group,image:image,sprite:sprite,ribbon:ribbon,back:back,bottomNav:bottomNav,coin:coin};
})();