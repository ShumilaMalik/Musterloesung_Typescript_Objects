class Auto implements AutoInterface {
    marke: string;
    modell: string;
    baujahr: number;

    constructor(marke: string, modell: string, baujahr: number) {
        this.marke = marke;
        this.modell = modell;
        this.baujahr = baujahr;
    }

    starten() {
        console.log("Das Auto startet.");
    }

    anhalten() {
        console.log("Das Auto hält an.");
    }
}
