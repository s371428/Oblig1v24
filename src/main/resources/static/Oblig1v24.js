let billettRegister = [];

function valideringSjekkFilm(film){
    if(!film){
        document.getElementById("validering film").innerText="Må velge en film";
        return false;
    } else {
        document.getElementById("validering film").innerText = "";
    }
    return true;
}

function valideringSjekkAntall(antall){
    if(!antall){
        document.getElementById("validering antall").innerText="Må skrive inn noe inn i antall";
        return false;
    }
    else if(isNaN(antall)){
        document.getElementById("validering antall").innerText="Ugyldig verdi - Vennligst skriv inn antall billetter";
        return false;
    }
    else if(parseInt(antall) < 1 || parseInt(antall) > 99){
        document.getElementById("validering antall").innerText="Vennligst velg antall billetter mellom 1 og 99";
        return false;
    } else {
        document.getElementById("validering antall").innerText = "";
    }
    return true;
}

function valideringSjekkFornavn(fornavn){
    if(!fornavn){
        document.getElementById("validering fornavn").innerText="Må skrive inn noe inn i fornavnet";
        return false;
    }
    else if(/[^a-zA-Z]/.test(fornavn)){
        document.getElementById("validering fornavn").innerText="Ugyldig verdi - Vennligst skriv inn fornavn";
        return false;
    } else {
        document.getElementById("validering fornavn").innerText = "";
    }
    return true;
}

function valideringSjekkEtternavn(etternavn){
    if(!etternavn){
        document.getElementById("validering etternavn").innerText="Må skrive inn noe inn i etternavnet";
        return false;
    }
    else if(/[^a-zA-Z]/.test(etternavn)){
        document.getElementById("validering etternavn").innerText="Ugyldig verdi - Vennligst skriv inn etternavn";
        return false;
    } else {
        document.getElementById("validering etternavn").innerText = "";
    }
    return true;
}

function valideringSjekkTelefonnr(telefonnr){
    if(!telefonnr){
        document.getElementById("validering telefonnr").innerText="Må skrive inn noe inn i telefonnr";
        return false;
    }
    else if(isNaN(telefonnr) || telefonnr.length !== 8){ //sjekk om du kan skrive inn maksimalt ant siffer? tlf nummer her 8
        document.getElementById("validering telefonnr").innerText="Ugyldig verdi - Telefonnummer må bestå av 8 siffer";
        return false;
    } else {
        document.getElementById("validering telefonnr").innerText = "";
    }
    return true;
}

function valideringSjekkEpost(epost){
    if(!epost){
        document.getElementById("validering epost").innerText="Må skrive inn noe inn i epost";
        return false;
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(epost)){
        document.getElementById("validering epost").innerText="Ugyldig verdi - Vennligst skriv inn epost";
        return false;
    } else {
        document.getElementById("validering epost").innerText = "";
    }
    return true;
}

function visBillettRegister(){

    const film = document.getElementById("velg").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;


    if(!valideringSjekkFilm(film) | !valideringSjekkAntall(antall) | !valideringSjekkFornavn(fornavn) | !valideringSjekkEtternavn(etternavn) | !valideringSjekkTelefonnr(telefonnr) | !valideringSjekkEpost(epost)){
        return;
    }
    //sjekk med andre for å finne ut av feilmeldingene til å jobbe sammen //feilmeldingene oppstår også når man sletter billettene

    const nyBillett = {
        film : film,
        antall : antall,
        fornavn : fornavn,
        etternavn : etternavn,
        telefonnr : telefonnr,
        epost : epost
    };

    billettRegister.push(nyBillett);
    visBillettTabell();
    klarererForm(); //Resetter og klarerer utfyllingene for neste billett
}

function visBillettTabell(){
    let utskriftAvBillett = "<table style='text-align: center'><tr>" +
        "<th><h3>Film</h3></th><th><h3>Antall</h3></th><th><h3>Fornavn</h3></th><th><h3>Etternavn</h3></th><th><h3>Telefonnr</h3></th><th><h3>Epost</h3></th>" +
        "</tr>";

    for(let i = 0; i < billettRegister.length; i++){
        utskriftAvBillett+="<tr>";
        utskriftAvBillett+="<td>"+billettRegister[i].film+"</td><td>"+billettRegister[i].antall+"</td><td>"+billettRegister[i].fornavn+"</td><td>"+billettRegister[i].etternavn+"</td><td>"+billettRegister[i].telefonnr+"</td><td>"+billettRegister[i].epost+"</td>";
        utskriftAvBillett+="</tr>";
    }
    utskriftAvBillett+="<table>";

    document.getElementById("billettRegister").innerHTML=utskriftAvBillett;
}

function klarererForm(){
    document.getElementById("velg").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}

function slettAlleBilletter(){
    billettRegister = [];
    visBillettTabell();
    console.log("Tabell slettet"); //For å sjekke om arrayet faktisk ble tømt
}