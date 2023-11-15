"use client"

import React from "react";
import EventItem from "@/components/EventItem";

interface Event {
    name: string;
    date: string;
    place: string;
    googleCalendarURL: string;
}

interface EventListProps {
    name: string;
    events: Event[];
}

export default function EventList({ name, events }: EventListProps) {
    return (
        <div className="relative overflow-hidden px-12">
            <h1 className="text-center lg:text-4xl text-2xl font-bold uppercase mb-4">
                {name}
            </h1>

            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
                {events.map(({ name, date, place, googleCalendarURL }) => (
                    <EventItem
                        key={name}
                        name={name}
                        date={date}
                        place={place}
                        googleCalendarURL={googleCalendarURL}
                    />
                ))}
            </ul>
        </div>
    );
}
