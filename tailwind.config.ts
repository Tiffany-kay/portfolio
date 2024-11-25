import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"], // Ensure dark mode is enabled via class
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Theme colors for your portfolio
				orangered: '#ff4500',
                background: "hsl(0, 0%, 0%)", // Black background
                foreground: "hsl(15, 100%, 65%)", // Orange-red text
                card: {
                    DEFAULT: "hsl(0, 0%, 10%)", // Darker gray for cards
                    foreground: "hsl(15, 90%, 70%)",
                },
                primary: {
                    DEFAULT: "hsl(15, 100%, 65%)", // Primary orange-red
                    foreground: "hsl(0, 0%, 100%)", // White text on orange-red
                },
                secondary: {
                    DEFAULT: "hsl(0, 0%, 30%)", // Gray for secondary elements
                    foreground: "hsl(15, 80%, 60%)",
                },
                border: "hsl(0, 0%, 20%)", // Subtle border color
                input: "hsl(0, 0%, 25%)", // Input background
                ring: "hsl(15, 100%, 50%)", // Ring around focused elements
                accent: {
                    DEFAULT: "hsl(15, 100%, 55%)", // Accent color
                    foreground: "hsl(0, 0%, 100%)",
                },
                muted: {
                    DEFAULT: "hsl(0, 0%, 40%)", // Muted text color
                    foreground: "hsl(0, 0%, 70%)",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [require("tailwindcss-animate")], // Animation plugin
} satisfies Config;
