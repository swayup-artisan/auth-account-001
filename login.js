const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const sendBtn = document.getElementById("sendBtn");
const confirmation = document.getElementById("confirmation");

sendBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;



    if (email === "" || password === ""){
        confirmation.textContent = "Veuillez remplir les champs ci dessus.";
        confirmation.style.color = "red";
        return;
    }

    if (!emailRegex.test(email)){
        confirmation.textContent = "Votre email n'est pas valide.";
        confirmation.style.color = "red";
        return; 
    }

    if (!passwordRegex.test(password)){
        confirmation.textContent = "Mot de passe invalide. Il doit contenir au moins 6 caractères, une lettre et un chiffre.";
        confirmation.style.color = "red";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(user => user.email === email && user.password === password);


    if (!foundUser) {
        confirmation.textContent = "identifiants incorrects ou utilisateur non-trouvé.";
        confirmation.style.color = "red";
        return;
    }
    
    confirmation.textContent = "bienvenue, vous êtes bien connecté."
    confirmation.style.color = "green";

    window.location.href = "swayup-artisan.com";

});
