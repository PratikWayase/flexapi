
# E-commerce REST API with Kafka and Redis

This is a distributed e-commerce REST API built with Node.js, Kafka, and Redis.

## Features
- User signup/login
- Product search
- Add/remove products to/from basket
- Place orders with Stripe payment
- Kafka for event-driven architecture
- Redis for caching and rate limiting

## Running the Project
1. Clone the repository.
2. Run `docker-compose up -d` to start MongoDB, Kafka, and Redis.
3. Run `npm install` to install dependencies.
4. Run `node api/server.js` to start the server.