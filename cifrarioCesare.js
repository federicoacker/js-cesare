/**
 * ESERCIZIO: Cifrario di Cesare
 * --------------------------------
 * Il Cifrario di Cesare è uno dei più antichi metodi di crittografia.
 * Funziona spostando ogni lettera del messaggio di un numero fisso di posizioni
 * nell'alfabeto. In questo esercizio useremo uno spostamento di 3.
 *
 * Esempio: "abc" → "def"  |  "xyz" → "abc" (il wrap-around!)
 *
 * OBIETTIVO: completare il codice qui sotto per cifrare il messaggio inserito
 * dall'utente usando un ciclo for e l'array dell'alfabeto.
 */

// --- DATI ---

// Array con tutte le lettere dell'alfabeto (già pronto!)
const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const lunghezzaAlfabeto = alfabeto.length; // Lunghezza dell'alfabeto
const ultimoIndiceAlfabeto = lunghezzaAlfabeto - 1; //Ultimo indice dell'alfabeto
const SHIFT = 3; // numero di posizioni da spostare

// Chiedi il messaggio all'utente e convertilo in minuscolo e togli spazi all'inizio e alla fine
const messaggio = prompt("Inserisci il messaggio da cifrare:").toLowerCase().trim();

// Variabile che conterrà il messaggio cifrato (inizia vuota)
let messaggioCifrato = "";


// --- CIFRATURA ---

for (let i = 0; i < messaggio.length; i++) {
    const currentChar = messaggio[i];
    const indiceLettera = alfabeto.indexOf(currentChar); //Vediamo quale sarebbe l'indice della nostra lettera corrente del messaggio, all'interno dell'alfabeto
    if(indiceLettera !== -1){ // Se il char corrente non è uno spazio o un segno di punteggiatura o un razzo missile o qualsiasi altra cosa
        const letteraDaInserire = //Facciamo un controllo
        (indiceLettera + SHIFT <= ultimoIndiceAlfabeto) // Se aggiungendo il nostro valore SHIFT rimaniamo comunque all'interno dell'array alfabeto
        ? alfabeto[indiceLettera + SHIFT] // Allora la lettera da inserire è semplicemente la lettera dell'alfabeto shiftata di valore SHIFT
        : alfabeto[indiceLettera + SHIFT - lunghezzaAlfabeto]; // Se invece sforiamo, la lettera da inserire 
        // è data da indiceLettera + SHIFT - la lunghezza dell'alfabeto visto che stiamo ricominciando dall'inizio dell'alfabeto
        // ad esempio x => a con SHIFT = 3 ; y => b con SHIFT = 3 e z => c con SHIFT = 3;

        messaggioCifrato += letteraDaInserire; // A questo punto semplicemente accodiamo la lettera alla stringa;

    }else { // Se è uno spazio o un segno di punteggiatura
        messaggioCifrato += currentChar; // Aggiungiamo il carattere senza cambiarlo
    }
}

// 
//   SFIDA EXTRA (opzionale)
//   -----------------------
//   Riesci a decifrare il messaggio? Prova a implementare la funzione inversa:
//   invece di sommare SHIFT, sottrailo (attenzione al wrap-around in senso opposto!).

let messaggioDecifrato = '';

for(let i = 0; i < messaggioCifrato.length; i++){
    const currentChar = messaggioCifrato[i];
    const indiceLettera = alfabeto.indexOf(currentChar); //Vediamo quale sarebbe l'indice della nostra lettera corrente del messaggio cifrato, all'interno dell'alfabeto
    if(indiceLettera !== -1){ // Se il char corrente non è uno spazio o un segno di punteggiatura o un razzo missile o qualsiasi altra cosa
        const letteraDaInserire = //Facciamo un controllo
        (indiceLettera - SHIFT < 0) //Se sottraendo il nostro valore SHIFT, andiamo in negativo con l'indice
        ? alfabeto[indiceLettera - SHIFT + lunghezzaAlfabeto] // Allora facciamo il wrap andando alla fine dell'alfabeto e sottraendo quello che ci avanzava (indiceLettera - SHIFT)
        : alfabeto[indiceLettera - SHIFT]; //Altrimenti non siamo andati in negativo con l'indice quindi non è un problema e prendiamo la lettera normalmente con lo SHIFT.

        messaggioDecifrato += letteraDaInserire; //Aggiungiamo la lettera al messaggio Decifrato
    } else { // Se è uno spazio o un segno di punteggiatura
        messaggioDecifrato += currentChar; //Aggiungiamo il carattere senza cambiarlo
    }
}

// --- OUTPUT ---

console.log("Messaggio Originale:", messaggio);
console.log("Messaggio Cifrato:", messaggioCifrato);
console.log("Messaggio Decifrato di nuovo:", messaggioDecifrato);