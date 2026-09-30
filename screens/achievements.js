UI.register("achievements",(s,U)=>{
 const {sprite,image,ribbon,bottomNav,IMG,$}=U;

 const hero=$("div","ui",{left:"44px",top:"22px",width:"388px",height:"224px"},"achievements/hero");
 hero.appendChild(sprite("decor","Books",5,121,220,116));
 hero.appendChild(image(IMG.owlVictory,56,0,276,194));
 const rt=$("div","ribbon-title",{left:"30px",top:"125px",width:"328px",height:"87px"});
 rt.appendChild(sprite("surfaces","TitleRibbon",0,0,328,87));
 rt.appendChild(sprite("decor","Laurel",3,28,62,49));
 const lr=sprite("decor","Laurel",262,28,62,49);lr.style.transform="scaleX(-1)";rt.appendChild(lr);
 const t=document.createElement("span");t.textContent="Достижения";t.style.fontSize="30px";rt.appendChild(t);hero.appendChild(rt);
 s.appendChild(hero);

 const tabs=$("div","ui tabs",{left:"48px",top:"249px",width:"378px",height:"36px"},"achievements/tabs");
 ["Все","Прогресс","Особые"].forEach((lab,i)=>{const b=document.createElement("button");b.type="button";b.textContent=lab;if(i===0)b.className="active";tabs.appendChild(b)});s.appendChild(tabs);

 const rows=[
  ["Star","stats","Первые шаги","Реши 10 задач","0/10","#ffe7a0"],
  ["Book","ui","Любознательный","Реши 50 задач","0/50","#fff0d1"],
  ["Trophy","ui","Эрудит","Достигни 5 уровня","0/5","#e9d6ff"],
  ["Cap","stats","Ценитель классики","Прочитай 10 произведений","0/10","#c9eef2"],
  ["Heart","ui","Коллекционер","Собери 20 разных историй","0/20","#ffd1cf"],
  ["Target","stats","Мастер точности","Реши 30 задач без ошибок","0/30","#d2f5d0"],
  ["Moon","stats","Ночной гений","Реши 5 задач подряд вечером","0/5","#dad8ff"]
 ];
 rows.forEach((r,i)=>{
   const [icon,sheet,title,sub,count,bg]=r,y=296+i*81;
   const row=$("div","ui achievement-row",{top:y+"px"},"achievements/card-"+(i+1));
   const badge=$("div","badge",{background:bg});row.appendChild(badge);
   row.appendChild(sprite(sheet,icon,15,13,48,48));
   const cp=$("div","copy");cp.innerHTML="<b>"+title+"</b><small>"+sub+"</small>";row.appendChild(cp);
   const pr=$("div","progress");pr.appendChild(document.createElement("i"));row.appendChild(pr);
   const cnt=$("span","count");cnt.textContent=count;row.appendChild(cnt);
   const ar=$("span","arrow");ar.textContent="›";row.appendChild(ar);
   s.appendChild(row);
 });
 bottomNav(s,"achievements");
});