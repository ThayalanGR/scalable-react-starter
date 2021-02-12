declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: string;
            ENV: 'development' | 'production';
            APP_NAME: string;
            APP_VERSION: string;
            PORT: string;
        }
    }
}

// convert it into a module by adding an empty export statement.
export {};
