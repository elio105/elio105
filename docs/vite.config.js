import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                // 忽略特定的 Sass 警告
                additionalData: `@import "your-scss-file";`,
                implementation: require('sass'),
                // 过滤掉 legacy-js-api 警告
                sassOptions: {
                    logger: {
                        warn: (message, options) => {
                            if (options.deprecation && message.includes('legacy-js-api')) {
                                return;
                            }
                            console.warn(`Sass Warning: ${message}`);
                        }
                    }
                }
            }
        }
    }
});