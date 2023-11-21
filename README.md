# REST Countries API with color theme switcher solution <!-- omit in toc -->

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

## Table of contents <!-- omit in toc -->

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/rest-countries-api-with-color-theme-switcher-solution-hf2kqadJeD)
- Live Site URL: [cristianchitiva.dev](https://cristianchitiva.dev/rest-api-countries/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- [React](https://reactjs.org/) - JS library

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learned how to use some React hooks like useEffect and useState. useEffect to make requests to the API and it repeats with the empty dependency array so that it only runs once. UseState to handle the state of the application and be able to change the theme of it.

I also used useContext to be able to pass the state of the application to the child components without having to pass them as props, this is useful for the dark mode.

```js
import { createContext, useState, useEffect } from "react";
```

With CSS, I learned how to configure the columns of a grid with repeat and auto-fit to fit the size of the screen or auto-fill to fit the size of the elements it contains.

```css
.element {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-gap: 2rem;
}
```

In html I understood that the Link components of React Router are nothing more than `<a>` tags with the difference that they do not reload the page and only change the url. These must go inside the li of a list to work correctly.

```html
<li>
  <Link to={`/country/${country.alpha3Code}`}>
    <img src={country.flag} alt={country.name} />
  </Link>
</li>
```

## Author

- Website - [Cristian Chitiva](https://www.cristianchitiva.dev)
- Frontend Mentor - [@cychitivav](https://www.frontendmentor.io/profile/cychitivav)
