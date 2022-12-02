console.log("Funkcje - deklaracja, parametry, return");

const mnozenieLiczb = function (liczba1 = 0, liczba2 = 0) {
    let wynik = liczba1 * liczba2;

    return wynik;
}

let wynikMnozenia = 10;

wynikMnozenia = mnozenieLiczb(2, 4);

console.log( wynikMnozenia );



// function przedstawMnie(imie = "Hans") {
//     console.log(`Mam na imie ${imie}`);
//     console.log(`Miło Cię poznać ${imie}`);
// }

// // przedstawMnie("Monika");
// // przedstawMnie("Bartek");
// przedstawMnie()

// const wypiszMojeImie = function () {
//     console.log("Moje imie to Hans")
// }

// const dodajLiczby = function (liczba1 = 0, liczba2 = 0) {
//     let wynik = liczba1 + liczba2;
//     console.log(wynik);
// }

// // wypiszMojeImie();
// let liczbaHansa = 108;
// let liczbaPierwsza = 1;
// let liczbaDruga = 10;

// dodajLiczby(liczbaHansa, liczbaPierwsza);
// dodajLiczby(liczbaHansa, 20);
