UI.register("home",(s,U)=>{
 const {sprite,image,text,ribbon,bottomNav,IMG,$}=U;

 // settings
 const gear=$("button","ui circle-btn",{left:"45px",top:"56px",width:"52px",height:"52px"},"home/settings");
 gear.type="button";gear.dataset.nav="settings";gear.appendChild(sprite("ui","Gear",9,9,34,34));s.appendChild(gear);

 // energy
 const energy=$("div","ui resource-bar",{left:"158px",top:"60px",width:"157px",height:"42px"},"home/energy");
 energy.appendChild(sprite("ui","Feather",11,7,24,28));
 energy.insertAdjacentHTML("beforeend","<b style='margin-left:2px'>5</b><button class='plus' type='button'>+</button>");
 s.appendChild(energy);

 // header cluster
 const header=$("div","ui",{left:"117px",top:"108px",width:"242px",height:"169px"},"home/header");
 header.appendChild(sprite("ui","Crown",89,0,63,56));
 const rr=$("div","ribbon-title",{left:"0",top:"38px",width:"242px",height:"72px"});
 rr.appendChild(sprite("surfaces","TitleRibbon",0,0,242,72));
 const rtxt=document.createElement("span");rtxt.textContent="Эрудиция";rtxt.style.fontSize="32px";rr.appendChild(rtxt);header.appendChild(rr);
 header.appendChild(sprite("decor","Laurel",28,102,66,52));
 const laurelR=sprite("decor","Laurel",148,102,66,52);laurelR.style.transform="scaleX(-1)";header.appendChild(laurelR);
 const np=$("div","number-pill",{left:"74px",top:"106px",width:"96px",height:"47px"});np.textContent="0";np.style.fontSize="27px";header.appendChild(np);
 s.appendChild(header);

 // owl
 s.appendChild(image(IMG.owl,112,277,254,264,"home/owl"));

 // continue
 const cont=$("button","big-action",{left:"51px",top:"568px",width:"372px",height:"110px"},"home/continue");
 cont.type="button";cont.dataset.nav="gameplay";cont.appendChild(sprite("surfaces","GreenButton",0,0,372,110));
 cont.appendChild(sprite("ui","Book",21,28,55,49));
 const ccopy=$("div","action-copy",{left:"100px",top:"17px",width:"220px",height:"78px"});
 ccopy.innerHTML="<b style='font-size:26px'>Продолжить</b><span style='font-size:13px;line-height:19px;margin-top:2px'>Истории и цитаты<br>от простого к сложному</span>";
 cont.appendChild(ccopy);const ca=$("span","arrow",{right:"32px",top:"32px",fontSize:"36px"});ca.textContent="›";cont.appendChild(ca);s.appendChild(cont);

 // levels
 const levels=$("button","big-action",{left:"66px",top:"709px",width:"346px",height:"81px"},"home/levels");
 levels.type="button";levels.dataset.nav="collections";levels.appendChild(sprite("surfaces","BlueButton",0,0,346,81));
 levels.appendChild(sprite("ui","Book",20,20,49,43));
 const lcopy=$("div","action-copy",{left:"88px",top:"21px",width:"180px",height:"44px"});lcopy.innerHTML="<b style='font-size:24px'>Уровни</b>";levels.appendChild(lcopy);
 const la=$("span","arrow",{right:"31px",top:"17px",fontSize:"35px"});la.textContent="›";levels.appendChild(la);s.appendChild(levels);

 bottomNav(s,"home");
});