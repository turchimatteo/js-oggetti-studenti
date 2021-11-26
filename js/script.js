/* 
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
*/
const student = {
    nome: 'Mario',
    cognome: 'Rossi',
    età: '20'
};
for(let key in student) {
    console.log(key + ': ' + student[key]);
}

const studentArray = 
[
    {
        nome: 'Marco',
        cognome: 'Bianchi',
        età: '21'
    },
    {
        nome: 'Filippo',
        cognome: 'Verdi',
        età: '22'
    },
    {
        nome: 'Giuseppe',
        cognome: 'Viola',
        età: '23'
    },
];
for (let i = 0; i < studentArray.length; i++) {
    const thisStudent = studentArray[i];
    console.log(thisStudent.nome + ' ' + thisStudent.cognome);
}

const userName = prompt('Dimmi un nuovo nome');
const userSurname = prompt('Dimmi un nuovo cognome');
const userAge = parseInt( prompt('Dimmi l\'eta') );
const newName = {
    nome: userName,
    cognome: userSurname,
    eta: userAge
};
console.log(newName);
studentsArray.push(newName);
console.log(studentsArray); 