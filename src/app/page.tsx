"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";


type Feature = {
    name: string;
    description: string;
    link: string;
};

export default function Pages() {
    const [features] = useState<Feature[]>([
        {
            name: "Manage Trucks",
            description: "Add, edit, and monitor trucks in the fleet.",
            link: "/trucks",
        },
        {
            name: "Manage Drivers",
            description: "View and manage driver details.",
            link: "/drivers",
        },
        {
            name: "Manage Schedules",
            description: "Assign and manage schedules for drivers.",
            link: "/schedules",
        },
    ]);

    useEffect(() => {
        console.log("Features loaded:", features);
    }, [features]);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>Transportation Management System</h1>
                <p className={styles.description}>
                    Select a feature below to manage your fleet:
                </p>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <Link href={feature.link} key={index} className={styles.card}>
                            <h2>{feature.name} &rarr;</h2>
                            <p>{feature.description}</p>
                        </Link>
                    ))}
                </div>
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2025 Transportation Management</p>
            </footer>
        </div>
    );
}
