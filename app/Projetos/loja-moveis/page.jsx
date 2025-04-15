"use client";
import Image from "next/image";
import Link from "next/link";

export default function LojaMoveis() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f0f1b] to-[#00b388] text-white p-10 flex flex-col justify-between">
      <div className="max-w-4xl mx-auto text-center">
        <Link href="/Projetos" className="text-sm text-white/70 hover:underline float-right">
          Tela principal
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Loja de móveis</h1>
        <p className="mb-8 text-white/20">UI/UX Designer | Projeto Roberto Móveis 2025</p>

        {/* Problema */}
        <div className="mb-10 text-left">
          <h2 className="text-2xl font-semibold mb-2">Problema</h2>
          <p className="text-sm leading-relaxed">
            A loja já possuía um perfil no Instagram, porém muitos dos seus clientes são de uma faixa etária
            mais elevada e não utilizam a rede social, ou acham o acesso complicado. Com isso, era necessário enviar
            foto por foto dos produtos disponíveis, o que tornava o processo demorado e pouco prático.
            A proposta do site surgiu justamente para resolver esse problema:
            criar uma plataforma simples, onde com apenas um clique o cliente possa visualizar todas as peças disponíveis de forma fácil, rápida e eficiente.
          </p>
        </div>

        {/* Solução */}
        <div className="mb-10 text-left">
          <h2 className="text-2xl font-semibold mb-2">Solução</h2>
          <p className="text-sm leading-relaxed">
            Desenvolver um site que seja de fácil acesso, simplificado e bem intuitivo.
          </p>
        </div>

        {/* Imagens */}
        <div className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <Image src="/wireframe1.png" alt="Wireframe 1" width={500} height={300} className="rounded-lg" />
            <Image src="/4.png" alt="Resultado 1" width={500} height={300} className="rounded-lg" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image src="/wireframe2.png" alt="Wireframe 2" width={500} height={300} className="rounded-lg" />
            <Image src="/resultado2.png" alt="Resultado 2" width={500} height={300} className="rounded-lg" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image src="/wireframe3.png" alt="Wireframe 3" width={500} height={300} className="rounded-lg" />
            <Image src="/resultado3.png" alt="Resultado 3" width={500} height={300} className="rounded-lg" />
          </div>
        </div>

        {/* Processo */}
        <div className="mt-10 text-left">
          <h2 className="text-2xl font-semibold mb-2">Processo de construção</h2>
          <p className="text-sm leading-relaxed">
            A construção do projeto em si foi bem simples. Comecei criando o wireframe com base em como eu imaginava o site.
            Em seguida, pensei nos ícones e nas informações que seriam úteis, como as dimensões do móvel, o preço e um botão do WhatsApp,
            que ao ser clicado, leva o cliente diretamente para uma conversa com o responsável da loja, já sinalizando o interesse naquele móvel.
            Por fim, incluí uma área chamada "Trabalhos", onde são apresentados os projetos já realizados pelo responsável da loja.
          </p>
          <div className="flex gap-2 mt-4 overflow-x-auto">
            <Image src="/9.png" alt="Thumb 1" width={500} height={300} className="rounded" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center border-t border-white/10 pt-6">
        <p className="text-sm text-white/70 mb-2">Acesse o site:</p>
        <a
          href="https://robertomoveis-ixhycw4ma-vinicius-projects-c62ad19b.vercel.app/" // <-- troque aqui pela URL real do projeto
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-300 hover:underline text-sm"
        >
          www.robertomoveis.site
        </a>
      </footer>
    </section>
  );
}
