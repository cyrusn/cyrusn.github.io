---
title: VIM Notes
date: '2016-10-04 11:56:18'
tags:
  - editor
  - vim
---

# VIM Basic

- [Vim Cheat Sheet - English][@1]
- [VimGenius][@2]
- [vimgifs][@3]

# Some useful skills

## Update VIM Pathogen Plugin
`for i in ~/.vim/bundle/*; do git -C $i pull; done`

## Insert across multi-lines

Select the lines you want to modify using `Ctrl-v`. Press: `I`: Insert before what's selected. `A`: Append after what's selected. `c`: Replace what's selected. Type the new text. Press `Esc` to apply the changes to all selected lines.

## Search and replace

`:s/foo/bar/g` Change each 'foo' to 'bar' in the current line. `:%s/foo/bar/g` Change each 'foo' to 'bar' in all the lines.

# VIM Plugin

- [vim-pathogen][@4]
- [Vim Awesome][@5]

# My installed Plugins

- ctrlp
- emmet
- nerdtree
- vim-airline
- vim-go
- vim-airline-themes
- vim-snippets
- syntastic
- tagbar
- vim-colors-solarized

<!-- reference links -->

[@1]: http://vim.rtorr.com/
[@2]: http://vimgenius.com/
[@3]: https://vimgifs.com/
[@4]: https://github.com/tpope/vim-pathogen
[@5]: http://vimawesome.com/
