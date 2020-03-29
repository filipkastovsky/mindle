# Mindle

## A generated tasklist tool mainly intended for remote education use

## Features

-   **Client uses user credentials to scrape for potential task items in linked services, displays them on the Dashboard.**
-   User can search through, view, edit, download attachments (if any are included in the task)
-   User can preform platform specific actions with his tasks
-   Client can store user credentials in a local encrypted store with user's permission
-   User can sign in via third-party services

---

## Tech stack

Application uses a single server built on [Next.js](https://nextjs.org/docs/getting-started) with detachable service modules in a scenario, where there is a need for scaling.

## Other technologies include

-   [npm](https://www.npmjs.com/) - Package management and scripts
-   [Jest](https://jestjs.io/) - Unit, integration, E2E testing
-   [Pupeteer](https://pptr.dev/) - Headless browser (E2E testing, web scraping)
-   [Typescript](https://www.typescriptlang.org/), [ESlint](https://eslint.org/), [Prettier](https://prettier.io/) - Code style enforcing/linting/formatting
