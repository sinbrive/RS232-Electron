# RS232-Electron
Lab for my students done with Electron

* install node.js
* check version : node -v, npm -v
* install git
* cd myfolder
* npm init -y, give answsers to questions
* package.json is created:
* * change name, main and scripts and description:
```
  "name": "rs232",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "electron ."
  },
  "author": "",
  "license": "ISC",
  "keywords": [],
  "description": "this rs232 plot by electron",
  "devDependencies": {
    "electron": "^7.1.7"
  }
}
```
* create index.html, index.js (check electron quickstart if need be) and .gitignore (ignore node_modules folder)
* npm start 

```
$ git remote add origin https://github.com/user/repo.git
# Set a new remote

$ git remote -v
# Verify new remote
> origin  https://github.com/user/repo.git (fetch)
> origin  https://github.com/user/repo.git (push)

$ git status
$ git add .
$ git commit -m "????"
$ git push origin master
$ git branch
$ git branch new-feature
$ git checkout new-feature
$ git checkout master 
git merge new-feature
```

