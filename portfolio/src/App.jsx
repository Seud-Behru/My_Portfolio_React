import React from "react";
import AnnouncementBar from "./components/AnnouncementBar.jsx";
import Navbar from "./components/NavBar.jsx";


export default function App() {
    return (
        <>
            {/*<AnnouncementBar />*/}
            <Navbar />
            <main className="mx-auto max-w-page px-16 pt-72">
                <h1 className="text-display leading-display tracking-display font-medium text-content">
                    Seud behru.
                </h1>
            </main>
        </>
    )
}