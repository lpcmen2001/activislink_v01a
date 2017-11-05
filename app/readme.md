#Activislink

Link shortener in Node, Meteor & React.js

##Author

Louis-Philippe Couture

## Create Heroku meteor deployment

Using 

heroku create app-name-here

then

heroku git:remote -a app-name-here

then

heroku buildpacks:set https://github.com/AdmitHub/meteor-buildpack-horse.git

then

add the node version in package.json under "engines"

then

Go in Heroku Dashboard, enter APP, then RESSOURCES, configure Addons, find more. and find mLab MongoDb
using 
heroku addons:create mongolab:sandbox

heroku config shows you the env variables. you should now have MONGODB_URI.

then set the root uri (proj url, no trailing slash)

heroku config:set ROOT_URL="https://activislink-v01a.herokuapp.com"

then push to Heroku

git push heroku master
