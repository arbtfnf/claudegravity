# Pulse Backend (Java 21 + Spring Boot)

This is the Java-based backend for the Pulse platform, migrating from the original Next.js API routes.

## Prerequisites
- **Java 21** or later
- **Maven**

## Getting Started
1. Navigate to this directory:
   ```bash
   cd pulse-backend
   ```
2. Build and run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

The server will start on `http://localhost:8080`.

## API Endpoints
- `GET /api/posts`: Get all blog posts
- `POST /api/mood/generate-game`: Generate a personalized wellness game
- `GET /api/psyche`: Get psychological evaluation prompts
- `POST /api/psyche`: Analyze psychological evaluation responses
- `GET /api/tech-challenge`: Get daily tech matrix challenges

## Frontend Integration
The Next.js frontend has been configured to automatically proxy all `/api/*` requests to this backend when running locally.
