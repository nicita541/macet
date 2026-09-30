const ASSET_ROOT = "https://raw.githubusercontent.com/nicita541/game123/main/";
const refs = {
  home: ASSET_ROOT + "01_main_menu.png",
  levels: ASSET_ROOT + "Assets/ReferenceOnly/02_mode_selection.png",
  collections: ASSET_ROOT + "08_collections.png",
  stats: ASSET_ROOT + "07_statistics.png",
  achievements: ASSET_ROOT + "09_achievements.png",
  shop: ASSET_ROOT + "10_shop.png",
  settings: ASSET_ROOT + "Review/FeedbackPass/Settings.png",
  gameplay: ASSET_ROOT + "03_gameplay_classic.png"
};

const collections = {
  authors: [
    ["А. Пушкин","12 из 20","✒"],["Л. Толстой","6 из 20","📖"],["А. Чехов","3 из 20","🖋"],["Ф. Достоевский","0 из 20","◆"]
  ],
  themes: [
    ["Природа","8 из 20","🌿"],["Любовь","5 из 20","♡"],["Путешествия","2 из 20","⌁"],["Мудрость","9 из 20","✦"]
  ],
  books: [
    ["Классика","14 из 20","▥"],["Приключения","7 из 20","⌘"],["Рассказы","4 из 20","▤"],["Поэзия","2 из 20","❦"]
  ],
  types: [
    ["Цитаты","22 из 30","“"],["Истории","13 из 30","☰"],["Пословицы","10 из 30","✣"],["Миниатюры","4 из 30","◈"]
  ]
};

const screens = [...document.querySelectorAll(".screen")];
const select = document.getElementById("screenSelect");
const refLayer = document.getElementById("referenceLayer");
const refToggle = document.getElementById("refToggle");
const refOpacity = document.getElementById("refOpacity");
const designMode = document.getElementById("designMode");
const phone = document.getElementById("phone");
const selectedId = document.getElementById("selectedId");
const selectedHint = document.getElementById("selectedHint");
const bottomNav = document.getElementById("bottomNav");
let current = "home";
let activeSelected = null;

function renderCollections(type="authors"){
  const grid = document.getElementById("collectionGrid");
  grid.innerHTML = collections[type].map((x,i)=>`
    <article class="collection-card card" data-ui="collections/${type}/card-${i+1}">
      <div class="cover">${x[2]}</div>
      <b>${x[0]}</b><span>${x[1]}</span>
      <div class="tiny-progress"><i style="width:${Math.max(8,parseInt(x[1])*4)}%"></i></div>
    </article>`).join("");
}
renderCollections();

function buildKeyboard(){
  const letters = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЫЬЭЮЯ".split("");
  document.getElementById("keyboard").innerHTML = letters.map(l=>`<button class="key">${l}</button>`).join("");
}
buildKeyboard();

function showScreen(name){
  current = name;
  screens.forEach(s=>s.classList.toggle("is-active",s.dataset.screen===name));
  select.value = name;
  bottomNav.style.display = name==="gameplay" ? "none" : "flex";
  document.querySelectorAll("[data-nav]").forEach(b=>b.classList.remove("is-active"));
  document.querySelectorAll('[data-nav="'+name+'"]').forEach(b=>b.classList.add("is-active"));
  refLayer.src = refs[name] || "";
  if(activeSelected){activeSelected.classList.remove("design-selected");activeSelected=null}
  selectedId.textContent="—";
  selectedHint.textContent="Включи режим дизайнера и нажми элемент.";
  history.replaceState(null,"","#"+name);
}
document.addEventListener("click", e=>{
  const nav = e.target.closest("[data-nav]");
  if(nav){ showScreen(nav.dataset.nav); return; }

  const tab = e.target.closest("[data-tab]");
  if(tab){
    document.querySelectorAll(".tab").forEach(x=>x.classList.remove("is-active"));
    tab.classList.add("is-active"); renderCollections(tab.dataset.tab); return;
  }

  const pop = e.target.closest("[data-popup]");
  if(pop){ openModal(pop.dataset.popup); return; }
  if(e.target.matches("[data-close-modal]")) closeModal();

  if(designMode.checked){
    const ui = e.target.closest("[data-ui]");
    if(ui){
      e.preventDefault();e.stopPropagation();
      if(activeSelected) activeSelected.classList.remove("design-selected");
      activeSelected=ui;ui.classList.add("design-selected");
      selectedId.textContent=ui.dataset.ui;
      selectedHint.textContent="Напиши мне этот ID и что именно изменить.";
    }
  }
});
select.addEventListener("change",()=>showScreen(select.value));
designMode.addEventListener("change",()=>phone.classList.toggle("design-mode",designMode.checked));
refToggle.addEventListener("change",()=>{refLayer.style.display=refToggle.checked?"block":"none";refLayer.style.opacity=refOpacity.value/100});
refOpacity.addEventListener("input",()=>refLayer.style.opacity=refOpacity.value/100);
document.getElementById("resetView").addEventListener("click",()=>{refToggle.checked=false;refLayer.style.display="none";designMode.checked=false;phone.classList.remove("design-mode");showScreen("home")});

function openModal(type){
  const modal=document.getElementById("modal"), card=document.getElementById("modalCard");
  if(type==="victory"){
    card.innerHTML=`<img src="${ASSET_ROOT}Assets/Art/owl_victory_v2.png"><h2>Отлично!</h2><p>Раунд завершён. Макет попапа тоже состоит из отдельных элементов.</p><button data-close-modal>Продолжить</button>`;
  } else {
    card.innerHTML=`<img src="${ASSET_ROOT}Assets/Art/owl_sad_v2.png"><h2>Закончились перья</h2><p>Можно восстановить запас и вернуться к этому же уровню.</p><button data-close-modal>Восстановить</button>`;
  }
  modal.classList.add("is-open");
}
function closeModal(){document.getElementById("modal").classList.remove("is-open")}
document.addEventListener("click",e=>{if(e.target.matches("#modalCard [data-close-modal]")) closeModal()});

const initial = location.hash.slice(1);
if(initial && refs[initial]) showScreen(initial); else showScreen("home");
