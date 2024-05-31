# Yksikkötestaus Jest-työkalulla

Tässä tehtävässä harjoitellaan yksikkötestausta [Jest-työkalulla](https://jestjs.io/) Node.js-ympäristössä. Tehtävänäsi on kirjoittaa yksikkötestit valmiiksi annetulle [`finnishDateString`-funktiolle](./src/dateFormatter.ts), joka muotoilee sille annetun `Date`-olion suomenkieliseksi merkkijonoksi.

Tehtävä on kaksiosainen:

1. Ensimmäisessä osassa sinun tulee kirjoittaa funktiolle yksikkötestit, joiden avulla löydät funktiossa mahdollisesti piilevät loogiset virheet.

2. Toisessa osassa sinun tulee muokata annettua koodia niin, että funktio toimii toivotulla tavalla ja että kirjoittamasi testit menevät läpi. Testaamme koodisi omien testiesi lisäksi valmiilla testeillä.


## Testattava ja korjattava koodi

Tässä tehtävässä käsitellään [`dateFormatter.ts`-tiedostossa](./src/dateFormatter.ts) sijaitsevaa valmista `finnishDateString`-funktiota. Funktion on tarkoitus muotoilla sille annettu `Date`-olio suomenkieliseksi merkkijonoksi:

```ts
const dayNames: readonly string[] = [
    'maanantai', 'tiistai', 'keskiviikko',
    'torstai', 'perjantai', 'lauantai', 'sunnuntai'
];

const monthNames: readonly string[] = [
    'tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä',
    'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'
];

/**
 * Formats and returns the given date as a Finnish date string, such as
 * 'maanantai 1. tammikuuta 2024'.
 *
 * @param date the date to format
 * @returns the formatted string, in Finnish
 */
export function finnishDateString(date: Date): string {
    const dayName = dayNames[date.getDay() - 1];
    const monthName = monthNames[date.getMonth() - 1];

    const day = date.getDate();
    const year = date.getFullYear();

    return `${dayName} ${day}. ${monthName}kuuta ${year}`;
}
```

Yllä esitetty valmis koodi sisältää virheitä, joiden vuoksi muodostetut merkkijonot eivät välttämättä vastaa odotettuja. Tässä tehtävässä sinun tulee kirjoittaa yksikkötestit bugiselle funktiolle ja tehdä tarvittavat toimet funktion korjaamiseksi.


## GitHub classroom

Tehtävä arvostellaan käyttäen [GitHub classroom](https://classroom.github.com/) -palvelua, joka suorittaa ohjelmasi ja tarkastaa sekä pisteyttää tulokset automaattisesti. Kun olet hyväksynyt tehtävän GitHub classroomissa ja saanut repositoriosta henkilökohtaisen kopion, kloonaa se itsellesi `git clone` -komennolla. Siirry sen jälkeen VS Codeen editoimaan tiedostoja.

Kloonatessasi repositoriota **varmista, että Git-osoitteen lopussa on oma GitHub-käyttäjänimesi**. Jos käyttäjänimesi puuttuu osoitteesta, kyseessä ei ole henkilökohtainen kopiosi tehtävästä. Luo tässä tapauksessa oma classroom-kopio tehtävästä itsellesi Teams-tehtävästä löytyvän linkin avulla.

Voit tarvittaessa lähettää tehtävän tarkastettavaksi monta kertaa. Tee tällöin uusi commit ja vie (push) muutokset GitHubiin. Varmista kuitenkin, että viimeisin tekemäsi commit tuottaa parhaat pisteet.

💡 *Automaattisen arvioinnin vuoksi et saa muuttaa `dateFormatter.ts`-tiedoston etkä sieltä julkaistavan `finnishDateString`-funktion nimeä tai parametreja.*


## Riippuvuuksien asentaminen

Aloita asentamalla projektin riippuvuudet, jotka on määritelty `package.json`-tiedostossa:

```sh
$ npm install
```

Riippuvuudet sisältävät sekä [TypeScript-kielen](https://www.npmjs.com/package/typescript), [Jest-testaustyökalun](https://www.npmjs.com/package/jest) että [`ts-node`](https://www.npmjs.com/package/ts-node)- ja [`ts-jest`](https://www.npmjs.com/package/ts-jest)-paketit TypeScript-kielisen koodin ja testien suorittamiseksi Node.js:llä. Node.js sinulta tulee löytyä valmiina.


## Ohjelman suorittaminen

Tässä tehtävässä tarkoituksena on harjoitella yksikkötestausta, eli testata yksittäistä ohjelman osaa erillään muusta mahdollisesta koodista. Tehtävässä ei siis ole lainkaan käyttöliittymää, jonka kautta voisit kokeilla funktion toimintaa manuaalisesti.

Oman "pääohjelman" kirjoittaminen `finnishDateString`-funktion kokeilemiseksi ei ole kiellettyä, mutta kannustamme vahvasti keskittymään funktion yksikkötestaukseen ja jättämään mahdolliset muut skriptit kirjoittamatta.


## Testien suorittaminen

Tehtävän yksikkötestit suoritetaan [Jest-testityökalun](https://jestjs.io/) avulla komennolla `npm test`:

```sh
$ npm test
```

Taustalla `npm` suorittaa `test`-nimisen skriptin, joka on määritetty `package.json`-tiedostossa seuraavasti:

```json
{
    "scripts": {
        "test": "jest --verbose --coverage"
    }
}
```

Yllä [Jest-komennolle](https://jestjs.io/docs/cli) annetaan kaksi parametria, joiden merkitykset ovat seuraavat:

* `--verbose` *"Display individual test results with the test suite hierarchy."* ([jestjs.io](https://jestjs.io/docs/cli))

* `--coverage` *"Indicates that test coverage information should be collected and reported in the output."* ([jestjs.io](https://jestjs.io/docs/cli))

💡 *Älä muuta testien käynnistyskomentoa. Mikäli testit eivät mene läpi, kiinnitä erityisesti huomiota saamasi virheraportin **Message**-kohtiin.*


## Osa 1: Omien testien kirjoittaminen (2p)

Tehtävän ensimmäisessä osassa sinun tulee kirjoittaa yksikkötestit [`dateFormatter.ts`-tiedostossa](./src/dateFormatter.ts) sijaitsevalle `finnishDateString`-funktiolle. Funktion on tarkoitus muotoilla sille annettu `Date`-olion suomenkieliseksi merkkijonoksi ja palauttaa esimerkiksi teksti `'maanantai 1. tammikuuta 2024'`.

Suosittelemme kirjoittamaan testit tiedostoon [src/tests/dateFormatter.test.ts](./src/tests/dateFormatter.test.ts). Mikäli kirjoitat myös muita testitiedostoja, lisää niiden nimen päätteeksi `.test.ts` ja huolehdi, että testit ovat `src`-hakemiston alla, jotta Jest löytää ja suorittaa testisi. Voit hyödyntää testeissäsi joko [Jest:in `expect`-syntaksia](https://jestjs.io/docs/expect) tai [Node.js:n `assert`-syntaksia](https://nodejs.org/api/assert.html).

**Saat tästä tehtävästä pisteet, vaikka testisi tuottavat `failed`-tuloksen**. Testiraportista on kuitenkin käytävä ilmi, että `dateFormatter.ts`-tiedosto on ainakin osittain testattu:

```
------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------|---------|----------|---------|---------|-------------------
All files         |     100 |      100 |     100 |     100 |
 dateFormatter.ts |     100 |      100 |     100 |     100 |
------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 1 total
Tests:       4 failed, 4 total
```


## Osa 2: Funktiossa olevien virheiden korjaaminen (3p)

Tehtävän toisessa osassa sinun tulee muokata annettua koodia siten, että funktio palauttaa oikeanlaiset merkkijonot ja läpäisee kirjoittamasi testit. Palautetun merkkijonon tulee olla välimerkkejä myöten täsmälleen samassa muodossa kuin tehtävänannossa, eli esim. `'maanantai 1. tammikuuta 2024'` tai `'sunnuntai 31. joulukuuta 2023'`.

Ratkaisusi testataan GitHub classroom -palvelussa **kirjoittamiesi testien lisäksi** myös valmiilla testeillä. Mikäli korjattu koodi läpäisee omat testisi mutta ei näitä valmiita testejä, kiinnitä GitHub actions -välilehdellä erityistä huomiota seuraavien testien tuloksiin:

```
PASS  allBugsNeedToBeFixed.test.ts
  Verify that the function has been fixed properly
    √ formats Monday January 1st 2024 correctly
    √ formats Sunday December 31st 2023 correctly
    √ formats months correctly
    √ formats days correctly
```

💡 Automaattisen arvioinnin vuoksi et saa muuttaa `dateFormatter.ts`-tiedoston etkä sieltä julkaistavan `finnishDateString`-funktion nimeä tai parametreja.


## Vinkit ohjelmalogiikan korjaamiseksi

Ohjelmalogiikan korjaamiseksi on ensiarvoisen tärkeää tietää, miten siinä käytetyt yksittäiset osat toimivat. Annetussa koodissa olevat virheet johtuvat kenties virheellisistä olettamuksista esimerkiksi yksittäisten numeroarvojen merkityksessä viikonpäivien ja kuukausien numeroinnin yhteydessä.

Tutustu siis JavaScriptin `Date`-luokan dokumentaatioon esimerkiksi [Mozillan mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) -sivustolla. Siellä kannattaa lukea erityisesti kohdat [getDay()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay) sekä [getMonth()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth).

Voit kysellä lisää vinkkejä kurssin keskustelukanavalla.


## 🚀 Ohjelman aikavyöhykkeet 🕚 vs. 🕐

**Tehtävän tavoitteena ei ole ratkoa mahdollisia aikavyöhykkeisiin liittyviä ongelmia, eivätkä etsittävät bugit liity aikavyöhykkeisiin.**

Aikavyöhykkeisiin ja kesä- sekä talviaikaan liittyvien mahdollisten ongelmien välttämiseksi on kuitenkin hyvä tiedostaa, että annetussa koodissa esiintyvät metodit kuten `date.getDate()` ja `date.getFullYear()` saattavat palauttaa samalle ajanhetkelle eri arvoja käyttöjärjestelmän aikavyöhykkeestä riippuen. GitHub classroom -testit suoritetaan eri aikavyöhykkeellä kuin millä kirjoitat koodisi, joten sekaannuksia ei voida poissulkea.

Esimerkkinä voidaan käsitellä seuraavaa konkreettista tilannetta, jossa samaa ajanhetkeä käytettään kahdella eri aikavyöhykkeellä - ensin Suomessa, sitten USA:n itärannikolla:

```ts
// 1.1.2025. `new Date` käyttää UTC-aikavyöhykettä:
let date = new Date('2025-01-01');

// Suomessa paikallinen aika on UTC:tä edellä:
process.env.TZ = 'Europe/Helsinki';

console.log(date.getDate());        // 1
console.log(date.getFullYear());    // 2025
console.log(date.getHours());       // 2
```

```ts
// 1.1.2025. `new Date` käyttää UTC-aikavyöhykettä:
let date = new Date('2025-01-01');

// USA:ssa paikallinen aika on UTC:tä jäljessä:
process.env.TZ = 'US/Eastern';

console.log(date.getDate());        // 31
console.log(date.getFullYear());    // 2024
console.log(date.getHours());       // 19

// Tässä Date-olio, joka luotiin parametrilla "2025-01-01",
// "muuttui" aikavyöhykkeestä johtuen päiväksi 31.12.2024.

// 💡 Ilmiön havainnollistamiseksi käytetty aikavyöhykkeen
// vaihtaminen `process.env.TZ`-muuttujan avulla ei toimi
// kaikissa tapauksissa: https://stackoverflow.com/q/8083410
```

Yllä oleva esimerkki näyttää, miten tietty ajanhetki saattaa palauttaa odottamattomia arvoja riippuen siitä, millä aikavyöhykkeellä ohjelma suoritetaan.

Luodessasi `Date`-olioita merkkijonojen perusteella, ne tulkitaan UTC-ajaksi, mikäli merkkijonossa ei esiinny kellonaikaa. Jos taas lisäät mukaan kellonajan, tulkitaan se paikalliseksi ajaksi:

> *"Date-only strings (e.g. "1970-01-01") are treated as UTC, while date-time strings (e.g. "1970-01-01T12:00") are treated as local."*
>
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#date_string

Voit itse päättää, luotko testeissäsi käytettävät `Date`-oliot UTC-ajalla vai käyttäen paikallista aikavyöhykettä, molemmat saattavat tässä tehtävässä toimia. Mikäli kohtaat aikavyöhykeongelmia, suosittelemme tutustumaan [Date-luokan dokumentaatioon](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) ja keskustelemaan aiheesta Teamsissa.


## 🚀 Date-luokan historia ja tulevaisuus

Tehtävässä ilmenneet bugit johtuvat mahdollisesti joistain `Date`-luokan epäloogisuuksista, jotka ovat alalla varsin tunnettuja:

> *"It is now common knowledge that in 1995 Brendan \[Eich\] was given only 10 days to write the JavaScript language and get it into Netscape. Date handling is a fundamental part of almost all programming languages, and JavaScript had to have it. That said, it’s a complex problem domain and there was a short timeline. Brendan, under orders to “make it like Java” copied the date object from the existing, infant, `java.Util.Date` date implementation. This implementation was frankly terrible. In fact, basically all of it’s methods were deprecated and replaced in the Java 1.1 release in 1997. Yet we’re still living with this API 20 years later in the JavaScript programming language."*
>
> Maggie Pint, 2017. Fixing JavaScript Date – Getting Started. https://maggiepint.com/2017/04/09/fixing-javascript-date-getting-started/

`Date`-luokan epäkohtia on tunnistettu laajasti ja ajan käsittelyn ongelmien ratkaisemiseksi on luotu [lukuisia erillisiä JS-kirjastoja](https://momentjs.com/docs/#/-project-status/recommendations/). JavaScriptin tuleviin versioihin on myös ehdotettu uutta [Temporal-oliota](https://tc39.es/proposal-temporal/docs/index.html), jonka hyväksymisprosessi on vielä kesken. `Temporal` on kokeiltavissa jo etukäteen [erillisenä npm-pakettina](https://www.npmjs.com/package/@js-temporal/polyfill).


## Lisenssit ja tekijänoikeudet

Tämän tehtävän on kehittänyt Teemu Havulinna ja se on lisensoitu [Creative Commons BY-NC-SA -lisenssillä](https://creativecommons.org/licenses/by-nc-sa/4.0/).
