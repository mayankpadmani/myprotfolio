"use client";
import { motion, number } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/contact`, {
        name,
        email,
        contact,
        subject,
        message,
      });
      console.log(res.data);

      alert("Message sent successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };
 return (
  <motion.section
    id="contact"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative w-full px-6 py-28 bg-cover bg-center text-black"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1573497019410-99e5fcbc86e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')", // handshake bg
    }}
  >
    <div className="absolute inset-0  backdrop-blur-md"></div>

    <div className="relative z-10 max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-black via-black-300 to-black text-transparent bg-clip-text"
      >
        Let’s Build Intelligent Digital Experiences Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-black-300 mb-12 text-base md:text-lg max-w-2x1.8 mx-auto"
      >
        Whether it’s an AI-powered system, a machine learning model, or a full-stack web application , I’m here to transform complex ideas into intelligent,scalable digital solutions.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/5 p-8 rounded-2xl border border-black/10 backdrop-blur-md "
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="p-4 bg-black/10 border border-black/20 rounded-lg text-black  placeholder-black focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input type="text" name="bot-field" style={{ display: "none" }} />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="p-4 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="tel"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Contact Number"
          className="p-4 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="p-4 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-black"
        />
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          className="md:col-span-2 p-4 bg-black/10 border border-black/20 rounded-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-black"
        ></textarea>
        <button
          type="submit"
          className="md:col-span-2 w-full bg-text-to-r bg-black from-black to-black/300 py-3 rounded-md text-white font-semibold  hover:brightness-110 transition"
        >
          Send Message
        </button>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 text-black text-sm sm:text-base"
      >
        <a
          href="https://www.instagram.com/mr._padmani_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 
             hover:bg-gradient-to-r 
             hover:from-red-500 
             hover:via-blue-500 
             hover:to-yellow-400 
             hover:bg-clip-text 
             hover:text-transparent 
             transition duration-300"
        >
          <FaInstagram /> Instagram
        </a>
        <a
          href="https://www"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-500 transition"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/Mayankpadmani29"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <FaGithub /> GitHub
        </a>
      </motion.div>
    </div>
  </motion.section>
);
}

