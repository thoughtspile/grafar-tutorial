const fs = require('fs');
const path = require('path');

const hbsDir = './hbs/';
const outDir = './html/';

const template = (locals) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>${ locals.name || locals.scriptName }</title>
      <style>
        .panel {
          width: 400px;
          height: 400px;
          display: inline-block;
        }
      </style>
    </head>
    <body>
      ${ locals.body }
      <script src='../../lib/grafar.js'></script>
      <script src='../../build/${ locals.scriptPath }'></script>
    </body>
  </html>
`;

const pathList = [];
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}
fs.readdirSync(hbsDir).forEach(dir => {
  if (!fs.existsSync(path.join(outDir, dir))) {
    fs.mkdirSync(path.join(outDir, dir));
  }
  fs.readdirSync(path.join(hbsDir, dir)).forEach(file => {
    const body = fs.readFileSync(path.join(hbsDir, dir, file));
    const rawName = file.replace(/\.[^.]*$/, '');
    const html = template({
      scriptName: file,
      scriptPath: path.join(dir, rawName + '.js'),
      body
    });
    pathList.push({ name: rawName, path: path.join(outDir, dir, file) });
    fs.writeFileSync(path.join(outDir, dir, file), html);
  });
});

fs.writeFileSync('./index.html', template({
  body: pathList.map(item => `<a href='${ item.path }'>${ item.name }</a>`).join('<br>')
}));
