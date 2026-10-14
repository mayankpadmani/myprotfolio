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
    className="relative w-full px-6 py-28 text-white overflow-hidden"
  >

    <div className="relative z-10 max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 text-transparent bg-clip-text"
      >
        Let’s Build Intelligent Digital Experiences Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-300 mb-12 text-base md:text-lg max-w-2xl mx-auto"
      >
        Whether it’s an AI-powered system, a machine learning model, or a full-stack web application, I’m here to transform complex ideas into intelligent, scalable digital solutions.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/[0.03] p-8 rounded-2xl border border-white/10 backdrop-blur-xl shadow-2xl"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="p-4 bg-white/5 border border-white/15 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
        />
        <input type="text" name="bot-field" style={{ display: "none" }} />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="p-4 bg-white/5 border border-white/15 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
        />
        <input
          type="tel"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Contact Number"
          className="p-4 bg-white/5 border border-white/15 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
        />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="p-4 bg-white/5 border border-white/15 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
        />
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          className="md:col-span-2 p-4 bg-white/5 border border-white/15 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
        ></textarea>
        <button
          type="submit"
          className="md:col-span-2 w-full bg-white hover:bg-gray-200 py-3.5 rounded-lg text-black font-bold tracking-wide transition duration-200 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          Send Message
        </button>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300 text-sm sm:text-base"
      >
        <a
          href="https://www.instagram.com/mr._padmani_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:text-white transition duration-300"
        >
          <FaInstagram /> Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/padmani-mayank-402a66373"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-[#0077B5] hover:text-white transition duration-300"
        >
          <FaLinkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/Mayankpadmani29"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-zinc-800 hover:text-white transition duration-300"
        >
          <FaGithub /> GitHub
        </a>
      </motion.div>
    </div>
  </motion.section>
);
}

