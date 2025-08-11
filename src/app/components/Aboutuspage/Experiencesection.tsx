import React from 'react';

export default function Experiencesection() {
    return (
        <div
            className="mt-8 w-full h-36 flex items-center"
            style={{
                backgroundImage: "url('/assets/Aboutus/Experienceassets/background.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex justify-evenly items-center w-full">
                <div className="flex flex-col text-white items-center gap-1">
                    <h1 className="text-3xl font-bold">40+</h1>
                    <p>Projects</p>
                </div>

                <div className="flex flex-col text-white items-center gap-1">
                    <h1 className="text-3xl font-bold">40+</h1>
                    <p>Software Experts</p>
                </div>

                <div className="flex flex-col text-white items-center gap-1">
                    <h1 className="text-3xl font-bold">6+</h1>
                    <p>Years Of Experience</p>
                </div>
            </div>
        </div>
    );
}
