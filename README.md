# Elon's Opinions

https://tjacobs.github.io/elons-opinions/

A Finder-style (Miller-columns) browser for looking up **Elon Musk's real, sourced public opinions** on the big topics of life.

Pick a broad category on the left, then drill down through subcategories to the right — Finder column-view style — until you reach his actual quote, complete with context, year, and a link to the source.

## How it works

- **`index.html`** — page shell
- **`styles.css`** — dark, techy UI
- **`data.js`** — the topic tree and every quote (each with a source URL)
- **`app.js`** — the Miller-columns engine + search

It's a fully static site — no build step. Open `index.html` locally, or visit the GitHub Pages URL.

## Adding opinions

Edit `data.js`. The tree is made of nodes:

```js
{ id, name, blurb?, children?: [ ...nodes ], opinions?: [ ...opinions ] }
```

A leaf node carries `opinions`, each shaped like:

```js
{ quote, context, year, source, url }
```

## A note on accuracy

Every quote is a **real, publicly reported statement** from Elon Musk, with a source link so you can verify it. Some are condensed as reported by the cited outlet. Nothing is invented.

This is an independent reference and is **not affiliated with or endorsed by Elon Musk**.
