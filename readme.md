# Madington dynamic ad loading script

### Development
Make changes in `index.js`. Build with `npm run build` or `node build`. Upload/deploy to `https://delivered-by-madington.com/internal/utils/adloader.js`.

### Usage
This script will load an iframe and set the `srcdoc` attribute (polyfilled for older browsers) pointing at the base URL (currently `https://delivered-by-madington.com/client/`) combined with the data attribute `data-ad`.
Example usage:

```
<div
  data-width="1000"
  data-height="300"
  data-ad="aller/kino/wp/index.html">
  <script src="https://delivered-by-madington.com/internal/utils/adloader.js"></script>
</div>
```

### Hint
Remember to use `<base href="">` or absolute href's in your creative.
