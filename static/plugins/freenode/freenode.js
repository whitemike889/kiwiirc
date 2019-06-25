kiwi.plugin('freenode', function(kiwi, log) {
    kiwi.once('ready', function(event) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = "static/plugins/freenode/freenode.css";
        document.head.appendChild(link);
        console.debug('added');
    });
});
