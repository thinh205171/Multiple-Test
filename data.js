var quiz = [
    {
      q: 'Which of the following statements about evolution of Web and dynamic Web sites are true?',
      ca: [0,2,4],
      wa: [1,3],
      a: [
        'A. A web server is a computer that allows you to make Web pages available on the internet',
        'B. MAN is a computer network that covers a small area such as office or school',
        'C. HTTP is a protocol used for requesting Web pages over the Internet',
        'D. A Web browser is a software that processes user requests and responds with the requested page to the Web server',
        'E. A dynamic Web page is a Web page that can be created using CSS and JavaScript',
      ]
    },
    {
      q: 'Which of the following statements are true about Datalist?',
      ca: [0,1,2],
      wa: [3],
      a: [
        'A. Provides a text field with a set of predefined list of options that are displayed in a drop-down list',
        'B. is a form-specific element',
        'C. &lt;datalist> element is very similar to standard &lt;select> element',
        'D. Does not allow the user to enter data of their choice or select from the suggested list of options'
      ]
    },
    {
      q: 'What does CSS stand for?',
      ca: [1],
      a: [
        'Coding Style Sheet',
        'Cascading Style Sheet',
        'Cascading System Style',
        'Coding System Sheet'
         ]
    },
    {
      q: 'What are the main differences between ID and Class?',
      ca: [1],
      a: [
        'Classes are for use with spans and ID\'s are For use With DIVs',  
        'ID\'s are supposed to be only used once per page but Classes can be used multiple times per page, and one element can have more than one Class but should have only one ID',
        'Classes should be used only once per page, but ID\'s can be used as many times as you like on one page',
        'ID\'s are better than Classes'
      ]
    },
    {
      q: 'Which of the following CSS property is used to specify whether the table cells share the common or separate border?',
      ca: [1],
      a: [
        'border-collapse',
        'border-radius',
        'border-spacing',
        'None of the above'
      ]
    },
    {
      q: 'Where in an HTML document is the correct place to refer to an external style sheet?',
      ca: [0],
      a: [
        'In the <head> selection',
        'At the end of the document',
        'In the <body> selection'
      ]
    },
    {
      q: 'Which of the following selector matches the name of any element type?',
      ca: [2],
      a: [
        'The Type Selector',
        'The Universal Selector',
        'The Descendant Selector',
        'The Class Selector'
      ]
    },
    {
      q: 'Which of the following is used to create Web Pages ',
      ca: [2],
      a: [
        'C++',
        'Java',
        'HTML',
        'JVM1'
      ]
    },
    {
      q: 'What symbols go around the properties for each css selector?',
      ca: [0],
      a: [
        '{}',
        '<>',
        '[]',
        '()'
      ]
    },
    {
      q: '<div>Hello <span class=""world"">world</span> </div>',
      ca: [2],
      a: [
       'a: #world{ ... }',
       'b. World{ ... }',
       'c. world{ ... }',
       'd. @world{ ... }',
      ]
    },
    {
      q: 'DIVs should only use ID\'s and spans should only use Classes',
      ca: [1],
      a: [
        'true',
        'false',
      ]
    },
    {
      q: 'How to create a new window when clicking on a link?',
      ca: [2],
      a: [
        '&lt;a href=""url"" new&gt;',
        '&lt;a href=""url"" target=""new"">',
        '&lt;a href=""url"" target=""_blank"">',
        '&lt;a href=""url""blank=""new"">'
    ]
    },
    {
      q: 'What are the main differences between ID and Class',
      ca: [1],
      a: [
        'Classes are for use with spans and ID\'s are for use with DIVs',  
        'ID\'s are supposed to be only used once per page but Classes can be used multiple times per page, and one element can have more than one Class but should have only one ID',
        'Classes should be used only once per page, but ID\'s can be used as many times as you like on one page',
        'ID\'s are better than Classes'
  
      ]
    },
    {
      q: 'What does the following mean to the computer? div p {color: #ff0000;}',
      ca: [3],
      a: [
        'Make text in all divs and all paragraphs in this document be bright red',
        'Make the background in all divs that are of the class ""p"" be bright red',
        'Make the text inside any divs inside of any paragraph be bright red',
        'Make the text inside any paragraph that is inside any div be bright red'
      ]
    },
    {
      q: 'What format is used to change the background color?',
      ca: [2],
      a: [
        'a. color:' ,
        'b. bgcolor:' ,
        'c. background-color:' ,
        'd. All answer is not correct' 
      ]
    },
    {
      q: 'What symbols go around the properties for each css selector?',
      ca: [0],
      a: [
        '{}',
        '[]',
        '()',
        '<>'
      ]
    },
    {
      q: 'Where in an HTML document is the correct place to refer to an external style sheet?',
      ca: [0],
      a: [
        'In the <head> selection',
        'At the end of the document',
        'In the <body> selection'
      ]
    },
    {
      q: 'Which is the correct CSS syntax?',
      ca: [2],
      a: [
        '{body:color=black;}',
        '{body;color:black;}',
        'body {color:black;}',
        'body:color=black;'
      ]
    },
    {
      q: 'Which of the following CSS property is used to specify whether the table cells share the common or separate border?',
      ca: [1],
      a: [
        'border-collapse',
        'border-radius',
        'border-spacing',
        'None of the above'
      ]
    },
    {
      q: 'Which of the following is used to create Web Pages ',
      ca: [3],
      a: [
        'C++',
        'Java',
        'HTML',
        'JVM1'
      ]
    },
    {
      q: 'Which of the following selector matches the name of any element type?',
      ca: [1],
      a: [
        'The Type Selector',
        'The Universal Selector',
        'The Descendant Selector ',
        'The Class Selector'
      ]
    },
    {
      q: 'HTML is a ________ language',
      ca: [0],
      a: [
        'A. Markup',
        'B. Markdown',
        'C. HyperMark',
        'D. MarkHyper'
      ]
    },
    {
      q: 'Which of the following is a new tag in HTML5?',
      ca: [1],
      a: [
        'A. &ltem&gt',
        'B. &ltdfn&gt',
        'C. &ltcode&gt',
        'D. &ltblockquote&gt'
      ]
    },
    {
      q: 'Which of the following is a rule-based language?',
      ca: [0],
      a: [
        'A. CSS',
        'B. jQuery',
        'C. JavaScript',
        'D. Geolocation'
      ]
    },
    {
      q: 'JQuery is a javaScript library which is supported on _____ browsers',
      ca: [1],
      a: [
        'A: Single',
        'B: Multiple',
        'C: Dual',
        'D: non-individual'
      ]
    },
    {
      q: 'A __________ element includes the start tag, contents, sub-element, and end tag.',
      ca: [0],
      a: [
        'A: Container',
        'B: Standalone',
        'C: Emphasis',
        'D: Formatted'
      ]
    },
    {
      q: 'Which of the following DOCTYPE is used in HTML5?',
      ca: [0],
      a: [
        'A. HTML',
        'B. Standalone',
        'C. Emphasis',
        'D. Formatted'
      ]
    },
    {
      q: 'Which of the following the tab is used to provide a hyperlink?',
      ca: [0],
      a: [
        'A. &lta>',
        'B. &lth>',
        'C. &ltb>',
        'D. &ltem>'
      ]
    },
    {
      q: 'Which of following value loads the target URL in the same window of the current Web page?',
      ca: [2],
      a: [
        'A. _blank',
        'B. _top',
        'C. _self',
        'D. _bottom',
      ]
    },
    {
      q: 'Which of the following paths has link that contain the complete address to get to a web page?',
      ca: [0],
      a: [
        'A. Absolute',
        'B. Non-Absolute',
        'C. Relative',
        'D. Non-Relative'
      ]
    },
    {
      q: 'To automatically add a subject line in the new e-mail message, the_____ attribute must be inserted after the e-mail address.',
      ca: [0],
      a: [
        'A. ?subject=',
        'B. ?subjectline=',
        'C. ?subject line=',
        'D. ?topic='
      ]
    },
    {
      q: 'The______attribute of the a element specifies the location where the linked web page will open when a link is clicked.',
      ca: [2],
      a: [
        'A: subject',
        'B: object',
        'C: target',
        'D: pageopen'
      ]
    },
    {
      q: 'Which of following statements are true for class selector?',
      ca: [0,1],
      wa: [2,3],
      a: [
        'A:It start with period followed by the value of the class attribute',
        'B:It matches element and applies the styles to the content of those elements whose class attribute is the same',
        'C:It specifies the element nam with the style',
        'D:It start with a hash symbol followed by the value of the class attribute',
      ]
    },
    {
      q: 'Absolute lengths are specified when the Web page designer is aware of the ______of the output device.',
      ca: [1],
      a: [
        'A. Text properties',
        'B. Physical properties',
        'C. Image properties',
        'D. Positioning properties'
      ]
    },
    {
       q: "What is the MOST SIMPLE way that you could make the words &quot;jay's favorite&quot; and only those words red without making any of the other text in the page red as well?<br><img src='https://farm2.static.flickr.com/1171/3265280622_f02d6c7c9b.jpg'>",
       ca: [2],
       a: [
         'A. Span {color:#ff0000;}',
         'B. Li {color:#ff0000;}',
         'C. Li span {color:#ff0000;}',
         'D. Div ul li span {color:#ff0000;}',
         'E. Li, span {color:#ff0000;}'
       ]
    },
    {
       q: "<img src='https://i.ibb.co/C2LNhnD/xxxxxxxxxx.png'>",
       ca: [0],
       a: [
        'A: a-3,b-4,c-1,d-2',
        'B: a-1,b-2,c-3,d-4',
        'C: a-4,b-3,c-2,d-1',
        'D: a-2,b-1,c-4,d-3'
       ]
    },
    {
       q: "<img src='https://i.ibb.co/51ZwyHz/thumb-show.png'>",
       ca: [2],
       a: [
         'A. a-2, b-1, c-3, d-4',
         'B. a-1, b-2, c-3, d-4',
         'C. a-4, b-3, c-2, d-1',
         'D. a-3, b-2, c-4, d-1 '
       ]
    },
    {
       q: 'Which of the following navigation bar will load easily',
       ca: [0],
       a: [
         'A. Text-based',
         'B. Graphical' ,
         'C. Image-based',
         'D. Font-based'
       ]
    },
    {
       q: 'Image map are images with clickable ____ that link to another page',
       ca: [3],
       a: [
         'A. images',
         'B. texts',
         'C. areas',
         'D. links'
       ]
    },
    {
       q: 'Which tag is used to represent content that is tangentially related to the main text of a document?',
       ca: [1],
       a: [
         'A. &ltsection>',
         'B. &ltaside>',
         'C. &ltheader>',
         'D. &ltarticle>',
       ]
    },
    {
       q: 'Which tag is used to markup measurements or a scalar measurements within a known range?',
       ca: [1],
       a: [
         'A. &lttime>',
         'B. &ltmeter>',
         'C. &ltheader>',
         'D. &ltprogress>'
       ]
    },
    {
       q: 'Which of the following navigation bar will load easily',
       ca: [0],
       a: [
         'A. Text-based',
         'B. Graphical' ,
         'C. Image-based',
         'D. Font-based'
       ]
    },
    {
       q: 'Identify the attribute that allows spanning of cell horizontally',
       ca: [1],
       a: [
        'A. rowSpan',
        'B. colSpan',
        'C. meta', 
        'D. div'
       ]
    },
    {
       q: 'Andy is working on an online banking Website. He wants to create a table for displaying the rate of interest allowed by the bank for different types of account. He also wants to give some width for the columns in the table. Which of these code can be used? <br> <img src = "https://i.ibb.co/DbTvTNJ/Untitled.png">',
       ca: [2],
       a: [
         'A ',
         'B' ,
         'C',
         'D'
       ]
    },
    {
       q: 'Which of the following element is a data field that allows the user to edit the data on the form?',
       ca: [1],
       a: [
        'A. required ' ,
        'B. input ', 
        'C. output ',
        'D. progress '
       ]
    },
    {
       q: 'Which of the following attribute displays a short hint or text inside a form element?',
       ca: [3],
       a: [
        'A. Meter',
        'B. Type',
        'C. Caption',
        'D. Placeholder'
       ]
    },
    {
      q: 'The_________element represents the current status of a task which gradually changes as the tasks heads for completion.',
      ca: [2],
      a: [
        'A. Datalist', 
        'B. Pattern',
        'C. Progress', 
        'D. Required'
      ]
    },
    {
      q: 'Which of the following code disables the default behavior of autocomplete attribute? <br> <img src =https://i.ibb.co/P5Dt1V6/q1.png>',
      ca: [3],
      a: [
        'A', 
        'B',
        'C', 
        'D'
      ]
    },
    {
      q: '_________ is a combination of various elements such as video, graphics, sound and text.',
      ca: [1],
      a: [
        'A. Audio' ,
        'B. Multimedia ',
        'C. Video',
        'D. Autoplay'
      ]
    },
    {
      q: 'Which of the following element allows the user to enable a native audio file within the Wed browser?',
      ca: [0],
      a: [
        'A. Audio', 
        'B. Text',
        'C. Video',
        'D. Autoplay'
      ]
    },
    {
      q: '________ is a new open source video container format supported by Google. ',
      ca: [3],
      a: [
        'A. Flv',
        'B. Ogg',
        'C. Avi', 
        'D. WebM'
      ]
    },
    {
      q: '_________ is the level of ease with which computers can be used and be available to a wide range of users, including people with disabilities',
      ca: [2],
      a: [
        'A. Browser',
        'B. Element',
        'C. Accessibility',
        'D. Autoplay'
      ]
    },
    {
      q: "<img src='https://i.ibb.co/rbTCyG2/Untitled.png'>",
      ca: [2],
      a: [
        'A',
        'B',
        'C',
        'D'
      ]
    },
    {
      q: "Which of the following are the correct ways to create a regular expression",
      ca: [1,3],
      wa: [0,2],
      a: [
        'A. Literal Syntax',
        'B. exec ()',
        'C. RegExp Constructor',
        'D. test ()',
      ]
    },
    {
      q: "Which of the following operators return a decimal value when they are evaluated?",
      ca: [3],
      a: [
        'A. Arithmetic',
        'B. Logical',
        'C. Relational',
        'D. Bitwise',
      ]
    },
    {
      q: "<img src='https://i.ibb.co/hC7TYqY/undefined-Imgur-2.png'>",
      ca: [3],
      a: [
        'A. a-4,b-1,c-2,d-3',
        'B. a-1,b-2.c-3.d-4',
        'C. a-3,b-2,c-1,d-4',
        'D. a-4,b-3,c-2,d-1'
      ]
    },
    {
      q: "The_______statement allows comparing a variable or expression with multiple values.",
      ca: [3],
      a: [
        'A: if',
        'B: if-else if',
        'C: if-else',
        'D: switch-case'
      ]
    },
    {
      q: "The _______ loop executes a block of code until the condition becomes false",
      ca: [1],
      a: [
        'A: for',
        'B: while',
        'C: do-while',
        'D: do-until'
      ]
    },
    {
      q: "<img src='https://i.ibb.co/zfGq25c/undefined-Imgur-3.png'>",
      ca: [2],
      a: [
        'A. a-4, b-1, c-2, d-3',
        'B. a-1, b-2, c-3, d-4',
        'C. a-2, b-3, c-4, d-1',
        'D. a-3, b-2, c-4, d-1'
      ]
    },
    {
      q: "Which of the the following statements terminates the current execution, but does not terminate the execution of the loop entirely?",
      ca: [1],
      a: [
        'A. halt' ,
        'B. continue' ,
        'C. break' ,
        'D. exit'
      ]
    },
    {
      q: "Which of the following option is not a valid declaration of the for loop?",
      ca: [3],
      a: [
        'A. for (initialization; condition; increment/decrement)',
        'B. for (initialization; condition; )',
        'C. for (; condition; increment/decrement)',
        'D. for (condition; increment/decrement)'
      ]
    },
    {
      q: "Identify the correct ways to create an array variable in the javascript",
      ca: [1,2],
      wa: [0,3],
      a: [
        'A: Object', 
        'B: new',
        'C: Array', 
        'D: String'
      ]
    },
    {
      q: "A javaScript function is created under the________ element.",
      ca: [0],
      a: [
        'A. script',
        'B. body',
        'C. head',
        'D. form'
      ]
    },
    {
      q: "Which of the following methods do not change values of the parameters passed to it from the calling function?",
      ca: [2],
      a: [
        'A Pass of variable',
        'B Pass of reference',
        'C Pass of value',
        'D Pass of object'
      ]
    },
    {
      q: 'Identify the  correct \'document\' object method that retrieves a collection of HTML elements using the specified name',
      ca: [2],
      a: [
        'A. getElement()',
        'B. getElementByID()',
        'C. getElementsByName()',
        'D. getElementsByTagName()'
      ]
    },
    {
      q: "<img src='https://i.ibb.co/XjFrqR9/Untitled.png'>",
      ca: [3],
      a: [
        'A',
        'B',
        'C',
        'D'
      ]
    },
  ];