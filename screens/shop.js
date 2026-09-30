window.SCREEN_BUILDERS=window.SCREEN_BUILDERS||{};
window.SCREEN_BUILDERS.shop=function(A){
  const s=A.screen("shop","center center",false);
  A.back(s,"home",39,55,"shop/back");
  A.ribbon(s,"Магазин",132,55,214,70,"shop/title");
  A.sprite(s,"decor","Laurel",108,58,49,39,"shop/title-left");
  const rr=A.sprite(s,"decor","Laurel",320,58,49,39,"shop/title-right");rr.style.transform="scaleX(-1)";

  const res=A.el("div","ui resource-dark",{left:"66px",top:"125px",width:"343px",height:"38px"},"shop/resources");
  A.sprite(res,"ui","Feather",16,5,24,28);
  A.text(res,"5",49,6,25,24,"title");res.lastChild.style.cssText+=";color:white;text-align:center;font-size:16px";
  const p1=A.el("button","plus",{position:"absolute",left:"118px",top:"4px"},"shop/feather-plus");p1.textContent="+";res.appendChild(p1);
  A.sprite(res,"ui","Coin",161,3,31,31);
  A.text(res,"0",232,6,25,24,"title");res.lastChild.style.cssText+=";color:white;text-align:center;font-size:16px";
  const p2=A.el("button","plus",{position:"absolute",right:"9px",top:"4px"},"shop/coin-plus");p2.textContent="+";res.appendChild(p2);
  s.appendChild(res);

  A.plain(s,A.STANDALONE.owlShop,98,153,280,176,"","shop/owl");

  const feathers=A.el("div","shop-section",{top:"324px",height:"241px"},"shop/feathers");
  A.sprite(feathers,"ui","Feather",18,15,31,36);
  A.text(feathers,"Перья",54,17,120,28,"title");feathers.lastChild.style.fontSize="20px";

  const pcard1=A.el("div","product-card",{left:"10px",top:"60px"},"shop/product-small");
  A.sprite(pcard1,"icons","FeatherBundle",40,8,98,89);
  A.text(pcard1,"Пачка перьев",20,97,144,20,"title");pcard1.lastChild.style.cssText+=";font-size:13px;text-align:center";
  A.text(pcard1,"5 перьев",20,118,144,16,"");pcard1.lastChild.style.cssText+=";font-size:10px;text-align:center;color:#82748b";
  const price1=A.el("div","price",{left:"15px",right:"15px",bottom:"6px"},"shop/product-small-price");price1.innerHTML="<span>◉</span><b>100</b>";pcard1.appendChild(price1);
  feathers.appendChild(pcard1);

  const pcard2=A.el("div","product-card",{left:"205px",top:"60px"},"shop/product-large");
  A.sprite(pcard2,"icons","FeatherBag",42,8,99,94);
  A.text(pcard2,"Большая пачка",18,97,148,20,"title");pcard2.lastChild.style.cssText+=";font-size:13px;text-align:center";
  A.text(pcard2,"15 перьев",18,118,148,16,"");pcard2.lastChild.style.cssText+=";font-size:10px;text-align:center;color:#82748b";
  const price2=A.el("div","price",{left:"15px",right:"15px",bottom:"6px"},"shop/product-large-price");price2.innerHTML="<span>◉</span><b>250</b>";pcard2.appendChild(price2);
  feathers.appendChild(pcard2);
  s.appendChild(feathers);

  const hints=A.el("div","shop-section",{top:"575px",height:"116px"},"shop/hints");
  A.text(hints,"Подсказки",24,14,150,28,"title");hints.lastChild.style.fontSize="20px";
  A.sprite(hints,"ui","Bulb",30,48,45,44);
  A.text(hints,"5 подсказок",82,67,110,18,"");hints.lastChild.style.cssText+=";font-size:10px;color:#746b83";
  const hp=A.el("div","price",{right:"14px",top:"55px",width:"115px"},"shop/hints-price");hp.innerHTML="<span>◉</span><b>150</b>";hints.appendChild(hp);
  s.appendChild(hints);

  A.bottomNav(s,"shop");
};