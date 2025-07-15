// Contact.jsx
import React, { useState } from "react";
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");
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
            type="text"
            id="phone"
            name="phone"
            placeholder="+261 00 00 000 00"
            onChange={(e) => setPhone(e.target.value)}
          />

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
