"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projetos = [
  {
    titulo: "Eletricista residencial",
    imagem: "/ELETRICISTARESIDENCIAL.jpg",
  },
  {
    titulo: "Ideia de logo para Arquitetura",
    imagem: "/Arquit.png",
  },
  {
    titulo: "Logo de energia sustentável",
    imagem: "/Energy.jpg",
  },
];

export default function ProjetosPage() {
  const [imagemAberta, setImagemAberta] = useState(null);


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1b] to-[#00b388] text-white p-10 relative">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold"></h1>
        <Link href="/LandingPage" className="text-sm underline hover:text-gray-300">
          Tela principal
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="relative group w-[300px] h-[200px] rounded-xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setImagemAberta(projeto.imagem)}
          >
            <Image
              src={projeto.imagem}
              alt={projeto.titulo}
              width={300}
              height={200}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <motion.div
              className="absolute inset-0 bg-green-800 bg-opacity-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <h2 className="text-xl font-semibold text-white">{projeto.titulo}</h2>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Modal para imagem ampliada */}
      {imagemAberta && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-3xl w-full px-4">
            <button
              onClick={() => setImagemAberta(null)}
              className="absolute top-4 right-6 text-white text-2xl font-bold bg-black/50 rounded-full px-3 py-1 hover:bg-green-600"
            >
              ✕
            </button>
            <Image
              src={imagemAberta}
              alt="Imagem ampliada"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
