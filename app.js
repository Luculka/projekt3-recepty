/*
Co je za úkol v tomto projektu:
*/

const seznamElement = document.querySelector('.recepty');
const inputElement = document.querySelector('#hledat');
const tlacitkoElement = document.querySelector('#hledat_btn');
const kategorieElement = document.querySelector('#kategorie');
const razeniElement = document.querySelector('#razeni');

const dostupneRecepty = recepty;
let seznamReceptu = [];
let receptElement = document.querySelector(".recept-detail");
let filter = '';
let recept = dostupneRecepty;


// 1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
// HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html
zobrazRecepty();

function zobrazRecepty () {
    dostupneRecepty.forEach((recept) => {
    seznamReceptu += `
    <div class="recept">
    <div class="recept-obrazek">
        <img src="${recept.img}" alt="Obrazek">
    </div>

    <div class="recept-info">
        <h3>${recept.nadpis}</h3>
    </div>
</div>`
})

seznamElement.innerHTML = seznamReceptu;
}

// 2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
// by se měl seznam receptů vyfiltrovat podle hledaného slova.

inputElement.addEventListener('input', function(e){
    let inputText = e.target.value;

    let vyhledaneRecepty = recepty.filter(function(recept){
        return recept.nadpis.toLowerCase().includes(inputText.toLowerCase())
    })

    seznamReceptu='';

    vyhledaneRecepty.forEach((recept) => {
        seznamReceptu += `
        <div class="recept">
        <div class="recept-obrazek">
            <img src="${recept.img}" alt="Obrazek">
        </div>
    
        <div class="recept-info">
            <h3>${recept.nadpis}</h3>
        </div>
    </div>`
      })

    seznamElement.innerHTML = seznamReceptu;
    
})



// 3) Doplň filtrovanání receptů podle kategorie.

// let najdiKategorii = (dostupneRecepty, receptKategorie) => {
//     const recept = dostupneRecepty.find(function (element) {
//         return element.id === receptKategorie
//     })
//     return recept
// }

// 4) Doplň řazení receptů podle hodnocení.

// 5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
// Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
// recept-hodnoceni, recept-nazev, recept-popis.

zobrazRecept(0);

// let recept = vyhledaneRecepty[i];
// recept.addEventListener('click', i => {zobrazRecept(i)});


function zobrazRecept(i) {
    let receptKategorie = document.querySelector('#recept-kategorie');
    receptKategorie.innerHTML = recepty[i].kategorie;

    let receptHodnoceni = document.querySelector('#recept-hodnoceni');
    receptHodnoceni.innerHTML = recepty[i].hodnoceni;
  
    let receptNazev = document.querySelector('#recept-nazev');
    receptNazev.innerHTML = recepty[i].nadpis;

    let receptPopis = document.querySelector('#recept-popis');
    receptPopis.innerHTML = recepty[i].popis;

    let receptFoto = document.querySelector('#recept-foto');
    receptFoto.src = recept[i].img;
  }


// 6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.