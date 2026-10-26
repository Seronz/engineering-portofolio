import { readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { build } from 'vite'

const root = process.cwd()
const ssrOutDir = join(root, 'dist-ssr')

await build({
  root,
  build: {
    ssr: 'src/entry-server.tsx',
    outDir: ssrOutDir,
    emptyOutDir: true,
  },
})

const entryFile = (await readdir(ssrOutDir)).find((name) =>
  /^entry-server\.(?:mjs|js|cjs)$/.test(name),
)

if (!entryFile) {
  throw new Error('SSR build did not emit an entry-server bundle.')
}

const { render } = await import(pathToFileURL(join(ssrOutDir, entryFile)).href)
const appHtml = render()

const indexPath = join(root, 'dist', 'index.html')
const template = await readFile(indexPath, 'utf8')
const rootMarker = '<div id="root"></div>'

if (!template.includes(rootMarker)) {
  throw new Error(`Could not find ${rootMarker} in dist/index.html.`)
}

await writeFile(
  indexPath,
  template.replace(rootMarker, `<div id="root">${appHtml}</div>`),
)

await rm(ssrOutDir, { recursive: true, force: true })

console.log(`Prerendered dist/index.html with ${appHtml.length} bytes of app markup.`)
