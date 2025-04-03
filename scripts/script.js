document.addEventListener("DOMContentLoaded", () => {
    const stars = document.createElement("div");
    stars.classList.add("stars");
    document.body.appendChild(stars);

    for (let i = 0; i < 50; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        stars.appendChild(star);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    
    // Verificar si hay un tema guardado en localStorage
    if (localStorage.getItem("theme") === "minimalista") {
        body.classList.add("minimalista");
    }

    // Evento para cambiar el tema
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("minimalista");
        
        // Guardar la preferencia en localStorage
        if (body.classList.contains("minimalista")) {
            localStorage.setItem("theme", "minimalista");
        } else {
            localStorage.setItem("theme", "futurista");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("theme-toggle");
    const body = document.body;

    // Cargar estado guardado en LocalStorage
    if (localStorage.getItem("theme") === "minimalista") {
        body.classList.add("minimalista");
        toggleSwitch.checked = true;
    }

    // Alternar el tema
    toggleSwitch.addEventListener("change", () => {
        if (toggleSwitch.checked) {
            body.classList.add("minimalista");
            localStorage.setItem("theme", "minimalista");
        } else {
            body.classList.remove("minimalista");
            localStorage.setItem("theme", "tron");
        }
    });
});

