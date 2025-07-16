// Contact.jsx
import React, { useState } from "react";
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");
  const [messageErreur, setMessageErreur] = useState("");
  //comportement 

  const handleTelephoneChange = (e) => {
    //récupère la valeur saisie
    const value = e.target.value;
    const regex = /^\+261\s\d{2}\s\d{2}\s\d{3}\s\d{2}$/;

    if (value === "" || regex.test(value)) {
      setPhone(value);
      setMessageErreur(""); // tout est bon
    } else {
      setMessageErreur("Format attendu : +261 32 12 345 67");
      setPhone(""); // vide le champ
    }
  };
//recuperation valeur
  const values={
    name,
    email,
    phone,
    object,
    message,
  };
  return (
    <div>
        <form className="contact-form">
        <div className="form-content">
          <label htmlFor="name" className="label-contact">
            Nom et Prénom :
          </label>
          <input
            className="input-contact"
            type="text"
            //lien entre un htmlFor label et un champ via id
            id="name"
            name="name"
            placeholder="Nom et Prénom"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email" className="label-contact">
            Adresse mail :
          </label>
          <input
            className="input-contact"
            type="email"
            id="email"
            name="email"
            placeholder="exemple@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="phone" className="label-contact">
            N° Téléphone :
          </label>
          <input
            className="input-contact"
            type="tel"
            id="phone"
            name="phone"
            //Masque de saiise
            pattern="\+261\s\d{2}\s\d{2}\s\d{3}\s\d{2}"
            //title==infobulle
            title="Format attendu : +261 32 12 345 67"
            placeholder="+261 00 00 000 00"
            onChange={handleTelephoneChange}
            //onChange={(e) => setPhone(e.target.value)}
          />
            {/*
            if (messageErreur) {
              return <p>{messageErreur}</p>;
              }
          */}
            {messageErreur && (
            <p className="erreur-message">{messageErreur}</p>
            )}

            
          <label htmlFor="subject" className="label-contact">
            Sujet :
          </label>
          <select
            className="select-contact"
            name="subject"
            value={object}
            onChange={(e) => setObject(e.target.value)}
          >
            <option value="">Sélectionner l'objet de la demande</option>
            <option value="devis">Devis</option>
            <option value="questions">Questions</option>
            <option value="autre">Autre</option>
          </select>

          <label htmlFor="message" className="label-contact">
            Message :
          </label>
          <textarea
            className="message-contact"
            placeholder="Merci de renseigner vos questions ou commentaires"
            id="message"
            name="message"
            cols="20"
            rows="10"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <label className="label-contact">
            <input type="checkbox" /> En cochant cette case, j'accepte de
            recevoir des informations sur les différentes offres disponibles.
          </label>

          <button className="button-contact" type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
