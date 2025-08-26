module.exports = {
    extends: [
        'eslint:recommended',
        '@typescript-eslint/recommended',
        'plugin:astro/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    env: {
        node: true,
        es2022: true,
    },
    overrides: [
        {
            files: ['*.astro'],
            parser: 'astro-eslint-parser',
            rules: {
                // Add any Astro-specific rules here
            },
        },
    ],
};
