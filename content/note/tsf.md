---
title: "TSF"
date: 2017-09-04T17:09:38+08:00
subtitle: "Notes to TSF"
tags:
  - js
---


``` js
var students = [{
  name: "foo",
  clazz: "4A" 
}, {  
  name: "world",
  clazz: "4B" 
}, {
  name: "bar",
  clazz: "4B"
}, {
  name: "hello",
  clazz: "4C"
}]

var clazzes = ["4B", "4C"]

clazzes.forEach(function (clazz) {
  students.filter(createFilterFunction(clazz)).forEach(logName)
})

function createFilterFunction (clazz) {
  // return filterFunction
  return function (student) {
    return student.clazz == clazz
  }
}

function logName (student) {
  console.log(student.name)
}


```