import ChatTextQueryService from '../services/ChatTextQueryService';
import ChatEventQueryService from '../services/ChatEventQueryService';

class ChatController {
  async textQuery(req, res) {

    const result = await ChatTextQueryService.run({
      text: req.body.text,
    })

    res.json(result);

  }

  async eventQuery(req, res) {

    const result = await ChatEventQueryService.run({
      event: req.body.event,
    })

    res.json(result);

  }

}

export default new ChatController();