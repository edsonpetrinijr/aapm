import React from "react";

export default function ProductPageItem({
    name,
    priceForAAPMPartner,
    priceForNonAAPMPartner,
}: {
    name: string;
    priceForAAPMPartner?: number;
    priceForNonAAPMPartner: number;
}) {
    const formatter = new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
    });

    const formattedPriceForAAPMPartner =
        priceForAAPMPartner && formatter.format(priceForAAPMPartner);
    const formattedPriceForNonAAPMPartner = formatter.format(
        priceForNonAAPMPartner
    );

    return (
        <li className="list-none">
            <div className="p-6 rounded-xl flex flex-col items-center shadow-[0px_6px_32px_0px_rgba(0,0,0,0.10)] w-full bg-white">
                <h1 className="text-zinc-600 font-bold text-xl text-center">
                    {name.toUpperCase()}
                </h1>

                {formattedPriceForAAPMPartner ? (
                    <div className="w-full flex justify-around">
                        <div className="flex flex-col items-center justify-center">
                            <span>Sócios</span>
                            <p className="font-bold my-auto break-all text-center">
                                <span>R$</span>{" "}
                                <span className="text-3xl">
                                    {formattedPriceForAAPMPartner}
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <span>Não Sócios</span>
                            <p className="font-bold my-auto break-all text-center">
                                <span>R$</span>{" "}
                                <span className="text-3xl">
                                    {formattedPriceForNonAAPMPartner}
                                </span>
                            </p>
                        </div>
                    </div>
                ) : (
                    <p className="font-bold my-auto break-all text-center">
                        <span>R$</span>{" "}
                        <span className="text-3xl">
                            {formattedPriceForNonAAPMPartner}
                        </span>
                    </p>
                )}
            </div>
        </li>
    );
}
