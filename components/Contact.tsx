// components/Contact.tsx
"use client"

import React from 'react';
import emailjs from 'emailjs-com';


const Contact: React.FC = () => {
  return (
    <section id="contact"
     className="p-10 bg-gray-900 text-center"
     >
      <h2 className="text-white text-3xl font-semibold">Contact Me</h2>
      <form className="mt-4 space-y-4" onSubmit={sendEmail}>
        <input type="text" placeholder="Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Message" className="w-full p-2 border rounded h-32"></textarea>
        <button className="px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-500">
          Send
        </button>
      </form>
    </section>
  );
}
const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  emailjs.sendForm('service_kunq00r', 'template_qux048l', e.target as HTMLFormElement, '_ZnQpOGZBkFc6qDlV')
      .then((result) => {
          console.log('Email sent successfully!', result.text);
      }, (error) => {
          console.error('Failed to send email.', error.text);
      });
};
export default Contact;
