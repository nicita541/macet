window.SCREEN_BUILDERS=window.SCREEN_BUILDERS||{};
window.SCREEN_BUILDERS.collections=function(A){
  const s=A.screen("collections","center center",false);

  A.plain(s,A.STANDALONE.owl,24,38,169,164,"","collections/owl");
  A.sprite(s,"ui","Crown",210,58,55,49,"collections/crown");
  A.ribbon(s,"Уровни",139,78,209,78,"collections/title");
  A.sprite(s,"decor","Laurel",232,133,61,48,"collections/title-laurel");
  A.sprite(s,"decor","Hourglass",368,142,63,61,"collections/hourglass");

  const tabs=A.el("div","tabs",{left:"42px",top:"237px",width:"391px",height:"45px"},"collections/tabs");
  ["Авторы","Темы","Книги","Типы"].forEach(function(t,i){const b=document.createElement("button");b.textContent=t;if(i===0)b.className="active";tabs.appendChild(b)});
  s.appendChild(tabs);

  const authors=[
    ["Pushkin","А. С. Пушкин","Стихи, поэмы, письма"],
    ["Tolstoy","Л. Н. Толстой","Романы, рассказы, мысли"],
    ["Dostoevsky","Ф. М. Достоевский","Романы, повести, мысли"],
    ["Chekhov","А. П. Чехов","Рассказы, пьесы, цитаты"],
    ["Gogol","Н. В. Гоголь","Повести, поэмы, проза"],
    ["Turgenev","И. С. Тургенев","Проза, рассказы, мысли"]
  ];
  authors.forEach(function(a,i){
    const card=A.el("div","author-card",{top:(298+i*89)+"px"},"collections/author-"+(i+1));
    A.sprite(card,"authors",a[0],10,3,72,72);
    const cp=A.el("div","copy");cp.innerHTML="<b>"+a[1]+"</b><small>"+a[2]+"</small>";card.appendChild(cp);
    card.appendChild(A.el("div","line"));
    const cnt=A.el("span","count");cnt.textContent="0/50";card.appendChild(cnt);
    const go=A.el("button","go");go.textContent="›";card.appendChild(go);
    s.appendChild(card);
  });

  A.bottomNav(s,"collections");
};