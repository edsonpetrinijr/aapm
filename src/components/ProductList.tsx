import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProductItem from "./ProductItem";

interface Product {
    name: string;
    price: number;
    redirectURL: string;
}

interface ProductListProps {
    name: string;
    items: Product[];
}

export default function ProductList({ name, items }: ProductListProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const maxIndex = items.length - 1;
    const productListItems = useRef<HTMLUListElement>(null);

    useEffect(() => {
        setCurrentIndex(0);
    }, [items]);

    useEffect(() => {
        if (productListItems.current) {
            productListItems.current.style.transform = `translateX(-${
                currentIndex * (100 / (maxIndex + 1))
            }%)`;
        }
    }, [currentIndex]);

    const handleArrowLeftClick = () => {
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : maxIndex);
    };

    const handleArrowRightClick = () => {
        setCurrentIndex(currentIndex < maxIndex ? currentIndex + 1 : 0);
    };

    return (
        <div className="relative overflow-hidden px-12 py-6">
            <button
                className="absolute z-10 top-1/2 transform -translate-y-1/2 left-8 bg-zinc-300 bg-opacity-30 p-1.5 rounded-full cursor-pointer"
                onClick={handleArrowLeftClick}
            >
                <FiChevronLeft size={24} className="opacity-75" />
            </button>

            <button
                className="absolute z-10 top-1/2 transform -translate-y-1/2 right-8 bg-zinc-300 bg-opacity-30 p-1.5 rounded-full cursor-pointer"
                onClick={handleArrowRightClick}
            >
                <FiChevronRight size={24} className="opacity-75" />
            </button>

            <h1 className="text-center lg:text-4xl text-2xl font-bold uppercase mb-4">
                {name}
            </h1>

            <ul
                className="flex float-left transition-transform list-none"
                ref={productListItems}
            >
                {items.map(({ name, price, redirectURL }) => (
                    <ProductItem
                        key={name}
                        name={name}
                        price={price}
                        redirectURL={redirectURL}
                    />
                ))}
            </ul>
        </div>
    );
}
