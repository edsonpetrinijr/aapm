"use client"

import React from "react";
import openLinkInNewTab from "@/utils/openLinkInNewTab";

export default function ProductItem({
    name,
    price,
    redirectURL,
}: {
    name: string;
    price: number;
    redirectURL: string;
}) {
    const formatter = new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
    });

    const formattedPrice = formatter.format(price);

    return (
        <li className="list-none">
            <div className="p-6 rounded-xl flex flex-col items-center shadow-[0px_6px_32px_0px_rgba(0,0,0,0.10)] w-[300px] mr-6 bg-white">
                <h1 className="text-zinc-600 font-bold text-xl mb-1 text-center">
                    {name.toUpperCase()}
                </h1>
                <p className="font-bold my-auto break-all text-center">
                    <span>R$</span>{" "}
                    <span className="text-3xl">{formattedPrice}</span>
                </p>

                <button
                    onClick={() => openLinkInNewTab(redirectURL)}
                    className="w-full text-[#EB3E3E] border-2 border-solid border-[#EB3E3E] py-2 px-5 rounded-full font-bold mt-2"
                >
                    CONTRIBUA
                </button>
            </div>
        </li>
    );
}
