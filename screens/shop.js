UI.register("shop",(s,U)=>{
 const {sprite,image,ribbon,back,bottomNav,IMG,$}=U;
 back(s,"home",39,54,"shop/back");

 // Title with leaves
 const title=$("div","ribbon-title",{left:"120px",top:"53px",width:"237px",height:"58px"},"shop/title");
 title.appendChild(sprite("surfaces","TitleRibbon",0,0,237,58));
 title.appendChild(sprite("decor","Laurel",-23,9,56,44));
 const tr=sprite("decor","Laurel",204,9,56,44);tr.style.transform="scaleX(-1)";title.appendChild(tr);
 const ts=document.createElement("span");ts.textContent="Магазин";ts.style.fontSize="27px";title.appendChild(ts);s.appendChild(title);

 const res=$("div","ui resource-bar",{left:"96px",top:"126px",width:"304px",height:"34px"},"shop/resources");
 const left=$("div","resource-part",{width:"152px"});left.appendChild(sprite("ui","Feather",9,4,23,26));left.insertAdjacentHTML("beforeend","<b>5</b><button type='button' class='plus'>+</button>");
 const right=$("div","resource-part",{width:"152px"});right.appendChild(sprite("ui","Coin",9,4,24,26));right.insertAdjacentHTML("beforeend","<b>0</b><button type='button' class='plus'>+</button>");
 res.appendChild(left);res.appendChild(right);s.appendChild(res);

 s.appendChild(image(IMG.owlShop,104,165,263,144,"shop/owl"));

 const feathers=$("div","ui shop-panel",{top:"324px",height:"242px"},"shop/feathers");
 feathers.appendChild(sprite("ui","Feather",15,14,30,35));
 feathers.insertAdjacentHTML("beforeend","<b style='position:absolute;left:54px;top:14px;font-size:20px'>Перья</b>");
 const p1=$("div","product-card",{left:"13px",top:"61px"},"shop/pack-5");
 p1.appendChild(sprite("stats","FeatherBundle",35,6,104,94));
 p1.insertAdjacentHTML("beforeend","<b style='position:absolute;left:31px;top:102px;font-size:13px'>Пачка перьев</b><small style='position:absolute;left:60px;top:123px;color:#82748b;font-size:10px'>5 перьев</small>");
 const pr1=$("button","price-btn",{left:"14px",right:"14px",bottom:"7px",width:"150px"});pr1.type="button";pr1.appendChild(sprite("surfaces","GreenButton",0,0,150,31));const ps1=document.createElement("span");ps1.innerHTML="<b style='font-size:18px'>◉</b>100";pr1.appendChild(ps1);p1.appendChild(pr1);feathers.appendChild(p1);
 const p2=$("div","product-card",{left:"207px",top:"61px"},"shop/pack-15");
 p2.appendChild(sprite("stats","FeatherBag",40,6,100,98));
 p2.insertAdjacentHTML("beforeend","<b style='position:absolute;left:31px;top:102px;font-size:13px'>Большая пачка</b><small style='position:absolute;left:61px;top:123px;color:#82748b;font-size:10px'>15 перьев</small>");
 const pr2=$("button","price-btn",{left:"14px",right:"14px",bottom:"7px",width:"150px"});pr2.type="button";pr2.appendChild(sprite("surfaces","GreenButton",0,0,150,31));const ps2=document.createElement("span");ps2.innerHTML="<b style='font-size:18px'>◉</b>250";pr2.appendChild(ps2);p2.appendChild(pr2);feathers.appendChild(p2);
 s.appendChild(feathers);

 const hints=$("div","ui shop-panel",{top:"575px",height:"116px"},"shop/hints");
 hints.insertAdjacentHTML("beforeend","<b style='position:absolute;left:24px;top:15px;font-size:20px'>Подсказки</b><span style='position:absolute;left:82px;top:68px;color:#766c80;font-size:11px'>5 подсказок</span>");
 hints.appendChild(sprite("ui","Bulb",29,48,42,42));
 const hp=$("button","price-btn",{right:"14px",top:"54px",width:"128px"});hp.type="button";hp.appendChild(sprite("surfaces","GreenButton",0,0,128,31));const hs=document.createElement("span");hs.innerHTML="<b style='font-size:18px'>◉</b>150";hp.appendChild(hs);hints.appendChild(hp);s.appendChild(hints);

 bottomNav(s,"shop");
});