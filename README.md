Running Locally

1. npm -install
2. npm run dev

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

Heroku broken?
heroku apps
(get your app name)
heroku git:remote -a your_app

Troubleshooting
heroku logs

Mongo Stuff
Each new server will need to be whitelisted to connect to the mongodb

SendGrid

- To redirect SendGrid webhooks to development environment, use
  `npx ngrok http 5000`
- You will need to update the Email settings in SendGrid EACH TIME as the Forwarding URL is dynamic and expires every 2 hours
- THIS REDIRECTS ALL TRAFFIC FROM SENDGRID, INCLUDING PROD
