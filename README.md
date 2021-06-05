Install Heroku for Ubuntu
curl https://cli-assets.heroku.com/install-ubuntu.sh | sh

heroku create
 - generates .git link

git remote add heroku your-.git-link

git push heroku master

heroku open

Troubleshooting
heroku logs