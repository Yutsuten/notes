import { defineLoader } from 'vitepress';

declare const data: Date;
export { data };

export default defineLoader({
  load() {
    const now = new Date();
    return now.getTime();
  },
});
