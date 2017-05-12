+++
title = "How to use GoogleScript"
date = "2015-05-22 11:50:04"
tags = ["google script"]
+++
# Useful Examples

## Send email from spreadsheet data

```javascript
function sendMailByRowNo(rowNo){
  // rowString e.g. 1:1
  var rowString = Utilities.formatString("%s:%s", rowNo, rowNo)
  var values = spreadsheet.getRange(rowString).getValues()[0]

  sendMailByValues(values)
}

function convertValuesToObject(values) {
  var obj = {};
  obj.timestamp = values[0]
  obj.email = values[1]
  obj.title = values[2]

  return obj
}

function sendMailByValues(values) {
  var obj = convertValuesToObject(values)
  Logger.log(obj)
  var htmlBody = setEmailBody(obj)

  var mailAppObject = {
    to: obj.email,
    subject: obj.title,
    htmlBody: htmlBody
  }

  // an example to attach a pdf file in google drive
  // var attachements = DriveApp.getFileById('');
  // if (attachements) {
  //   mailAppObject.attachments = [file.getAs(MimeType.PDF)]
  // }

  MailApp.sendEmail(mailAppObject);
}

function setEmailBody(obj) {
  var htmlBody = Utilities.formatString("<h1>%s</h1>", obj.title)
  return htmlBody
}

```

## Set Trigger on form submit

```javascript
// initializeTrigger set the trigger, will run `sendMailOnFormSubmit` function on form submit
function initializeTrigger() {
  var SendFormScript = ScriptApp
  .newTrigger("sendMailOnFormSubmit")
  .forSpreadsheet(spreadsheetID);

  var triggers = ScriptApp.getProjectTriggers();

  // Delete all previous triggers.
  for (var i in triggers) {
    ScriptApp.deleteTrigger(triggers[i]);
  }

  SendFormScript
    .onFormSubmit()
    .create();
}
```

## Small Functions is good

```javascript
function createQuestion (obj) {
  var type = obj.type;
  var title = obj.title;
  var lists = obj.lists;
  var isRequired = obj.isRequired || false;
  var desc = obj.desc || false;

  switch (type) {
    case 'text':
      return createTextQuestion(title, isRequired, desc)
      break;
    case 'list':
      return createListQuestion(title, lists, isRequired, desc);
      break;
    case 'paragraph':
      return createParagraphTextQuestion(title, isRequired, desc)
      break;
    case 'header':
      return createSessionHeader(title, desc);
      break;
    case 'pagebreak':
      return createPageBreak(title, desc)
      break;
  }
}

function createListQuestion(title, lists, isRequired, desc) {
  var choices = [];

  lists.forEach(function(item) {
    choices.push(item);
  })

  var listQuestion = form.addListItem();

  listQuestion.setRequired(isRequired)
  .setTitle(title)
  .setChoiceValues(choices)

  if (desc) {
    listQuestion.setHelpText(desc);
  }

  return listQuestion;
}

function createTextQuestion(title, isRequired, desc) {
  var textQuestion = form.addTextItem()

  textQuestion.setTitle(title)
  .setRequired(isRequired)

  if (desc) {
    textQuestion.setHelpText(desc);
  }

  return textQuestion;
}

function createParagraphTextQuestion(title, isRequired, desc) {
  var textQuestion = form.addParagraphTextItem();

  textQuestion.setTitle(title)
  .setRequired(isRequired)

  if (desc) {
    textQuestion.setHelpText(desc);
  }

  return textQuestion;
}

function createPageBreak(title, helpText) {
  helpText = helpText || ''
  return form
  .addPageBreakItem()
  .setTitle(title)
  .setHelpText(helpText);
}

function createSessionHeader(title, desc) {
  var header = form
  .addSectionHeaderItem()
  .setTitle(title)

  if (desc) {
    form.setHelpText(desc);
  }

  return header
}
```

# Some useful function

```javascript
// return a formatted string
Utilities.formatString(template, ...args)

// return a formatted date string
Utilities.formatDate(new Date(), "GMT+8:00", "yyyy-MM-dd")
```
