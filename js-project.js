// Foto mit Form
function ImageA() {
    var selected = document.querySelector("#formInput").value;
    let newImg = document.querySelector("#bildA");
    switch(selected) {
        case "Gerade Kante":
            newImg.setAttribute("src", "images/javascriptPriject/form-gerade-kante.png");
            break;
        case "Facettenkante":
            newImg.setAttribute("src", "images/javascriptPriject/form-facettenkante.png");
            break;
        case "Mit Baumkant":
            newImg.setAttribute("src", "images/javascriptPriject/form-baumkante.png");
            break;
        case "Durchgängige Bohlen":
            newImg.setAttribute("src", "images/javascriptPriject/form-bohlen-durchgaengig.png");
            break;
        case "Mit Querfrieß":
            newImg.setAttribute("src", "images/javascriptPriject/form-mit-querfuss.png");
            break;
        case "Rund":
            newImg.setAttribute("src", "images/javascriptPriject/form-rund.png");
            break;  
        case "Oval":
            newImg.setAttribute("src", "images/javascriptPriject/form-oval.png");
            break;
        case "Schiffsbodenmuster":
            newImg.setAttribute("src", "images/javascriptPriject/form-schiffsbodenmuster.png");
            break;
        case "Flechtmuster":
            newImg.setAttribute("src", "images/javascriptPriject/form-flechtmuster.png");
            break;
        case "Rautenmuster":
            newImg.setAttribute("src", "images/javascriptPriject/form-rautenmuster.png");
            break;
    }
}

//Foto mit Rissenteil
function ImageB() {
    var selected = document.querySelector("#rissanteilInput").value;
    let newImg = document.querySelector("#bildB");
    switch(selected) {
        case "Leichter Rissanteil":
            newImg.setAttribute("src", "images/javascriptPriject/rissanteil-leicht.png");
            break;
        case "FNormaler Rissanteil":
            newImg.setAttribute("src", "images/javascriptPriject/rissanteil-normal.png");
            break;
        case "Reine Balken Außenseiten":
            newImg.setAttribute("src", "images/javascriptPriject/rissanteil-reine-balken-aussenseiten.png");
            break;
    }
}

// Foto mit Finish
function ImageC() {
    var selected = document.querySelector("#finishInput").value;
    let newImg = document.querySelector("#bildC");
    switch(selected) {
        case "Mattlack":
            newImg.setAttribute("src", "images/javascriptPriject/form-gerade-kante.png");
            break;
        case "Hartöl":
            newImg.setAttribute("src", "images/javascriptPriject/finish-hartoel.png");
            break;
        case "Äste/Risse schwarz verfüllt":
            newImg.setAttribute("src", "images/javascriptPriject/finish-risse-schwarz-verfuellt.png");
            break;
    } 
}
function Berechnen() {

    //Breite Tischplatten
    function myBreite () {
        let brt = document.querySelector("#breite").value;
        return brt;
    }
    let brte = myBreite();
    
    // Länge Tischplatten
    function mylenge() {
        let lng = document.querySelector("#laenge").value;
        return lng;
    }
    let lng = mylenge();

    
    
    function myPreiss() {
        var preisValue = document.querySelector("#preis").value;
        let preis = 0;
        switch (preisValue) {
            case "2.5 cm":
                preis = 300;
                return preis
                break;
            case "3.0":
                preis = 360;
                return preis
                break;
            case "4.0 cm":
                preis = 420;
                return preis;
                break;
            case "5.0 cm":
                preis = 480;
                return preis;
                break;
            case "6.0 cm":
                preis = 560;
                return preis;
                break;
            case "7.0 cm":
                preis = 640;
                return preis;
                break;
            case "8.0 cm":
                preis = 720;
                return preis;
                break;
            case "9.0 cm":
                preis = 800;
                return preis;
                 break;
            case "10.0 cm":
                preis = 880;
                return preis;
                break;
            case "11.0 cm":
                preis = 960;
                return preis;
                break;
            case "12.0 cm":
                preis = 1040;
                return preis;
                break;
        }
    }
    let fehler = document.querySelector("#fehler");
    let ergPreis = myPreiss();
    //Preisen berechnung - erste Kommentar (€)
    
    let quadratMetr = (brte * lng) / 10000;

    if (document.querySelector("#finishInput").value == "Äste/Risse schwarz verfüllt") {
        ergPreis += 71.40;
    }
    console.log(ergPreis);
    if(document.querySelector("#rissanteilInput").value == "Reine Balken Außenseiten") {
        ergPreis += 47.60;
    }

    if(document.querySelector("#voll").value == "Optisch gedoppelt" && document.querySelector("#preis").value >= 4) {
        ergPreis *= 0.75;
    }
    else if (document.querySelector("#voll").value == "Optisch gedoppelt" && document.querySelector("#preis").value < 4) {
        fehler.innerHTML = "Doppelte Plattendicke ist nur ab 4 cm Stärke möglich!"
    }
    ganzePreis = ergPreis * quadratMetr;
    document.querySelector("#ausgabe").innerHTML = ganzePreis.toFixed(2) + " " + "€";
}
