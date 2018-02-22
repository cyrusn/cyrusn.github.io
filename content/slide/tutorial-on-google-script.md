---
title: "Tutorial on Google Script"
subtitle: ""
description:
draft: false
remarkOption: 
  ratio: 16:9
date: 2018-01-25T17:53:47+08:00
tags:
  - google script
  - google form
  - tutorial
---
class: center, middle, bg-info, text-light

# Tutorial on Google Script
<hr class="bg-light">
## Cyrus Ngan

---
# Objectives - Mock Interview Workshop
- Create a google form
- Application for Mock Interview Workshop 
  - `User` can choose his / her name in a list
- User can apply at most .mark[***5 courses***] for the mock interview
  1. `User` should enter Course ID in JUPAS
  1. `User` should enter link of the course information
- 10 pages slide to complete the simple tutorial

---
class: center middle bg-dark text-light
# Prerequiste
## JavaScript

---
# Free resources
## Start from scratch
- [Harvard University CS50.tv][@3]
- [Codecademy][@4]
  + HTML (3Hrs) .badge.badge-info[Create Webpage]
  + CSS (11hrs) .badge.badge-info[Style Webpage]
  + JavaScript (5hrs) .badge.badge-danger[Interaction with Webpage]
  + Command Line (3hrs) .badge.badge-info[Navigate in Unix system]
- [freeCodeCamp][@5]


---
# Begin with the End in Mind
## Final product

.overflow.h-75[

```js
var form = FormApp.openByUrl("Paste_the_form_id_here")
var students = [{"classcode":"1A","classno":1,"name":"Apple"},
{"classcode":"1A","classno":2,"name":"Ball"},
{"classcode":"1A","classno":3,"name":"Cat"},
{"classcode":"1A","classno":4,"name":"Dog"},
{"classcode":"1A","classno":5,"name":"Egg"},
{"classcode":"1A","classno":6,"name":"Fan"},
{"classcode":"1A","classno":7,"name":"Goat"},
{"classcode":"1A","classno":8,"name":"Hand"},
{"classcode":"1A","classno":9,"name":"Indian"},
{"classcode":"1A","classno":10,"name":"Jam"},
{"classcode":"1A","classno":11,"name":"King"},
{"classcode":"1A","classno":12,"name":"Lamp"},
{"classcode":"1A","classno":13,"name":"Man"},
{"classcode":"1A","classno":14,"name":"Nurse"},
{"classcode":"1A","classno":15,"name":"Owl"},
{"classcode":"1A","classno":16,"name":"Pizza"},
{"classcode":"1A","classno":17,"name":"Queen"},
{"classcode":"1A","classno":18,"name":"Rail"},
{"classcode":"1A","classno":19,"name":"Sun"},
{"classcode":"1A","classno":20,"name":"Tiger"},
{"classcode":"1A","classno":21,"name":"Umbrella"},
{"classcode":"1A","classno":22,"name":"Vase"},
{"classcode":"1A","classno":23,"name":"Woman"},
{"classcode":"1A","classno":24,"name":"Box"},
{"classcode":"1A","classno":25,"name":"Yard"},
{"classcode":"1A","classno":26,"name":"Zoo"}]

function printTitle() {
  var title = form.getTitle() // get the title of the form
  Logger.log(title) // print the title in logger
}

function cleanup() {
  form.getItems().forEach(function(item) {
    form.deleteItem(item)
  })
}
function addStudentList() {
  // map method change the content in the students array
  // from {"classcode":"1A","classno":1,"name":"Apple"} to "1A - 1 - Apple"
  var list = students.map(function(obj){
    return obj.classcode + "(" + obj.classno + ") - " + obj.name  
  })
  form.addListItem()
  .setTitle("Please select your name") // set title  of the question
  .setRequired(true) // become a required question
  .setChoiceValues(list) // set the list to choose
}

function askCourseInfo() {
  // loop the contents 5 times
  for (i = 0 ; i < 5 ; i++) {
    // add section header for each question
    form.addSectionHeaderItem().setTitle("Course " + (i + 1))
    // 1 line text input
    form.addTextItem().setTitle("Course ID")
    // multiple line text input
    form.addParagraphTextItem().setTitle("Course Information")
  }
}

function fullRun() {
  cleanup()
  form.setTitle("Mock Interview Application") // set title of the form
  addStudentList()
  askCourseInfo() 
}
```
]


---
class: row

.col-3.bg-light.sidebar[
### Tutorial
- Create a form
]

.col[
- Open Google drive
- .text-danger[**Copy**] the link of the google form
]

---
class: row

.col-3.bg-light.sidebar[
### Tutorial

- Create a form
- Open Script Editor
]


.col-9[
- Open script editor
- Open API reference
  + `Help` -> `API reference`
  + [Forms Service | Google Developers][@1]
  + You may find all API in this documentation
- Insert the following code **before** the `function myFunction () {}`

``` js
var form = FormApp.openByUrl('paste_the_link_of_the_form_here')
```

- Inside the curly bracket of `myFunction`
- Copy and paste the following code
- Change the function name `myFunction` to `printTitle`

``` js
function PrintTitle() {
  var title = form.getTitle() // get the title of the form
  Logger.log(title) // print the title in logger
}
```
]

---
class: row

.col-3.bg-light.sidebar[
### Tutorial

- Create a form
- Open Script Editor
]


.col-9[

## Result

```js
var form = FormApp.openByUrl("paste_the_link_of_the_form_here")

function printTitle() {
  var title = form.getTitle() // get the title of the form
  Logger.log(title) // print the title in logger
}

```

- Go to `View` and `Logs` to see the log message.
- Printing title is not really fun, let's resume!

]


---
class: row

.col-3.bg-light.sidebar[
### Tutorial

- Create a form
- Open Script Editor
- `cleanup`
]


.col-9[
Before we write something powerful, we need a `cleanup` function
to clean up all codes if we accidently mess up the form. Append the following
code to the script editor


``` js

function cleanup() {
  form.getItems().forEach(function(item) {
    form.deleteItem(item)
  })
}


```
- Choose `cleanup` function to run in the dropdown list.
- Go back to .text-danger[form], see if all questions have already deleted.
]

---
class: row

.col-3.bg-light.sidebar[
### Tutorial
- Create a form
- Open Script Editor
- `cleanup`
- `askStudentName`
]

.col[

Now we start to create some interesting question. First we assume you have an
excel file that stores student information like the table listed below

.border.w-75.mx-auto.smaller.overflow.h-25[
| classcode | classno |   name   |
|-----------|---------|----------|
| 1A        |       1 | Apple    |
| 1A        |       2 | Ball     |
| 1A        |       3 | Cat      |
| 1A        |       4 | Dog      |
| 1A        |       5 | Egg      |
| 1A        |       6 | Fan      |
| 1A        |       7 | Goat     |
| 1A        |       8 | Hand     |
| 1A        |       9 | Indian   |
| 1A        |      10 | Jam      |
| 1A        |      11 | King     |
| 1A        |      12 | Lamp     |
| 1A        |      13 | Man      |
| 1A        |      14 | Nurse    |
| 1A        |      15 | Owl      |
| 1A        |      16 | Pizza    |
| 1A        |      17 | Queen    |
| 1A        |      18 | Rail     |
| 1A        |      19 | Sun      |
| 1A        |      20 | Tiger    |
| 1A        |      21 | Umbrella |
| 1A        |      22 | Vase     |
| 1A        |      23 | Woman    |
| 1A        |      24 | Box      |
| 1A        |      25 | Yard     |
| 1A        |      26 | Zoo      |
]

Copy the namelist above and paste to the link below.
- [Mr. Data Converter][@2]
]

---
class: row

.col-3.bg-light.sidebar[
### Tutorial
- Create a form
- Open Script Editor
- `cleanup`
- `askStudentName`
]

.col-9[
In the output box of the website you will see the result should look like this
```js
[{"classcode":"1A","classno":1,"name":"Apple"},
{"classcode":"1A","classno":2,"name":"Ball"},
{"classcode":"1A","classno":3,"name":"Cat"},
{"classcode":"1A","classno":4,"name":"Dog"},
{"classcode":"1A","classno":5,"name":"Egg"},
...
]
```

Copy the output and insert it in Script Editor just after the first line
and begin with `var students = `


```js
var form = FormApp.openByUrl(...)

var students = [{"classcode":"1A","classno":1,"name":"Apple"},
{"classcode":"1A","classno":2,"name":"Ball"},
...
]

```

We here define an array(list) of students for create a list of students
for the form.
]

---
class: row

.col-3.bg-light.sidebar[
### Tutorial
- Create a form
- Open Script Editor
- `cleanup`
- `askStudentName`
]

.col-9[
Now your code should look like this

```js
var form = FormApp.openByUrl("paste_the_link_of_the_form_here")
var students = [{"classcode":"1A","classno":1,"name":"Apple"},
{"classcode":"1A","classno":2,"name":"Ball"},
...
{"classcode":"1A","classno":26,"name":"Zoo"}]

function printTitle() {
  var title = form.getTitle() // get the title of the form
  Logger.log(title) // print the title in logger
}

function cleanup() {
  form.getItems().forEach(function(item) {
    form.deleteItem(item)
  })
}
```
]

---
class: row

.col-3.bg-light.sidebar[
### Tutorial
- Create a form
- Open Script Editor
- `cleanup`
- `askStudentName`
]

.col-9[
Next we create a function for create list of student. Append the code below
to the bottom of the script.

```js

function addStudentList() {
  // map method change the content in the students array
  // from {"classcode":"1A","classno":1,"name":"Apple"} to "1A - 1 - Apple"
  var list = students.map(function(obj){
    return obj.classcode + "(" + obj.classno + ") - " + obj.name  
  })
  
  form.addListItem()
  .setTitle("Please select your name") // set title  of the question
  .setRequired(true) // become a required question
  .setChoiceValues(list) // set the list to choose
}

```

Choose the function `addStudentList` to run, then go back to form
if the list question is created properly.

Run `cleanup` to cleanup the form if you can create the form successfully.

]
---
class: row

.col-3.bg-light.sidebar[
### Tutorial
- Create a form
- Open Script Editor
- `cleanup`
- `askStudentName`
- `askCourseInfo`
]

.col-9[

We have gone through the most difficult parts, now leave the easier steps.
Create an `askCourseInfo` function to create 2 questions at once. Append the
code below to the bottom of script

```js

function askCourseInfo() {
  // loop the contents 5 times
  for (i = 0 ; i < 5 ; i++) {
    // add section header for each question
    form.addSectionHeaderItem().setTitle("Course " + (i + 1))
    // 1 line text input
    form.addTextItem().setTitle("Course ID")
    // multiple line text input
    form.addParagraphTextItem().setTitle("Course Information")
  }
}

```

Run `askCourseInfo` and go to form to see the result.
If you get the proper result, then run `cleanup` to cleanup the form.
]

---
class: row

.col-3.bg-light.sidebar[
### Tutorial
- Create a form
- Open Script Editor
- `cleanup`
- `askStudentName`
- `askCourseInfo`
- `fullRun`
]

.col-9[
Now we run all function altogether. Append the following code to the script.

```js
function fullRun() {
  cleanup()
  form.setTitle("Mock Interview Application") // set title of the form
  addStudentList()
  askCourseInfo() 
}
```

Run the `fullRun` function and go to the form to see the result.

]

---
class: center middle bg-dark text-light
# What do you think?

---
class: center middle
## .text-danger[♥] Thanks .text-danger[♥]


[@1]: https://developers.google.com/apps-script/reference/forms/
[@2]: https://shancarter.github.io/mr-data-converter/
[@3]: http://cs50.tv/2017/fall/
[@4]: https://www.codecademy.com/learn
[@5]: https://www.freecodecamp.org/
