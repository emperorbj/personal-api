# Personal API

## Project Description

A simple Express API with 3 endpoints deployed using Nginx reverse proxy on GCP.

## How to Run Locally

```bash
git clone https://github.com/emperorbj/personal-api.git
cd personal-api
npm install
node index.js
```

## Endpoints

- **GET /**
  ```
  { "message": "API is running" }
  ```

- **GET /health**
  ```
  { "message": "healthy" }
  ```

- **GET /me**
  ```
  { name, email, github }
  ```

## Live URL
http://bolaji-first.duckdns.org/
