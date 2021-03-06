let btnD = document.getElementById('btnDenmark');
let btnS = document.getElementById('btnSweden');
let btnI = document.getElementById('btnIrlandia');

let windowImg = document.getElementById("windowHeadId");
let body = document.getElementById("windowBodyId");
let title = document.getElementById("windowTitleId");
let win = document.getElementById("myModalWindow");
let btnCloseWindow = document.getElementById("windowClose");
let more = document.getElementById('windowMore');

more.addEventListener('click', openMore);
btnD.addEventListener( "click" , openModalDenmark);
btnS.addEventListener( "click" , openModalSweden);
btnI.addEventListener('click', openModalIrlandia);

btnCloseWindow.addEventListener('click', closeModal);

function openMore(){
    if(title.innerHTML == "Denmark"){
        document.location='https://en.wikipedia.org/wiki/Denmark'
    }
    else if(title.innerHTML == "Sweden"){
        document.location='https://en.wikipedia.org/wiki/Sweden'
    }
    else if(title.innerHTML == "Ireland"){
        document.location='https://en.wikipedia.org/wiki/Ireland'
    }
}

function openModalDenmark(){
     win.style.display = "flex";
     title.innerHTML = "Denmark";
     body.innerHTML = " Denmark is a Scandinavian state located on the Jutland Peninsula and numerous nearby islands. It neighbors Sweden and is connected to it by the Øresund Bridge. Copenhagen, the capital of Denmark, is famous for its royal palaces, the colorful old port area of ​​Nyhavn, Tivoli amusement park and the famous statue of the Little Mermaid. Odense, the birthplace of Hans Christian Andersen, is popular with tourists for its medieval center with cobblestone streets and half-timbered houses.";
     windowImg.style.background = "url(./img/Danmark.jpg) 0 0/100% auto no-repeat";
    }

function openModalSweden(){
    win.style.display = "flex";
    title.innerHTML = "Sweden";
    body.innerHTML = "Sweden is a country in Scandinavia, the geography of which includes thousands of coastal islands and inland lakes, taiga forests and mountains covered with glaciers. All major cities - the capital Stockholm and located in the southeast of Gothenburg and Malmö - are seaside. Stockholm occupies 14 islands with over 50 bridges. It is famous for the medieval Gamla Stan (Old Town) district, as well as for royal palaces and museums, including the Skansen open-air museum.";
    windowImg.style.background = "url(./img/Danmark.jpg) 0 0/100% auto no-repeat";
 }

function openModalIrlandia(){
     win.style.display = "flex";
     title.innerHTML = "Ireland";
     body.innerHTML = "Ireland is the third largest island in Europe and the twentieth largest island in the world; western of the two largest British Isles. The island is divided by the state border between the Republic of Ireland and the United Kingdom.";
     windowImg.style.background = "url(./img/irlandija.jpg) 0 0/100% auto no-repeat";
    }


function closeModal(){
    win.style.display = "none";
}


let btnMenu = document.getElementById("btnMenuId");
let menuBox = document.getElementById("menuBoxId");
btnMenu.addEventListener("click", openHambMenu);

let x = 1;
function openHambMenu(){
    x += 1;
    if(x % 2 == 0){
        menuBox.style.display = "block";
    }
    else if(x % 2 != 0){
        menuBox.style.display = "none";
    }   
}

let modalContacts = document.getElementById("myModalWindowContacts");
let btnCont = document.getElementById("btnContactsId");
let btnCloseContacts = document.getElementById("windowContactsClose");
modalContacts.addEventListener('click', closeContactsModal)
btnCont.addEventListener("click", openContactsMenu);

function openContactsMenu(){
    modalContacts.style.display = "flex";
}
function closeContactsModal(){
    modalContacts.style.display = "none";
}

let borgerCont = document.getElementById("burgerContactsId");
borgerCont.addEventListener('click', openContactsMenu);

let btnSet = document.getElementById("btnSettingId");
let modalSet = document.getElementById("mSettingId");
let burgerSet = document.getElementById("burgerSettingsId");
burgerSet.addEventListener('click', openSet)
btnSet.addEventListener('click', openSet);

function openSet(){
    modalSet.style.display = "flex";
}


let btnCloseSet = document.getElementById("buttonSettingCloseId");
btnCloseSet.addEventListener("click",closeSet);

function closeSet(){
    modalSet.style.display = "none";
}

let btnDark = document.getElementById("btnDarkId");
btnDark.addEventListener("click",turnOnDark);
let temeNum;
let link;
let btnModalMore = document.getElementById("windowMore");
    let btnModalClose = document.getElementById("windowClose");
function turnOnDark(){
    temeNum = "dark";
    let btnLight = document.getElementById("btnLightId");
    let btnDarkAfter = document.getElementById("btnDarkId");
    let conteinerBg = document.getElementById("conteinerId");
    let blockBtn1 = document.getElementById("btnDenmark");
    let blockBtn2 = document.getElementById("btnSweden");
    let blockBtn3 = document.getElementById("btnIrlandia");
    conteinerBg.style.background = "url(./img/nightMountains2.jpg) 0 0/auto auto no-repeat";
    localStorage.setItem('teme',temeNum);
    btnModalClose.style.background = "black";
    btnModalMore.style.background = "rgb(34, 25, 43)";
    blockBtn1.style.background = "rgb(34, 25, 43)";
    blockBtn2.style.background = "rgb(34, 25, 43)";
    blockBtn3.style.background = "rgb(34, 25, 43)";
    btnCloseSet.style.background = "dark";
    btnDarkAfter.style.background = "rgb(34, 25, 43)";
    btnLight.style.background = "rgb(34, 25, 43)";
}

let btnLight = document.getElementById("btnLightId");
btnLight.addEventListener('click', turnOnLight);

function turnOnLight(){
    temeNum = "light";
    let btnLight = document.getElementById("btnLightId");
    let btnDarkAfter = document.getElementById("btnDarkId");
    let conteinerBg = document.getElementById("conteinerId");
    let blockBtn1 = document.getElementById("btnDenmark");
    let blockBtn2 = document.getElementById("btnSweden");
    let blockBtn3 = document.getElementById("btnIrlandia");
    conteinerBg.style.background = "url(./img/2.jpg) 0px 0px/cover no-repeat";
    btnModalClose.style.background = "black";
    btnModalMore.style.background = "brown";
    localStorage.setItem('teme',temeNum);
    blockBtn1.style.background = "brown";
    blockBtn2.style.background = "brown";
    blockBtn3.style.background = "brown";
    btnCloseSet.style.background = "dark";
    btnDarkAfter.style.background = "brown";
    btnLight.style.background = "brown";
    // if(document.documentElement.clientWidth <= 900){
    //     conteinerBg.style.background = "url(./img/2.jpg) 0px 0px/auto auto no-repeat";
    // }
    
}

function getCurrentTeme(){
let nameTeme = localStorage.getItem('teme');
if(nameTeme == "dark"){
    turnOnDark();
}
else if(nameTeme == "light"){
    turnOnLight;
}
}

getCurrentTeme();
