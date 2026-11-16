# Twitter App: Angular Frontend (work in progress)

![Angular](https://img.shields.io/badge/Angular-18-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/status-in%20progress-yellow)

The Angular frontend for a Twitter-style social app. Its backend is the Spring Boot [users-microservice](https://github.com/alexandra10zam/users-microservices-).

## Current state

- Standalone-component Angular 18 app with routing: welcome/auth page, login, sign-up, with a default redirect and a fallback route
- Components scaffolded for the feed, posts, replies, likes, search and user profile
- `AuthService`, `UserService` and `PostService` prepared for the REST integration

## Next steps

- [ ] Connect the services to the users-microservice REST API (`HttpClient`)
- [ ] Login and sign-up forms with reactive-form validation
- [ ] Feed, post and like flows
- [ ] JWT-based auth once the backend supports it

## Run it

```bash
npm install
npx ng serve      # http://localhost:4200
npx ng test       # unit tests (Karma + Jasmine)
```
