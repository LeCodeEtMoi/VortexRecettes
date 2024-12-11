document.addEventListener("DOMContentLoaded", function () {
    // Ajouter des gestionnaires pour chaque lien
    var ramenLink = document.getElementById("Ramen");
    var tartinadesLink = document.getElementById("Tartinades");
    var soupeLink = document.getElementById("Soupe");
    var tartesLink = document.getElementById("Tartes");
    var chaosVLink = document.getElementById("ChaosV");
    var chaosPVLink = document.getElementById("ChaosPV");
    var gâteauxLink = document.getElementById("Gâteaux");
    var boissonsLink = document.getElementById("Boissons");
    if (ramenLink) {
        ramenLink.addEventListener("click", function (event) {
            event.preventDefault();
            // Rediriger vers template.html avec le type de recettes dans l'URL
            window.location.href = "template.html?type=ramen";
        });
    }
    if (tartinadesLink) {
        tartinadesLink.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "template.html?type=tartinades";
        });
    }
    if (soupeLink) {
        soupeLink.addEventListener("click", function (event) {
            console.log("La soupe est bonne !! ");
            event.preventDefault();
            window.location.href = "template.html?type=soupe";
        });
    }
    if (tartesLink) {
        tartesLink.addEventListener("click", function (event) {
            console.log("La tarte est bonne !! ");
            event.preventDefault();
            window.location.href = "template.html?type=tartes";
        });
    }
    if (chaosVLink) {
        chaosVLink.addEventListener("click", function (event) {
            console.log("La soupe est bonne !! ");
            event.preventDefault();
            window.location.href = "template.html?type=chaosV";
        });
    }
    if (chaosPVLink) {
        chaosPVLink.addEventListener("click", function (event) {
            console.log("La soupe est bonne !! ");
            event.preventDefault();
            window.location.href = "template.html?type=chaosPV";
        });
    }
    if (gâteauxLink) {
        gâteauxLink.addEventListener("click", function (event) {
            console.log("La soupe est bonne !! ");
            event.preventDefault();
            window.location.href = "template.html?type=gâteaux";
        });
    }
    if (boissonsLink) {
        boissonsLink.addEventListener("click", function (event) {
            console.log("La soupe est bonne !! ");
            event.preventDefault();
            window.location.href = "template.html?type=boissons";
        });
    }
});
