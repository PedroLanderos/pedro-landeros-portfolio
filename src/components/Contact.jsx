import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaCopy } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="my-4 text-xl"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <div className="flex items-center justify-center gap-2">
          <a className="text-xl">{CONTACT.email}</a>
          <button onClick={() => copyToClipboard(CONTACT.email)} className="text-xl">
            <FaCopy />
          </button>
          {copied && <span className="text-sm text-gray-400">Copied!</span>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
