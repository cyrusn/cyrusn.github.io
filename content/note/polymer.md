---
title: Polymer notes
date: '2015-05-10 00:47:15'
tags:
  - polymer
---

- [Bower - Search][&1]
- [Custom Elements - A Web Components Gallery for Modern Web Apps][&2]
- [Google Web Components][&3]
- [PolymerLabs · GitHub][&4]
- [Web Components Catalog - Component Kitchen][&5]

- 寫響htm 叫declarative style, 用C/javascript 嗰啲叫imperative style
- declarative 易睇易明，但唔應該放logic
- angular 個template system 都有少少logic的 ng-if, ng-style, ng-show 都係做switching
- 放個route definition 我個人接受唔到
- 不過如果個route table 係獨立一個html define 我又okay 喎，咁佢就同一個json 等效
- 我應該係接受唔到route definition 同view element inline

# [Copy By Value Vs By reference][&6]

        | By value                                                                                                   | By reference
------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Copy    | The value is actually copied; there are two distinct, independent copies.                                  | Only a reference to the value is copied. If the value is modified through the new reference, that change is also visible through the original reference.
Pass    | A distinct copy of the value is passed to the function; changes to it have no effect outside the function. | A reference to the value is passed to the function. If the function modifies the value through the passed reference, the modification is visible outside the function.
Compare | Two distinct values are compared (often byte by byte) to see if they are the same value.                   | Two references are compared to see if they refer to the same value. Two references to distinct values are not equal, even if the two values consist of the same bytes.


[&1]: http://bower.io/search/?q=web-components
[&2]: http://customelements.io/
[&3]: http://googlewebcomponents.github.io/
[&4]: https://github.com/PolymerLabs
[&5]: http://component.kitchen/
[&6]: http://docstore.mik.ua/orelly/webprog/jscript/ch11_02.htm#jscript4-CHP-11-TABLE-2
