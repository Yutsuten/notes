import type { ContentData } from 'vitepress';
import { createContentLoader } from 'vitepress'; // eslint-disable-line no-duplicate-imports

declare const data: ContentData[];
export { data };

export default createContentLoader('**/*.md');
