---
file: '/blob/master/src/_posts/2020/07/reactjs-hot-reload.md'
image: '2020/07/hot-reload.png'
slug: '/blog/2020/07/reactjs-hot-reload'
date: '2020-07-26 23:10:00'
title: 'ReactJS com Hot Reload'
tags:
  - ReactJS
  - Javascript
  - Webpack
badgeColors:
  - 'black'
  - 'black'
  - 'black'
badgeBackgrounds:
  - '#4cdafe'
  - '#f7df1e'
  - '#1c78c0'
---

### Hot reload, o que é, e porque usar

Sabe quando você faz alguma alteração na sua aplicação ReactJS e seu navegador recarrega para exibí-la? Bom, já deve ter percebido que sempre que isso ocorre todo estado da sua aplicação também é reiniciado e isso pode em certos cenários levar você a ter que executar diversas ações para "restaurar" o que foi perdido.

Mas, existe uma solução para isso! Conheça o ["React Hot Loader"](https://github.com/gaearon/react-hot-loader). Essa biblioteca permite exibir as modificações na aplicação sem recarregar a página, logo todo o estado da aplicação é preservado e as alterações realizadas aparecem quase instantaneamente na página.

Posso dizer por experiência própria que isso facilita e muito no desenvolvimento, aumentando assim sua produtividade. Mas e aí? Você pode estar se perguntando como fazer isso funcionar em sua aplicação?

### Instalando o React Hot Loader com CRACO

Toda aplicação criada com o comando `create-react-app` possui um webpack gerado automaticamente, esse empacotador é utilizado por padrão conforme havia citado no post anterior, e não existe uma forma "nativa" para modificá-lo a não ser ejetando o projeto. Mas com o [CRACO](https://github.com/gsoft-inc/craco) isso é possível, veja como instalar e configurar abaixo:

- Primeiro, instale a biblioteca em seu projeto com `npm i @craco/craco`;
- Agora, modifique seu arquivo `package.json` conforme demonstrado a seguir:

```json:title=package.json
"scripts": {
   "start": "craco start",
   "build": "craco build",
   "test": "craco test"
}
```

Sim, você irá substituir o comando padrão `react-scripts` por `craco`.

- Agora instale a biblioteca com: `npm i react-hot-loader`
- Crie um arquivo na raíz do projeto chamado `craco.config.js` e preencha-o assim:

```javascript:title=craco.config.js
module.exports = {
  webpack: {
    entry: ['react-hot-loader/patch', './src'],
  },
  babel: {
    plugins: ['react-hot-loader/babel'],
  },
}
```

- Por último, você precisará modificar o componente principal da sua aplicação, geralmente o `App.jsx`:

```jsx:title=src/App.jsx
// ...
import { hot } from 'react-hot-loader/root'

// ...

function App() {
  // ...
}

export default hot(App)
```

**OBS:** Um erro comum que pode acontecer é importar dessa maneira `import { hot } from 'react-hot-loader'`, porém está incorreto e irá causar erro quando for executar a aplicação. Note que a importação correta possui `/root` no final.

Pronto, se tudo ocorreu bem na instalação o React Hot Loader já deve estar funcionando em sua aplicação.

### React Hooks (IMPORTANTE)

Caso utiliza React Hooks, é necessário realizar dois procedimentos:

- Instalar a biblioteca `npm i @hot-loader/react-dom`
- Acrescentar um alias no arquivo `craco.config.js

```javascript:title=craco.config.js
module.exports = {
  webpack: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    entry: ['react-hot-loader/patch', './src'],
  },
  babel: {
    plugins: ['react-hot-loader/babel'],
  },
}
```

Agora sim! Tudo deve estar funcionando corretamente (assim espero rsrsrs)... Isso irá lhe ajudar e muito no desenvolvimento, você verá!
