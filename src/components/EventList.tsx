import React from "react";
import EventItem from "./EventItem";

interface Event {
    name: string;
    date: string;
    googleCalendarURL: string;
}

interface EventListProps {
    name: string;
    events: Event[];
}

export default function EventList({ name, events }: EventListProps) {
    return (
        <div className="relative overflow-hidden px-12 py-6">
            <h1 className="text-center lg:text-4xl text-2xl font-bold uppercase mb-4">
                {name}
            </h1>

            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
                {events.map(({ name, date, googleCalendarURL }) => (
                    <EventItem
                        key={name}
                        name={name}
                        date={date}
                        googleCalendarURL={googleCalendarURL}
                    />
                ))}
            </ul>
        </div>
    );
}
