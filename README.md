# What is it?
This is an HTML5 presentation with reveal.js and AngularJS.
/app/presentation-config.json:

    {
        "title" : "Responsive Design",
        "maxLeft" : 3,
        "sections" : [
            {
                "title" : "HTML5 Presentation",
                "content" : "views/00-Intro.html"
            },
            {
                "title" : "Title 1",
                "content" : "views/page1.html",
                "sections" : [
                    {
                        "title" : "Sub title 1",
                        "content" : "views/page1-1.html"
                    },
                    ...
                ]
            }
        ]
    }

# Get started
Yeoman is mandatory (node.js + bower + grunt + yo + compass + ruby)

    npm install
    bower install