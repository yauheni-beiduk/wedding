/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                love: ['"Dancing Script"', 'cursive'],
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: 0, transform: 'translateY(-20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                'heart-beat': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.3)' },
                },
            },
            animation: {
                'fade-in': 'fade-in 1s ease-out forwards',
                'heart-beat': 'heart-beat 1s ease-in-out infinite',
            },
        },
    },
    plugins: [],
};
