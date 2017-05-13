---
title: JavaScript on OSAScript
date: '2015-05-27 12:45:16'
tags:
  - macos
  - osascript
---

# Example

- [JXA-Cookbook](https://github.com/dtinth/JXA-Cookbook/)
- [Apple Release Notes](https://developer.apple.com/library/mac/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/)
- [JavaScript for OS X Automation by Example](http://developer.telerik.com/featured/javascript-os-x-automation-example/)

## Display Notification

```sh
#! /usr/bin/osascript -l JavaScript
app = Application.currentApplication();
app.includeStandardAdditions = true;
app.displayNotification('Hello, world', {withtitle: 'Title'})
```

## example

```javascript
// alfred workflow
// convert Google Chrome active tab to markdown link
function run(argz) {
  var app = Application.currentApplication();
  app.includeStandardAdditions = true;
  var Chrome = Application('Google Chrome');
  var activeTab = Chrome.windows[0].activeTab;
  var result = '[' + activeTab.title() + '](' + activeTab.url() + ')';
  app.setTheClipboardTo(result)
  return result
}
```

```javascript
// alfred workflow:
// email link of Google Chrome active tab
function run(argz){
  var Chrome = Application('Google Chrome');
  var activeTab = Chrome.windows[0].activeTab;

  var title: activeTab.title();
  var url = activeTab.url();
  var mdl = '[' + title + '](' + url + ')';

  // cos I use Airmail as email client
  var Airmail = Application('Airmail');
  message = Airmail.OutgoingMessage().make();
  message.subject = activeTab.title();
  var htmlcontent = '';
  htmlcontent += '<a href="' + url + '">' + url + '</a>';
  htmlcontent += '<br><br>';
  htmlcontent += mdl;

  message.htmlcontent  = htmlcontent;

  Airmail.compose(message);
  Airmail.activate();
}
```
