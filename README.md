# scarebnb

# trello link: https://trello.com/b/vx4gBP9g/scarebnb
# database repo: https://github.com/jhlindell/scareDB

ScareBnB is an app that allows users to earn revenue by renting rooms in their houses which happen to be haunted. This allows adventurous travelers to book lodging in unique settings, creating unique experiences.

This app will be built using React and Bootstrap for the front end experience. For the server, Node.js and Express.js will handle serving files. PostgreSQL and Knex will be used for database access. Socket.io will be used for communication between traveler and host and for booking confirmation.

MVP for ScareBnB will include:

1. users will be able to log in and be authenticated.
2. a user can set themselves up as a host and list rooms for rent.
3. users can see a list of rooms posted for rental.
4. users can select a specific post and be taken to a page that displays room   details and allows for booking.
5. a user can book a posted room for a single, or multiple days.
6. a host can see a list of all bookings, past and future.
7. a traveller can see a list of all bookings, past and future.
8.

stretch goals:
1. Payment using Stripe.js to take credit card payments.
2. Ability to filter listed room posts by:
  1. price
  2. data
  3. city
  4. state
  5. country
  6. zip code
3. Calendar integration to show reservation more beautifully
4. Interactive map information and the ability to select posts by clicking on the map flag
