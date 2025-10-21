# MERN Final Project — Mind Ease (Work in Progress)

Simple mental-health web app built with React (Vite) for the frontend. Features implemented so far:
- Header, About, Services, Contact, Footer components
- Mood companion interactive component (client-side suggestions)
- Static images served from public/images

Status
- Frontend: Vite + React — working locally (components implemented)
- Backend: not included in this README (run backend if present in a separate folder)

Quick start (frontend)
1. Open a terminal in the client folder:
   - Windows:
     ```powershell
     cd c:\Users\Administrator\Documents\MernStack\MERN-Final-Project\FrontEnd\client
     ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm start
   ```
4. Open the app in the browser (Vite usually serves at http://localhost:3000 or http://localhost:5173 — check terminal).

If you have a backend, run it from its folder (example):
```bash
cd c:\path\to\your\backend
npm install
npm start
```

Folder overview (frontend)
- src/Components — React components (Header, About, Services, MoodCompanion, Contact, Footer, Home, ...)
- public/images — static images referenced by the frontend
- src/style.css — shared styles
- package.json — npm scripts and dependencies

Notes about images
- If images are in client/public/images, reference them with absolute paths like `/images/...` or with:
  ```jsx
  src={process.env.PUBLIC_URL + '/images/your-image.jpg'}
  ```
- Alternative (recommended for bundler-managed assets): place images in src/assets and import them:
  ```jsx
  import img from '../assets/images/happy.jpg';
  <img src={img} alt="..." />
  ```
- If images don't appear, check browser DevTools → Network/Console for 404s and verify the request URL and filename (casing matters on some hosts).

Common troubleshooting
- "Images 404": confirm files exist in client/public/images and names/casing match.
- JSX errors: remember `className` (not `class`), `onClick` (camelCase) with function references, and style objects (`style={{...}}`).
- Ensure you run the React dev server (`npm start`) and not a different static server that uses a different root.

Contributing
- Open an issue or submit a PR for changes.
- Keep frontend assets and env files out of version control (use .gitignore).

License
- Add a license file if you intend to open-source this project.

