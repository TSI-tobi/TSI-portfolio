/* =====================================================================
   EDIT THIS PART

   Every item is one tile on the site:
     t     title
     r     shape: "4/5" portrait, "3/2" landscape, "16/9" wide, "9/16" tall video, "3/4"
     src   one image file, e.g. "images/photos/wedding1.webp"  ("" = placeholder)
     more  OPTIONAL extra images for the same tile (a shoot or album):
           more:["images/photos/wedding2.webp","images/photos/wedding3.webp"]
           The tile shows src as the cover and gets a "6 photos" badge.
           Tapping it opens a viewer where people flip through all of them.

   Videos also take ONE of these:
     yt    YouTube video ID (the part after v= or /shorts/)
     mp4   a small video file, e.g. "videos/reel1.mp4"
     link  any web link (Instagram, TikTok) that opens in a new tab
   For videos, src is the cover image shown on the tile.

   A video PROJECT (several videos in one tile) uses "videos" instead:
     {t:"Arena de Ludus", r:"16/9", src:"images/covers/arena.webp",
      videos:[ {t:"Promo", mp4:"videos/arena-1.mp4"}, {t:"Recap", yt:"VIDEO_ID"} ]}
   The tile gets a "2 videos" badge and the viewer has Previous / Next buttons.
   ===================================================================== */
const CONFIG = {
  handle: "tobilobaonii",      // your personal handle, used for YouTube, Instagram, TikTok and X
  whatsapp: "2347060826621",   // country code + number, no + or spaces
  email: "tsi.archive@outlook.com",
  instagram: "tsi.archive",    // the TSI work page (button in the contact section)
  portrait: "images/tobi.webp",                // e.g. "images/tobi.webp"
  doodlesMove: true            // false = doodles stay still
};

/* A shoot with several photos, filled in, looks like this:
   {t:"Nightcrawler", r:"4/5", src:"images/photos/nightcrawler-1.webp",
    more:["images/photos/nightcrawler-2.webp","images/photos/nightcrawler-3.webp",
          "images/photos/nightcrawler-4.webp","images/photos/nightcrawler-5.webp",
          "images/photos/nightcrawler-6.webp"]}
   A single hero shot just leaves "more" empty: more:[] */
const PHOTOS = [
  {t:"Nightcrawler", r:"4/5", src:"images/photos/n/n1.webp",
   more:["images/photos/n/n2.webp","images/photos/n/n3.webp","images/photos/n/n4.webp",
         "images/photos/n/n5.webp","images/photos/n/n6.webp","images/photos/n/n7.webp",
         "images/photos/n/n8.webp","images/photos/n/n9.webp"]},
  {t:"Academia", r:"4/5", src:"images/photos/a/a1.webp",
   more:["images/photos/a/a2.webp","images/photos/a/a3.webp","images/photos/a/a4.webp"]},
  {t:"Test shoot", r:"3/2", src:"images/photos/t/t1.webp",
   more:["images/photos/t/t2.webp","images/photos/t/t3.webp","images/photos/t/t4.webp"]},
  {t:"Birthday portrait I", r:"4/5", src:"images/photos/b/b1.webp",
   more:["images/photos/b/b2.webp","images/photos/b/b3.webp","images/photos/b/b4.webp"]},
  {t:"Birthday portrait II", r:"4/5", src:"images/photos/bb/bb1.webp",
   more:["images/photos/bb/bb2.webp","images/photos/bb/bb3.webp","images/photos/bb/bb4.webp"]},
  {t:"Test edit I", r:"3/2", src:"images/photos/tt/tt1.webp",
   more:["images/photos/tt/tt2.webp","images/photos/tt/tt3.webp","images/photos/tt/tt4.webp"]},
  {t:"Test edit II", r:"3/2", src:"images/photos/ttt/ttt1.webp",
   more:["images/photos/ttt/ttt2.webp","images/photos/ttt/ttt3.webp","images/photos/ttt/ttt4.webp"]},
  {t:"Fly girls", r:"4/5", src:"images/photos/f/f1.webp",
   more:["images/photos/f/f2.webp","images/photos/f/f3.webp","images/photos/f/f4.webp"]},
  {t:"Emebold I", r:"2/3", src:"images/photos/e/e1.webp",
   more:["images/photos/e/e2.webp","images/photos/e/e3.webp","images/photos/e/e4.webp"]},
  {t:"Emebold II", r:"2/3", src:"images/photos/ee/ee1.webp",
   more:["images/photos/ee/ee2.webp","images/photos/ee/ee3.webp","images/photos/ee/ee4.webp"]}
];
const SHORT = [
  {t:"Cinematic reel",  r:"9/16", src:"images/covers/cinematic-reel.webp",  yt:"", mp4:"videos/cinematic-reel.mp4",  link:""},
  {t:"Fashion reel",    r:"9/16", src:"images/covers/fashion-reel.webp",    yt:"", mp4:"videos/fashion-reel.mp4",    link:""},
  {t:"Gym reel",        r:"9/16", src:"images/covers/gym-reel.webp",        yt:"", mp4:"videos/gym-reel.mp4",        link:""},
  {t:"Short form vlog", r:"9/16", src:"images/covers/short-form-vlog.webp", yt:"", mp4:"videos/short-form-vlog.mp4", link:""}
];
const LONG = [
  {t:"Arena de Ludus", r:"16/9", src:"images/covers/arena-de-ludus.webp",
   videos:[
     {t:"Promo main",  mp4:"videos/Arena De Ludus promo main.mp4"},
     {t:"Promo 1",     mp4:"videos/Arena de ludus promo1.mp4"},
     {t:"Billiards",   mp4:"videos/Billiards arena.mp4"},
     {t:"PlayStation", mp4:"videos/PlayStation arena .mp4"}
   ]},
  {t:"Long form content", r:"16/9", src:"https://img.youtube.com/vi/C_QHkx9tzxQ/maxresdefault.jpg",
   videos:[
     {t:"A full day of shooting fashion content",   yt:"C_QHkx9tzxQ"},
     {t:"A day in the life of a Nigerian creative", yt:"8fmGp-dlhuw"},
     {t:"Content day vlog",                         yt:"mgWn1oUcYr0"}
   ]},
  {t:"Epiphany (short film)", r:"16/9", src:"https://img.youtube.com/vi/MlU8rBQx4IE/maxresdefault.jpg", yt:"MlU8rBQx4IE", mp4:"", link:""},
  {t:"Highlights", r:"16/9", src:"images/covers/highlights.webp",
   videos:[
     {t:"Day in the life of a Nigerian creative", mp4:"videos/Day in the life vlog(1).mp4"},
     {t:"Full day of shooting fashion content",   mp4:"videos/Content day .mp4"}
   ]}
];
const THUMBS = [
  {t:"Thumbnail", r:"16/9", src:"images/thumbnail/thumb1.webp"},
  {t:"Thumbnail", r:"16/9", src:"images/thumbnail/thumb2.webp"},
  {t:"Thumbnail", r:"16/9", src:"images/thumbnail/thumb3.webp"} 
];
const POSTERS = [
  {t:"Package design", r:"4/5", src:"images/photos/package-design-1.webp", more:["images/photos/package-design-2.webp","images/photos/package-design-3.webp","images/photos/package-design-4.webp","images/photos/package-design-5.JPG","images/photos/package-design-6.JPG"]},
  {t:"Carousel",       r:"4/5", src:"images/photos/carousel-1.webp",       more:["images/photos/carousel-2.webp","images/photos/carousel-3.webp","images/photos/carousel-4.webp","images/photos/carousel-5.webp","images/photos/carousel-6.webp"]}
]; 
const STYLING = [
  {t:"look 1",   r:"3/4", src:"images/look1.webp", more:[]},
  {t:"look 2", r:"3/4", src:"images/look2.webp", more:[]},
  {t:"look 3", r:"3/4", src:"images/look3.webp", more:[]},
  {t:"look 4",   r:"3/4", src:"images/look4.webp", more:[]},
  {t:"look 5 co-stylist",   r:"3/4", src:"images/photos/a/a3.webp", more:[]}
];

/* THE HERO CARD DECK
   Leave DECK empty and it fills itself, at random, from everything you
   add above (photos, reels, films, styling, thumbnails, posters). Upload once, it shows up in both places.
   Or pick your own cards. Photos: {t:"Nightcrawler", src:"images/photos/nightcrawler-1.webp", more:[...]}
   Videos: add kind:"video" and one of yt / mp4 / link:
     {t:"Wedding film", kind:"video", src:"images/covers/wedding.webp", yt:"VIDEO_ID"}                */
const DECK = [];
/* ===================================================================== */

const GRADS = [
  "linear-gradient(135deg,#F6E7C8,#E8CB8E)",
  "linear-gradient(160deg,#EBD9C6,#C9A27C)",
  "linear-gradient(135deg,#F3E3D3,#D8B9A0)",
  "linear-gradient(150deg,#F8EBC0,#EFCB6A)",
  "linear-gradient(135deg,#E6D2C0,#B98F6C)",
  "linear-gradient(160deg,#F0E2D0,#D4B895)"
];
const $ = s => document.querySelector(s);
const lb = $("#lb"), stage = $("#stage");
const calm = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
let n = 0;

/* Doodle motion */
if(!CONFIG.doodlesMove || calm){ const d = $("#drift"); if(d) d.remove(); }

/* Ticker */
const words = ["Photography","Videography","Thumbnails","Design","Styling"];
const unit = words.map(w => "<span>" + w + "</span><i>+</i>").join("");
$("#track").innerHTML = unit + unit + unit + unit;

/* Scroll reveal */
const io = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
    }), {threshold:0.1})
  : null;

/* Image or placeholder */
function media(w){
  if(w.src){
    const img = document.createElement("img");
    img.src = w.src; img.alt = w.t; img.loading = "lazy";
    return img;
  }
  const ph = document.createElement("span");
  ph.className = "ph"; ph.style.background = GRADS[n++ % GRADS.length];
  ph.textContent = "Your work goes here";
  return ph;
}
function playIcon(){ const p = document.createElement("span"); p.className = "play"; return p; }

/* Gallery sections */
function fill(id, items, isVideo){
  const box = $("#" + id);
  items.forEach(w=>{
    const card = document.createElement("button");
    card.type = "button"; card.className = "card reveal";
    card.setAttribute("aria-label", "Open " + w.t);
    const thumb = document.createElement("span");
    thumb.className = "thumb"; thumb.style.aspectRatio = w.r;
    thumb.appendChild(media(w));
    if(isVideo) thumb.appendChild(playIcon());
    if(!isVideo && w.more && w.more.length){
      const c = document.createElement("span"); c.className = "count";
      c.textContent = (w.more.length + 1) + " photos"; thumb.appendChild(c);
    }
    if(isVideo && w.videos && w.videos.length > 1){
      const c = document.createElement("span"); c.className = "count";
      c.textContent = w.videos.length + " videos"; thumb.appendChild(c);
    }
    const cap = document.createElement("span");
    cap.className = "cap"; cap.textContent = w.t;
    card.append(thumb, cap);
    card.addEventListener("click", ()=> openItem(w, isVideo));
    box.appendChild(card);
    if(io) io.observe(card); else card.classList.add("in");
  });
}

/* Lightbox (one image, many images, one video, or a project with many videos) */
let cur = null, set = [], idx = 0, vset = [], vidx = 0;
function note(text){
  const e = document.createElement("div"); e.className = "empty"; e.textContent = text; stage.appendChild(e);
}
function showImg(){
  stage.innerHTML = "";
  const img = document.createElement("img"); img.src = set[idx]; img.alt = cur.t; stage.appendChild(img);
  $("#lbCap").textContent = cur.t + (set.length > 1 ? "  (" + (idx + 1) + " of " + set.length + ")" : "");
}
/* Plays ONE video object: {yt} or {mp4} or {link}. Returns false if it opened a new tab. */
function playVideo(v, title){
  stage.innerHTML = "";
  if(v.yt){
    const f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(v.yt) + "?autoplay=1&rel=0";
    f.title = title; f.allow = "autoplay; encrypted-media; picture-in-picture"; f.allowFullscreen = true;
    stage.appendChild(f);
  } else if(v.mp4){
    const el = document.createElement("video");
    el.src = v.mp4; el.controls = true; el.autoplay = true; el.playsInline = true; stage.appendChild(el);
  } else if(v.link){
    if(vset.length < 2){ window.open(v.link, "_blank", "noopener"); return false; }
    const d = document.createElement("div"); d.className = "empty";
    const a = document.createElement("a"); a.href = v.link; a.target = "_blank"; a.rel = "noopener";
    a.textContent = "Open " + title + " in a new tab"; a.style.color = "var(--sun)"; a.style.fontWeight = "700";
    d.appendChild(a); stage.appendChild(d);
  } else {
    note("Add this video's YouTube ID (yt), a file (mp4) or a link in the list to play it here.");
  }
  return true;
}
function showVid(){
  const v = vset[vidx];
  const title = v.t ? cur.t + ": " + v.t : cur.t;
  const ok = playVideo(v, title);
  $("#lbCap").textContent = title + (vset.length > 1 ? "  (" + (vidx + 1) + " of " + vset.length + ")" : "");
  return ok;
}
function step(d){
  if(vset.length > 1){ vidx = (vidx + d + vset.length) % vset.length; showVid(); }
  else if(set.length > 1){ idx = (idx + d + set.length) % set.length; showImg(); }
}
function openItem(w, isVideo){
  cur = w; set = []; idx = 0; vset = []; vidx = 0; stage.innerHTML = "";
  stage.className = "stage" + (w.r === "9/16" ? " vertical" : "");
  $("#lbNav").hidden = true;
  $("#lbCap").textContent = w.t;
  if(isVideo){
    vset = (w.videos && w.videos.length) ? w.videos : [w];
    if(!showVid()) return;
    $("#lbNav").hidden = vset.length < 2;
  } else if(w.src){
    set = [w.src].concat(w.more || []);
    showImg();
    $("#lbNav").hidden = set.length < 2;
  } else {
    note("Add an image file name (src) in the list to show it here.");
  }
  lb.showModal();
}
lb.addEventListener("close", ()=>{ stage.innerHTML = ""; });
lb.addEventListener("click", e=>{ if(e.target === lb) lb.close(); });
$("#lbClose").addEventListener("click", ()=> lb.close());
$("#prev").addEventListener("click", ()=> step(-1));
$("#next").addEventListener("click", ()=> step(1));
document.addEventListener("keydown", e=>{
  if(!lb.open) return;
  if(e.key === "ArrowRight") step(1);
  if(e.key === "ArrowLeft") step(-1);
});

/* Hero card deck */
const deckEl = $("#deck"), deckCount = $("#deckCount");
const cards = [];
let order = [], busy = false;
/* Where cards sit in the stack: x/y in %, r = tilt. Position 0 is the top card. */
const POS = [
  {x:0,  y:0,   r:-3},
  {x:6,  y:-3,  r:3},
  {x:-5, y:-6,  r:-7},
  {x:8,  y:-8,  r:7},
  {x:-7, y:-10, r:-10}
];
function shuffled(a){
  a = a.slice();
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function deckItems(){
  if(DECK.length){
    return DECK.map(w => ({tag: w.tag || (w.kind === "video" ? "Video" : "Photo"), item:w, video: w.kind === "video"}));
  }
  const all = [];
  const add = (arr, tag, video) => arr.forEach(w => all.push({tag:tag, item:w, video:!!video}));
  add(PHOTOS, "Photo"); add(STYLING, "Styling"); add(POSTERS, "Design");
  add(THUMBS, "Thumbnail"); add(SHORT, "Reel", true); add(LONG, "Film", true);
  const real = all.filter(x => x.item.src);
  if(real.length) return shuffled(real).slice(0, 12);
  return [
    {tag:"Photo",     item:PHOTOS[0],  video:false},
    {tag:"Film",      item:LONG[0],    video:true},
    {tag:"Styling",   item:STYLING[0], video:false},
    {tag:"Reel",      item:SHORT[0],   video:true},
    {tag:"Design",    item:POSTERS[0], video:false},
    {tag:"Thumbnail", item:THUMBS[0],  video:false}
  ];
}
function buildDeck(){
  deckItems().forEach(f=>{
    const w = f.item;
    const b = document.createElement("button");
    b.type = "button"; b.className = "dcard";
    b.setAttribute("aria-label", "Open " + w.t);
    const m = media(w);
    if(m.classList.contains("ph")) m.textContent = "";
    b.appendChild(m);
    const chip = document.createElement("span"); chip.className = "chip"; chip.textContent = f.tag; b.appendChild(chip);
    if(f.video) b.appendChild(playIcon());
    const cap = document.createElement("span"); cap.className = "dcap"; cap.textContent = w.t; b.appendChild(cap);
    b.addEventListener("click", ()=>{ if(!busy) openItem(w, f.video); });
    deckEl.appendChild(b);
    cards.push({el:b});
  });
  order = cards.map((_, i) => i);
}
function layout(){
  order.forEach((ci, p)=>{
    const el = cards[ci].el, s = POS[Math.min(p, POS.length - 1)], st = el.style;
    st.setProperty("--x", s.x + "%");
    st.setProperty("--y", s.y + "%");
    st.setProperty("--r", s.r + "deg");
    st.setProperty("--z", order.length - p);
    st.setProperty("--o", p < POS.length ? 1 : 0);
    el.classList.toggle("top", p === 0);
    el.tabIndex = p === 0 ? 0 : -1;
    el.setAttribute("aria-hidden", p === 0 ? "false" : "true");
  });
  deckCount.textContent = order.length + (order.length === 1 ? " card" : " cards");
}
function spread(){
  const m = Math.min(order.length, 6);
  order.forEach((ci, p)=>{
    if(p >= m) return;
    const k = p - (m - 1) / 2, st = cards[ci].el.style;
    st.setProperty("--x", (k * 11).toFixed(1) + "%");
    st.setProperty("--y", (k * k * 1.4 - 4).toFixed(1) + "%");
    st.setProperty("--r", (k * 9).toFixed(1) + "deg");
    st.setProperty("--o", 1);
  });
}
function shuffleDeck(){
  if(busy || order.length < 2) return;
  busy = true; deckEl.classList.add("busy");
  if(!calm) spread();
  setTimeout(()=>{
    order = shuffled(order); layout();
    setTimeout(()=>{ busy = false; deckEl.classList.remove("busy"); }, calm ? 0 : 600);
  }, calm ? 0 : 520);
}
function nextCard(){
  if(busy || order.length < 2) return;
  order.push(order.shift()); layout();
}
buildDeck(); layout();
$("#shuf").addEventListener("click", shuffleDeck);
$("#nextCard").addEventListener("click", nextCard);

/* Build the page */
fill("g-photo", PHOTOS, false);
fill("g-short", SHORT, true);
fill("g-long", LONG, true);
fill("g-thumb", THUMBS, false);
fill("g-poster", POSTERS, false);
fill("g-style", STYLING, false);

/* Personal pages */
const SOC = [
  {n:"YouTube",   u:"https://www.youtube.com/@",
   i:'<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z"/>'},
  {n:"Instagram", u:"https://instagram.com/",
   i:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6"/>'},
  {n:"TikTok",    u:"https://www.tiktok.com/@",
   i:'<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.4 2.6 2 4.2 5 4.5"/>'},
  {n:"X",         u:"https://x.com/",
   i:'<path d="M4 4l16 16M20 4L4 20"/>'}
];
$("#handleText").textContent = "@" + CONFIG.handle;
$("#socGrid").innerHTML = SOC.map(s =>
  '<a class="soc reveal" href="' + s.u + encodeURIComponent(CONFIG.handle) + '" target="_blank" rel="noopener">' +
  '<span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true">' + s.i + '</svg></span>' +
  '<span><b>' + s.n + '</b><small>@' + CONFIG.handle + '</small></span></a>'
).join("");
document.querySelectorAll("#socGrid .soc").forEach(el => { if(io) io.observe(el); else el.classList.add("in"); });

/* Contact links */
$("#wa").href = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent("Hi Tobi, I'd like to talk about a project.");
$("#mail").href = "mailto:" + CONFIG.email + "?subject=" + encodeURIComponent("Project enquiry");
$("#ig").href = "https://instagram.com/" + CONFIG.instagram;
$("#ig").target = "_blank"; $("#ig").rel = "noopener";
if(CONFIG.portrait){
  const img = document.createElement("img"); img.src = CONFIG.portrait; img.alt = "Portrait of Tobi";
  $("#portrait").appendChild(img);
}
$("#year").textContent = "© " + new Date().getFullYear();
