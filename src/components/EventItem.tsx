import React from "react";
import Link from "next/link";

interface EventProps {
    name: string;
    date: string;
    googleCalendarURL: string;
}

export default function EventItem({
    name,
    date,
    googleCalendarURL,
}: EventProps) {
    return (
        <li className="list-none">
            <div className="p-6 rounded-xl flex flex-col items-center shadow-[0px_6px_32px_0px_rgba(0,0,0,0.10)] bg-white font-bold">
                <h1 className=" font-bold text-xl mb-1 text-center">
                    {name.toUpperCase()}
                </h1>
                <p className="text-zinc-600 font-bold my-auto break-all text-center">
                    <span>{date}</span>
                </p>
                <Link
                    href={googleCalendarURL}
                    target="_blank"
                    className="w-full text-[#EB3E3E] px-auto rounded-full font-bold mt-2 text-center"
                >
                    Adicione a sua agenda
                </Link>
            </div>
        </li>
    );
}
