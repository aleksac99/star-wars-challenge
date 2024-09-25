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
git clone https://github.com/aleksac99/star-wars-challenge.git
cd star-wars-challenge
```

2. Install dependencies

```shell
npm install
```

3. Run the CLI

```shell
npm start
```

# Tests

To run tests, run

```shell
npm test
```

# Usage

1. Enter a Star Wars-related search term.
2. The CLI displays name, type, and related people of each resource containing the entered term.
3. Enter another term or `exit` to close the app.

# High volume environment implementation

The main problem with current solution is high number of SWAPI calls. It's possible to perform the search using SWAPI's `search` parameter, but only one type of resource at the time. To mitigate this, I'd do the following:

1. If I was the service maintainer, I would make it possible to search all resources using a keyword. I would also make it possible to focus on special resource type, using a parameter.
2. I'd implement some sort of result caching on the client side. Current implementation supports caching during app execution, but the data is lost upon exiting.

Additionally, the current app fetches only the first page of each resource. If I required all terms which can be linked to a keyword, I'd have to iterate over all resources.