+++
title = "Git Notes"
date = "2015-05-10 00:52:39"
tags =  ["git", "github"]
+++
<!--more-->
# Tutorial
[Setting up a repository | Atlassian Git Tutorial][1]

# GitHub Badges
- [shields.io][2]

# best practice

[1]:https://www.atlassian.com/git/tutorials/setting-up-a-repository
[2]:http://shields.io/

```sh
# on latest commit
$ git checkout -b <branch_name> # create new branch

# do you work
$ git commit -a

# edit the commit log as details as possible
$ git checkout master
$ git merge <branch_name>

# double check everything, if ok then push.
$ git push

# else
$ git checkout <branch_name>

# amendment
$ git commit -a --amend

$ git checkout master
$ git merge <branch_name>
$ git push
```

# add Repository

```sh
$ git remote add origin https://github.com/user/repo.git
# Set a new remote

$ git remote -v
# Verify new remote
# origin  https://github.com/user/repo.git (fetch)
# origin  https://github.com/user/repo.git (push)
```

# add badges to github
[Badge Generator](http://badges.amercier.com/)

# gitignore
some example

```sh
# Packages #
############
# it's better to unpack these files and commit the raw source
# git has its own built in compression methods
*.7z
*.dmg
*.tar
*.tar
*.zip

# Logs and databases #
######################
*.log
*.sql
*.sqlite

# OS generated files #
######################
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
Thumbs.db

# nodejs #
##########
node_modules
```
