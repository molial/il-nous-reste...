
function dateDiff(date1, date2){
    var diff = {}                           // Initialisation du retour
    var tmp = date2 - date1;

    diff.mlT = tmp;
    diff.ml = tmp % 1000;

    s = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
    diff.secT = s;
    diff.sec = s % 60;                    // Extraction du nombre de secondes
 
    min = Math.floor((s-diff.sec)/60);    // Nombre de minutes (partie entière)
    diff.minT = min;
    diff.min = min % 60;                    // Extraction du nombre de minutes
 
    h = Math.floor((min-diff.min)/60);    // Nombre d'heures (entières)
    diff.hourT = h;
    diff.hour = h % 24;                   // Extraction du nombre d'heures
     
    d = Math.floor((h-diff.hour)/24);   // Nombre de jours restants
    diff.dayT = d;
    diff.day = d % 7;

    se = Math.floor((d-diff.day)/7);
    diff.seT = se;
    diff.se = se % 4,34524;

    m = Math.floor((se-diff.se)/4,34524);
    diff.mT = m;
    diff.m = m % 12;

    a = Math.floor((m-diff.m)/12);
    diff.aT = a;
    diff.a = a;
     
    return diff;
}

setInterval(() => {
date1 = new Date();
date2 = new Date('2022-12-19 13:12:00');
diff = dateDiff(date1, date2);

document.getElementById("années").children[0].innerHTML = diff.aT+" années";
document.getElementById("mois").children[0].innerHTML = diff.mT+" mois";
document.getElementById("semaines").children[0].innerHTML = diff.seT+" semaines";
document.getElementById("jours").children[0].innerHTML = diff.dayT+" jours";
document.getElementById("heurs").children[0].innerHTML = diff.hourT+" heurs";
document.getElementById("minutes").children[0].innerHTML = diff.minT+" minutes";
document.getElementById("secondes").children[0].innerHTML = diff.secT+" secondes";
document.getElementById("mlSecondes").children[0].innerHTML = diff.mlT+" millis secondes";
document.getElementById("dodos").children[0].innerHTML = "et aussi du coup "+diff.dayT+" dodos";

document.getElementById("txt2").children[0].innerHTML = "et donc en tous "+diff.a+" années, "+diff.m+" mois, "+diff.se+" semaines, "+diff.day+" jours, "+diff.hour+" heurs, "+diff.min+" minutes, "+diff.sec+" secondes et "+diff.ml+" millis secondes";
}, 1
)


