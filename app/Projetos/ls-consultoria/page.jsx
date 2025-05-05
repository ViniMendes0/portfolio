"use client";
import Image from "next/image";
import Link from "next/link";

export default function LsConsultoria() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f0f1b] to-[#00b388] text-white p-4 md:p-10 flex flex-col justify-between">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-2">
          <Link href="/Projetos" className="text-sm text-white/70 hover:underline">
            Tela principal
          </Link>
        </div>

        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-1">Ls Consultoria</h1>
          <p className="mb-8 text-white/40 text-sm">UI design | Projeto LS Consultoria 2025</p>
        </div>

        {/* Problema */}
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Problema</h2>
          <p className="text-sm leading-relaxed text-white/90">
            O site foi desenvolvido para ajudar no controle dos clientes atendidos pela consultoria. Como eles recebem uma grande demanda, em alguns momentos fica difícil organizar e acompanhar todos os atendimentos. Por isso, o site foi criado com o objetivo de facilitar esse controle e tornar o processo mais eficiente.
          </p>
        </div>

        {/* Solução */}
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Solução</h2>
          <p className="text-sm leading-relaxed text-white/90">
            A solução para esse problema foi a criação de um banco de dados integrado ao site, permitindo que o consultor listasse os atendimentos de forma automatizada. Adicionamos botões de “editar” e “excluir”, garantindo que qualquer erro possa ser corrigido facilmente. Também foi incluído um botão de “Novo cliente”, que abre um formulário modal para o preenchimento imediato das informações. Por fim, uma tabela lista todos os clientes cadastrados, junto com uma barra de busca para facilitar a localização de um cliente específico.
          </p>
        </div>

        {/* Imagens */}
        <div className="grid gap-8 mb-10">
          <Image src="/22.png" alt="Capa LS" width={800} height={400} className="rounded-lg w-full h-auto mx-auto" />
          <Image src="/23.png" alt="Tabela LS" width={800} height={400} className="rounded-lg w-full h-auto mx-auto" />
          <Image src="/24.png" alt="Formulário LS" width={800} height={400} className="rounded-lg w-full h-auto mx-auto" />
        </div>

        {/* Processo */}
        <div className="mt-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">Processo de construção</h2>
          <p className="text-sm leading-relaxed text-white/90">
            Esse projeto começou com o convite do meu primo, que me chamou para desenvolver o site junto com ele. O design já estava pronto, então fui direto para a parte de codificação. Criei as páginas, os componentes e toda a estrutura do site, que foi — e ainda está sendo — desenvolvida com a tecnologia React, visando um código mais limpo, organizado e fácil de manter.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center border-t border-white/10 pt-6">
        <p className="text-sm text-white/70 mb-2">Acesse o site:</p>
        <a
          href="https://consultoria-three.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-300 hover:underline text-sm"
        >
          www.lsconsultoria.site
        </a>
      </footer>
    </section>
  );
}
