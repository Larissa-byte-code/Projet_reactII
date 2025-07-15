import React, { useState } from "react";
import Contact from "../contact/Contact";
import './Form_principale.css';

const FormPrincipale = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="form-principale-container">
      <h2>Bienvenue sur le formulaire principal</h2>

      <select
        onChange={(e) => {
          if (e.target.value === "contact") {
            setShowContact(true);
          }
        }}
      >
        <option value="">-- Sélectionner une option --</option>
        <option value="info">Informations</option>
        <option value="services">Services</option>
        <option value="contact">Contact</option>
      </select>
        //si vrai showContact ALORS  afficher <Contact />
      {showContact && <Contact />}
    </div>
  );
};

export default FormPrincipale;
