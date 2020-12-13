// 01- ON DEFINIT LES VARIABLES 
const tpsSec = document.getElementById("number");
const validation = document.getElementById("bouton");
const rst = document.getElementById("retour");
const foc = document.getElementById("formul");
var tb = ["00","00","00"];

// 02- ON CREE LES FONCTIONS EN REPONSE A *00*
    // 2-1 FOCUS AUTOMATIQUE
const focused  = function (){
    tpsSec.focus();
    tb = ["00", "00", "00"];
}
    // 02-2 CONVERSION DE LA DUREE AU FORMAT SOUHAITE ET RETOUR
const convertir = function(e){
    if (tpsSec.value < 60) {
        var sec = tpsSec.value;
        tb[2] = sec;
        e.preventDefault();
    } else if (tpsSec.value >= 60 && tpsSec.value < 3600){
        var min = Math.floor(tpsSec.value / 60);
        tb[1] = min;
        var sec = tpsSec.value - (tb[1]*60);
        tb[2] = sec;
        e.preventDefault();
    } else {
        var heure = Math.floor(tpsSec.value / 3600);
        tb[0] = heure;
        var sec =  tpsSec.value - (tb[0]*3600);
        e.preventDefault();
        if (sec < 60 ) {
            tb[2] = sec;
            e.preventDefault();
        } else {
            min = Math.floor(sec / 60);
            tb[1] = min;
            tb[2] = sec-(tb[1]*60); 
            e.preventDefault();
        }
    } 
    e.preventDefault();
    rst.innerHTML=" La conversion (en hh:min:sec) est => " + tb[0] + " : " + tb[1] + " : "+ tb[2];
};
 // 00- CODE DE DECLENCHEMENT DE L INTERACTIVITE UTILISATEUR
foc.addEventListener("mouseover", focused);
validation.addEventListener("click", convertir);

