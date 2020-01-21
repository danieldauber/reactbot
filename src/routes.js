import { Router } from 'express';
import ChatController from './app/controllers/ChatController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.send({ Hello: 'there' });
});

routes.post('/api/df_text_query', ChatController.textQuery);

routes.post('/api/df_event_query', ChatController.eventQuery);

export default routes;
