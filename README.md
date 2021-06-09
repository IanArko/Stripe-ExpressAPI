# KaratChallenge
The objecive of this repo is to:
- Collect transaction and authorization data from Stripe
- Build the necessary backend APIs to populate the necessary data in the provided design.

## Getting Started
1. Clone this repo
`git clone https://github.com/IanArko/KaratChallenge.git`
2. Setup packages:
`npm install`
3. Set env variables in your shell:
```
export PORT=<DESIRED_PORT>
export TEST_MODE=< ON == 1 and OFF = 0 >
export STRIPE_SECRET_KEY=< YOUR_KEY >
export STRIPE_TEST_SECRET_KEY=< YOUR_KEY >
```
4. Start the server and have fun.
`npm start`

## Design Questions
- How else might you have improved your solution given more time?
    - See "Architecture Improvements" below.
- Feedback
    - Approximately how many hours did you spend on this challenge?
        - Overall, I spent about 12 hours on this challenge. Most of my time went to reading documentation and thinking about add-ons that I could include to make the challenge more interesting.
    - What did you find most interesting / rewarding about this challenge?
         - I had the most fun learning Express and thinking about ways to improve the project. Normally I would have used AWS API gateway with lambda functions, but I wanted to try something new.
    - What did you find least interesting / rewarding about this challenge?
        - The only thing I didn't like about the project was that there wasn't a super meaningful way to do a deployment. I didn't want to spend time doing a deployment since it wouldn't improve the core functionality or the testability of the project.

## Improvements
- [ ] Write tests with Jest for more consistent testability.
- [ ] Add dotenv to make setup easier
- [ ] Deploy Container (Maybe use Amazon ECR and an ECS cluster)
- [ ] Add Auth and make it so users can only access their own resources
    - A stateless architecture would allow the most flexibility for multi-region support, but if we only have one instance, we'll see a higher overhead
- [ ] Add an API Gateway for request throttling
- [ ] Add multiple Express severs in different regions with a load balancer for improved access
    - NOTE: For this use case, we aren't as worried about the number of requests. Say we have at most 50k users, but an Express app can handle ~10k concurrent connections. Having multi-region support would allow 2 main benefits. 1) Improved access time based on geography. 2) Higher fault tolerance in case a region goes down.
- [ ] Extend multi-card functionality
    - It didn't seem like the Cardholder object contained which cards were associated with the Cardholder. We may need to create a db to keep track of the user data and which cards are associated with a specific user.

## Design Notes
1. The paths are verbose for this application. I intended to make this design so that new resources could easily be added in the future.
2. The endpoints were designed to be as close to stripe's as I could without bloating the design with features that weren't needed for our specific application.
