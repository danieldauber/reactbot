import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.send({ Hello: 'there' });
});

export default routes;
