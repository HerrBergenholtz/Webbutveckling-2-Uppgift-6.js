//1.
let min;
let max;
let resultat = 0; //Relutatet måste sättas till 0 från början så att det är ett nummer.

alert("Skriv in min och max tal, alla tal mellan max och min kommer att adderas.");
min = parseInt(prompt("Ange min talet"));
max = parseInt(prompt("Ange max talet")); 

while (!min || !max) { //Kontrollerar så att användaren har skrivit in nummer, om inte så kommer while-loopen skicka en alert och sedan kommer användaren kunna skriva in talen igen.
    alert("Du måste ange siffror");
    min = parseInt(prompt("Ange min talet"));
    max = parseInt(prompt("Ange max talet"));
}

resultat = summera(min, max);

function summera(min, max) { //Skriver ut alla tal mellan min och max och adderar dem med varandra och returnerar sedan resultatet som skickas tillbaka till användaren med en alert.
    for (let i = min; i <= max; i++) {
        resultat = resultat + i;
    }
    return resultat;
}
alert(resultat);

//3.
let answer;

answer = window.confirm("Vill du även addera kvadraten av alla tal mellan min och max?"); //Skickar ut ett fönster där användaren kan svara ja eller nej.

if (answer == true) { //Om användaren svarar ja så kommer denna if sats att köras.
    resultat = 0;
    resultat = kvadreraSummera(min, max);

    function kvadreraSummera(min, max) { //Denna funktion fungerar som summera() fast den kvadrerar först alla tal mellan min och max och adderar de kvadrerade talen med varandra och skickar ut resultatet i en alert till användaren.
        let kvadratI;

        for (let i = min; i <= max; i++) {
            kvadratI = kvadrera(i);
            resultat = resultat + kvadratI;
        }
        return resultat;
    }
    alert(resultat);
}

//2.
const kvadratTal = parseInt(prompt("Ange ett tal som ska kvadreras"));
const kvadraten = kvadrera(kvadratTal); //Jag använder mig av const istället för let eftersom att variablerna aldrig kommer att omdefinieras.

function kvadrera(kvadratTal) { //Kvadrerar Det tal som användaren skrev in.
    return kvadratTal * kvadratTal;
}
alert(kvadraten);

//4.
const ord = prompt("Skriv in ett ord");
const palindrom = reverse(ord); //Deklarerar palindrom och anropar funktionen reverse(str) som kommer att ta ordet som användaren skrev in som argument och vända på det.

function reverse(str) {
    const splitStr = str.split(""); //Deklarerar splitstr som str(alltså ordet) och sedan gör ordet till en array av alla bokstäver med metoden split() i detta fallet med tomma citationstecken vilket kommer att splittra varje bokstav i strängen till en substring. Ex. hej.split("") = ["h", "e", "j"]
    const reverseStr = splitStr.reverse(); //Deklarerar reverseStr som den splittrade strängen och sedan använder metoden reverse() vilket kommer att vända på arrayen så att det blir omvänd ordning. Ex. splitstr.reverse() = ["j" ,"e", "h"]
    const joinStr = reverseStr.join(""); //Deklarerar joinStr som strängen med omvänd ordning och använder till sist metoden join() vilket kommer att sätta ihop arrayen till en sträng igen. Ex. reverseStr.join("") = "jeh" 
    return joinStr; //Returnerar den ihopsatta omvända strängen.
}

if (ord == palindrom) { //If satsen kontrolerar om ordet som användaren skrev in är lika med det omvända ordet, om true så är det en palindrom och då kommer användaren få en alert som meddelar om de goda nyheterna, annars skickas en alert ut som säger att det inte var en palindrom.
    alert("Palindrom!!!");
} else {
    alert("Inte en palindrom :(");
}

//5.
let img;
let button;

function init() { //I init funktionen så deklarerar vi en bild och en knapp i HTML-dokumentet genom att välja deras id och lägger även till en EventListener till knappen som anropar funktionen clickConsole.
    img = document.getElementById("img");
    button = document.getElementById("btn");
    button.addEventListener("click", clickConsole);
}
window.onload = init;

function clickConsole() { //Nör knappen klickas så kommer denna funktion att köras vilket ändrar på en bild och en knapps style.
    button.innerHTML = "<p>Hoppsan hejsan</p>"; //Ändrar texten i knappen.
    img.style.display = "block"; //Gör så att bilden visas som block istället för none som den tidigare visats som, alltså gör bilden synlig.
    button.style.color = "blue"; //Ändrar textfärgen på knappen
    button.style.height = "50px"; 
    button.style.width = "100%"; //Gör så att knappen tar upp hela skärmen och är 50px hög.
}