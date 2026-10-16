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
  if (characters.length <= 220) return text;

  const preview = characters.slice(0, 219).join('');
  const boundary =
    characters[219] === ' ' ? preview.length : preview.lastIndexOf(' ');
  return `${preview.slice(0, Math.max(0, boundary)).trimEnd()}…`;
}
