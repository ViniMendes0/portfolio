"use client";
import Image from "next/image";
import Link from "next/link";

export default function CardapioOnline() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f0f1b] to-[#00b388] text-white p-10 flex flex-col justify-between">
      <div className="max-w-4xl mx-auto text-center">
        <Link href="/Projetos" className="text-sm text-white/70 hover:underline float-right">
          Tela principal
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-2">Cardápio Online</h1>
        <p className="mb-8 text-white/20">UX design | Projeto Cardápio Online 2024</p>

        {/* Problema */}
        <div className="mb-10 text-left">
          <h2 className="text-2xl font-semibold mb-2">Problema</h2>
          <p className="text-sm leading-relaxed">
            Restaurante tem uma alta demanda e precisava de um site para ajudar no recebimento de novos pedidos.
          </p>
        </div>

        {/* Solução */}
        <div className="mb-10 text-left">
          <h2 className="text-2xl font-semibold mb-2">Solução</h2>
          <p className="text-sm leading-relaxed">
            Criei o site utilizando a tecnologia React, com uma estrutura totalmente interativa. 
            Desenvolvemos componentes como uma lista de opções do cardápio, botão para adicionar ao carrinho, 
            e um modal que exibe os pedidos em tempo real. 
            Ao finalizar o carrinho, o sistema calcula automaticamente o valor total e envia o pedido diretamente para o WhatsApp do restaurante, 
            agilizando o pagamento e o atendimento.
          </p>
        </div>

        {/* Imagens */}
        <div className="grid gap-6 mb-10">
          <Image src="/cardapio.png" alt="Cardápio página inicial" width={800} height={400} className="rounded-lg mx-auto mr-96" />
          <Image src="/modal.png" alt="Carrinho de pedidos" width={800} height={400} className="rounded-lg mx-auto ml-52" />
        </div>

        {/* Processo */}
        <div className="mt-10 text-left">
          <h2 className="text-2xl font-semibold mb-2">Processo de construção</h2>
          <p className="text-sm leading-relaxed">
            Esse projeto foi sendo desenvolvido de forma educativa, através de aulas no Youtube, 
            onde foram construídos passo a passo o site e toda a sua ideia.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center border-t border-white/10 pt-6">
        <p className="text-sm text-white/70 mb-2">Acesse o site:</p>
        <a
          href="https://cardapio-restaurante-weld.vercel.app/" // <- Troque pela URL real
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-300 hover:underline text-sm"
        >
          www.cardapioonline.site
        </a>
      </footer>
    </section>
  );
}
