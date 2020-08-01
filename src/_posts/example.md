---
hidden: true
title: 'Example'
slug: '/blog/example.md'
date: '2020-07-26 23:10:00'
file: '/blog/example.md'
image: ''
imageAlt: ''
tags:
  - 'example'
badgeColors:
  - 'white'
badgeBackgrounds:
  - '#111'
---

## Only example file, does not use this

If you delete all markdown files inside \_post dir/subdirs the gatsby GraphQL engine will be broken your site. Then, leave this file here if you does not have posts yet.

The "hidden" flag is used for control in blog page, then this post will be not listed.

### Codeblock with title

```javascript:title=src/index.js
function foo() {
  return 'Hello world!'
}

foo()
```

---

### Table

| Repo        | Language |
| ----------- | -------- |
| theme-foo   | JS       |
| plugin-bar  | JS       |
| package-foo | PHP      |
