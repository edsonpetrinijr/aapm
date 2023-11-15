import React from "react";
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Header />

            <main>
                <Carousel
                    images={["/chaos-soccer-gear-Cjfl8r_eYxY-unsplash.jpg"]}
                />

                <ProductList
                    name="Contribuições Sociais"
                    items={[
                        {
                            name: "Faça sua contribuição para AAPM",
                            price: 85,
                            redirectURL: "https://pag.ae/7ZWj55Q2Q",
                        },
                        {
                            name: "50% do vale-transporte de um aluno durante 1 mês",
                            price: 60,
                            redirectURL: "https://pag.ae/7ZWjfN4NP",
                        },
                        {
                            name: "100% do vale-transporte de um aluno durante 1 mês",
                            price: 120,
                            redirectURL: "https://pag.ae/7ZWjgkVX9",
                        },
                        {
                            name: "100% do acompanhementocom psicopedagogo de um aluno durante 1 mês",
                            price: 130,
                            redirectURL: "https://pag.ae/7ZWjgkVX9",
                        },
                    ]}
                />

                <ProductList
                    name="Produtos"
                    items={[
                        {
                            name: "Compre uma camiseta - Não Sócio",
                            price: 35,
                            redirectURL: "https://pag.ae/7ZWj7GGKu",
                        },
                        {
                            name: "Compre uma camiseta - Sócio",
                            price: 30,
                            redirectURL: "https://pag.ae/7ZWj7GGKu",
                        },
                    ]}
                />

                <div className="w-full bg-white p-8 shadow-lg mt-8 flex flex-col items-center">
                    <h2 className="w-full text-center text-3xl font-bold mb-2 uppercase">
                        Apoie a Educação
                    </h2>

                    <div className="w-full px-4 lg:px-40">
                        <p>
                            Seja parte dessa troca incrível! Mande seu
                            comprovante e receba um recadinho especial do aluno
                            que você ajudou. Vamos juntos fazer a diferença na
                            jornada educacional deles!
                        </p>
                    </div>

                    <Link
                        href="  https://wa.me/19984340213"
                        target="_blank"
                        className="w-full text-[#EB3E3E] rounded-full font-bold mt-2 text-center mx-auto px-auto"
                    >
                        Mande o comprovante no WhatsApp
                    </Link>
                </div>
            </main>

            <Footer />
        </>
    );
}
