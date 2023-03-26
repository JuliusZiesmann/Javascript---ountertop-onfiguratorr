// Foto mit Form
function ImageA() {
    var selected = document.querySelector("#formInput");
    let newImg = document.querySelector("#bildA");
    if(selected.value === "Gerade Kante") {
        newImg.setAttribute("src", "images/javascriptPriject/form-gerade-kante.png");
    }
    if(selected.value === "Facettenkante") {
        newImg.setAttribute("src", "images/javascriptPriject/form-facettenkante.png");
    }
    if(selected.value === "Mit Baumkant") {
        newImg.setAttribute("src", "images/javascriptPriject/form-baumkante.png");
    }
    if(selected.value === "Durchgängige Bohlen") {
        newImg.setAttribute("src", "images/javascriptPriject/form-bohlen-durchgaengig.png");
    }
    if(selected.value === "Mit Querfrieß") {
        newImg.setAttribute("src", "images/javascriptPriject/form-mit-querfuss.png");
    }
    if(selected.value === "Rund") {
        newImg.setAttribute("src", "images/javascriptPriject/form-rund.png");
    }
    if(selected.value === "Oval") {
        newImg.setAttribute("src", "images/javascriptPriject/form-oval.png");
    }
    if(selected.value === "Schiffsbodenmuster") {
        newImg.setAttribute("src", "images/javascriptPriject/form-schiffsbodenmuster.png");
    }
    if(selected.value === "Flechtmuster") {
        newImg.setAttribute("src", "images/javascriptPriject/form-flechtmuster.png");
    }
    if(selected.value === "Rautenmuster") {
        newImg.setAttribute("src", "images/javascriptPriject/form-rautenmuster.png");
    }
}
//Foto mit Rissenteil
function ImageB() {
    var selected = document.querySelector("#rissanteilInput");
    let newImg = document.querySelector("#bildB");
    if(selected.value === "Leichter Rissanteil") {
        newImg.setAttribute("src", "images/javascriptPriject/rissanteil-leicht.png");
    }
    if(selected.value === "FNormaler Rissanteil") {
        newImg.setAttribute("src", "images/javascriptPriject/rissanteil-normal.png");
    }
    if(selected.value === "Reine Balken Außenseiten") {
        newImg.setAttribute("src", "images/javascriptPriject/rissanteil-reine-balken-aussenseiten.png");
    }
}
// Foto mit Finish
function ImageC() {
    var selected = document.querySelector("#finishInput");
    let newImg = document.querySelector("#bildC");
    if(selected.value === "Mattlack") {
        newImg.setAttribute("src", "images/javascriptPriject/form-gerade-kante.png");
    }
    if(selected.value === "Hartöl") {
        newImg.setAttribute("src", "images/javascriptPriject/finish-hartoel.png");
    }
    if(selected.value === "Äste/Risse schwarz verfüllt") {
        newImg.setAttribute("src", "images/javascriptPriject/finish-risse-schwarz-verfuellt.png");
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
        let preis = 0;
        if(document.querySelector("#preis").value === ("2.5 cm") ) {
            preis = 300;
            return preis;
            
        }
        if(document.querySelector("#preis").value === ("3.0 cm") ) {
            preis = 360;
            return preis;
            
        }
        if(document.querySelector("#preis").value === ("4.0 cm") ) {
            preis = 420;
            return preis;
            
        }
        if(document.querySelector("#preis").value === ("5.0 cm") ) {
            preis = 480;
            return preis;
            
        }
        if(document.querySelector("#preis").value === ("6.0 cm") ) {
            preis = 560;
            return preis;            
        }
        if(document.querySelector("#preis").value === ("7.0 cm") ) {
            preis = 640;
            return preis;
            
        }
        if(document.querySelector("#preis").value === ("8.0 cm") ) {
            preis = 720;
            return preis;
            
        }
        if(document.querySelector("#preis").value === ("9.0 cm") ) {
            preis = 800;
            return preis;
            
        }
        if(document.querySelector("#preis").value === ("10.0 cm") ) {
            preis = 880;
            return preis;
            
        }
        if(document.querySelector("#preis").value === ("11.0 cm") ) {
            preis = 960;
            return preis;
            
        }
        if(document.querySelector("#preis").value === ("12.0 cm") ) {
            preis = 1040;
            return preis;
            
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
    document.querySelector("#ausgabe").innerHTML = ganzePreis.toFixed(2);
}