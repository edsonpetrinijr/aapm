"use client"

import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();

    return (
        <>
            <Header />

            <main>
                <Carousel
                    images={[
                        "/chaos-soccer-gear-Cjfl8r_eYxY-unsplash.jpg",
                    ]}
                    router={router}
                />

                <ProductList name="Contribuições Sociais" items={[
                    { name: "Faça sua contribuição para AAPM", price: 85, redirectURL: "https://pag.ae/7ZWj55Q2Q" },
                    { name: "50% do vale-transporte de um aluno durante 1 mês", price: 60, redirectURL: "https://pag.ae/7ZWjfN4NP" },
                    { name: "100% do vale-transporte de um aluno durante 1 mês", price: 120, redirectURL: "https://pag.ae/7ZWjgkVX9" },
                    { name: "100% do acompanhementocom psicopedagogo de um aluno durante 1 mês", price: 130, redirectURL: "https://pag.ae/7ZWjgkVX9" }
                ]} />

                <ProductList name="Produtos" items={[
                    { name: "Compre uma camiseta - Não Sócio", price: 35, redirectURL: "https://pag.ae/7ZWj7GGKu" },
                    { name: "Compre uma camiseta - Sócio", price: 30, redirectURL: "https://pag.ae/7ZWj7GGKu" }
                ]} />
            </main>

            <Footer />
        </>
    )
}
