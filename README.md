# Starting the application

In the root directory run the following commands:

    npm install
    npm start

This should start the development server and automatically open your browser on the home page. If it does not simply browse to localhost:8080

## Missing requirements

I felt that some requirements were missing so I've decided to document that here. Firstly, the urls were formatted as if they should be paginated, however there was only one page, e.g.

    https://polls.apiblueprint.org/questions?page=1

. Given that I couldn't test pagination with the API, I decided not to attempt to implement this feature.

Secondly, the page designs didn't include a button to allow the user to route between the application properly, i.e. from the question detail page back to the main page. This feature I have implemented as it testable.
