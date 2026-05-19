"use client"
import EventsMap from './map/eventsMap';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react';
import ListIcon from '@mui/icons-material/List';
import MapIcon from '@mui/icons-material/Map';
import EventsList from './cards/eventsList';

export default function TodayEvents({ events }: { events: { place: string, artist: string, day: Date, dayPT: string }[] }) {

    const [activeTab, setActiveTab] = React.useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <>
            <Tabs value={activeTab} onChange={handleTabChange} aria-label="icon label tabs example">
                <Tab icon={<MapIcon />} label="Mapa" />
                <Tab icon={<ListIcon />} label="Lista" />
            </Tabs>

            {activeTab === 0 && <EventsMap events={events} />}
            {activeTab === 1 && <EventsList events={events} />}
        </>
    );
}
