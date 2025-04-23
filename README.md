# Back-end
- **dependencies**
  - express.js
- **dev-dependencies**
  - nodemon

```
npm init -y
npm install express.js
npm install -D nodemon
```

# Front-end
- **Build Tool**
  - Vite
- **dependencies**
  - "@emotion/react": "^11.14.0",
  - "@emotion/styled": "^11.14.0",
  - "@mui/icons-material": "^7.0.2",
  - "@mui/material": "^7.0.2",
  - "axios": "^1.8.4",
  - "react": "^19.0.0",
  - "react-dom": "^19.0.0",
  - "react-router-dom": "^7.5.1"
- **dev-dependencies**
  - "@eslint/js": "^9.22.0",
  - "@types/react": "^19.0.10",
  - "@types/react-dom": "^19.0.4",
  - "@vitejs/plugin-react-swc": "^3.8.0",
  - "eslint": "^9.22.0",
  - "eslint-plugin-react-hooks": "^5.2.0",
  - "eslint-plugin-react-refresh": "^0.4.19",
  - "globals": "^16.0.0",
  - "unplugin-auto-import": "^19.1.2",
  - "vite": "^6.3.1",
  - "vite-plugin-pages": "^0.33.0"

```
npm create vite@latest

npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm install react-router-dom

npm install -D unplugin-auto-import
npm install -D vite-plugin-pages
```

# Container
- Docker

```
docker-compost up --build
```

- docker container remove
```
docker compose down
```