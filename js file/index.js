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
  <img src="./images/certificate1.png" alt="" class="fourc" id="b">
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
      <img src="./images/certificate1.png" alt="" class="fourc" id="a">
  </div>
  <div class="rem" onclick="removeb()" id="imgrem3">
      <img src="./images/certificate2.png" alt="" class="fourc" id="b">
  </div>
  <div class="rem" onclick="removec()" id="imgrem2">
      <img src="./images/certificate3.png" alt="" class="fourc" id="a">
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
  <img src="./images/certificate3.png" alt="" class="fourc" id="b">
  </div>
  <div class="rem" onclick="removec()" id="imgrem2">
  </div>
</div>`
hr4.style.display="none"
hr5.style.display="none"
hr6.style.display=""
}

let menu = document.getElementById("menu")
let menuImg = document.getElementById("menuImg")
let con = document.getElementById("con")

menu.style.display = ""
con.style.display = "none"
function showmenu(){
  menuImg.style.display = "none"
  con.style.display = ""
  con.style.zIndex = 5
}
function cancelShow(){
  menuImg.style.display = ""
  con.style.display = "none"
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