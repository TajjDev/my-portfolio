const textContents = [
    `<p id="myText">SOFTWARE <span class="y">E|</span><span id="remove">NGINEER</span></p>`,
    `<p id="myText">SOFTWARE <span class="y">EN|</span><span id="remove">GINEER</span></p>`,
    `<p id="myText">SOFTWARE <span class="y">ENG|</span><span id="remove">INEER</span></p>`,
    `<p id="myText">SOFTWARE <span class="y">ENGI|</span><span id="remove">NEER</span></p>`,
    `<p id="myText">SOFTWARE <span class="y">ENGIN|</span><span id="remove">EER</span></p>`,
    `<p id="myText">SOFTWARE <span class="y">ENGINE|</span><span id="remove">ER</span></p>`,
    `<p id="myText">SOFTWARE <span class="y">ENGINEE|</span><span id="remove">R</span></p>`,
    `<p id="myText">SOFTWARE <span class="y">ENGINEER|</span></p>`,
  ];
  function changeText(texts) {
    let currentIndex = 0;
    const textElement = document.getElementById('myText');
    if (!textElement) {
      console.error("Element with ID 'myText' not found.");
      return;
    }
    setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      textElement.innerHTML = texts[currentIndex];
    }, 700);
  }
  changeText(textContents);

let onehtml = document.getElementById('onehtml')
let onecss = document.getElementById('onecss')
let onejs = document.getElementById('onejs')
let onets = document.getElementById('onets')
onehtml.style.display = ""
onecss.style.display = "none"
onejs.style.display = "none"
onets.style.display = "none"
function forward() {
onehtml.style.display = "none"
onecss.style.display = ""
onejs.style.display = "none"
onets.style.display = "none"
};
function  backward() {
  onehtml.style.display = "none"
  onecss.style.display = "none"
  onejs.style.display = "none"
  onets.style.display = ""
};
function forward1() {
  onehtml.style.display = "none"
  onecss.style.display = "none"
  onejs.style.display = ""
  onets.style.display = "none"
};
function  backward1() {
  onehtml.style.display = ""
  onecss.style.display = "none"
  onejs.style.display = "none"
  onets.style.display = "none"
};
function forward2() {
  onehtml.style.display = "none"
  onecss.style.display = "none"
  onejs.style.display = "none"
  onets.style.display = ""
};
function  backward2() {
  onehtml.style.display = "none"
  onecss.style.display = ""
  onejs.style.display = "none"
  onets.style.display = "none"
};
function forward3() {
  onehtml.style.display = ""
  onecss.style.display = "none"
  onejs.style.display = "none"
  onets.style.display = "none"
};
function  backward3() {
  onehtml.style.display = "none"
  onecss.style.display = "none"
  onejs.style.display = ""
  onets.style.display = "none"
};
function forward4() {
  onehtml.style.display = ""
  onecss.style.display = "none"
  onejs.style.display = "none"
  onets.style.display = "none"
};
function  backward4() {
  onehtml.style.display = "none"
  onecss.style.display = "none"
  onejs.style.display = ""
  onets.style.display = "none"
};

let hr4 = document.getElementById("hr4")
let hr5 = document.getElementById("hr5")
let hr6 = document.getElementById("hr6")
hr4.style.display="none"
hr5.style.display=""
hr6.style.display="none"
let imgFour = document.getElementById("imgFour");
imgFour.style.display = ""
function removea(){
  imgFour.innerHTML = `<div id="imgFou">
  <div class="rem"  id="imgrem1">
  </div>
  <div class="rem" id="imgrem3">
  <img src="./images/certificate1.png" alt="" class="fourc animate" id="b">
  </div>
  <div class="rem" onclick="removeb()" id="imgrem2">
  <img src="./images/certificate2.png" alt="" class="fourc" id="a">
  </div>
</div>`
hr4.style.display=""
hr5.style.display="none"
hr6.style.display="none"
};
function removeb(){
  imgFour.innerHTML = `<div id="imgFou">
  <div class="rem" onclick="removea()" id="imgrem1">
      <img src="./images/certificate1.png" alt="" class="fourc " id="a">
  </div>
  <div class="rem" onclick="removeb()" id="imgrem3">
      <img src="./images/certificate2.png" alt="" class="fourc animate" id="b">
  </div>
  <div class="rem" onclick="removec()" id="imgrem2">
      <img src="./images/certificate3.png" alt="" class="fourc " id="a">
  </div>
</div>`
hr4.style.display="none"
hr5.style.display=""
hr6.style.display="none"
}
function removec(){
  imgFour.innerHTML = `<div id="imgFou">
  <div class="rem" onclick="removeb()" id="imgrem1">
  <img src="./images/certificate2.png" alt="" class="fourc" id="a">
  </div>
  <div class="rem" id="imgrem3">
  <img src="./images/certificate3.png" alt="" class="fourc animate" id="b">
  </div>
  <div class="rem" onclick="removec()" id="imgrem2">
  </div>
</div>`
hr4.style.display="none"
hr5.style.display="none"
hr6.style.display=""
}

let texts = document.getElementById("texts")
let about = document.getElementById("about")
let certificate = document.getElementById("certificate")
let three = document.getElementById("three")
let project = document.getElementById("project")
let menu = document.getElementById("menu")
let menuImg = document.getElementById("menuImg")
let con = document.getElementById("con")
let main = document.getElementById("main")

menu.style.display = ""
con.style.display = "none"
function showmenu(){
  menuImg.style.display = "none"
  con.style.display = ""
  con.style.zIndex = 5
  texts.style.filter = "blur(5px)"
  about.style.filter = "blur(5px)"
  three.style.filter = "blur(5px)"
  certificate.style.filter = "blur(5px)"
  project.style.filter = "blur(5px)"
  main.style.position = "fixed"
}

function cancelShow(){
  menuImg.style.display = ""
  // con.style.transform = "translate(0, 100%)"
  con.style.display = "none"
  texts.style.filter = "blur(0)"
  about.style.filter = "blur(0)"
  three.style.filter = "blur(0)"
  certificate.style.filter = "blur(0)"
  project.style.filter = "blur(0)"
  main.style.position = ""
}



let ppro = document.getElementById('ppro')
let mm = document.getElementById('mm')
mm.style.opacity = "1"
ppro.style.display = ""
ppro.innerHTML = ". "
ppro.style.color ="rgba(0,0,0,0)"
function over(){
 ppro.innerHTML = "Click on image to explore website"
 ppro.style.color ="#fff"
 mm.style.opacity = "0.4"
}
function out(){
  ppro.innerHTML = ". "
  ppro.style.color ="rgba(0,0,0,0)"
  mm.style.opacity = "1"
}
function removeD(){
  main.style.position = ""
  con.style.display = "none"
  texts.style.filter = "blur(0)"
  about.style.filter = "blur(0)"
  three.style.filter = "blur(0)"
  certificate.style.filter = "blur(0)"
  project.style.filter = "blur(0)"
  menu.style.display = ""
  menuImg.style.display = ""
}
function removeE(){
  main.style.position = ""
  con.style.display = "none"
  texts.style.filter = "blur(0)"
  about.style.filter = "blur(0)"
  three.style.filter = "blur(0)"
  certificate.style.filter = "blur(0)"
  project.style.filter = "blur(0)"
  menu.style.display = ""
  menuImg.style.display = ""
}
function removeF(){
  main.style.position = ""
  con.style.display = "none"
  texts.style.filter = "blur(0)"
  about.style.filter = "blur(0)"
  three.style.filter = "blur(0)"
  certificate.style.filter = "blur(0)"
  project.style.filter = "blur(0)"
  menu.style.display = ""
  menuImg.style.display = ""
}
function removeG(){
  main.style.position = ""
  con.style.display = "none"
  texts.style.filter = "blur(0)"
  about.style.filter = "blur(0)"
  three.style.filter = "blur(0)"
  certificate.style.filter = "blur(0)"
  project.style.filter = "blur(0)"
  menu.style.display = ""
  menuImg.style.display = ""
}
let toTopAction = document.getElementById('toTopAction')
let toTopp = document.getElementById('toTop')
toTopAction.style.display = "none"
toTopp.style.display = "none"
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop> 100 || document.documentElement.scrollTop > 100) {
    toTopAction.style.display = "block";
  } else {
    toTopAction.style.display = "none";
  }
}


function  toTop() {
  toTopAction.style.display = "none"
  toTopp.style.display = ""
  setTimeout(() => {
  toTopp.style.display = "none"
  }, 1500);
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}