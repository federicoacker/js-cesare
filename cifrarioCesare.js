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
const ultimoIndiceAlfabeto = alfabeto.length - 1; //Ultimo indice dell'alfabeto
const lunghezzaAlfabeto = alfabeto.length; // Lunghezza dell'alfabeto
const SHIFT = 3; // numero di posizioni da spostare

// Chiedi il messaggio all'utente e convertilo in minuscolo
const messaggio = prompt("Inserisci il messaggio da cifrare:").toLowerCase().trim();

// Variabile che conterrà il messaggio cifrato (inizia vuota)
let messaggioCifrato = "";


// --- CIFRATURA ---

for (let i = 0; i < messaggio.length; i++) {
    const currentChar = messaggio[i];
    if(currentChar !== " "){ // Se il char corrente non è uno spazio
        const indiceLettera = alfabeto.indexOf(currentChar); //Vediamo quale sarebbe l'indice della nostra lettera corrente del messaggio, all'interno dell'alfabeto
        const letteraDaInserire = //Facciamo un controllo
        (indiceLettera + SHIFT <= ultimoIndiceAlfabeto) // Se aggiungendo il nostro valore SHIFT rimaniamo comunque all'interno dell'array alfabeto
        ? alfabeto[indiceLettera + SHIFT] // Allora la lettera da inserire è semplicemente la lettera dell'alfabeto shiftata di valore SHIFT
        : alfabeto[indiceLettera + SHIFT - lunghezzaAlfabeto]; // Se invece sforiamo, la lettera da inserire 
        // è data da indiceLettera + SHIFT - la lunghezza dell'alfabeto visto che stiamo ricominciando dall'inizio dell'alfabeto
        // ad esempio x => a con SHIFT = 3 ; y => b con SHIFT = 3 e z => c con SHIFT = 3;

        messaggioCifrato += letteraDaInserire; // A questo punto semplicemente accodiamo la lettera alla stringa;

    }else { // Se è uno spazio
        messaggioCifrato += " "; // Aggiungiamo lo spazio
    }
}


// --- OUTPUT ---

console.log("Messaggio originale:", messaggio);
console.log("Messaggio cifrato:", messaggioCifrato);


/**
 * SFIDA EXTRA (opzionale)
 * -----------------------
 * Riesci a decifrare il messaggio? Prova a implementare la funzione inversa:
 * invece di sommare SHIFT, sottrailo (attenzione al wrap-around in senso opposto!).
 *
 * Suggerimento per il wrap-around inverso:
 *   (indice - SHIFT + alfabeto.length) % alfabeto.length
 */
