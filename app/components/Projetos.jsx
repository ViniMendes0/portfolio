"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const projetos = [
  {
    titulo: "Loja de móveis",
    imagem: "/4.png",
    link: "/Projetos/loja-moveis",
  },
  {
    titulo: "LS Consultoria",
    imagem: "/01.png",
    link: "/Projetos/ls-consultoria",
  },
  {
    titulo: "Cardápio Online",
    imagem: "/3.png",
    link: "/Projetos/cardapio-online",
  },
];

export default function ProjetosPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#0f0f1b] to-[#00b388] text-white p-10"
    >
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold">Projetos</h1>
        <Link href="/LandingPage" className="text-sm underline hover:text-gray-300">
          Tela principal
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
        {projetos.map((projeto, index) => (
          <Link key={index} href={projeto.link}>
            <div className="relative group w-[300px] h-[200px] rounded-xl overflow-hidden shadow-lg cursor-pointer">
              <img
                src={projeto.imagem}
                alt={projeto.titulo}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <motion.div
                className="absolute inset-0 bg-green-950 bg-opacity-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <h2 className="text-xl font-semibold text-white">
                  {projeto.titulo}
                </h2>
              </motion.div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
