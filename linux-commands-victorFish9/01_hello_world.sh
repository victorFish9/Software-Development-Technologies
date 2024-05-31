# .sh-tiedostot ovat yleinen tapa luoda skriptejä Linux- ja 
# Unix-ympäristöissä. Skripteillä ei ole varsinaista ohjelmointikieltä, 
# vaan niiden rivit suoritetaan komentorivin komentoina.
# 
# Voit lukea aiheesta tarkemmin esim. keskustelusta
# "What's a .sh file?" (https://stackoverflow.com/a/32263486)
#
# #-merkillä alkavat rivit ovat kommentteja, ja niihin
# kirjoitettu teksti jää suorittamatta. Muut rivit puolestaan
# suoritetaan komentorivillä.
#
# Poista viimeisen rivin alussa oleva #-merkki, jotta siinä
# oleva echo-komento suoritetaan tätä skriptiä suoritettaessa.
# Voit sen jälkeen suorittaa tämän tiedoston komentorivillä 
# kirjoittamalla ./01_hello_world.sh

echo 'Hello world!'