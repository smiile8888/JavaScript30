# Day 3: Playing with CSS Variables and JS
Today, the practice is about creating CSS variables and handling them with JS.

Today I'm getting to know:
In JS:
- `element.dataset;` - returns all the data attributes we set up in HTML, e.g., `data-sizing` in this practice will be shown up when calling `this.dataset` with the name `sizing`, which we can play this value.

In CSS:
- `--[variable name]` - to define default variables, where the scope we want. In this practice, we create at `:root` where the variables' scope cover whole document.
- `:root` - matches at the document's root element where is always equal to HTML element.