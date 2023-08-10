import { data } from '../data/notes.data';

interface LeafNode {
  url: string;
  text: string;
}

interface BranchNode {
  children: Array<BranchNode | LeafNode>;
  text: string;
}

interface RootNode {
  children: Array<BranchNode | LeafNode>;
}

interface NotesIndex {
  id: number;
  depth: number;
  url?: string;
  text: string;
}

function genIndexFilterRegex(search: string): RegExp {
  const filter = search
    .replace(/[^a-zA-Z0-9/+ ]/gu, '')
    .trim()
    .split(' ')
    .map((keyword) => `(?=.*${keyword})`)
    .join('');
  return new RegExp(`^${filter}.*$`, 'iu');
}

function genIndexTree(filterRegex: RegExp, baseUrl: string) {
  const root: RootNode = {
    children: [],
  };
  data
    .filter((note) => {
      const removeBaseRegex = new RegExp(`^${baseUrl}`, 'u');
      const url = note.url.replace(removeBaseRegex, '');
      return url.split('/').length > 1 && filterRegex.test(url.replace('-', ''));
    })
    .forEach((note) => {
      // Clean-up URL
      const removeBaseRegex = new RegExp(`^${baseUrl}`, 'u');
      const url = note.url.replace(removeBaseRegex, '');

      // Generate tree
      let curNode: RootNode | BranchNode = root;
      url.split('/').forEach((node, index, urlArray) => {
        const nodeText = node.charAt(0).toUpperCase() + node.slice(1).replace(/_/gu, ' ');
        if (index === urlArray.length - 1) {
          const childNode: LeafNode = {
            text: note.frontmatter.title,
            url: note.url,
          };
          curNode.children.push(childNode);
        } else {
          let childNode = curNode.children.find((child) => child.text === nodeText);
          if (!childNode) {
            childNode = {
              children: [],
              text: nodeText,
            };
            curNode.children.push(childNode);
          }
          curNode = childNode as BranchNode;
        }
      });
    });
  return root;
}

function indexTree2List(indexTreeRoot: RootNode) {
  let id = 0;

  function traverseTree(indexTree: Array<BranchNode | LeafNode>, depth: number): NotesIndex[] {
    const indexList: NotesIndex[] = [];
    indexTree
      .sort((a, b) => { // eslint-disable-line id-length
        if (Object.prototype.hasOwnProperty.call(a, 'children')
            && !Object.prototype.hasOwnProperty.call(b, 'children')) {
          return 1;
        }
        if (!Object.prototype.hasOwnProperty.call(a, 'children')
            && Object.prototype.hasOwnProperty.call(b, 'children')) {
          return -1;
        }
        return 0;
      })
      .forEach((index) => {
        indexList.push({
          depth,
          id: id++,
          text: index.text,
          ...(index as LeafNode).url
            ? {
              url: (index as LeafNode).url,
            }
            : {},
        });
        if ((index as BranchNode).children?.length) {
          indexList.push(...traverseTree((index as BranchNode).children, depth + 1));
        }
      });
    return indexList;
  }

  return traverseTree(indexTreeRoot.children, 0);
}

export default function generateNotesIndex(search: string, baseUrl: string): NotesIndex[] {
  const filterRegex = genIndexFilterRegex(search);
  const indexTree = genIndexTree(filterRegex, baseUrl);
  return indexTree2List(indexTree);
}
