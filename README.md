# Sab's React Vite Boilerplate

React + Vite Boilerplate using Typescript 


## Prerequisites

Make sure you have the following installed:

- **Node.js** (version `20.x` or later)
- **Bun** (for package management)
- **Docker** (optional, if you prefer using Docker)


## Tech Used

- **React** – JavaScript library for building user interfaces
- **Vite** – Next-generation, fast build tool and development server
- **Bun** – Fast JavaScript runtime for package management and bundling
- **Vitest** – Testing framework for unit and integration tests
- **Tailwind CSS** – Utility-first CSS framework for building custom designs
- **Prettier** – Code formatter for consistent style
- **ESLint** – JavaScript linter for maintaining code quality
- **TypeScript** – Typed superset of JavaScript
- **Husky** – Git hooks for pre-commit checks
- **Commitlint** – Linting commit messages to enforce conventional commits
- **dotenv** – Module to manage environment variables


## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/your-repository.git
cd your-repository
```

### Install Dependencies

Use **Bun** to install project dependencies:

```bash
bun install
```

### Environment Variables

Create a `.env` file in the root of the project with necessary environment variables following `.env.example`


### Start Development Server

Run the development server with:

```bash
bun dev
```
or
```bash
bun run dev
```

The application will be available at `http://localhost:4173`.


## Scripts

Here are some useful commands:

- **`bun run dev`** – Start the development server
- **`bun run build`** – Build the project for production
- **`bun run test`** – Run tests
- **`bun run lint`** – Run linting checks
- **`bun run format`** – Format code with Prettier


## Git Hooks (Husky)

We use **Husky** to enforce commit message rules and run linting before commits. Ensure your commit messages follow the format:

```
<type>: <message>
```

Example:

```
feat: add login
```


## Testing

We use **Vitest** for testing.

To run tests:

```bash
bun run test
```

For continuous testing (watch mode):

```bash
bun run test:watch
```


## Docker (Optional)

You can run the app inside a Docker container:

### Build Docker Image

```bash
make build
```

### Run Docker Container

```bash
make run
```

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.
