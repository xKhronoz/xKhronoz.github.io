# xkhronoz.github.io

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>

This is a Github Pages project to display my portfolio and projects. It is a simple website built with HTML and styled with Tailwinds CSS, it will be updated as I complete more projects and learn more skills.

## Getting Started <a name = "getting_started"></a>

Requirements:

- [Node.js](https://nodejs.org/en/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)

Install Requirements:

```bash
npm i
```

## Usage <a name = "usage"></a>

1. To view the website, from the `docs` folder open the `index.html` file in your browser.

2. To make changes to the website, edit the `index.html` file in the `docs` folder.

3. To make changes to the CSS, edit the `input.css` file in the `root` folder.

After making changes to the HTML or CSS files, you will need to recompile the Tailwind CSS file.

To compile the Tailwind CSS file for deploying (minified css), run the following command:

```bash
npm run build:css:prod
```

To compile the Tailwind CSS file for development/debugging, run the following command:

```bash
npm run build:css
```
