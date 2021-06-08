# KaratChallenge
The objecive of this repo is to:
- Collect transaction and authorization data from Stripe
- Build the necessary backend APIs to populate the necessary data in the provided design.

# Getting Started
1. Setup packages:
`npm install`
2. Set env variables in your shell:
```
export PORT = 80
export TEST_MODE = < ON == 1 and OFF = 0 >
export STRIPE_SECRET_KEY = < YOUR_KEY >
export STRIPE_TEST_SECRET_KEY = < YOUR_KEY >
```

## Design Parameter 1: API Design
I decided to use Express.js since I recall from my conversation with Chris that this is what Karat is using.

## Nice to haves
[ ] Improved Error handling
 
[ ] Mock tests with Jest.

[ ] Containerize for easier dev between team and for easier scale

[ ] Deploy said container

## Architecture Improvements
[ ] Store the secret key in a secure way

[ ] Allow Auth and make it so users can only access their own resources

[ ] Allow for easy toggling between test, dev, and prod.

[ ] Add an API Gateway for throttling throttling

[ ] Add multiple Express severs in different regions with a load balancer for improved access
    - NOTE: For this use case, we don't need to worry about scalability. Say we have at most 50k users, but an Express app can handle ~10k concurrent connections.

