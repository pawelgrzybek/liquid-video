# Liquid video

Super easy script to make your `iframe` or `embed` responsive / liquid. To use it grab a copy of minified file and instantiate a new LiqudVideo object passing your query as an argument. It doesn't require any other dependencies like jQuery and it super lightweight - only 357B minified and around 1kb unminified.

```html
<script src="js/liquid-video.min.js"></script>
<script>
  var LiquidVideo = new LiquidVideo(document.querySelectorAll('.wrap iframe'));
</script>
```

[Example on Codepen](http://codepen.io/pawelgrzybek/pen/vGxqaq)
