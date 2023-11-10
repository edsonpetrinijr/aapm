"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventList from "@/components/EventList";

export default function Eventos() {
    return (
        <>
            <Header />

            <main>
                <EventList
                    name="Próximos Eventos"
                    events={[
                        {
                            name: "Campeonato de Futebol da AAPM",
                            date: "25/11, 02/12 e 09/12",
                            place: "SENAI Piracicaba - Vila Rezende, Av. Mal. Castelo Branco, 1000 - Jardim Primavera, Piracicaba - SP, 13412-010, Brasil",
                            googleCalendarURL:
                                "https://www.google.com/calendar/render?action=TEMPLATE&text=Campeonato+de+Futebol+da+AAPM&dates=20231126T000000Z/20231210T000000Z&location=SENAI+Piracicaba+-+Vila+Rezende,+Av.+Mal.+Castelo+Branco,+1000+-+Jardim+Primavera,+Piracicaba+-+SP,+13412-010,+Brasil&sf=true&output=xml",
                        },
                        {
                            name: "Campanha do Brinquedo",
                            date: "30/10 a 30/11",
                            place: "AES Field Club SENAI, Tv. Deolinda Naville Fontebasso, 1430, Roseira, Jundiaí - SP, 11218-872, Brazil",
                            googleCalendarURL:
                                "https://www.google.com/calendar/render?action=TEMPLATE&text=Campanha+do+Brinquedo&dates=20231031T000000Z/20231131T000000Z&details=Premiação: 14/12&location=AES+Field+Club+SENAI,+Tv.+Deolinda+Naville+Fontebasso,+1430,+Roseira,+Jundiaí+-+SP,+11218-872,+Brazil&sf=true&output=xml",
                        },
                    ]}
                />
            </main>

            <Footer />
        </>
    );
}
