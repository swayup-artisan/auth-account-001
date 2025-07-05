const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const sendBtn = document.getElementById("sendBtn");
const confirmation = document.getElementById("confirmation");

sendBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    // 1. Validation de base
    if (email === "" || password === "") {
        confirmation.textContent = "Veuillez remplir tous les champs.";
        confirmation.style.color = "red";
        return;
    }

    if (!emailRegex.test(email)) {
        confirmation.textContent = "Email invalide.";
        confirmation.style.color = "red";
        return;
    }

    if (!passwordRegex.test(password)) {
        confirmation.textContent = "Mot de passe invalide. Il doit contenir au moins 6 caractères, une lettre et un chiffre.";
        confirmation.style.color = "red";
        return;
    }

    // 2. Vérifier si l'utilisateur existe déjà
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        confirmation.textContent = "Un utilisateur avec cet email existe déjà.";
        confirmation.style.color = "red";
        return;
    }

    const newUser = {
        email: email,
        password: password,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    confirmation.textContent = "Inscription réussie !";
    confirmation.style.color = "green";

    Window.location.href = "swayup-artisan.com";
});