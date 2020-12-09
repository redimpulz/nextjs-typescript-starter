const { https } = require('firebase-functions');
const { default: next } = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: '.next' } });
const handle = app.getRequestHandler();

exports.nextApp = https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl);
  return app.prepare().then(() => handle(req, res));
});
