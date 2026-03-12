# Olive App - Frontend Assessment

A recreation of the [Olive App](https://www.oliveapp.com/) landing page built with Angular 17.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

```bash
npm install
```

### Development Server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

```bash
npm run build
```

Build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Top navigation bar
│   │   ├── hero/            # Hero section
│   │   ├── features/        # Features/benefits section
│   │   └── footer/          # Footer
│   ├── app.component.*      # Root component
│   └── app.routes.ts        # Application routes
├── assets/                  # Static assets
├── styles.css               # Global styles
└── index.html               # Main HTML file
```

## Tech Stack

- Angular 17 (Standalone Components)
- TypeScript
- CSS (no external CSS frameworks)
- Google Fonts
