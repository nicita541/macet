UI.register("collections",(s,U)=>{
 const {sprite,image,bottomNav,IMG,$}=U;

 const hero=$("div","ui",{left:"36px",top:"44px",width:"403px",height:"188px"},"collections/hero");
 hero.appendChild(image(IMG.owl,0,0,165,157));
 hero.appendChild(sprite("decor","Books",4,122,216,79));
 hero.appendChild(sprite("decor","Hourglass",325,109,68,67));
 const rt=$("div","ribbon-title",{left:"104px",top:"20px",width:"247px",height:"83px"});
 rt.appendChild(sprite("surfaces","TitleRibbon",0,0,247,83));
 rt.appendChild(sprite("ui","Crown",93,-20,62,54));
 rt.appendChild(sprite("decor","Laurel",57,54,52,41));
 const lr=sprite("decor","Laurel",139,54,52,41);lr.style.transform="scaleX(-1)";rt.appendChild(lr);
 const t=document.createElement("span");t.textContent="Уровни";t.style.fontSize="30px";rt.appendChild(t);hero.appendChild(rt);s.appendChild(hero);

 const tabs=$("div","ui tabs",{left:"42px",top:"236px",width:"390px",height:"48px"},"collections/tabs");
 ["Авторы","Темы","Книги","Типы"].forEach((lab,i)=>{const b=document.createElement("button");b.type="button";b.textContent=lab;if(i===0)b.className="active";tabs.appendChild(b)});s.appendChild(tabs);

 const authors=[
  ["Pushkin","А. С. Пушкин","Стихи, поэмы, письма"],
  ["Tolstoy","Л. Н. Толстой","Романы, рассказы, мысли"],
  ["Dostoevsky","Ф. М. Достоевский","Романы, повести, мысли"],
  ["Chekhov","А. П. Чехов","Рассказы, пьесы, цитаты"],
  ["Gogol","Н. В. Гоголь","Повести, поэмы, проза"],
  ["Turgenev","И. С. Тургенев","Проза, рассказы, мысли"]
 ];
 authors.forEach((a,i)=>{
   const y=296+i*90,row=$("div","ui author-row",{top:y+"px"},"collections/author-"+(i+1));
   row.appendChild(sprite("authors",a[0],10,5,70,70));
   const cp=$("div","author-copy");cp.innerHTML="<b>"+a[1]+"</b><small>"+a[2]+"</small>";row.appendChild(cp);
   row.appendChild($("div","line"));const n=$("span","n");n.textContent="0/50";row.appendChild(n);
   const go=$("button","go");go.type="button";go.textContent="›";row.appendChild(go);s.appendChild(row);
 });
 bottomNav(s,"collections");
});