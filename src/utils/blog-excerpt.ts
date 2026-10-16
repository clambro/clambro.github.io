import { markdownToMdast } from 'satteri';

interface TextNode {
  type: string;
  value?: string;
  children?: TextNode[];
}

function plainText(node: TextNode): string {
  switch (node.type) {
    case 'image':
    case 'imageReference':
    case 'html':
    case 'definition':
    case 'code':
      return '';
    case 'text':
    case 'inlineCode':
      return node.value ?? '';
    case 'break':
      return ' ';
    default: {
      const text = (node.children ?? []).map(plainText).join('');
      return ['paragraph', 'heading', 'listItem', 'tableCell'].includes(
        node.type
      )
        ? `${text} `
        : text;
    }
  }
}

export function blogExcerpt(markdown: string): string {
  const text = plainText(markdownToMdast(markdown)).replace(/\s+/g, ' ').trim();
  const characters = Array.from(text);
  return characters.length > 220
    ? `${characters.slice(0, 219).join('')}…`
    : text;
}
