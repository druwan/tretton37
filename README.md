# _The Fellowship of 1337

Code assignment to create a [site](https://cv-tretton37.herokuapp.com/) to display all of our tretton37-colleagues according to some selected user stories.

## Selected functionalities

| _design/accessibility | _functionality | _testing/QA |
| --- | --- | --- |
| Responsive design, works on mobile and tablets | Filter by name and office | Use Typescript (or similar, no any's!) |
| Use modern CSS throughout the application (css-grid, variables, clamp etc) | Available on a free public url (such as Azure, Heroku) | End-to-end testing (with an existing framework) |
| | CI/CD pipeline from your repo (e.g. Travis, Gitlab, Azure) | 

### Reasoning

Tailwindcss is a modern framework that a wanted to explore more of. It is designed with a mobile first system which makes handling responsiveness a breeze.

The implementation of filtering by name is done by a search filter. Filtering by office is made using a React-Select control.

The project is hosted on heroku, [live demo](https://cv-tretton37.herokuapp.com/). I've added an automatic pipeline, by using github actions, that pushes, and builds, the most recent commit on the main branch onto heroku. To make sure that the build will not break I've protected the main branch to only deploy if the deployment pipeline passes.

By using Typescript I know immediately when developing the code if I have made an error. And also makes sure that I get the correct type.

I implemented 3 short test cases with Cypress. 
1. User can open webpage -> Asserts with checking the navbar header
2. User can search for an employee -> Assert with searching for unique user
3. User can select an office -> Asserts with selecting Lund as office


## Installation

Clone the project and move into the cloned folder 
```bash
git clone git@github.com:druwan/tretton37.git
cd tretton37
```

Install the dependencies `npm install`


### Setup

Create an .env file and add
```bash
REACT_APP_SECRET_HEADER = YOUR_AUTH_KEY
REACT_APP_SECRET_URL = YOUR_API_URL
```

Run the app [locally](http://localhost:3000) by using `npm start`.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Testing

Run `npm run test:e2e` to view basic test cases with Cypress.

### Deployment

To deploy the code you need to create an heroku application and edit the heroku information in `/github/workflows/deploy.yml`

```yml
heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
heroku_app_name: YOUR_APP_NAME
heroku_email: ${{ secrets.HEROKU_EMAIL }}
```

These are edited in your github repo settings, under Security -> Secrets. You also need to add your `REACT_APP_SECRET_HEADER` and `REACT_APP_SECRET_URL` as Config Vars on your application on heroku.


## Preview of app
<details>
    <summary>Show</summary>

    ![App Preview!](Preview.png "Preview of App")
</details>
