
// Scrivi una funzione che simuli un gioco di dadi tra due utenti, partendo da un prompt che richieda quanti tiri sono da effettuarsi.  
// Stampare il giocatore che ha totalizzato più punti, tenendo conto che:
// ogni dado ha 6 facce
// ogni giocatore tirerà il dado n volte
// Per ogni giocatore:
// generare un numero casuale per ogni tiro che effettuera’,
// ed ogni tiro sarà sommato ai precedenti per calcolare il punteggio finale del giocatore rispettivo.

// TIPS:
// Usiamo questa formula per generare un numero random → Math.floor(Math.random() * (6 - 1) + 1);




function Gioco_dadi (nr_tiri) {

    let punteggio_giocatore_1 = 0;
    let punteggio_giocatore_2 = 0;

    for (let i = 1; i <= nr_tiri; i++) {

        let random = Math.floor(Math.random() * (6 - 1) + 1);
        let random_2 = Math.floor(Math.random() * (6 - 1) + 1);

        punteggio_giocatore_1 = punteggio_giocatore_1 + random;
        punteggio_giocatore_2 = punteggio_giocatore_2 + random_2;

        console.log(`al tiro ${i} il Giocatore 1 ha estratto il nr ${random}`);
        console.log(`al tiro ${i} il Giocatore 2 ha estratto il nr ${random_2}`);   

    }

 

    switch (true) {
        case punteggio_giocatore_1 > punteggio_giocatore_2:
            console.log( `Il giocatore 1 ha vinto totalizzando ${punteggio_giocatore_1}`);
            break;

        case punteggio_giocatore_1 < punteggio_giocatore_2:
            console.log( `Il giocatore 2 ha vinto totalizzando ${punteggio_giocatore_2}`);
            break;
    
        default: console.log( `Parità : entrambi i giorcatori hanno totalizzato ${punteggio_giocatore_2}`);
            break;
    }


}


  Gioco_dadi ( prompt(`inserisci il nr dei tiri da eseguire`));



