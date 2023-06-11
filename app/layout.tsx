'use client'
import '@/styles/globals.css'
import React from "react";
import {Analytics} from "@vercel/analytics/react";
import { AnimatePresence } from 'framer-motion';
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <title>Sudhir&apos;s Portfolio</title>
                <meta charSet="UTF-8"/>
                <meta name="description" content="My Portfolio"/>
                <meta name="keywords" content="HTML, CSS, JavaScript"/>
                <meta name="author" content="Sudhir"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <body>
                <AnimatePresence>
                    {children}
                    <Analytics/>
                </AnimatePresence>
            </body>
        </html>
    )
}