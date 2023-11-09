import Image from "next/image";
import React, { useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import colors from "tailwindcss/colors";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const menu = useRef<HTMLDivElement>(null);

    const handleShowMenu = () => {
        if (menu.current) {
            menu.current.style.transform = showMenu ? "translateX(100vw)" : "translateX(0vw)";
        }

        setShowMenu((state) => !state);
    };

    return (
        <>
            <div
                className={`w-screen h-screen fixed z-50 transition-all ${showMenu ? "" : "translate-x-[100vw]"}`}
                ref={menu}
            >
                <div className="w-2/3 h-screen bg-zinc-100 right-0 p-10 fixed shadow-2xl">
                    <button onClick={handleShowMenu}>
                        <FiX size={32} className="absolute top-7 right-16 cursor-pointer" />
                    </button>

                    <ul>
                        <li className="mb-4"><a href="">Eventos</a></li>
                        <li className="mb-4"><a href="">Nossos Produtos</a></li>
                        <li className="mb-4"><a href="">Prestação de Contas</a></li>
                        <li className="mb-4"><a href="">Sobre</a></li>
                    </ul>
                </div>
            </div>

            <header className="flex w-full justify-between items-center shadow-[0px_6px_32px_0px_rgba(0,0,0,0.10)] px-12 py-5 mb-8 bg-white">
                <Image
                    src="/image.svg"
                    alt="Logo do SENAI"
                    width={200}
                    height={64}
                    priority
                />

                <nav className="hidden lg:block">
                    <ul className="flex justify-end items-center gap-12">
                        <li><a href="">Eventos</a></li>
                        <li><a href="">Nossos Produtos</a></li>
                        <li><a href="">Prestação de Contas</a></li>
                        <li><a href="">Sobre</a></li>
                    </ul>
                </nav>

                {!showMenu && (
                    <div className="lg:hidden w-full flex flex-col justify-center">
                        <div className="ml-auto cursor-pointer">
                            <button onClick={() => handleShowMenu()}>
                                <FiMenu size={36} color={colors.zinc[900]} />
                            </button>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};
