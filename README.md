# Side Quests

SideQuests is a web app which facilitates helping people in need, solving current world issues on a small scale with a fun fantasy theme. As an adventurer, you can pick a class, view what villager requests are available to you in your area, and complete them to earn badges, achievements, and level up your character. As a villager, you can post a request, and get the help of an adventurer in your area depending on the request type.

## User Stories

- As someone who was recently diagnosed with a contagious disease and who has no family living nearby, I need to ask for help to run daily errands so that I won't spread the disease around.
- As someone who has mobility issues, I like to have a community of people who are willing to help me spontaneously.
- As an able bodied person, I am free to run errands. When I go to the pharmacy, I like to see if I can't also get something for someone who is unable to do the same.
- As someone who likes to do things right, I like to be able to ask details about the task that I'm asked to do.
- As someone with a lot of free time, I like to spend some time helping those who are most in need in my area.
- As a power user who uses the same websites a lot, I like to have an achievement aspect so that all my actions are acknowledged by the site in some way.
- (stretch) As someone who still wants to pay for my own things, I like to be able to decide if my errand that I am asking for is free or if I will pay for it.
- (stretch) As someone who likes to keep things above board, I like to be able to take a picture of my receipts and tie them to an errand.
- (stretch) As someone who is competitive, I like to keep track of the other players, and see where I stand in the leaderboard.
- (stretch) As someone who uses the app for help a lot, I want to be able to review who helps me, so that if I have a bad experience, I can avoid the person for next time.

## Stacks

### Front End
* React
* Scss
* Bootstrap
* Socket.io

### Back End
* Express.js
* Node.js

### Database
* PostgreSQL

## Routes

| HTTP METHOD  | URL PATTERN        | USE                      |
| ------------ | :----------------- |--------------------------|
| POST         | /register          | Register new user        |
| POST         | /login             | Login existing user      |
| GET          | /users             | Get users                |
| GET          | /users/:id         | Get data for user        |
| GET          | /quests            | Get all the quests       |
| POST         | /quests/:id/new    | Add a new quest          |
| GET          | /quests/:id        | Get a single quest       |
| PUT          | /quests/:id/edit   | Edit a quest             |
| DELETE       | /quests/:id/delete | Delete a quest           |
| GET          | /achievements      | Get all achievements     |
| GET          | /achievements/:id  | Get a single achievement |
| GET          | /badges            | Get all badges           |
| GET          | /badges/:id        | Get a single badge       |
| GET          | /classes           | Get all classes          |
| GET          | /classes/:id       | Get a single class       |

## ERD
![ERD](./docs/SideQuests_ERD.png)