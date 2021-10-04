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
