import { Router } from 'express';

export const loadMessagesRouter = Router();

function LoadMessagesController() {

  const responseBackend = {
    "messages": [
      {
        "img": "img_55555",
        "time": "10:55",
        "sent": false,
      },
      {
        "msg": "bom dia, como você está?",
        "time": "10:58",
        "sent": false,
      },
      {
        "msg": "To legal, e você?",
        "time": "11:00",
        "sent": true,
      },
      {
        "msg": "Legal também. Me manda o link lá do git",
        "time": "11:10",
        "sent": false,
      },
      {
        "msg": "https://github.com/JuniorrMacedo/Whatsapp-clone",
        "isLink": true,
        "time": "11:15",
        "sent": true,
      },
      {
        "msg": "Ficou animal, obrigado!",
        "time": "13:15",
        "sent": false,
      },
    ]
  };

  const messages = responseBackend.messages;
  
  return messages;
}

loadMessagesRouter.get('/', (request, response) =>{
  return response.json(LoadMessagesController());
});

