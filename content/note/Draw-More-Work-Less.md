---
title: Draw More Work Less
date: '2015-05-10 01:29:03'
tags:
  - plantuml
  - uml
---

# Some Links

[UML | leesei's notebook][1] [Draw More, Work Less | [self employed]][2] [Draw More, Work Less][3] [PlantUML][4] [Mermaid][5]

# from leesei

[Unified Modeling Language (UML)][6] [Business Process Model and Notation (BPMN)][7] is very similar to activity diagram. [YANG Central][8]

[Allen Holub's UML Quick Reference][9]

<!-- more -->

## Text based tools

I used to use the GUI tool [Dia][10]. But it was very buggy and no longer updated. I then went on to look for alternatives.

I am frustrated with the UI diagram apps:

- layout of components takes time
- it is difficult to modify the diagrams in UI (especially for batch operations, e.g. rename, grouping)
- application lock-in becaused of the saved file format

So I focused on tools that provides a DSL for drawing UML from plain text. Candidates are (ranked according to the criteria below):

Tool                   | Language   | Diagrams                                                                                     | Remark
---------------------- | ---------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------
[PlantUML]             | Java       | Activity, State, Sequence, Component, Class, Object, Use Case, DITAA, JCCKit, Sudoku, XEarth | [live][11], [Language Reference][12]
[blockdiag]            | Python     | Block, Activity, Sequence, Network, Rack, Packet                                             | [live][13]
[mermaid]              | JavaScript | Flowchart (Activity), Sequence, Gantt                                                        | [live][14]
[js-sequence-diagrams] | JavaScript | Sequence                                                                                     | live
[UMLGraph]             | Java       | Sequence, Class                                                                              |
[ckwnc]                | ?          | Sequence                                                                                     | live **only**, C-like syntax
[Graphviz]             | C          | Digraph                                                                                      | supports `dot`, layout/rendering layer for PlantUML and UMLGraph

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

[Your Graphviz, UMLGraph or PlantUML for your README][15]

PlantUML's [jQuery][16] and Javascript [async][17] and [sync][18] integration.

## GUI Tools

- [Gaphor UML Modelling][19] (Python)
- [UMLet - Free UML Tool for Fast UML Diagrams][20]
- [ArgoUML][21]
- [Violet UML Editor : easy to use, completely free][22]
- [Lucidchart Diagrams - Desktop - Chrome Web Store][23]
- [Gliffy Diagrams - Chrome Web Storše][24]
- [Sketchboard.io - Chrome Web Store][25]

[blockdiag]: http://blockdiag.com/en/
[ckwnc]: http://www.ckwnc.com
[graphviz]: http://www.graphviz.org/
[js-sequence-diagrams]: http://bramp.github.io/js-sequence-diagrams/
[mermaid]: https://github.com/knsv/mermaid
[plantuml]: http://plantuml.sourceforge.net/
[umlgraph]: http://www.umlgraph.org/index.html
[1]: http://leesei.github.io/uml/
[2]: http://www.mbarsinai.com/blog/2014/01/12/draw-more-work-less/
[3]: http://www.slideshare.net/MichaelBarSinai/generated-siagramspublic
[4]: http://plantuml.sourceforge.net/sitemap.html
[5]: http://knsv.github.io/mermaid/
[6]: http://en.wikipedia.org/wiki/Unified_Modeling_Language
[7]: http://en.wikipedia.org/wiki/Business_Process_Model_and_Notation
[8]: http://www.yang-central.org/twiki/bin/view/Main/WebHome
[9]: http://www.holub.com/goodies/uml/
[10]: https://wiki.gnome.org/Apps/Dia/
[11]: http://www.plantuml.com/plantuml/
[12]: http://plantuml.sourceforge.net/PlantUML_Language_Reference_Guide.pdf
[13]: http://blockdiag.appspot.com/
[14]: http://knsv.github.io/mermaid/live_editor/
[15]: http://www.gravizo.com/
[16]: http://plantuml.sourceforge.net/jquery.html
[17]: http://plantuml.sourceforge.net/demojavascript.html
[18]: http://plantuml.sourceforge.net/demojavascript2.html
[19]: http://gaphor.sourceforge.net/download.php
[20]: http://www.umlet.com/
[21]: http://argouml.tigris.org/
[22]: http://alexdp.free.fr/violetumleditor/page.php
[23]: https://chrome.google.com/webstore/detail/lucidchart-diagrams-deskt/djejicklhojeokkfmdelnempiecmdomj?hl=en
[24]: https://chrome.google.com/webstore/detail/gliffy-diagrams/bhmicilclplefnflapjmnngmkkkkpfad?hl=en
[25]: https://chrome.google.com/webstore/detail/sketchboardio/bgafhjpdkfjfmmjbebbdckolonomaoil?hl=en
