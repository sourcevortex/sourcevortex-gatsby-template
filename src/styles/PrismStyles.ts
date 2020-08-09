import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  /* INI: Code title */
  .md-code-title {
    position: relative;
    margin-bottom: -0.7rem;
    padding: 0.5em 1em;
    font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
      'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',
      'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier,
      monospace;

    background-color: #272822;
    color: white;
    z-index: 2;

    border-top-left-radius: 0.3em;
    border-top-right-radius: 0.3em;
    border-bottom: 0.3px solid #5b5b5b;
  }

  pre[class*='language-'] {
    border-radius: 0.3em;
  }

  code[class*='language-'] {
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    pre[class*='language-'] {
      padding: 2em 1em 1em 1em;
    }
  }
  /* END: Code title */

  .gatsby-highlight {
    position: relative;
    -webkit-overflow-scrolling: touch;
  }
  .gatsby-highlight pre[class*='language-'] {
    -webkit-overflow-scrolling: touch;
  }
  .gatsby-highlight pre[class*='language-']::before {
    background: black;
    border-radius: 0 0 0.25rem 0.25rem;
    color: white;
    font-size: 12px;
    letter-spacing: 0.025rem;
    padding: 0.1rem 0.5rem;
    position: absolute;
    right: 1rem;
    text-align: right;
    text-transform: uppercase;
    top: 0;
  }
  .gatsby-highlight pre[class='language-js']::before {
    content: 'js';
    background: #f7df1e;
    color: black;
  }
  .gatsby-highlight pre[class='language-css']::before {
    content: 'css';
    background: #0076d6;
    color: black;
  }
  .gatsby-highlight pre[class='language-javascript']::before {
    content: 'js';
    background: #f7df1e;
    color: black;
  }
  .gatsby-highlight pre[class='language-js']::before {
    content: 'js';
    background: #f7df1e;
    color: black;
  }
  .gatsby-highlight pre[class='language-jsx']::before {
    content: 'jsx';
    background: #61dafb;
  }
  .gatsby-highlight pre[class='language-typescript']::before {
    content: 'ts';
    background: #294e80;
  }
  .gatsby-highlight pre[class='language-ts']::before {
    content: 'ts';
    background: #294e80;
  }
  .gatsby-highlight pre[class='language-tsx']::before {
    content: 'tsx';
    background: #294e80;
  }
  .gatsby-highlight pre[class='language-graphql']::before {
    content: 'GraphQL';
    background: #e10098;
  }
  .gatsby-highlight pre[class='language-html']::before {
    content: 'html';
    background: #005a9c;
  }
  .gatsby-highlight pre[class='language-css']::before {
    content: 'css';
    background: #ff9800;
  }
  .gatsby-highlight pre[class='language-mdx']::before {
    content: 'mdx';
    background: #f9ac00;
  }
  .gatsby-highlight pre[class='language-shell']::before {
    content: 'shell';
  }
  .gatsby-highlight pre[class='language-sh']::before {
    content: 'sh';
  }
  .gatsby-highlight pre[class='language-bash']::before {
    content: 'bash';
  }
  .gatsby-highlight pre[class='language-yaml']::before {
    content: 'yaml';
    background: #ffa8df;
  }
  .gatsby-highlight pre[class='language-markdown']::before {
    content: 'md';
  }
  .gatsby-highlight pre[class='language-json']::before,
  .gatsby-highlight pre[class='language-json5']::before {
    content: 'json';
    background: #f7df1e;
    color: black;
  }
  .gatsby-highlight pre[class='language-diff']::before {
    content: 'diff';
    background: #e6ffed;
  }
  .gatsby-highlight pre[class='language-text']::before {
    content: 'text';
    background: 'white';
  }
  .gatsby-highlight pre[class='language-flow']::before {
    content: 'flow';
    background: #e8bd36;
  }
`
