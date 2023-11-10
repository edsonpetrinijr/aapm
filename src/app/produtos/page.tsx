"use client";

import React from "react";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";
import ProductItem from "@/components/ProductItem";
import ProductPageItem from "@/components/ProductPageItem";

export default function Eventos() {
    const data = {
        produtos: [
            {
                nome: "CAMISETA",
                naoSocio: {
                    preco: 35.0,
                },
                socio: {
                    preco: 30.0,
                },
            },
            {
                nome: "CREME DE PROTEÇÃO P/ AS MÃOS",
                naoSocio: {
                    preco: 10.0,
                },
                socio: {
                    preco: 7.5,
                },
            },
            {
                nome: "LUVA RASPA CANO LONGO",
                naoSocio: {
                    preco: 17.0,
                },
                socio: {
                    preco: 15.5,
                },
            },
            {
                nome: "LUVA VAQUETA",
                naoSocio: {
                    preco: 16.5,
                },
                socio: {
                    preco: 12.5,
                },
            },
            {
                nome: "MÁSCARA P/ POEIRA, NÉVOAS, FUMOS...",
                naoSocio: {
                    preco: 4.0,
                },
                socio: {
                    preco: 3.0,
                },
            },
            {
                nome: "OCULOS MOD. LEOPARDO E RJ",
                naoSocio: {
                    preco: 6.0,
                },
                socio: {
                    preco: 5.0,
                },
            },
            {
                nome: "OCULOS MOD. PANDA",
                naoSocio: {
                    preco: 10.0,
                },
                socio: {
                    preco: 8.0,
                },
            },
            {
                nome: "PROTETOR AURICULAR TIPO PLUG",
                naoSocio: {
                    preco: 2.5,
                },
                socio: {
                    preco: 2.0,
                },
            },
            {
                nome: "REDINHA PARA CABELO - PRETA",
                naoSocio: {
                    preco: 1.5,
                },
                socio: {
                    preco: 1.0,
                },
            },
            {
                nome: "TOUCA P/ SOLDA",
                naoSocio: {
                    preco: 10.0,
                },
                socio: {
                    preco: 8.0,
                },
            },
            {
                nome: "APONTADOR C/ DEPOSITO - CIS",
                naoSocio: {
                    preco: 1.5,
                },
                socio: {
                    preco: 1.0,
                },
            },
            {
                nome: "BLOCO PARA FICHÁRIO BRANCO - 90 FL",
                naoSocio: {
                    preco: 3.5,
                },
                socio: {
                    preco: 3.0,
                },
            },
            {
                nome: "BORRACHA BRANCA MERCUR 40",
                naoSocio: {
                    preco: 1.0,
                },
                socio: {
                    preco: 0.5,
                },
            },
            {
                nome: "BORRACHA MERCUR VERDE CLEAN",
                naoSocio: {
                    preco: 1.5,
                },
                socio: {
                    preco: 1.0,
                },
            },
            {
                nome: "Cadeado 25mm",
                naoSocio: {
                    preco: 20.0,
                },
                socio: {},
            },
            {
                nome: "CANETA BIC CRISTAL - AZUL/ PRETA/ VERM",
                naoSocio: {
                    preco: 1.5,
                },
                socio: {
                    preco: 1.0,
                },
            },
            {
                nome: "CANETA BIC FINE - AZUL/ PRETA",
                naoSocio: {
                    preco: 1.5,
                },
                socio: {
                    preco: 1.0,
                },
            },
            {
                nome: "COMPASSO",
                naoSocio: {
                    preco: 10.0,
                },
                socio: {
                    preco: 8.0,
                },
            },
            {
                nome: "DUREX",
                naoSocio: {
                    preco: 1.0,
                },
                socio: {
                    preco: 0.5,
                },
            },
            {
                nome: "ESTOJO AAPM",
                naoSocio: {
                    preco: 10.0,
                },
                socio: {
                    preco: 7.0,
                },
            },
            {
                nome: "FOLHA MILIMETRADA A4 - KIT COM 10 FL",
                naoSocio: {
                    preco: 1.0,
                },
                socio: {
                    preco: 0.5,
                },
            },
            {
                nome: "ESQUADRO 60",
                naoSocio: {
                    preco: 6.0,
                },
                socio: {
                    preco: 5.0,
                },
            },
            {
                nome: "GRAFITE 0,5 2B BIG TREE",
                naoSocio: {
                    preco: 1.5,
                },
                socio: {
                    preco: 1.0,
                },
            },
            {
                nome: "GRAFITE 0,7 HB FABER CASTELL",
                naoSocio: {
                    preco: 3.0,
                },
                socio: {
                    preco: 2.5,
                },
            },
            {
                nome: "GRAFITE PARA COMPASSO",
                naoSocio: {
                    preco: 3.5,
                },
                socio: {
                    preco: 3.0,
                },
            },
            {
                nome: "LÁPIS COMUM",
                naoSocio: {
                    preco: 1.5,
                },
                socio: {
                    preco: 1.0,
                },
            },
            {
                nome: "LÁPIS 2B FABER CASTELL",
                naoSocio: {
                    preco: 2.0,
                },
                socio: {
                    preco: 1.5,
                },
            },
            {
                nome: "PAPEL ALMAÇO",
                naoSocio: {
                    preco: 0.25,
                },
                socio: {
                    preco: 0.1,
                },
            },
            {
                nome: "PASTA CATÁLOGO 50 ENVELOPES",
                naoSocio: {
                    preco: 6.0,
                },
                socio: {
                    preco: 4.0,
                },
            },
            {
                nome: "REFIL CANETA BORRACHA MERCUR",
                naoSocio: {
                    preco: 1.0,
                },
                socio: {
                    preco: 0.5,
                },
            },
            {
                nome: "RÉGUA 30CM",
                naoSocio: {
                    preco: 3.0,
                },
                socio: {
                    preco: 2.5,
                },
            },
            {
                nome: "TRANSFERIDOR",
                naoSocio: {
                    preco: 4.0,
                },
                socio: {
                    preco: 3.5,
                },
            },
            {
                nome: "Jaleco",
                naoSocio: {
                    preco: 15.0,
                },
                socio: {
                    preco: 10.0,
                },
            },
            {
                nome: "Calculadora",
                naoSocio: {
                    preco: 45.0,
                },
                socio: {
                    preco: 40.0,
                },
            },
            {
                nome: "ALUGUEL DE ARMARIO",
                naoSocio: {
                    preco: 50.0,
                },
                socio: {},
            },
            {
                nome: "WI-FI",
                naoSocio: {
                    preco: 40.0,
                },
                socio: {},
            },
        ],
    };

    return (
        <>
            <Header />

            <main>
                <h1 className="text-center lg:text-4xl text-2xl font-bold uppercase mb-4">
                    Preços para Sócios
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-12 gap-4 mb-8">
                    {data.produtos.map(
                        (item) =>
                            item.socio.preco && (
                                <ProductPageItem
                                    key={item.nome}
                                    name={item.nome}
                                    price={item.socio.preco}
                                />
                            )
                    )}
                </div>

                <h1 className="text-center lg:text-4xl text-2xl font-bold uppercase mb-4">
                    Preços para Não Sócios
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-12 gap-4">
                    {data.produtos.map(
                        (item) =>
                            item.socio.preco && (
                                <ProductPageItem
                                    key={item.nome}
                                    name={item.nome}
                                    price={item.naoSocio.preco}
                                />
                            )
                    )}
                </div>
            </main>

            <Footer />
        </>
    );
}
