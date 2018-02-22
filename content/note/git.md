---
title: Git Notes
date: '2015-05-10 00:52:39'
tags:
  - git
  - github
  - slide

---

# start a new repo

```sh
$ git init

# add repo
$ git remote add origin https://github.com/user/repo.git
```

---
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

```sh
# git merge
$ git merge master <branch_name>
```

## difference between `merge` and `rebase`

![git merge][@1] Merging is nice because it's a non-destructive operation. The existing branches are not changed in any way. This avoids all of the potential pitfalls of rebasing

![git rebase][@2]

`git rebase` moves the entire feature branch to begin on the tip of the master branch, effectively incorporating all of the new commits in master.

# git difftool

# add badges to github

[Badge Generator][@3]

# Reference

- [Setting up a repository | Atlassian Git Tutorial][@4]
- [shields.io][@5]

<!-- reference links -->

[@1]: https://wac-cdn.atlassian.com/dam/jcr:e229fef6-2c2f-4a4f-b270-e1e1baa94055/02.svg?cdnVersion=ek
[@2]: https://wac-cdn.atlassian.com/dam/jcr:5b153a22-38be-40d0-aec8-5f2fffc771e5/03.svg?cdnVersion=ek
[@3]: http://badges.amercier.com/
[@4]: https://www.atlassian.com/git/tutorials/setting-up-a-repository
[@5]: http://shields.io/
