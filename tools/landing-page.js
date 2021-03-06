const package = require('../package.json');
console.log(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>${package.title}</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta
      name="description"
      content="${package.description}"
    />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <link rel="stylesheet" href="//unpkg.com/docsify/lib/themes/vue.css" />
  </head>
  <body>
    <div id="app"></div>
    <script>
      window.$docsify = {
        name: "${package.title}",
        repo: "https://github.com/AshKyd/murdoch-block",
        coverpage: false,
        themeColor: "#0000FF"
      };
    </script>
    <script src="//unpkg.com/docsify/lib/docsify.min.js"></script>
  </body>
</html>
`)