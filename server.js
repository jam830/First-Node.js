var http = require('http');
var url = require('url');

var test = require('./node_modules/modulo_test.js');

/*
request, un oggetto della classe http.ServerRequest che rappresenta la richiesta HTTP e dalla quale poter leggere eventuali parametri inviati in GET o POST, la querystring etc.;
response, un’istanza della classe http.ServerResponse, utile per impostare il contenuto che si vorrà inviare all’utente ed eventuali altre informazioni.
*/
var server = http.createServer(function (req,res){
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end("Ciao Mondo!\n");
})

server.listen(1337, '127.0.0.1');
console.log('Server avviato all\'indirizzo http://127.0.0.1:1337');

//test del modulo url
console.log(url.parse('http://www.angelopescatore.it'));
console.log(url.format({host: 'www.angelopescatore.it', protocol: 'http'}));


//modulo test
console.log(test.somma(2,3));

/*
modulo globals
 __filename e __dirname valorizzate a runtime rispettivamente con il nome del filename avviato e con il nome della cartella corrente.

 Il modulo url
Questo modulo permette di lavorare con gli url, creandoli a partire da oggetti oppure parsandoli a partire da stringhe. Di fondamentale importanza è il metodo parse che trasforma un url in un oggetto.

Il modulo path
Il modulo path permette di lavorare con i percorsi reali della macchina sulla quale è avviata l’applicazione. Abbiamo a disposizione metodi per navigare tra le cartelle e per montare path complessi a partire da più stringhe. Di vitale importanza per applicazioni che lavorano con il filesystem.

Il modulo FS – File System
Questo modulo permette, insieme col precedente, di lavorare a stretto contatto con il filesystem della macchina, eseguendo tutte le operazioni tipiche di questo ambito come ad esempio la copia, la rinominazione, la cancellazione, la lettura e la scrittura di file e cartelle.

Il modulo util
Come è facilmente intuibile dal nome, questo modulo include una serie di funzioni di utilità in ottica di introspezione delle variabili. Oltre ad una serie di funzioni logiche is* (per esempio isArray o isDate) abbiamo la più generica inspect, la format per la formattazione di stringhe a partire da placeholder e la debug e la log come funzioni per il monitoraggio del flusso.

Il modulo net
Questo modulo permette agli sviluppatori più esperti di implementare applicazioni client-server a prescindere dal protocollo HTTP ma sfruttando i socket come strumenti più a basso livello e lavorando direttamente con le connessioni.
 */
