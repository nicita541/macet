window.SCREEN_BUILDERS=window.SCREEN_BUILDERS||{};
window.SCREEN_BUILDERS.gameplay=function(A){
  const s=A.screen("gameplay","center center",false);
  A.back(s,"home",38,34,"gameplay/back");

  const mode=A.nav(s,"","home",96,35,130,35,"game-pill","gameplay/mode");
  A.sprite(mode,"ui","Book",8,5,29,26);
  A.text(mode,"Классика",37,6,85,22,"title");mode.lastChild.style.cssText+=";color:white;text-align:center;font-size:14px";

  const crown=A.el("div","ui panel round",{left:"247px",top:"35px",width:"87px",height:"35px",display:"flex",alignItems:"center",justifyContent:"center",gap:"7px"},"gameplay/erudition");
  A.sprite(crown,"ui","Crown",8,4,31,27);
  A.text(crown,"0",49,6,25,22,"title");crown.lastChild.style.fontSize="15px";s.appendChild(crown);

  const hint=A.el("div","ui circle",{left:"389px",top:"29px",width:"48px",height:"48px"},"gameplay/hints");
  A.sprite(hint,"ui","Bulb",8,8,32,32);
  A.text(hint,"2",35,-8,22,22,"title");hint.lastChild.style.cssText+=";background:#168ff3;color:white;border-radius:50%;display:grid;place-items:center;font-size:11px";
  s.appendChild(hint);

  const hearts=A.el("div","ui hearts-row",{left:"187px",top:"87px",width:"103px",height:"39px"},"gameplay/hearts");
  for(let i=0;i<3;i++)A.sprite(hearts,"ui","Heart",i*34,2,34,34,"gameplay/heart-"+(i+1));
  s.appendChild(hearts);

  A.sprite(s,"decor","Lantern",76,181,67,55,"gameplay/lantern");
  A.plain(s,A.STANDALONE.owl,145,118,185,138,"","gameplay/owl");

  A.sprite(s,"surfaces","Parchment",43,247,391,431,"gameplay/parchment");
  A.text(s,"Лёгкий · Цитаты и мысли<br>Осталось 35 букв · 6 слов<br><small>Открыто 6 из 41 букв</small>",115,257,245,46,"title","gameplay/info").style.cssText+=";font-size:11px;line-height:14px;text-align:center";
  const prog=A.el("div","ui",{left:"70px",top:"303px",width:"334px",height:"4px",background:"#d8cfb2"},"gameplay/progress");
  const fill=A.el("div","",{width:"48px",height:"4px",background:"#39a88d"});prog.appendChild(fill);s.appendChild(prog);

  const cipher=A.el("div","cipher",null,"gameplay/cipher");
  const rows=[
    [["",18],["",14],["И",19],["",2],["",10],["Е",3]],
    [["",1],["",19],["",5],["",11],["",12],["",1],["",19],["",2]],
    [["",13],["",3],["С",19],["",9],["",1],["",12],["",2],["",9],["",1],["",19],["Л",12],["",1],["",18]],
    [["",1],["",18],["В",3],["",4],["",13],["",1],["",15],["",16],["Р",4],["",17],["",8],["",7],["",3]]
  ];
  rows.forEach(function(rowData,ri){
    const row=A.el("div","cipher-row");
    rowData.forEach(function(pair,ci){
      const c=A.el("div","cell"+(ri===0&&ci===0?" sel":""));
      c.textContent=pair[0];const sm=document.createElement("small");sm.textContent=pair[1];c.appendChild(sm);row.appendChild(c);
    });
    cipher.appendChild(row);
  });
  s.appendChild(cipher);

  const kb=A.el("div","keyboard",null,"gameplay/keyboard");
  const letters=["Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Ё","Я","Ч","С","М","И","Т","Ь","Б","Ю"];
  letters.forEach(function(letter){
    const k=document.createElement("button");k.className="key";
    if(["Е","В","Р","Л","С"].includes(letter))k.classList.add("used");
    if(letter==="И")k.classList.add("disabled");
    k.textContent=letter;kb.appendChild(k);
  });
  s.appendChild(kb);
};