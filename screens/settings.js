window.SCREEN_BUILDERS=window.SCREEN_BUILDERS||{};
window.SCREEN_BUILDERS.settings=function(A){
  const s=A.screen("settings","46% center",false);
  A.back(s,"home",38,27,"settings/back");
  A.ribbon(s,"Настройки",111,69,253,75,"settings/title");
  const leaf=A.sprite(s,"decor","Laurel",343,106,44,35,"settings/title-leaf");leaf.style.transform="scaleX(-1)";
  A.plain(s,A.STANDALONE.owl,183,153,108,120,"","settings/owl");

  const rows=[
    ["Music","Музыка",279,true],
    ["Sound","Звук",380,true],
    ["Vibration","Вибрация",481,true],
    ["Text","Крупный текст",581,false]
  ];
  rows.forEach(function(r){
    const row=A.el("div","setting-row",{top:r[2]+"px"},"settings/"+r[1].toLowerCase().replaceAll(" ","-"));
    const well=A.el("div","icon-well");row.appendChild(well);
    A.sprite(row,"settings",r[0],25,17,48,48);
    const lab=A.el("div","label");lab.textContent=r[1];row.appendChild(lab);
    const tog=A.el("div","toggle"+(r[3]?" on":""));row.appendChild(tog);
    s.appendChild(row);
  });

  const library=A.nav(s,"","collections",66,789,349,39,"","settings/library");
  A.sprite(library,"surfaces","BlueButton",0,0,349,39);
  A.text(library,"В библиотеку",0,8,349,24,"title");library.lastChild.style.cssText+=";color:white;text-align:center;font-size:15px";

  A.text(s,"Музыка: Э. Сати · Robin Alcicatore / Musopen<br>Звуки: Kenney · CC0",119,834,238,35,"","settings/credits").style.cssText+=";font-size:8.5px;line-height:12px;text-align:center;color:#574b52";
  A.text(s,"Инструменты разработчика",151,905,173,14,"","settings/dev").style.cssText+=";font-size:8px;text-align:center;color:#8b796f";
};