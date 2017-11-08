---
title: Draw More Work Less
date: '2015-05-10 01:29:03'
tags:
  - plantuml
  - uml
---

<!-- MarkdownTOC -->

- [Some Links][some-links]
- [from leesei][from-leesei]
    - [Text based tools][text-based-tools]
    - [GUI Tools][gui-tools]

<!-- /MarkdownTOC -->


# Some Links

[UML | leesei's notebook][&01] [Draw More, Work Less | [self employed]][&02] [Draw More, Work Less][&03] [PlantUML][&04] [Mermaid][&05]

# from leesei

[Unified Modeling Language (UML)][&06] [Business Process Model and Notation (BPMN)][&07] is very similar to activity diagram. [YANG Central][&08]

[Allen Holub's UML Quick Reference][&09]

<!-- more -->

## Text based tools

I used to use the GUI tool [Dia][&10]. But it was very buggy and no longer updated. I then went on to look for alternatives.

I am frustrated with the UI diagram apps:

- layout of components takes time
- it is difficult to modify the diagrams in UI (especially for batch operations, e.g. rename, grouping)
- application lock-in becaused of the saved file format

So I focused on tools that provides a DSL for drawing UML from plain text. Candidates are (ranked according to the criteria below):

|            Tool            |  Language  |                                           Diagrams                                           |                              Remark                              |
|----------------------------|------------|----------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| [PlantUML][&11]             | Java       | Activity, State, Sequence, Component, Class, Object, Use Case, DITAA, JCCKit, Sudoku, XEarth | [live][&12], [Language Reference][&13]                             |
| [blockdiag][&14]            | Python     | Block, Activity, Sequence, Network, Rack, Packet                                             | [live][&15]                                                       |
| [mermaid][&16]              | JavaScript | Flowchart (Activity), Sequence, Gantt                                                        | [live][&17]                                                       |
| [js-sequence-diagrams][&18] | JavaScript | Sequence                                                                                     | live                                                             |
| [UMLGraph][&19]             | Java       | Sequence, Class                                                                              |                                                                  |
| [ckwnc][&20]                | ?          | Sequence                                                                                     | live **only**, C-like syntax                                     |
| [Graphviz][&21]             | C          | Digraph                                                                                      | supports `dot`, layout/rendering layer for PlantUML and UMLGraph |

I ended up choosing PlantUML because:

- the syntax is more familiar and flexible
- active development
- generates beautiful diagrams
- styleable
- supports more diagram types
- easy to setup
- binings to more projects indicates widespread usage

BTW, blockdiag would be the first runner up. It also features several unique diagram types.

### GaaS (graph as a service)

[Your Graphviz, UMLGraph or PlantUML for your README][&23]

PlantUML's [jQuery][&24] and Javascript [async][&25] and [sync][&26] integration.

## GUI Tools

- [Gaphor UML Modelling][&27] (Python)
- [UMLet - Free UML Tool for Fast UML Diagrams][&28]
- [ArgoUML][&29]
- [Violet UML Editor : easy to use, completely free][&30]
- [Lucidchart Diagrams - Desktop - Chrome Web Store][&31]
- [Gliffy Diagrams - Chrome Web Storše][&32]
- [Sketchboard.io - Chrome Web Store][&33]



[&01]: http://leesei.github.io/uml/
[&02]: http://www.mbarsinai.com/blog/2014/01/12/draw-more-work-less/
[&03]: http://www.slideshare.net/MichaelBarSinai/generated-siagramspublic
[&04]: http://plantuml.sourceforge.net/sitemap.html
[&05]: http://knsv.github.io/mermaid/
[&06]: http://en.wikipedia.org/wiki/Unified_Modeling_Language
[&07]: http://en.wikipedia.org/wiki/Business_Process_Model_and_Notation
[&08]: http://www.yang-central.org/twiki/bin/view/Main/WebHome
[&09]: http://www.holub.com/goodies/uml/
[&10]: https://wiki.gnome.org/Apps/Dia/
[&11]: http://blockdiag.com/en/
[&12]: http://www.plantuml.com/plantuml/
[&13]: http://plantuml.sourceforge.net/PlantUML_Language_Reference_Guide.pdf
[&14]: http://www.ckwnc.com
[&15]: http://blockdiag.appspot.com/
[&16]: http://www.graphviz.org/
[&17]: http://knsv.github.io/mermaid/live_editor/
[&18]: http://bramp.github.io/js-sequence-diagrams/
[&19]: https://github.com/knsv/mermaid
[&20]: http://plantuml.sourceforge.net/
[&21]: http://www.umlgraph.org/index.html
[&23]: http://www.gravizo.com/
[&24]: http://plantuml.sourceforge.net/jquery.html
[&25]: http://plantuml.sourceforge.net/demojavascript.html
[&26]: http://plantuml.sourceforge.net/demojavascript2.html
[&27]: http://gaphor.sourceforge.net/download.php
[&28]: http://www.umlet.com/
[&29]: http://argouml.tigris.org/
[&30]: http://alexdp.free.fr/violetumleditor/page.php
[&31]: https://chrome.google.com/webstore/detail/lucidchart-diagrams-deskt/djejicklhojeokkfmdelnempiecmdomj?hl=en
[&32]: https://chrome.google.com/webstore/detail/gliffy-diagrams/bhmicilclplefnflapjmnngmkkkkpfad?hl=en
[&33]: https://chrome.google.com/webstore/detail/sketchboardio/bgafhjpdkfjfmmjbebbdckolonomaoil?hl=en
