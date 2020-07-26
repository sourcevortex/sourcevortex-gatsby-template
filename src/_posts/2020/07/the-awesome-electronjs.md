---
file: '/blob/master/src/_posts/2020/07/the-awesome-electronjs.md'
image: '2020/07/electron_template.png'
slug: '/blog/2020/07/the-awesome-electronjs'
date: '2020-07-25 19:00:00'
title: 'O incrível ElectronJS'
tags:
  - ElectronJS
  - ReactJS
badgeColors:
  - 'white'
  - 'black'
badgeBackgrounds:
  - '#002864'
  - '#4cdafe'
---

### O que é ElectronJS?

O ElectronJS é um **_framework_** open-source desenvolvido e mantido pelo Github. Com este **_framework_** os desenvolvedores podem construir aplicações gráficas multiplataforma utilizando tecnologias web como HTML, CSS e Javascript.

O ElectronJS combina o motor de renderização do Chromium (mesma base utilizada no Google Chrome) com o Node.js, possibilitando assim o acesso a recursos do sistema operacional.

---

### Por que utilizar?

Mas afinal, vale a pena utilizar esse **_framework_**? A resposta é sim, mas claro tudo vai depender do projeto que pretende construir. Contudo, as vantagens oferecidas por ele são muito boas, pois com apenas uma única base de código você poderá construir uma aplicação incrível e ainda multiplataforma.

Os recursos deste **_framework_** facilitam muito a construção tanto do **_frontend_** quanto do **_backend_**, e as possibilidades são "infinitas".

---

### Como funciona?

Basicamente, uma aplicação Electron é dividida em duas partes, o que chamamos de processo principal (_backend_), ou seja, o _browser_ (ou _main process_), e o processo de renderização (_frontend_)).

- **_Main process (browser)_**

  O processo principal trata-se da aplicação em si. Está parte executa o código Node.js, logo é capaz de acessar recursos do sistema operacional. É aqui que você criará as "janelas" e indicará qual arquivo HTML será executado para cada uma.

- **_Renderer process_**

  O processo de renderização é o _frontend_ se sua aplicação, aqui você poderá escrever o código utilizando HTML, CSS e Javascript. Também é possível utilizar Node.js nessa camada, contudo essa é uma prática não recomendada, pois dependendo do conteúdo a ser renderizado, sua aplicação pode ser exposta a vulnerabilidades. [Saiba mais](https://www.electronjs.org/docs/tutorial/security#isolation-for-untrusted-content).

Em resumo, no _browser_ você cria a lógica que irá se integrar com o sistema operacional, e no _renderer_ você cria toda lógica visual e de interação com o usuário.

Alias, como no processo _renderer_ é possível utilizar tecnologias web, logo podemos utilizar frameworks e/ou bibliotecas, tais como: ReactJS, Vue.js, Angular, Svelte, etc...

---

### Integração com node?

Como havia dito, usar a integração com o Node.js permite executar essa API para acessar o sistema operacional, mas caso sua janela abra algum conteúdo externo, sua aplicação pode expor seu computador e permitir roubo de dados, instalação de vírus, etc...

Claro, tudo depende do que você vai abrir no processo de renderização, mas caso não queira arriscar, saiba que a integração com o Node.js vem desabilita por padrão e que existe uma alternativa para utilizar recursos do sistema operacional chamada "preload". Falarei dessa alternativa em um outro post.

---

Bom, é isso, caso tenham curiosidade de como construir uma aplicação Electron, a documentação pode ser encontrada [neste link](https://www.electronjs.org/docs). Deixo aqui também o link para um template de Electron que fiz utilizando ReactJS com Typescript, [template](https://github.com/chsjr1996/electron-reactjs-template).
