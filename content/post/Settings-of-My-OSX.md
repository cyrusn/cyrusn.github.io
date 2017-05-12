+++
title = "Settings of My OSX"
date = "2015-10-01 13:32:12"
tags = ["macos", "setting"]
+++
# Custom OSX
- [Remove shift key augmentation for Mission Control animation](http://apple.stackexchange.com/questions/66433/remove-shift-key-augmentation-for-mission-control-animation#answer-115698)
- Enable the three finger drag in *Accessibility*

# Terminal
- Autocomplete `echo "set completion-ignore-case On" >> ~/.inputrc`
- install command line tools in XCode `xcode-select --install`

## zsh
- [install .oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)
- symlink for setting zsh


```sh
    ## for installation of zsh
    ln -s Dropbox/MacSetting/Terminal/cyrusn ./.cyrusn
    ln -s ~/Dropbox/MacSetting/Terminal/zsh/.zshrc ~/
    ln -s ~/Dropbox/MacSetting/Terminal/zsh/.zsh-custom ~/

    ## for installation of coreutil/.dir_colors
    ln -s ~/Dropbox/MacSetting/Terminal/coreutil/.dir_colors ~/
```


<!--more-->

### for further customisation
- add `export` at `~/Dropbox/MacSetting/Terminal/zsh/.zsh-custom/export.zsh`
- add `alias` at `~/Dropbox/MacSetting/Terminal/zsh/.zsh-custom/alias.zsh`


# homebrew package

## my automatic script for installation homebrew package
[https://github.com/cyrusn/cyrusn-terminal-setting](https://github.com/cyrusn/cyrusn-terminal-setting)

# Nodejs Setting

## set the bin folder in `${HOME}`

```sh
# .npmrc
# reference: https://gist.github.com/leesei/6591437
prefix = ${HOME}/.npm-packages
```



## Find all global packages for install

```sh
echo "$(\ls $(npm root -g)  | tr -s '\t\n' ' ')"
```


### npm list -g

```sh
npm install -g eslint eslint-plugin-react gulp hexo hexo-cli http-server jshint jsxhint lodash node-gyp nodemon
```


## export path at `.bashrc` or `.zshrc` or equivalent


```sh
export NODE_PATH=$HOME/.npm-packages/lib/node_modules
export PATH=$HOME/.npm-packages/bin:$PATH
```



# create symlink


```sh
cd ~/
ln -s ~/Dropbox/MacSetting/Terminal/vim ~/.vim`
ln -s ~/Dropbox/MacSetting/atom/ ~/.atom
ln -s ~/Dropbox/.npm-packages/ ~/
```


## sublimeText

```sh
cd ~/Library/Application\ Support/Sublime\ Text\ 3/Packages/
ln -s ~/Dropbox/MacSetting/sublimetext/User  ./
```


# custom setting on osx
- set terminal color theme

