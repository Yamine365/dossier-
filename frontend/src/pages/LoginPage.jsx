import React, { useState } from "react";
import "./Auth.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const LoginPage = ({ onNavigateToSignup }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

      const data = await response.json();
      console.log("Status:", response.status);
      console.log("Data:", data);

      if (response.ok) {
        alert("Connexion réussie !");
        // Stocker le token et les infos utilisateur
        //localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Rediriger vers l'accueil ou dashboard
        window.location.href = "/";
      } else {
        alert(data.message || "Email ou mot de passe incorrect");
      }
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la connexion au serveur");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-icon">🏠</div>
        <h1>Connexion</h1>
        <p>Connectez-vous pour publier une annonce</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Adresse email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Mot de passe"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <div className="remember-container">
            <label>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              Se souvenir de moi
            </label>
            
          </div>

          <button type="submit" className="btn-primary">
            Se connecter
          </button>
        </form>

        <div className="social-buttons">
          <button className="btn-google">
            <FcGoogle size={20} style={{ marginRight: "8px" }} />
            Continuer avec Google
          </button>
          <button className="btn-facebook">
            <FaFacebookF size={20} style={{ marginRight: "8px" }} />
            Continuer avec Facebook
          </button>
        </div>

        <p>
          Pas de compte ?{" "}
          <button onClick={onNavigateToSignup} className="link">
            Créer un compte
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
