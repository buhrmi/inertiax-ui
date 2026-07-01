import { mdsvex } from 'mdsvex'
import Prism from 'prismjs'
import loadLanguages from 'prismjs/components/index.js'
import 'prism-svelte'

loadLanguages(['bash', 'css', 'javascript', 'json', 'markup', 'typescript'])

function highlight(code, lang = 'text') {
  const normalized = {
    html: 'markup',
    js: 'javascript',
    ts: 'typescript',
    sh: 'bash',
    shell: 'bash',
    sv: 'svelte',
  }[lang] || lang
  const grammar = Prism.languages[normalized] || Prism.languages.markup
  const highlighted = Prism.highlight(code, grammar, normalized)
    .replaceAll('{', '&#123;')
    .replaceAll('}', '&#125;')
  return `<pre class="language-${normalized}"><code class="language-${normalized}">${highlighted}</code></pre>`
}

export default {
  extensions: ['.svelte', '.svx'],
  preprocess: [
    mdsvex({
      extensions: ['.svx'],
      highlight: {
        highlighter: highlight,
      },
    }),
  ],
  compilerOptions: {
    runes: true,
  },
}
