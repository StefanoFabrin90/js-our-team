// Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.



// STEP 1: creo un array per contenere le mie card che a loro volta dovranno essere oggetti perche dovranno contenere: img,name,ruolo
const card = [
    {
        img: '<img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett"/>',
        Name: 'Wayne Barnett',
        position: 'Founder & CEO',
    },
    {
        img: '<img src="img/angela-caroll-chief-editor.jpg" alt="Wayne Barnett"/>',
        Name: 'Angela Caroll',
        position: 'Chief editor',
    },
    {
        img: '<img src="img/angela-lopez-social-media-manager.jpg" alt="Wayne Barnett"/>',
        Name: 'Angela Lopez',
        position: 'Social Media Manager',
    },
    {
        img: '<img src="img/barbara-ramos-graphic-designer.jpg" alt="Wayne Barnett"/>',
        Name: 'Barbara Ramos',
        position: 'Graphic Designer',
    },
    {
        img: '<img src="img/walter-gordon-office-manager.jpg" alt="Wayne Barnett"/>',
        Name: 'Walter Gordon',
        position: 'Office Manager',
    },
    {
        img: '<img src="img/scott-estrada-developer.jpg" alt="Wayne Barnett"/>',
        Name: 'Scott Estrada',
        position: 'Developer',
    },
];
console.log(card);


//STEP 2: vado a richimare con una costante il container dove inserire le mie card
const teamContainer = document.querySelector('.team-container');
console.log(teamContainer);


// richiamo la funzione appena creata
generationCard (card, teamContainer);


// STEP 3: attraverso una funzione che al suo interno avra un for andro a creare contenuto all'interno del mio container
function generationCard (card, teamContainer) {
    for (let i = 0; i < card.length; i++){
        // inseriesco il valore in una costante per non ripeter card[i];
        const cardItem = card[i];

        // step 1:richiamo il container dove inserire markup (inseriesco la card statica dell HTML) con il += perche devo aggiunger elementi 

        // step 2: inseriesco con ${} gli elementi del mio array 
        teamContainer.innerHTML += `
        <div class="team-card">
            <div class="card-image">
              ${cardItem.img}
            </div>
            <div class="card-text">
              <h3>${cardItem.Name}</h3>
              <p>${cardItem.position}</p>
            </div>
          </div>`;
    }
}

// STEP 4: creo una nuova card da inserire le mio Array
const newCard = {
    img: '<img src="img/new-team-member-01" alt="Wayne Barnett"/>',
    Name: 'Luca Rossi',
    position: 'Sviluppatore',
}

// faccio una prova per vedere se effettivamneti riesco ad inserirlo nel mio Array
// card.push(newCard); --> funziona 
