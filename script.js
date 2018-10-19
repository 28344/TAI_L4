"use strict";
function tabliczka_mnozenia() {
    let odp = "";
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            odp = odp + (i * j) + " ";
        }
        console.log(odp);
        odp = "";
    }
}
tabliczka_mnozenia();
