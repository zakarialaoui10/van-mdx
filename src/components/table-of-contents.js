import van from 'vanjs-core'

export const TableOfContents = ({ depth = 6, content = document.body, labelFn } = {}) => {
  const { ul, li, a } = van.tags;
  const container = ul();

  const buildTOC = () => {
    if (!content) return;

    const selectors = getSelectorFromDepth(depth);
    const headings = [...content.querySelectorAll(selectors)];
    if (headings.length === 0) return; // nothing found yet

    const levels = Array.isArray(depth)
      ? [...depth].sort((a, b) => a - b)
      : Array.from({ length: depth }, (_, i) => i + 1);

    const items = headings.map((heading, i) => {
      if (!heading.id) heading.id = `heading-${i + 1}`;
      const level = parseInt(heading.tagName[1]);
      const relativeIndex = levels.indexOf(level);
      const label = labelFn ? labelFn(heading, level) : heading.textContent;
      return li({ style: `margin-left:${relativeIndex * 15}px` },
        a({ href: `#${heading.id}` }, label)
      );
    });

    container.replaceChildren(...items);
  };

  // Try immediately (works if DOM is already ready)
  buildTOC();

  // If nothing was found, observe the DOM until headings appear
  if (container.children.length === 0) {
    const observer = new MutationObserver(() => {
      buildTOC();
      if (container.children.length > 0) observer.disconnect();
    });

    const observeTarget = () => {
      if (content) observer.observe(content, { childList: true, subtree: true });
      else {
        document.addEventListener('DOMContentLoaded', () => {
          observer.observe(content ?? document.body, { childList: true, subtree: true });
        });
      }
    };
    observeTarget();
  }
  return container;
};

function getSelectorFromDepth(depth = 6) {
  if (Array.isArray(depth)) 
    return depth.map(d => `h${d}`).join(', ');
  const max = Math.min(Math.max(depth, 1), 6);
  return Array.from({ length: max }, (_, i) => `h${i + 1}`).join(', ');
}