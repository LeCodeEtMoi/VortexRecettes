document.addEventListener("DOMContentLoaded", () => {
    // Ajouter des gestionnaires pour chaque lien
    const ramenLink = document.getElementById("Ramen") as HTMLAnchorElement;
    const tartinadesLink = document.getElementById("Tartinades") as HTMLAnchorElement;
    const soupeLink = document.getElementById("Soupe") as HTMLAnchorElement;
    const tartesLink = document.getElementById("Tartes") as HTMLAnchorElement;
    const chaosVLink = document.getElementById("ChaosV") as HTMLAnchorElement;
    const chaosPVLink = document.getElementById("ChaosPV") as HTMLAnchorElement;
    const gâteauxLink = document.getElementById("Gâteaux") as HTMLAnchorElement;
    const boissonsLink = document.getElementById("Boissons") as HTMLAnchorElement;


    if (ramenLink) {
        ramenLink.addEventListener("click", (event) => {
            event.preventDefault();
            // Rediriger vers template.html avec le type de recettes dans l'URL
            window.location.href = "template.html?type=ramen";
        });
    }

    if (tartinadesLink) {
        tartinadesLink.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "template.html?type=tartinades";
        });
    }
    if (soupeLink) {
        soupeLink.addEventListener("click", (event) => {
            console.log("La soupe est bonne !! ")
            event.preventDefault();
            window.location.href = "template.html?type=soupe";
        });
    }
    if (tartesLink) {
        tartesLink.addEventListener("click", (event) => {
            console.log("La tarte est bonne !! ")
            event.preventDefault();
            window.location.href = "template.html?type=tartes";
        });
    }
    if (chaosVLink) {
        chaosVLink.addEventListener("click", (event) => {
            console.log("La soupe est bonne !! ")
            event.preventDefault();
            window.location.href = "template.html?type=chaosV";
        });
    }
    if (chaosPVLink) {
        chaosPVLink.addEventListener("click", (event) => {
            console.log("La soupe est bonne !! ")
            event.preventDefault();
            window.location.href = "template.html?type=chaosPV";
        });
    }
    if (gâteauxLink) {
        gâteauxLink.addEventListener("click", (event) => {
            console.log("La soupe est bonne !! ")
            event.preventDefault();
            window.location.href = "template.html?type=gâteaux";
        });
    }
    if (boissonsLink) {
        boissonsLink.addEventListener("click", (event) => {
            console.log("La soupe est bonne !! ")
            event.preventDefault();
            window.location.href = "template.html?type=boissons";
        });
    }
});
