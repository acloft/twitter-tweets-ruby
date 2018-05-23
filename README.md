# README
Check it out deployed on heroku <a href="https://abby-twitter-user-test.herokuapp.com/"> here</a>!

Once you submit your first request, you'll be prompted to login for access. Please use the following credentials: username= admin, password= secure.

This is an application built with Ruby on Rails and React that allows the user to search twitter handles and then display a list of that user's most recent tweets. I provided validation to prevent the application from erroring out on bad or empty requests. The tweets list is two React components with Bootstrap 4 included for styling. Mentions in tweets will link to that user's pages within my application, this is done via a regular expression on the front-end and logic in the controller to remove characters that shouldn't be there. Additionally, there is one test running on the controller that asserts the homepage loads.


Using ruby v 2.4.2 and rails v 5.2.0
Twitter is integrated via <a href="https://www.rubydoc.info/gems/twitter"> twitter</a> gem
React is intgrated via <a href="https://github.com/reactjs/react-rails"> react-rails</a>
Env variables held with <a href="https://github.com/bkeepers/dotenv"> dotevn </a>gem

Not sure where to start? Click Surprise me for a little inspiration!