#! /usr/bin/env bash
git add .
git commit -m "pushing up latest"
git push


ssh seanrad "cd YT-downloader && git stash && git pull && /etc/init.d/nginx restart && pm2 restart 1"
