import Reveal from 'reveal.js'
import { MDXProvider } from '@mdx-js/react'

import { Code } from './components'
// eslint-disable-next-line import/no-unresolved
import mdx from './typescript/slide*.mdx'

import React from 'react'
import ReactDOM from 'react-dom'

import 'prismjs/themes/prism-dark.css'
import 'reveal.js/css/reveal.css'
import 'reveal.js/css/theme/black.css'
import './index.scss'

ReactDOM.render(
  <MDXProvider
    components={{
      code: Code,
    }}
  >
    <div className="slides">
      {Object.entries(mdx).map(([key, MDX]) => (
        <section key={key}>
          <MDX.default></MDX.default>
        </section>
      ))}
    </div>
  </MDXProvider>,
  document.querySelector('.reveal'),
)

Reveal.initialize({
  history: true,
})
