"use client";
import { motion } from "framer-motion";

interface Props {
  title: string;
  company: string;
  year: string;
  description?: string;
}

export default function JobCard({ title, company, year, description }: Props) {
  return (
    <motion.div
      className="bg-gray-800 text-white p-6 rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-400">{company}</p>
      <p className="text-gray-500 text-sm">{year}</p>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
}
