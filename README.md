# Musterloesung_Typescript_Objects

Dieses Tutorial hier wurde nach gebaut.

# TypeScript Objects, Classes, Interfaces

## Objekte

In TypeScript, wie auch in vielen anderen Programmiersprachen, ist ein Objekt eine Sammlung von Eigenschaften und Methoden, die logisch zusammengehören. Ein Objekt ist einer der Grundbausteine in der objektorientierten Programmierung. Hier ist eine einfache Erklärung darüber, was Objekte in TypeScript sind, wie sie strukturiert sind und wie sie in Programmen verwendet werden können.

### Was ist ein Objekt in TypeScript?

Ein Objekt in TypeScript kann als ein Behälter angesehen werden, der Daten (Eigenschaften) und Funktionen (Methoden) umfasst, die auf diese Daten zugreifen oder sie verändern. Die Eigenschaften eines Objekts definieren seinen Zustand, während die Methoden das Verhalten des Objekts beschreiben.

**Beispiel für ein Objekt in TypeScript:**

Stellen Sie sich vor, wir möchten Informationen über ein Buch in einem Bibliothekssystem speichern. Hierfür könnten wir ein Objekt verwenden, das verschiedene Eigenschaften über das Buch speichert:

```tsx
let buch = {
  titel: "Der Hobbit",
  autor: "J.R.R. Tolkien",
  jahr: 1937,
  ausleihen() {
    console.log(`${this.titel} wurde ausgeliehen.`);
  }
};

// Zugriff auf eine Eigenschaft des Objekts
console.log(buch.titel);  // "Der Hobbit"

// Aufrufen einer Methode des Objekts
buch.ausleihen();  // "Der Hobbit wurde ausgeliehen."

```

In diesem Beispiel ist `buch` ein Objekt mit den Eigenschaften `titel`, `autor`, und `jahr`. Es hat auch eine Methode `ausleihen`, die eine Aktion mit den Eigenschaften des Buches durchführt.

### Wie werden Objekte in TypeScript verwendet?

Objekte in TypeScript sind sehr nützlich, um strukturierte Daten zusammenzuhalten und Funktionen bereitzustellen, die diese Daten manipulieren. Sie werden häufig in Anwendungen verwendet, um reale Elemente wie Bücher, Benutzerprofile, Produktinformationen usw. darzustellen.

**Vorteile der Verwendung von Objekten:**

- **Strukturierung:** Objekte helfen, komplexe Datenstrukturen zu organisieren und leichter verständlich zu machen.
- **Wiederverwendung:** Funktionen und Datenstrukturen in Objekten können leicht in verschiedenen Teilen eines Programms wiederverwendet werden.
- **Kapselung:** Methoden in Objekten können direkt auf deren Eigenschaften zugreifen, was den Code sicherer und einfacher zu warten macht.

### Zusammenfassung

Objekte sind ein zentrales Konzept in der objektorientierten Programmierung in TypeScript. Sie ermöglichen die Modellierung und Verwaltung komplexer Datenstrukturen auf eine Weise, die sowohl organisiert als auch effizient ist. Die Fähigkeit, Zustand und Verhalten in einer Einheit zu kapseln, macht sie zu einem mächtigen Werkzeug für Entwickler.

## Klassen und Interfaces

In Programmiersprachen wie TypeScript sind Klassen und Interfaces grundlegende Konzepte, die oft genutzt werden, um den Code strukturiert und klar verständlich zu halten. Hier erklären wir, was Klassen und Interfaces sind, und wie sie verwendet werden, speziell für komplette Anfänger.

### Was ist eine Klasse?

Eine Klasse ist eine Blaupause oder ein Entwurf für Objekte. Sie definiert, welche Eigenschaften (Daten) und Methoden (Funktionen) Objekte eines bestimmten Typs haben sollten. Objekte sind spezifische Instanzen einer Klasse. Denken Sie an eine Klasse als eine Schablone, die beschreibt, wie ein bestimmtes Objekt aussieht und funktioniert.

**Beispiel:**

Stellen Sie sich vor, Sie möchten in einem Programm verschiedene Autos verwalten. Jedes Auto hat bestimmte Eigenschaften wie Marke, Modell und Baujahr sowie die Fähigkeit, zu starten und anzuhalten. Dies kann in einer Klasse definiert werden.

```tsx
class Auto {
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

// Erstellung eines neuen Auto-Objekts
let meinAuto = new Auto("Toyota", "Corolla", 2021);
meinAuto.starten();  // Ausgabe: Das Auto startet.

```

In diesem Beispiel beschreibt die Klasse `Auto`, welche Eigenschaften und Methoden ein Auto haben sollte. `meinAuto` ist eine Instanz der Klasse `Auto`.

### Was ist ein Interface?

Ein Interface in TypeScript ist eine Möglichkeit, die Struktur von Objekten zu definieren, ohne Implementierungsdetails anzugeben. Es definiert lediglich die Namen und Typen von Eigenschaften sowie die Signatur von Methoden, die ein Objekt haben muss. Interfaces werden verwendet, um Typsicherheit zu gewährleisten und sicherzustellen, dass verschiedene Teile des Codes bestimmte Verträge einhalten.

**Beispiel:**

Wir nehmen wieder das Beispiel mit dem Auto, definieren jedoch diesmal die Struktur mit einem Interface.

```tsx
interface AutoInterface {
  marke: string;
  modell: string;
  baujahr: number;
  starten(): void;
  anhalten(): void;
}

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

let meinAuto = new Auto("Ford", "Focus", 2018);
meinAuto.anhalten();  // Ausgabe: Das Auto hält an.

```

Hier definiert `AutoInterface` die Struktur, die jedes Auto-Objekt erfüllen muss, aber es enthält keine Code-Logik. Die Klasse `Auto` implementiert dann dieses Interface, indem sie die notwendige Logik für Starten und Anhalten sowie die Eigenschaften bereitstellt.

## Projekt

Lassen Sie uns ein praxisorientiertes Beispiel für ein Bibliothekskatalogverwaltungssystem in TypeScript erstellen. Dieses Beispiel wird dabei helfen, die Konzepte der Objektliterale, Typen und optionalen Eigenschaften in einem realen Szenario zu demonstrieren.

### Bibliothekskatalogverwaltungssystem

### Ziel

Das Ziel ist es, ein einfaches System zu entwerfen, das es ermöglicht, Bücher in einem Bibliothekskatalog zu verwalten. Jedes Buch wird bestimmte Pflichteigenschaften haben, sowie optionale Eigenschaften, die zusätzliche Informationen bereitstellen können.

### Schritt 1: Definieren der Datenstruktur

Wir beginnen mit der Definition der Datenstrukturen für das System. Wir verwenden hierfür ein Interface, um die Struktur eines Buches zu beschreiben.

```tsx
interface Buch {
  id: number;
  titel: string;
  autor: string;
  erscheinungsjahr: number;
  genre?: string;  // Dies ist eine optionale Eigenschaft
}

```

### Schritt 2: Erstellen eines Objekts für das Bibliothekssystem

Als nächstes erstellen wir ein Objekt, das die Logik unseres Bibliothekssystems enthält, einschließlich einer Methode zum Hinzufügen von Büchern und einer Methode zum Anzeigen aller Bücher.

```tsx
class Bibliothek {
  katalog: Buch[] = [];

  buchHinzufuegen(buch: Buch) {
    this.katalog.push(buch);
  }

  katalogAnzeigen() {
    console.log("Bibliothekskatalog:");
    this.katalog.forEach(buch => {
      console.log(`${buch.titel} von ${buch.autor}, erschienen ${buch.erscheinungsjahr}` + (buch.genre ? `, Genre: ${buch.genre}` : ''));
    });
  }
}

```

### Schritt 3: Nutzung des Bibliothekssystems

Jetzt nutzen wir unsere Bibliotheksklasse, um einige Bücher hinzuzufügen und den Katalog anzuzeigen.

```tsx
let bibliothek = new Bibliothek();

bibliothek.buchHinzufuegen({
  id: 1,
  titel: "Der große Gatsby",
  autor: "F. Scott Fitzgerald",
  erscheinungsjahr: 1925,
  genre: "Roman"
});

bibliothek.buchHinzufuegen({
  id: 2,
  titel: "1984",
  autor: "George Orwell",
  erscheinungsjahr: 1949
});

bibliothek.katalogAnzeigen();

```

### Ausgabe des Katalogs

Wenn das obige Skript ausgeführt wird, sollten Sie folgende Ausgabe sehen:

```bash
Bibliothekskatalog:
Der große Gatsby von F. Scott Fitzgerald, erschienen 1925, Genre: Roman
1984 von George Orwell, erschienen 1949

```

In diesem Beispiel haben wir ein einfaches Bibliothekskatalogverwaltungssystem in TypeScript entwickelt. Wir haben die Nutzung von Objektliteralen, Typen und optionalen Eigenschaften demonstriert, um flexible und robuste Anwendungen zu erstellen. Dieses System kann weiter ausgebaut werden, um Funktionen wie Suchen, Löschen und Aktualisieren von Büchern im Katalog zu unterstützen.

