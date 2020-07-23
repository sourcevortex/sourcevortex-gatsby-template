---
file: '/blob/master/src/_posts/2020/07/post-example2.md'
slug: '/blog/2020/07/post-example2'
date: '2020-07-22'
title: 'ElectronJS install extensions'
---

# Install extensions

[Source code](https://github.com/chsjr1996/electron-reactjs-template/blob/master/src/browser/extensions.ts)

```ts:title=src/browser/extensions.ts
import installExtensions, {
  REACT_DEVELOPER_TOOLS,
} from 'electron-devtools-installer'

export function install() {
  // React Dev Tools
  installExtensions(REACT_DEVELOPER_TOOLS)
    .then(name => console.log(`Added extension: ${name}`))
    .catch(err => console.log(`An error occurred: ${err}`))
}
```
