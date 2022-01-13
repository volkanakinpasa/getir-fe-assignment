const path = require('path');

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'items.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
router.render = function (req, res) {
  console.log(res.locals.data.length);

  const array = res.locals.data;
  const brands = {};

  for (let i = 0; i < array.length; i++) {
    brands[array[i].manufacturer] = (brands[array[i].manufacturer] || 0) + 1;
  }

  const data = res.locals.data.splice(
    req.query.offset || 0,
    (req.query.size || 16) + 1
  );
  res.jsonp({ data, brands });
};

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  console.log(req.query);
  // Continue to JSON Server router
  next();
});

// Use default router
server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running');
});
