window.SCREEN_BUILDERS=window.SCREEN_BUILDERS||{};
window.SCREEN_BUILDERS.home=function(A){
  const s=A.screen("home","center center",false);

  const gear=A.nav(s,"","settings",45,56,49,49,"circle","home/settings");
  A.sprite(gear,"ui","Gear",8,8,33,33);

  const res=A.el("div","ui resource-dark",{left:"160px",top:"61px",width:"156px",height:"39px"},"home/feathers");
  A.sprite(res,"ui","Feather",10,5,26,30);
  A.text(res,"<b>5</b>",45,7,25,24,"title");
  const plus=A.el("button","plus",{position:"absolute",right:"8px",top:"4px"},"home/feathers-plus");plus.textContent="+";res.appendChild(plus);s.appendChild(res);

  A.sprite(s,"ui","Crown",210,112,56,50,"home/crown");
  A.ribbon(s,"Эрудиция",104,143,267,79,"home/title");

  A.sprite(s,"decor","Laurel",142,211,72,57,"home/laurel-left");
  const lr=A.sprite(s,"decor","Laurel",261,211,72,57,"home/laurel-right");lr.style.transform="scaleX(-1)";

  const er=A.el("div","ui panel round",{left:"188px",top:"210px",width:"100px",height:"49px",display:"grid",placeItems:"center",fontSize:"30px",fontWeight:"900"},"home/erudition");
  er.textContent="0";s.appendChild(er);

  A.plain(s,A.STANDALONE.owl,113,276,250,276,"","home/owl");

  const cont=A.nav(s,"","gameplay",52,568,372,110,"","home/continue");
  A.sprite(cont,"surfaces","GreenButton",0,0,372,110);
  A.sprite(cont,"ui","Book",20,26,61,54);
  A.text(cont,"<b>Продолжить</b><span>Истории и цитаты<br>от простого к сложному</span>",101,17,225,78,"");
  cont.querySelector(".text").style.color="#fff";
  cont.querySelector("b").style.cssText="display:block;font-size:26px;line-height:28px";
  cont.querySelector("span").style.cssText="display:block;font-size:13px;line-height:19px;margin-top:3px";
  A.text(cont,"›",331,25,42,55,"title");cont.lastChild.style.cssText+=";color:white;font-size:34px;text-align:center";

  const levels=A.nav(s,"","collections",67,707,343,79,"","home/levels");
  A.sprite(levels,"surfaces","BlueButton",0,0,343,79);
  A.sprite(levels,"ui","Book",19,19,51,44);
  A.text(levels,"<b>Уровни</b>",85,21,170,37,"");levels.lastChild.style.cssText+=";color:white;font-size:25px";
  A.text(levels,"›",305,18,42,50,"title");levels.lastChild.style.cssText+=";color:white;font-size:34px;text-align:center";

  A.bottomNav(s,"home");
};