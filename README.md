Run `yarn` first

Then `node run.js` will behave as expected:
```js
[
  {
    plugin: 'tailwindcss',
    parent: undefined,
    type: 'dir-dependency',
    dir: '.../tailwind-issue-6516/src',
    glob: '**/*.html'
  },
  {
    plugin: 'tailwindcss',
    parent: undefined,
    type: 'dependency',
    file: '.../tailwind-issue-6516/src/index.js'
  },
  {
    plugin: 'tailwindcss',
    parent: undefined,
    type: 'dependency',
    file: '.../tailwind-issue-6516/tailwind.config.js'
  }
]
```

But then `cd src && node ../run.js` references many non-existant files. So watching cannot possibly work:
```js
[
  {
    plugin: 'tailwindcss',
    parent: undefined,
    type: 'dir-dependency',
    dir: '.../tailwind-issue-6516/src/src',
    glob: '**/*.html'
  },
  {
    plugin: 'tailwindcss',
    parent: undefined,
    type: 'dependency',
    file: '.../tailwind-issue-6516/src/src/index.js'
  },
  {
    plugin: 'tailwindcss',
    parent: undefined,
    type: 'dependency',
    file: '.../tailwind-issue-6516/tailwind.config.js'
  }
]
```