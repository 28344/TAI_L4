"use strict";
function tabliczka_mnozenia() {
    var odp = "";
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 10; j++) {
            odp = odp + (i * j) + " ";
        }
        console.log(odp);
        odp = "";
    }
}
tabliczka_mnozenia();
