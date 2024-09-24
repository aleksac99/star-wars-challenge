# Star Wars Challenge

This repository contains code for a Star Wars Challenge app, created as a part of my interview process.

This TypeScript app wraps around [Star Wars API](https://swapi.dev/), and its goal is to find people associated with the Star Wars related search term provided by the user.

# Prerequisites

* [node.js](https://nodejs.org/en)

# Dependencies

* [axios](https://axios-http.com/docs/intro) for HTTP requests
* [jest](https://jestjs.io/docs/getting-started) for tests

For additional information, please refer to `package.json`.

# Getting Started

1. Clone the repo

```shell
git clone <REPO>
```

2. Install dependencies

```shell
npm install
```

3. Run the CLI

```shell
npm start
```

# Usage

1. Enter a Star Wars-related search term.
2. The CLI displays name, type, and related people of each resource containing the entered term.
3. Enter another term or `exit` to close the app.

# High volume environment implementation