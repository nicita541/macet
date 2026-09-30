window.SCREEN_BUILDERS=window.SCREEN_BUILDERS||{};
window.SCREEN_BUILDERS.achievements=function(A){
  const s=A.screen("achievements","center center",true);

  A.plain(s,A.STANDALONE.owlVictory,70,18,340,215,"","achievements/owl");
  A.ribbon(s,"Достижения",82,144,311,83,"achievements/title");
  A.sprite(s,"decor","Laurel",78,159,57,45,"achievements/title-left");
  const rr=A.sprite(s,"decor","Laurel",349,159,57,45,"achievements/title-right");rr.style.transform="scaleX(-1)";

  const tabs=A.el("div","tabs",{left:"48px",top:"251px",width:"379px",height:"42px"},"achievements/tabs");
  ["Все","Прогресс","Особые"].forEach(function(t,i){const b=document.createElement("button");b.textContent=t;if(i===0)b.className="active";tabs.appendChild(b)});
  s.appendChild(tabs);

  const data=[
    ["icons","Star","Первые шаги","Реши 10 задач","0/10","#fff0bd"],
    ["ui","Book","Любознательный","Реши 50 задач","0/50","#fff1d1"],
    ["ui","Trophy","Эрудит","Достигни 5 уровня","0/5","#f0d5ff"],
    ["icons","Cap","Ценитель классики","Прочитай 10 произведений","0/10","#d8f0ff"],
    ["ui","Heart","Коллекционер","Собери 20 разных историй","0/20","#ffd9d9"],
    ["icons","Target","Мастер точности","Реши 30 задач без ошибок","0/30","#d8f7de"],
    ["icons","Moon","Ночной гений","Реши 5 задач подряд вечером","0/5","#ddd5ff"]
  ];
  data.forEach(function(d,i){
    const y=298+i*81;
    const c=A.el("div","achievement-card",{top:y+"px"},"achievements/card-"+(i+1));
    const badge=A.el("div","badge",{background:d[5]});c.appendChild(badge);
    A.sprite(c,d[0],d[1],14,12,49,49);
    const cp=A.el("div","copy");cp.innerHTML="<b>"+d[2]+"</b><small>"+d[3]+"</small>";c.appendChild(cp);
    const prog=A.el("div","prog");prog.innerHTML="<i style='width:0'></i>";c.appendChild(prog);
    const cnt=A.el("span","count");cnt.textContent=d[4];c.appendChild(cnt);
    const go=A.el("button","go");go.textContent="›";c.appendChild(go);
    s.appendChild(c);
  });
  A.bottomNav(s,"achievements");
};