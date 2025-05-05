"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="relative h-screen flex flex-col justify-between text-white px-10 py-8 bg-gradient-to-br from-black via-[#002b36] to-[#008060]">
      
      {/* Imagem de fundo com pointer-events desativado */}
      <div className="absolute top-6 left-6">
        <img src="/logo.png" alt="logo" className="w-30 opacity-10 pointer-events-none" />
      </div>

      {/* Navegação no topo com z-index elevado */}
      <div className="flex justify-end space-x-8 text-sm z-10 relative">
        <Link href="/Ideias" className="hover:underline">Ideias</Link>
        <Link href="/Projetos" className="hover:underline">Projetos</Link>
        <Link href="/Sobre" className="hover:underline">Sobre mim</Link>
      </div>

      {/* Nome central */}
      <div className="text-4xl md:text-6xl font-light">
        Vinicius Mendes
      </div>

      {/* Rodapé */}
      <div className="text-sm text-right">
        Portfolio
      </div>
    </section>
  );
}
