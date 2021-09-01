Here is application for Redux Store

For this assignment you will need to install npm, to install it type in the following -- "npm init -y" -- which will give you a package.json file. After that you can install the dependencies required for your application to run. For this example it calls for the following dependencies --

    "concurrently" --> for this one type npm i (name of dependency) -D to make it appear under devDependecies
    "react-redux"
    "redux"
    
To install these dependencies I would type the following -- "npm i (name of dependency)".
Once that's finished you can begin checklist of functionality of app by typing the following --

    "npm run start"

Under the client side of package-json calls for the following dependencies --

    "@apollo/client"
    "@apollo/react-hooks"
    "@stripe/stripe.js"
    "@testing-library/jest-dom"
    "@testing-library/react"
    "@testing-library/user-event"
    "apollo-boost"
    "apollo-link-context"
    "graphql"
    "graphql-tag"
    "jwt-decode"
    "react"
    "react-dom"
    "react-redux"
    "react-router-dom"
    "react-scripts"
    "redux"

Under server side of package-json calls for the following dependencies --

    "apollo-server-express"
    "bcrypt"
    "express"
    "graphql"
    "jsonwebtoken"
    "mongoose"
    "nodemon" --> for this one type npm i (name of dependency) -D to make it appear under devDependecies
    "stripe"

This is deployed on Heroku while connected to MongoDB Atlas Database.
You would need to connect them together buy starting with the following --

1. Open up Heroku with the app you want to connect with
2. Click on Settings
3. Scroll down to Config Vars
4. Inside KEY box type in MongoDB_URI
5. Inside VALUE box type in mongodb+srv://<username>:<password>@<clusterName>.puqzm.mongodb.net/<databaseName>?retryWrites=true&w=majority

names are as follows --

    "username = username of database (NOT MONGODB ACCOUNT INFO)"
    "password = password of database (NOT MONGODB ACCOUNT INFO)"
    "clusterName = name of cluster (i.e. Cluster0)"
    "databaseName = name of database you created in MongoDB Atlas" 

NOTE -- where it says puqzm it'll be different for you once you create it so no need to worry.

Once information is filled in, save and restart all dynos for changes to take effect.

This application is a basic site where you can place orders on various items at your convenience.
It also has a login page where you can create an account and check on your orders for later.

Here is Heroku link -- https://basic-redux-store.herokuapp.com/

Thank your for your time & take care.