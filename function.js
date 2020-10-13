
var nome = prompt('Inserisci il tuo nome:');
var cognome = prompt('Inserisci il tuo cognome:');
var colore = prompt('Inserisci il tuo colore preferito:');

var password = nome + cognome + colore + '20';

document.getElementById('password').innerHTML = password;
