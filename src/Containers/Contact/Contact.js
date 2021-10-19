import React from 'react';
import './Contact.css'

export default function Contact() {
    return (
        <div className="container-contact">
            <h1>Contactez-nous</h1>
            <p><i className="uil uil-at"></i> : blogreact@gmail.com</p>
            <p><i className="uil uil-phone"></i> : 06 06 06 06 06</p>
            <p>Rejoignez-nous sur les réseaux</p>
            <ul>
                <li><i className="uil uil-facebook"></i></li>
                <li><i className="uil uil-twitter"></i></li>
                <li><i className="uil uil-instagram"></i></li>
            </ul>
        </div>
    );
}