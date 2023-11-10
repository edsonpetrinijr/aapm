import React, { useRef } from "react";
import Link from "next/link";

interface CarouselProps {
    images: string[];
}

export default function Carousel({ images }: CarouselProps) {
    const productListItems = useRef<HTMLDivElement | null>(null);

    return (
        <Link href="/eventos">
            <div className="relative overflow-hidden shadow-lg">
                <div
                    className="flex w-max transition-transform duration-700"
                    ref={productListItems}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className="w-screen h-72 object-cover opacity-25 object-center"
                            src={image}
                            alt=""
                        />
                    ))}
                </div>

                <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 lg:w-1/2">
                    <h1 className="lg:text-6xl text-4xl text-white font-extrabold  text-center uppercase mb-2">
                        Torneio Interclasse
                    </h1>
                    <p className="lg:text-2xl text-xl text-[#A5A5A5] text-center  font-bold uppercase">
                        Participe do emocionante torneio interclasse e mostre
                        sua paixão pelo esporte
                    </p>
                </div>

                <div className="-z-10 absolute top-0 left-0 w-full h-full bg-zinc-900 bg-opacity-100"></div>
            </div>
        </Link>
    );
}
