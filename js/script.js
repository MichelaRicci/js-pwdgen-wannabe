console.log('JS OK');

// Chiediamo all'utente il suo nome, cognome e colore preferito
// e usiamo questi dati per creare una password che termini con il numero 21


/*
1. Prendere elemento dal dom
2. Chiedere il nome all'utente (con prompt)
3. Salvare il nome in una variabile
4. Chiedere il cognome all'utente (con prompt)
5. Salvare il cognome in una variabile
6. Chiedere il colore preferito all'utente (con prompt)
7. Salvare il colore preferito in una variabile
9. Inserire i dati aggiungendo 21
10. Stampare la password in pagina
*/


// Prendo Elemento

const passwordElement = document.getElementById('password');


// Chiedo nome all'utente

const firstName = prompt('Qual è il tuo nome?', 'Michela')



// Chiedo il cognome all'utente

const lastName = prompt('Qual è il tuo cognome?', 'Ricci')


// Chiedo il colore preferito all'utente

const favColor = prompt('Qual è il tuo colore preferito?' , 'Blu')
console.log(favColor);


