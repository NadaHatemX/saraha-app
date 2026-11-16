# saraha-app

Saraha is a backend project for an app where people can send messages without showing who they are. I’m building it to get more practice with Express routes, middleware, and working with MongoDB through Mongoose. I plan to add a frontend later.

## Project plan

- Phase 1 — Accounts and messages. Users can register, verify their accounts with a one-time code, log in with JWT, and reset their passwords. They can send messages anonymously or with their name visible, view their inbox, and delete messages.
- Phase 2 — Google login and conversations. I’ll add Google sign-in, refresh tokens, and Redis for storing one-time codes. A recipient can ask who sent an anonymous message. The sender can accept or decline, and they can start a conversation if the sender accepts.
- Phase 3 — Profiles. Users can manage their profiles and upload a profile picture.
- Also planned. Users will be able to block other users and report messages.

## Tech stack

- JavaScript and Express for the API
- MongoDB and Mongoose for users and messages
- JWT for authentication
- Redis for one-time codes
- Password hashing and rate limiting
