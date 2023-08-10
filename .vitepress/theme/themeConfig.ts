import type { UserConfig } from 'vitepress';

interface CustomThemeConfig {
  datetime: {
    locale: string;
    options: {
      dateStyle: 'full' | 'long' | 'medium' | 'short';
      timeStyle: 'full' | 'long' | 'medium' | 'short';
    };
  };
}

export default function defineConfig(config: UserConfig<CustomThemeConfig>) {
  return config;
}
