import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../Style/ContactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lobe", // Remplacez par votre ID de service
        "template_84ha1iw", // Remplacez par votre ID de template
        formData,
        "rccvIsw29e0EbvQ4B" // Remplacez par votre clé publique
      )
      .then(
        () => {
          setStatus("Message envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Échec de l'envoi :", error);
          setStatus("Une erreur s'est produite. Veuillez réessayer.");
        }
      );
  };

  return (
    <div className="contact-form">
      <h2>Contactez-moi</h2>
      {status && <p className="status">{status}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
