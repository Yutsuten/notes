import { defineLoader } from 'vitepress';

declare const data: Date; // eslint-disable-line init-declarations
export { data };

export default defineLoader({
  load() {
    const now = new Date();
    return now.getTime();
  },
});
