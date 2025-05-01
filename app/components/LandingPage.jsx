"use client";

export default function LandingPage() {
    return (
        <section className="relative h-screen flex flex-col justify-between text-white px-10 py-8 bg-gradient-to-br from-black via-[#002b36] to-[#008060]">
            <div className="absolute top-6 left-6">
        <img src="/logo.png" alt="logo" className="w-30 opacity-10 "></img>
            </div>


            <div className="flex justify-end space-x-8 text-sm">
                <a href="/Ideias" className="hover:underline">Ideias</a>
                <a href="/Projetos" className="hover:underline">Projetos</a>
                <a href="/Sobre" className="hover:underline">Sobre mim</a>
            </div>

            <div className="text-4xl md:text-6xl font-light">
            Vinicius Mendes
            </div>


            <div className="text-sm text-right">
            Portfolio
            </div>
        </section>
    )
}