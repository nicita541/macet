UI.register("settings",(s,U)=>{
 const {sprite,image,text,ribbon,back,IMG,$}=U;
 back(s,"home",38,26,"settings/back");
 ribbon(s,"Настройки",94,67,288,64,"settings/title",29);
 s.appendChild(image(IMG.owl,180,177,116,100,"settings/owl"));

 const rows=[
  ["settings/music","Music","Музыка",278,true],
  ["settings/sound","Sound","Звук",379,true],
  ["settings/vibration","Vibration","Вибрация",480,true],
  ["settings/large-text","Text","Крупный текст",580,false]
 ];
 rows.forEach(([id,icon,label,y,on])=>{
   const row=$("div","ui settings-row",{top:y+"px"},id);
   const well=$("div","icon-well");row.appendChild(well);
   row.appendChild(sprite("settings",icon,25,17,48,47));
   const lab=$("div","label");lab.textContent=label;row.appendChild(lab);
   const tog=$("div","toggle "+(on?"on":""));row.appendChild(tog);
   s.appendChild(row);
 });

 const lib=$("button","ui clickable",{left:"64px",top:"788px",width:"349px",height:"39px",border:"2px solid #fff4c9",borderRadius:"22px",background:"linear-gradient(#39b9ff,#0b7eea)",color:"#fff",boxShadow:"0 2px 5px #0002",fontWeight:"900",fontSize:"15px"},"settings/library");
 lib.type="button";lib.dataset.nav="collections";lib.textContent="В библиотеку";s.appendChild(lib);

 const credits=text("Музыка: Э. Сати · Robin Alcicatore / Musopen<br>Звуки: Kenney · CC0",133,831,210,39,"settings/credits");
 credits.style.fontSize="8px";credits.style.textAlign="center";credits.style.color="#66585b";credits.style.lineHeight="12px";s.appendChild(credits);
 const dev=text("Инструменты разработчика",168,895,150,20,"settings/developer");
 dev.style.fontSize="8px";dev.style.textAlign="center";dev.style.color="#8b796f";s.appendChild(dev);
});