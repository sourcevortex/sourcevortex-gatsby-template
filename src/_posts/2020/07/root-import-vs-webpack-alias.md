---
file: '/blob/master/src/_posts/2020/07/root-import-vs-webpack-alias.md'
image: '2020/07/root_x_alias.png'
imageAlt: 'Root import VS Webpack alias image'
slug: '/blog/2020/07/root-import-vs-webpack-alias'
date: '2020-07-25 23:20:00'
title: 'Root import VS Webpack alias'
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

### O que é Root import?

Image um cenário onde você precise importar um componente ou algum método mas o mesmo se encontra em um nível de diretório distante do arquivo atual. Você precisaria fazer algo semelhante a isso:

```javascript:title=src/pages/Home.js
import Foo from '../../../Foo'
```

Veja que foi necessário retornar três diretórios até encontrar o arquivo necessário, e isso pode variar para mais ou para menos dependendo da localização do arquivo atual.

O **root import** permite você configurar seu projeto para trabalhar a partir de um único caminho relativo, que é configurado utilizando a biblioteca [babel-plugin-root-import](https://www.npmjs.com/package/babel-plugin-root-import). Uma vez configurado você pode deixar de retornar diretórios e importá-los através do simbolo configurado, por exemplo, ao invés de usar da maneira citada anteriormente, teríamos isso:

```javascript:title=src/pages/Home.js
import Foo from '~/components/Foo'
```

Bem melhor, não? Mas, essa não é a única alternativa para solucionar esse "problema".

---

### Webpack alias

Antes de falar sobre o **_webpack alias_**, vamos falar do **_webpack_** em si.

O [webpack](https://webpack.js.org/) é o empacotador utilizado por padrão no ReactJS, farei um post em breve explicando mais sobre ele, seu funcionamento e como construir um do zero, mas por hora saiba que ao criar um projeto com o comando `create-react-app` o webpack é inserido em seu projeto internamente.

Contudo, não é possível modificar as configurações do **_webpack_** "nativamente", para isso você pode ejetar sua aplicação (falarei disso em breve também), ou então instalar a biblioteca [Craco](https://www.npmjs.com/package/@craco/craco) que irá permitir modificar o **_webpack_** sem que você precise ejetar seu projeto.

Então vamos lá, mãos na massa! Tudo o que você precisa fazer é instalar a biblioteca citada acima e então configurá-la da seguinte maneira:

```javascript:title=craco.config.js
const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@Root': path.resolve(__dirname, 'src/'),
      '@Page': path.resolve(__dirname, 'src/pages/'),
      '@Component': path.resolve(__dirname, 'src/_components/'),
    },
  },
}
```

Pronto, agora para importar um componente seguindo o primeiro exemplo, basta fazer assim:

```javascript:title=src/pages/Home.js
import Foo from '@Component/Foo'
```

Ah, e para seu editor reconhecer essa nova forma de importação e fornecer o autocomplete, basta seguir os passos abaixo:

Criar ou acrescentar no arquivo `jsconfig.json` (ou caso use Typescript `tsconfig.json`) na raíz do projeto com o seguinte conteúdo:

```json:title=jsconfig.json
{
  "compilerOptions": {
    // ...
    "baseUrl": "./src/",
    "paths": {
      "@Root/*": ["*"],
      "@Page/*": ["pages/*"],
      "@Component/*": ["_components/*"]
    }
    // ...
  }
}
```

Você pode criar quantos **_aliases_** quiser, dando nomes específicos que lhe ajudem identificar a origem da importação.

> **OBS:** É possível usar a biblioteca **_babel-plugin-root-import_** de forma semelhante ao **_webpack alias_**, dando nome para cada "atalho", para isso basta seguir [estas instruções](https://www.npmjs.com/package/babel-plugin-root-import#config).
