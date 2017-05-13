---
title: Git Notes
date: '2015-05-10 00:52:39'
tags:
  - git
  - github
---

# start a new repo

```sh
$ git init

# add repo
$ git remote add origin https://github.com/user/repo.git
```

# change existing repo

```sh
$ git remote rm origin
$ git remote add origin https://github.com/user/repo.git
```

# create a new branch and merge

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
```

# amendment

```sh
$ git commit -a --amend

$ git checkout master
$ git merge <branch_name>
$ git push
```

# gitignore

```sh
$ npm install gitignore
# for startup a node project
$ gitignore node

# or startup a go project
$ gitignore go

# use flag -types to list all available language
$ gitignore -types
```

# undo changes

```sh
# a more 'save' way
git revert <commit>

# a dangerous (will loss all uncommitted changes) but cleaner way
$ git reset --hard <commit>

# removes untracked files
# show files is going to be removed
$ git clean -n

# force clean
$ git clean -f
```

> The git clean command is often executed in conjunction with git reset --hard. Remember that resetting only affects tracked files, so a separate command is required for cleaning up untracked ones. Combined, these two commands let you return the working directory to the exact state of a particular commit.

# git merge and rebase

# git difftool

# add badges to github

[Badge Generator](http://badges.amercier.com/)

# Referenche

- [Setting up a repository | Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/setting-up-a-repository)
- [shields.io][<http://shields.io/>]
