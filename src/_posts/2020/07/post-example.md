---
file: '/blob/master/src/_posts/2020/07/post-example.md'
image: '2020/07/electron_template.png'
slug: '/blog/2020/07/post-example'
date: '2020-07-22'
title: 'ElectronJS close app'
---

# Close Electron APP

[Source code](https://github.com/chsjr1996/electron-reactjs-template/blob/master/src/browser/main.ts)

```ts:title=src/browser/main.ts
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
```
