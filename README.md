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

## Tech Stack
- Express.js
- npm

## Design Questions
- How else might you have improved your solution given more time?
    - See "Architecture Improvements" below.
- Feedback
    - Approximately how many hours did you spend on this challenge?
        - TODO
    - What did you find most interesting / rewarding about this challenge?
        - TODO
    - What did you find least interesting / rewarding about this challenge?
        - TODO


## Architecture Improvements
- [ ] Improved Error handling
- [ ] Mock tests with Jest.
- [ ] Containerize for easier dev between team and for easier scale
- [ ] Deploy said container
- [x] Store the secret key in a secure way
- [ ] Allow Auth and make it so users can only access their own resources
    - A stateless architecture would allow the most flexibility for mutli-region support, but if we only have one instance, we'll see higher overhead
- [ ] Allow for easy toggling between test and prod keys
- [ ] Add an API Gateway for throttling throttling
- [ ] Add multiple Express severs in different regions with a load balancer for improved access
    - NOTE: For this use case, we don't need to worry about scalability. Say we have at most 50k users, but an Express app can handle ~10k concurrent connections.

