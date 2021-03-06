## Online Shopping App

![App Preview](https://github.com/simarmannsingh/onlineshopping/blob/master/preview.png "Preview generated as on 2nd Aug 2020")

![build status](https://api.travis-ci.org/simarmannsingh/onlineshopping.svg?branch=master)

## About

This is a react based sample project which is created for learning purposes. Only the frontend is hosted on gh-pages. The backend is hosted on Heroku.

The data is being fetched from the MongoDB database instance. You can test GET api by running the following command in postman

    GET https://chernobyl-reactor.herokuapp.com/api/getData


## How do I test it?

To test the app, you can clone the app in your computer by executing the following command.

    git clone git@github.com:simarmannsingh/onlineshopping.git

or

    git clone https://github.com/simarmannsingh/onlineshopping.git

After cloning the app, go inside the directory by executing

    cd onlineshopping/

Then, to simply test the app, start the app using the command

    npm start

It should run a development server
You can open [http://localhost:3000](http://localhost:3000) to view the running instance of the application in the browser.

You can also check the production build of the app. To test the production build of the app, run the following command in the terminal.

    npm run build

It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

After executing the above command, you need to run a server to display the build files. For that, first go inside the build folder and then start a server using commands

    cd build
    python -m SimpleHTTPServer

In case you don't have python installed on your system (you are not using Linux, as in linux it is built in), you can install python or perhaps some other server, Say 'serve'

    npm install -g serve
    serve -s build

This should run a production build server and display the website/app automatically by opening your default browser and running app on http://localhost:3000/

## FAQs

_1. Why the App has same image on all items?_
Ans : Well, the app doesn't have any image at all, the image that is shown is actually fetched over the internet from the service https://picsum.photos as the cards where the image is shown have size restrictions and hence it is not feasible to find or create custom illustrations with very specific size to add in all the cards of the sample app. Refreshing the page will fetch a new image every time randomly. The only specification is the size. In future if I have enough free time, I would surely consider creating illustrations and adding them locally instead of using this service.

_2. Why clicking on the Pay Now button doesn't lead to any page??_
Ans: The functionality of Pay Now button as well as development of other pages is under progress.

## Copyright and License

Copyright 2020 Simar Mann Singh Chawala. Code released under the [MIT](https://github.com/simarmannsingh/onlineshopping/blob/master/LICENSE) license.

The illustrations used in the app are copyrighted content and hence cannot be used for personal or commercial purposes without permission. Only the code of the application is published under MIT licence.
