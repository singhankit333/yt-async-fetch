# Youtube Fetch System

> This repository contains the code for a backend to fetch latest videos on a given topic and store the results in a database.

## Features

- Built with Node.js, Express.js, Sqlite3

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm

### Installation

1. Clone the repository

   ```bash
   git clone repourl
   ```

2. Create a `.env` file with the following content:

   ```env
   PORT={PORT_NUMBER_FOR_APP}
   TOPIC={TOPIC_NAME}
   API_KEYS={COMA_SEPARATED_API_KEYS_NO_SPACE_WITH_QUOTES}
   ```

3. Install the dependencies

   ```bash
   npm ci
   ```

4. Start the server
   ```bash
   npm run start
   ```

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - JS backend development framework

## Author

- **Name** - [GH username](https://github.com/gh_username)
