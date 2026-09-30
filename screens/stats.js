UI.register("stats",(s,U)=>{
 const {sprite,image,text,ribbon,bottomNav,IMG,$}=U;

 const hero=$("div","ui",{left:"38px",top:"28px",width:"399px",height:"264px"},"stats/hero");
 hero.appendChild(sprite("decor","Books",22,166,214,113));
 hero.appendChild(sprite("decor","Ink",6,150,65,101));
 hero.appendChild(image(IMG.owl,91,71,214,190));
 hero.appendChild(sprite("decor","Cat",286,166,98,71));
 hero.appendChild(sprite("ui","Crown",166,0,57,51));
 const rt=$("div","ribbon-title",{left:"84px",top:"29px",width:"232px",height:"70px"});
 rt.appendChild(sprite("surfaces","TitleRibbon",0,0,232,70));
 rt.appendChild(sprite("decor","Laurel",4,21,55,44));
 const lr=sprite("decor","Laurel",173,21,55,44);lr.style.transform="scaleX(-1)";rt.appendChild(lr);
 const tt=document.createElement("span");tt.textContent="Статистика";tt.style.fontSize="27px";rt.appendChild(tt);hero.appendChild(rt);
 s.appendChild(hero);

 const level=$("div","ui stat-box",{left:"39px",top:"294px",width:"397px",height:"146px"},"stats/level");
 level.insertAdjacentHTML("beforeend","<b style='position:absolute;left:50px;top:16px;font-size:16px'>Уровень эрудиции</b><b style='position:absolute;left:90px;top:53px;font-size:49px'>0</b><div class='progress' style='position:absolute;left:205px;top:88px;width:155px'><i style='width:0'></i></div><small style='position:absolute;left:208px;top:105px;font-size:9px;color:#776d87'>До следующего уровня: 50</small>");
 level.appendChild(sprite("ui","Crown",248,27,66,59));
 level.appendChild(sprite("decor","Laurel",16,64,51,40));
 const ll=sprite("decor","Laurel",137,64,51,40);ll.style.transform="scaleX(-1)";level.appendChild(ll);
 s.appendChild(level);

 const boxes=[
  ["stats/solved",39,450,"Fire","Решено задач","0","Всего заданий"],
  ["stats/accuracy",241,450,"Target","Верных ответов","100%","Точность"],
  ["stats/streak",39,552,"Star","Серия побед","0","Лучший результат: 0"],
  ["stats/today",241,552,"Calendar","Решено сегодня","0","Ваша активность"]
 ];
 boxes.forEach(([id,x,y,ico,title,val,sub])=>{
   const c=$("div","ui stat-box",{left:x+"px",top:y+"px",width:"194px",height:"92px"},id);
   c.appendChild(sprite("stats",ico,10,16,50,52));
   c.insertAdjacentHTML("beforeend","<b style='position:absolute;left:78px;top:14px;font-size:11px'>"+title+"</b><strong style='position:absolute;left:86px;top:34px;font-size:29px'>"+val+"</strong><small style='position:absolute;left:77px;bottom:9px;color:#827893;font-size:8px'>"+sub+"</small>");
   s.appendChild(c);
 });

 const act=$("div","ui stat-box",{left:"39px",top:"657px",width:"397px",height:"198px"},"stats/activity");
 act.insertAdjacentHTML("beforeend","<b style='position:absolute;left:42px;top:15px;font-size:18px'>Активность</b><small style='position:absolute;left:42px;top:42px;color:#81778d;font-size:10px'>Решённые задачи по дням</small><div style='position:absolute;right:18px;top:13px;display:flex;gap:5px'><b style='background:#178ff2;color:white;padding:5px 11px;border-radius:12px;font-size:9px'>Неделя</b><b style='background:#ebebf5;padding:5px 11px;border-radius:12px;font-size:9px'>Месяц</b><b style='background:#ebebf5;padding:5px 11px;border-radius:12px;font-size:9px'>Год</b></div>");
 const nums=$("div","ui",{left:"36px",top:"75px",width:"324px",height:"18px",display:"flex",justifyContent:"space-between",fontSize:"9px",fontWeight:"900"});["0","0","0","0","0","0","0"].forEach(v=>{const sp=document.createElement("span");sp.textContent=v;nums.appendChild(sp)});act.appendChild(nums);
 const baseline=$("div","ui",{left:"34px",top:"155px",width:"329px",height:"2px",background:"#43a8ff"});act.appendChild(baseline);
 const days=$("div","ui",{left:"34px",top:"164px",width:"329px",height:"18px",display:"flex",justifyContent:"space-between",fontSize:"9px",color:"#776d87"});["Чт","Пт","Сб","Вс","Пн","Вт","Ср"].forEach(v=>{const sp=document.createElement("span");sp.textContent=v;days.appendChild(sp)});act.appendChild(days);
 s.appendChild(act);

 bottomNav(s,"stats");
});