(function() {
  function displayNotification () {
    var opt = {
      type: "basic",
      title: "Primary Title222",
      message: "Primary message to display",
      iconUrl: "images/yo-logo.png"
    };

    chrome.notifications.create("TEST", opt, function () {
      console.log( 'asd' );
    });
  };

  $(document).ready(function() {
    Reveal.initialize({
      controls: false,
      progress: true,
      history: true,
      center: true,
      theme: Reveal.getQueryHash().theme,
      transition: Reveal.getQueryHash().transition || 'default',
      dependencies: [
        { src: 'bower_components/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'plugin/markdown/showdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
        { src: 'plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
      ]
    });

    $('#demoForNotification').click(displayNotification);

    $('#chromeapp-launcher-icon').click(Reveal.nextFragment);
  });

})();
