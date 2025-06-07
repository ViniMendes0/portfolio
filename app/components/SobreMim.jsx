"use client";
import Image from "next/image";
import Link from "next/link";

export default function SobreMim() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f0f1b] to-[#00b388] text-white p-10 flex flex-col items-center text-center relative">
      
      {/* Botão de volta pra home */}
      <Link
        href="/"
        className="absolute top-4 right-4 text-sm text-white/70 hover:text-white transition"
      >
        Tela principal
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-6">Sobre mim</h1>

      <div className="flex gap-6 mb-6">
        <div className="w-20 h-20 rounded-full overflow-hidden border-1 border-green-950">
          <Image
            src="/perfil.png.JPG"
            alt="Perfil"
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-20 h-20 rounded-full overflow-hidden border-0 border-white">
          <Image
            src="/vm1.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <p className="max-w-2xl mb-8 text-sm md:text-base leading-relaxed">
        Meu nome é Vinicius, sou Designer UI/UX e atualmente atuo como freelancer.
        Tenho como especialidade o domínio de ferramentas como Photoshop, Figma e um
        pouco de After Effects, além de recursos mais simples como CapCut ou Canva.
        <br /><br />
        Meu foco vai além do design visual — também atuo no desenvolvimento de sites,
        trabalhando com a tecnologia React e utilizando HTML, CSS e JavaScript para
        construir interfaces completas e funcionais.
        <br /><br />
        No back-end, estou atualmente utilizando o Supabase para estruturação de banco
        de dados, integrando com os projetos que desenvolvo.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Tecnologias</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <Icon label="HTML" src="/html.svg" />
        <Icon label="CSS" src="/css.svg" />
        <Icon label="JavaScript" src="/js.svg" />
        <Icon label="React" src="/react.svg" />
        <Icon label="Tailwind" src="/taiw.svg" />
        <Icon label="SupaBase" src="/sb.svg" />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Contatos</h2>
      <div className="flex justify-center gap-10">
        <a href="https://www.linkedin.com/in/vinicius-mendes-b1b785361/?trk=opento_sprofile_topcard" target="_blank" rel="noopener noreferrer">
          <Image src="/link.svg" alt="LinkedIn" width={40} height={40} />
        </a>
        <a href="https://www.instagram.com/viniciusmendesdesigner/?next=%2F" target="_blank" rel="noopener noreferrer">
          <Image src="/instagram.svg" alt="Instagram" width={40} height={40} />
        </a>
      </div>
    </section>
  );
}

function Icon({ label, src }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10 p-2 backdrop-blur-sm border border-white/20 shadow-md">
        <Image src={src} alt={label} width={48} height={48} className="object-contain" />
      </div>
      <span className="text-sm mt-1">{label}</span>
    </div>
  );
}
