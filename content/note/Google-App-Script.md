---
title: Google App Script
date: '2015-05-22 11:50:04'
tags:
  - google script
---

# Links
- [Apps Script | Google Developers][&1]

# Using html request to send form response
- open inspecter in google form (view version, not editable one)
- find the `input` Tag of the question and copy it's name. The name look like `entry.933828429` 
- replace the word *view* in the link to *formResponse*
  + `https://docs.google.com/forms/d/e/1FAIpQLSdC2RD1aD4W4duLGDjxsVFDGvJW6IUhhxsBGWiQlV7TU_w5LA/formResponse` 
- add the query to the end of the link look like above
  + `?entry.933828429=Hello%20World`
  + where `%20` mean space
- if you need another question's response, use `&` as seperator, like below.
  + `?entry.=Hello%20World&entry.204155988=foo`
- finally, add `?submit=Submit` at the end
- this is the complete example
  + `https://docs.google.com/forms/d/e/1FAIpQLSdC2RD1aD4W4duLGDjxsVFDGvJW6IUhhxsBGWiQlV7TU_w5LA/formResponse?ifq&entry.204155988=Cyrus%20Ngan&entry.544002008=foo&submit=Submit`


[&1]: https://developers.google.com/apps-script/reference/
