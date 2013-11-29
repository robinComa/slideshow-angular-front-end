angular.module('HTML5PresentationApp.reveal', []).factory('RevealFactory', function(){

    return {

        setSections: function(sections){
            setTimeout(function(){
                Reveal.initialize({
                    controls: true,
                    progress: true,
                    history: true,
                    center: true,

                    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
                    transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

                    // Optional libraries used to extend on reveal.js
                    dependencies: [
                        { src: 'scripts/libs/classList.js', condition: function() { return !document.body.classList; } },
                        { src: 'scripts/libs/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                        { src: 'scripts/libs/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                        { src: 'scripts/libs/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
                        { src: 'scripts/libs/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
                        { src: 'scripts/libs/notes.js', async: true, condition: function() { return !!document.body.classList; } }
                    ]
                });
            }, 200);
        },

        navigateLeft: function(){
            Reveal.navigateLeft();
        },

        navigate: function(id){
            Reveal.slide(id);
        },

        getCurrentSlide: function(){
            return Reveal.getIndices().h;
        },

        navigateRight: function(){
            Reveal.navigateRight();
        }

    };

});