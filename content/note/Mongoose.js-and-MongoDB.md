---
title: Mongoose.js and MongoDB
date: '2015-05-10 00:47:16'
toc: true
tags:
  - database
  - MongoDB
  - Mongoose
---

# Custom `_id`

- 你schema 有 `_id` mongo 就唔同你gen, 亦唔可以用 `Schema.ObjectId` 做ref, 會認唔到type 的
- 可以令 `_id` 有意思,

  - e.g. studentSchema, use `regno` as custom `_id`
  - e.g. teacherSchema, use `teacherInitial` as custom `_id`

- use `uuid` if you need to have `id` before _add new stuff_

  - e.g. attachmentSchema, need the `id` to rename the attachment before saving to database.

<!-- more -->

# Schema.ObjectId

- if no need to use custom `_id` then use Schema.ObjectId

# `[{type: string}]` vs `[String]`

In mongoose schema, latter is better as it treat it purely a string array, the former one will create `_id` for each element.

# autoIndex & versionKey

```javascript
// disable `autoindex` if you know you will not query this schema.
SubjectSchema.set('autoIndex', false);

// disable `versionKey` if you know you don't need to monitor the update.
SubjectSchema.set('versionKey', false);
```

# Use variable as a number

```javascript
var Teacher = 1;
var Counselor = 2;
var HeadCounselor = 3
var Classmaster = 4
var Headmaster = 5
var Previleged = 6
// ...
role: { type: Int, min: Teacher, max: Previleged}
```
