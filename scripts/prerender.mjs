import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';

// Emit the same initial React view as HTML so content is available before JavaScript.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { App } = await server.ssrLoadModule('/src/main.jsx');
  let markup = renderToString(React.createElement(App));
  const manifest = JSON.parse(await readFile('dist/.vite/manifest.json', 'utf8'));
  markup = markup.replace(/\/src\/assets\/[^"\s<>]+/g, (url) => {
    const asset = manifest[url.slice(1)];
    if (!asset) throw new Error(`Missing built asset: ${url}`);
    return `/${asset.file}`;
  });
  const page = await readFile('dist/index.html', 'utf8');
  if (!page.includes('<div id="root"></div>')) throw new Error('Homepage root placeholder missing');
  await writeFile('dist/index.html', page.replace('<div id="root"></div>', `<div id="root">${markup}</div>`));
  console.log(`Homepage prerendered: ${Buffer.byteLength(markup)} HTML bytes`);
} finally {
  await server.close();
}
