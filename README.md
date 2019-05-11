# MsgCorp-Full-Stack-Example
A  PERN (PostgreSQL, Express, React, Node) full stack example that allows users to share a simple message board.
The front end of the application is powered using React JS, this allows for dynamic control over user input and the output of data from the backend. 
The backend of this application is comprised of a PostgreSQL database used to house submitted data (in this case users messages) and to open a "Registration" and "Login" endpoint for a REST-ish API. The REST-ish API is poered using express alogside nodeJS to create and manage custom middleware. 
The custom middleware provides customizable routes for the API endpoints.

This entire project is run on localhost, and for testing purpouses wipes all data from the database on start, however the database is seeded to provide examples. 
