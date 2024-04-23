let buch = {
    titel: "Der Hobbit",
    autor: "J.R.R. Tolkien",
    jahr: 1937,
    ausleihen() {
        console.log(`${this.titel} wurde ausgeliehen.`);
    }
};

console.log(buch.titel);  // Zugriff auf die Eigenschaft 'titel'
buch.ausleihen();         // Aufruf der Methode 'ausleihen'
