module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            colors: {
                dashboard: {
                    primary: '',
                    accent: '#9ad261',
                    background: '#0b0f19',
                    'background-light': '#111827',
                },
            },
        },
    },
    plugins: [],
};
