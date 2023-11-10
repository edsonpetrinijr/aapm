"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrestacaoDeContas() {
    const data = [
        {
            column1: "Vale-Transporte",
            column2: "R$ 793,00",
        },
        {
            column1: "Psicopedagogia",
            column2: "R$ 2290,00",
        },
        {
            column1: "Auxílio Alimentação e Outras",
            column2: "R$ 1350,00",
        },
    ];
    return (
        <>
            <Header />

            <main className="w-[75vw] mx-auto">
                <h1 className="text-center lg:text-4xl text-2xl font-bold uppercase mb-4">
                    Prestação de Contas
                </h1>

                <table className="min-w-full bg-white border border-zinc-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Ação</th>
                            <th className="py-2 px-4 border-b">Custos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr
                                key={index}
                                className={
                                    index % 2 === 0 ? "bg-zinc-100" : "bg-white"
                                }
                            >
                                <td className="py-2 px-4 border-b">
                                    {item.column1}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {item.column2}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>

            <Footer />
        </>
    );
}
