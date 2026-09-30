UI.register("gameplay",(s,U)=>{
 const {sprite,image,back,IMG,$}=U;
 back(s,"home",38,31,"gameplay/back");

 const mode=$("div","ui game-pill game-mode",{left:"90px",top:"34px",width:"128px",height:"32px",fontSize:"13px"},"gameplay/mode");
 mode.appendChild(sprite("ui","Book",7,5,26,22));mode.insertAdjacentHTML("beforeend","<b style='margin-left:22px'>Классика</b>");s.appendChild(mode);

 const er=$("div","ui game-pill game-small",{left:"246px",top:"34px",width:"88px",height:"32px",fontSize:"14px"},"gameplay/erudition");
 er.appendChild(sprite("ui","Crown",8,4,28,24));er.insertAdjacentHTML("beforeend","<b style='margin-left:20px'>0</b>");s.appendChild(er);

 const hint=$("div","ui game-small",{left:"389px",top:"27px",width:"44px",height:"47px",borderRadius:"50%"},"gameplay/hint");
 hint.appendChild(sprite("ui","Bulb",7,8,31,31));hint.insertAdjacentHTML("beforeend","<b style='position:absolute;right:-6px;top:-7px;width:22px;height:22px;border-radius:50%;background:#168ff3;color:#fff;display:grid;place-items:center;font-size:11px'>2</b>");s.appendChild(hint);

 const hearts=$("div","ui hearts",{left:"186px",top:"91px",width:"103px",height:"32px"},"gameplay/hearts");
 hearts.innerHTML="<span class='heart'>♥</span><span class='heart'>♥</span><span class='heart'>♥</span>";s.appendChild(hearts);

 s.appendChild(image(IMG.owl,138,128,160,118,"gameplay/owl"));
 s.appendChild(sprite("decor","Lantern",72,173,73,60,"gameplay/lantern"));

 const paper=$("div","ui",{left:"42px",top:"248px",width:"393px",height:"432px"},"gameplay/parchment");
 paper.appendChild(sprite("surfaces","Parchment",0,0,393,432));
 const info=$("div","game-info",{left:"74px",top:"10px",width:"245px",height:"44px"});info.innerHTML="Лёгкий · Цитаты и мысли<br>Осталось 35 букв · 6 слов<br><small>Открыто 6 из 41 букв</small>";paper.appendChild(info);
 const track=$("div","ui",{left:"29px",top:"56px",width:"335px",height:"5px",background:"#d8d1b6"});const fill=$("div","ui",{left:"0",top:"0",width:"48px",height:"5px",background:"#35a68a"});track.appendChild(fill);paper.appendChild(track);

 const cipher=$("div","cipher",{left:"35px",top:"83px",width:"323px",height:"250px"},"gameplay/cipher");
 const rows=[
  [["",18],["И",14],["",19],["",2],["",10],["Е",3]],
  [["",1],["",19],["",5],["",11],["",12],["",1],["",19],["",2]],
  [["",13],["",3],["С",19],["",9],["",1],["",12],["",2],["",9],["",1],["",19],["Л",12],["",1],["",18]],
  [["",1],["В",18],["",3],["",4],["",13],["",1],["",15],["",16],["Р",4],["",17],["",8],["",7],["",3]]
 ];
 rows.forEach((rowData,ri)=>{const row=$("div","cipher-row");rowData.forEach(([ch,num],ci)=>{const c=$("div","cell"+(ri===0&&ci===0?" sel":""));c.textContent=ch;const sm=document.createElement("small");sm.textContent=num;c.appendChild(sm);row.appendChild(c)});cipher.appendChild(row)});paper.appendChild(cipher);s.appendChild(paper);

 const kb=$("div","ui keyboard",{left:"38px",top:"709px",width:"397px",height:"166px"},"gameplay/keyboard");
 const letters=["Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э","Ё","Я","Ч","С","М","И","Т","Ь","Б","Ю"];
 letters.forEach(l=>{const k=document.createElement("button");k.type="button";k.className="key"+(["Е","В","Р","Л","С"].includes(l)?" used":"")+(l==="И"?" disabled":"");k.textContent=l;kb.appendChild(k)});s.appendChild(kb);
});