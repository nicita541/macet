window.SCREEN_BUILDERS=window.SCREEN_BUILDERS||{};
window.SCREEN_BUILDERS.stats=function(A){
  const s=A.screen("stats","center center",false);

  A.sprite(s,"ui","Crown",218,32,43,39,"stats/header-crown");
  A.ribbon(s,"Статистика",119,49,238,78,"stats/title");
  A.sprite(s,"decor","Laurel",112,72,48,38,"stats/title-left");
  const r=A.sprite(s,"decor","Laurel",315,72,48,38,"stats/title-right");r.style.transform="scaleX(-1)";
  A.plain(s,A.STANDALONE.owl,116,103,226,201,"","stats/owl");
  A.sprite(s,"decor","Ink",55,181,49,77,"stats/ink");
  A.sprite(s,"decor","Cat",348,199,90,66,"stats/cat");

  const lvl=A.el("div","stat-card",{left:"39px",top:"293px",width:"398px",height:"147px"},"stats/level");
  A.text(lvl,"Уровень эрудиции",52,14,200,28,"title");lvl.lastChild.style.fontSize="16px";
  A.text(lvl,"0",91,56,55,58,"title");lvl.lastChild.style.fontSize="48px";
  A.sprite(lvl,"decor","Laurel",18,60,54,43,"stats/laurel-left");
  const lr=A.sprite(lvl,"decor","Laurel",160,60,54,43,"stats/laurel-right");lr.style.transform="scaleX(-1)";
  A.sprite(lvl,"ui","Crown",251,21,64,58,"stats/crown");
  const bar=A.el("div","",{position:"absolute",left:"205px",top:"88px",width:"158px",height:"20px",borderRadius:"7px",background:"#d6d9ed"});lvl.appendChild(bar);
  A.text(lvl,"До следующего уровня: 50",208,111,170,18,"");lvl.lastChild.style.cssText+=";font-size:10px;color:#756d87";
  s.appendChild(lvl);

  const cards=[
    [39,449,"Fire","Решено задач","0","Всего заданий"],
    [241,449,"Target","Верных ответов","100%","Точность"],
    [39,551,"Star","Серия побед","0","Лучший результат: 0"],
    [241,551,"Calendar","Решено сегодня","0","Ваша активность"]
  ];
  cards.forEach(function(c,i){
    const box=A.el("div","stat-card",{left:c[0]+"px",top:c[1]+"px",width:"194px",height:"94px"},"stats/card-"+(i+1));
    A.sprite(box,"icons",c[2],10,17,51,53);
    A.text(box,c[3],78,14,110,20,"title");box.lastChild.style.cssText+=";font-size:11px;text-align:center";
    A.text(box,c[4],79,35,110,35,"title");box.lastChild.style.cssText+=";font-size:29px;text-align:center";
    A.text(box,c[5],73,72,115,15,"");box.lastChild.style.cssText+=";font-size:8px;text-align:center;color:#817793";
    s.appendChild(box);
  });

  const act=A.el("div","stat-card",{left:"39px",top:"657px",width:"398px",height:"199px"},"stats/activity");
  A.text(act,"Активность",43,15,170,28,"title");act.lastChild.style.fontSize="17px";
  A.text(act,"Решённые задачи по дням",43,44,180,16,"");act.lastChild.style.cssText+=";font-size:10px;color:#83798e";
  ["Неделя","Месяц","Год"].forEach(function(t,i){
    const b=A.el("button","click",{position:"absolute",top:"11px",right:(31+(2-i)*62)+"px",height:"25px",minWidth:"55px",borderRadius:"12px",border:"0",background:i===0?"#168ff3":"#ebebf5",color:i===0?"#fff":"#574d72",fontSize:"9px",fontWeight:"900"},i===0?"stats/week":"stats/range-"+i);
    b.textContent=t;act.appendChild(b);
  });
  const values=[0,0,0,0,0,0,0],days=["Чт","Пт","Сб","Вс","Пн","Вт","Ср"];
  for(let i=0;i<7;i++){
    A.text(act,String(values[i]),35+i*50,75,22,14,"title");act.lastChild.style.cssText+=";font-size:9px;text-align:center";
    const line=A.el("div","",{position:"absolute",left:(44+i*50)+"px",top:"156px",width:"26px",height:"2px",background:"#24a3ff"});act.appendChild(line);
    A.text(act,days[i],35+i*50,165,22,14,"");act.lastChild.style.cssText+=";font-size:9px;text-align:center;color:#766d88";
  }
  s.appendChild(act);
  A.bottomNav(s,"stats");
};