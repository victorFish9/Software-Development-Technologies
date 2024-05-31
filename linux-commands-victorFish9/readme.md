# Linux-komennot

Tämä repositorio sisältää tehtäviä Linux-komentoihin perehtymiseksi. Komennot ovat yhteensopivia useimpien Linux/Unix-versioiden kanssa, joten yhteensopivuusongelmia **ei pitäisi** ilmentyä käyttämästäsi käyttöjärjestelmästä riippumatta. **Tätä tehtävää ei voi tehdä Windowsin komentorivillä**.

Tehtävät arvostellaan käyttäen [GitHub classroom](https://classroom.github.com/) -palvelua, joka suorittaa komentosi, ja tarkastaa ja pisteyttää niiden tulokset automaattisesti. Taustalla GitHub classroom hyödyntää [GitHub actions](https://github.com/features/actions) -nimistä jatkuvan integroinnin palvelua. Voit tarvittaessa yrittää tehtäviä monta kertaa. Tee tällöin uusi commit, ja vie muutokset uudelleen GitHubiin.

⚠ **Huom!** Ole varovainen käyttäessäsi komentoriviä. Väärät tai virheellisesti käytetyt komennot voivat aiheuttaa korjaamatonta vahinkoa tiedostoille tai järjestelmälle. Älä kopioi ja suorita eri lähteistä mahdollisesti löytämiäsi komentoja ilman, että olet varma siitä, mitä ne tekevät. Jos olet epävarma, kysy neuvoa kurssin keskustelukanavilla. Lisäksi suosittelemme käyttämään virtualisoitua ympäristöä kurssin ohjeistuksen mukaisesti.


## Harjoitusten kloonaaminen

Kun olet hyväksynyt tehtävän GitHub classroomissa ja saanut repositoriosta henkilökohtaisen kopion, kloonaa se itsellesi `git clone` -komennolla. Siirry sen jälkeen komentorivillä klonattuun hakemistoon `cd linux-commands-kayttajanimi`-komennolla.

Kloonatessasi repositoriota varmista, että Git-osoitteen lopussa on oma GitHub-käyttäjänimesi. Jos käyttäjänimesi puuttuu osoitteesta, kyseessä ei ole henkilökohtainen kopiosi tehtävästä. Luo tässä tapauksessa oma tehtävärepositoriosi Teams-tehtävästä löytyvän linkin kautta.


## Harjoitusten tekeminen

Harjoitukset koostuvat 15:stä komennosta, joista kaikki tulee suorittaa tämän Git-repositorion **juurihakemistossa**, eli samassa hakemistossa, jossa tämä readme.md-tiedosto sijaitsee.

Kokeile ensin suorittaa tehtävien komentoja suoraan komentoriviltä ilman skriptien kirjoittamista. Kun olet saanut komennon toimimaan oikein, kopioi se tehtävää vastaavaan `.sh`-päätteiseen tiedostoon. Lisää tiedostoihin tekemäsi muutokset versionhallintaan `git add` ja `git commit` -komennoilla.


## Vastausten lähettäminen

Kun olet saanut osan tai kaikki tehtävistä ratkaistua ja commitoinut vastauksesi, lähetä ratkaisut arvioitavaksi `git push`-komennolla. Git push käynnistää automaattisesti workflow:n, joka testaa kaikki komentosi ja antaa niistä joko hyväksytyn tai hylätyn tuloksen.

Kun GitHub Actions on saanut koodisi suoritettua, näet tuloksen GitHub-repositoriosi [Actions-välilehdellä](../../actions/workflows/classroom.yml). Arvioinnin valmistumiseen menee tyypillisesti noin pari minuuttia.

Klikkaamalla yllä olevan linkin takaa viimeisintä "GitHub Classroom Workflow" -suoritusta, saat tarkemmat tiedot tehtävän arvioinnista. Sivun alaosassa näkyy saamasi pisteet. Klikkaamalla "Autograding"-otsikkoa pääset katsomaan tarkemmin arvioinnissa suoritetut vaiheet ja niiden tulokset.


# Tehtävät

## Hello world

1. **Echo**

    *Tämä on lämmittelytehtävä, jossa riittää, että suoritat valmiiksi annetun komennon ja lisäät sen `01_hello_world.sh`-tiedostoon.*

    Voit tulostaa tekstiä komentorivillä `echo`-komennolla. Kokeile kirjoittaa komentoriville `echo 'Hello world!'`. Komento tulostaa odotetusti tekstin `Hello world`.

    Lisää lopuksi komento `01_hello_world.sh`-tiedostoon.


## Hakemistot

2. **Nykyinen polku**

    Kirjoita komento, joka tulostaa nykyisen hakemiston polun, esim. `/home/me/linux-commands-me`.

    Lisää käyttämäsi komento `02_print_working_directory.sh`-tiedostoon.

3. **Nykyisen hakemiston listaus**

    Kirjoita komento, joka listaa **kaikki** nykyisen hakemiston sisältämät tiedostot ja alihakemistot pitkässä muodossa. Listauksessa tulee siis näkyä mm. piilotiedostot ja tiedostojen muokkausajat esim. seuraavassa muodossa:

    ```
    drwxr-xr-x+ 5 me me 4096 Jan  9 13:45 .
    drwxr-xr-x+ 5 me me 4096 Jan  9 13:45 ..
    -rwxr-xr-x  1 me me   19 Jan 10 08:14 01_hello_world.sh
    -rwxr-xr-x  1 me me    4 Jan 10 08:14 02_print_working_directory.sh
    ...
    ```

    Lisää käyttämäsi komento `03_list_directory.sh`-tiedostoon.

4. **Logihakemiston listaus**

    Tämän repositorion sisällä on hakemisto nimeltä **"log"**. Kirjoita komento, joka listaa kaikki kyseisen alihakemiston sisältämät tiedostot ja hakemistot pitkässä muodossa. Muotoilun tulee olla sama kuin edellisessä kohdassa.

    Lisää käyttämäsi komento `04_list_log_directory.sh`-tiedostoon.

5. **Ylähakemiston listaus**

    Kirjoita komento, joka listaa **kaikki** nykyisen hakemiston ylähakemiston (parent directory) sisältämät tiedostot ja alihakemistot pitkässä muodossa. Listauksessa tulee siis näkyä mm. piilotiedostot ja tiedostojen muokkausajat kuten edellisissä kohdissa.

    Lisää käyttämäsi komento `05_list_parent_directory.sh`-tiedostoon.

6. **Kotihakemiston listaus**

    Kirjoita komento, joka listaa **kaikki** käyttäjän kotihakemiston sisältämät tiedostot ja alihakemistot pitkässä muodossa. Listauksessa tulee siis näkyä mm. piilotiedostot ja tiedostojen muokkausajat kuten edellisissä kohdissa.

    Lisää käyttämäsi komento `06_list_home_directory.sh`-tiedostoon.


## Tiedostojen ja muuttujien tulostaminen

7. **Tiedoston sisältö**

    Kirjoita komento, joka tulostaa ruudulle [log/auth.log](log/auth.log)-tiedoston sisällön.

    Lisää käyttämäsi komento `07_cat_auth_log.sh`-tiedostoon.


8. **Monen tiedoston sisältö**

    Kirjoita komento, joka tulostaa ruudulle samalla kertaa sekä [log/auth.log](log/auth.log)-tiedoston että [log/access.log](log/access.log)-tiedoston sisällöt.

    Lisää käyttämäsi komento `08_cat_two_files.sh`-tiedostoon.


9. **Ympäristömuuttuja**

    Kirjoita komento, joka tulostaa ruudulle [`PATH`-nimisen ympäristömuuttujan arvon](https://en.wikipedia.org/wiki/PATH_(variable)). Muuttuja sisältää tyypillisesti pitkän merkkijonon kaksoispisteellä erotelluista hakemistoista, kuten `/bin:/usr/bin:/usr/local/bin`.

    Lisää käyttämäsi komento `09_echo_path.sh`-tiedostoon.


## Tiedoston ja hakemiston luominen


10. **Luo hakemisto**

    Kirjoita komento, joka luo uuden hakemiston nimeltä `documents`. Luodun hakemiston tulee näkyä nykyisen hakemiston listauksessa.

    Lisää käyttämäsi komento `10_create_directory.sh`-tiedostoon.


11. **Luo tiedosto**

    Git ei oletuksena pidä kirjaa tyhjistä hakemistoista. Jos haluat hakemiston versionhallintaan, siihen tulee luoda esimerkiksi tyhjä tiedosto.

    Kirjoita komento, joka lisää äsken luomaasi `documents`-hakemistoon tyhjän tiedoston nimeltä `.gitkeep`. Lue tarvittaessa lisätietoja keskustelusta ["What are the differences between .gitignore and .gitkeep?"](https://stackoverflow.com/a/7229996)

    Lisää käyttämäsi komento `11_create_gitkeep.sh`-tiedostoon.

    💡 Tässä tehtävässä documents-hakemisto on listattu `.gitignore`-tiedostoon, joten luomasi hakemisto ei .gitkeep-tiedostosta huolimatta päädy versionhallintaan.


## Tiedostoon kirjoittaminen

12. **Tiedostoon lisääminen**

    Gitissä on käytössä erityinen [.gitignore-tiedosto](https://git-scm.com/docs/gitignore), johon voidaan lisätä lista sellaisista tiedostoista ja hakemistoista, joita ei haluta mukaan versionhallintaan. Tyypillinen hakemisto, joka voidaan lisätä tähän tiedostoon, on NPM-paketit sisältävä `node_modules`.

    Kirjoita komento, joka lisää rivin `node_modules` nykyisen `.gitignore`-tiedoston loppuun. **Komento ei saa korvata tiedoston nykyistä sisältöä**, vaan sen tulee lisätä uusi rivi nykyisten perään. Mikäli vahingossa muutat tiedoston alkuperäistä sisältöä, voit palauttaa sen takaisin `git restore` -komennolla: `git restore .gitignore`.

    Lisää käyttämäsi komento `12_ignore_node_modules.sh`-tiedostoon.

    💡 Voit halutessasi commitoida myös muuttuneen `.gitignore`-tiedoston, mutta se ei ole välttämätöntä.

13. **Tiedoston poistaminen**

    Kirjoita komento, joka poistaa tiedoston `log/error.log`. Jos haluat testata tiedoston poistamista monta kertaa, voit palauttaa tiedoston takaisin Gitin historiasta `git restore` -komennolla: `git restore log/error.log`.

    Lisää käyttämäsi komento `13_remove_file.sh`-tiedostoon.

    💡 Voit halutessasi poistaa error.log-tiedoston myös versionhallinnasta, mutta se ei ole välttämätöntä.


## Ohjaus ja putkittaminen

14. **Tiedostoon ohjaus**

    Kirjoita komento, joka tulostaa kerralla kaikkien `log`-alihakemistossa olevien `.log`-päätteisten tiedostojen sisällöt, ja ohjaa ne uuteen tiedostoon `log/all.txt`.

    Lisää käyttämäsi komento `14_cat_to_file.sh`-tiedostoon.

    💡 `all.txt` on mainittuna .gitignore-tiedostossa, joten se ei päädy versionhallintaan.

15. **Putkittaminen (piping)**

    Putkittamisen avulla (piping) voit välittää ensimmäisen ohjelman tulosteen toisen ohjelman syötteeksi. Kirjoita komento, joka näyttää **20 ensimmäistä riviä** head-komennon ohjeesta. Ohjeen saat näkyviin komennolla `man head`.

    Lisää käyttämäsi komento `15_head.sh`-tiedostoon.



## Lisenssit ja tekijänoikeudet

Tiedosto log/auth.log on lainattu Digital Oceanin artikkelista ["How To Monitor System Authentication Logs on Ubuntu"](https://www.digitalocean.com/community/tutorials/how-to-monitor-system-authentication-logs-on-ubuntu) ja se on lisensoitu [CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/) -lisenssillä. Tiedosto log/error.log on generoitu [ChatGPT-tekoälyllä](https://github.com/openai/chatbot-gpt).

Nämä harjoitukset on luonut Teemu Havulinna ja ne on lisensoitu [CC BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/) -lisenssillä.
