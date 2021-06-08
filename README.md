Setup
npm -install

Start
node index.js

Authentication
Google OAuth
Passport - Handles Auth in Express Apps
Passport Strategy - specific implementation for Google OAuth

Deployment
Install Heroku for Ubuntu
curl https://cli-assets.heroku.com/install-ubuntu.sh | sh

heroku create
 - generates .git link

git remote add heroku your-.git-link

git push heroku master

heroku open

Troubleshooting
heroku logs