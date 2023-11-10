import React from "react";

export default function ProductPageItem({
    name,
    price,
}: {
    name: string;
    price: number;
}) {
    const formatter = new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
    });

    const formattedPrice = formatter.format(price);

    return (
        <li className="list-none">
            <div className="p-6 rounded-xl flex flex-col items-center shadow-[0px_6px_32px_0px_rgba(0,0,0,0.10)] w-full bg-white">
                <h1 className="text-zinc-600 font-bold text-xl mb-1 text-center">
                    {name.toUpperCase()}
                </h1>
                <p className="font-bold my-auto break-all text-center">
                    <span>R$</span>{" "}
                    <span className="text-3xl">{formattedPrice}</span>
                </p>
            </div>
        </li>
    );
}
