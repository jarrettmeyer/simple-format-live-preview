var SimpleFormatPreview = Class.create();

SimpleFormatPreview.prototype = {
    initialize: function(source, preview) {
        this.source = source;
        this.preview = preview;
        this.onKeyUp(); // to initialize the preview area        
        $(this.source).observe('keyup', this.onKeyUp.bind(this));
    },
    onKeyUp: function() {
        var content = $F(this.source).escapeHTML();
        content = content.replace(/^\s+|\s+$/g, '');
        if (content == '') {
            $(this.preview).hide();
            return;
        } else {
            $(this.preview).show();
        }
        content = content.replace(/\n{3,}/g, '\n\n');
        content = content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br/>');
        content = '<p>' + content + '</p>';
        $(this.preview).innerHTML = content;
    }
};