import { Router } from 'express';

export const loadContactsRouter = Router();

function LoadContacts(){
  const responseBackend = {
    "contacts": [
      {
        "pp": "img_1111",
        "contact": "Maria",
        "telephone": "+55 75 9988-5544",
        "msg": "Ficou animal, obrigado!",
        "time": "13:15",
        "unreadMsgs": null,
      },
      {
        "pp": "img_22222",
        "contact": "Pedro",
        "telephone": "+55 75 9988-5544",
        "msg": "Fala, irmão!!",
        "time": "13:07",
        "unreadMsgs": null,
      }, {
        "pp": "img_33333",
        "contact": "João",
        "telephone": "+55 75 9988-5544",
        "msg": "Preciso falar com você, me liga!",
        "time": "13:00",
        "unreadMsgs": null,
      } 
    ]
  }

  const contacts = responseBackend.contacts;

  return contacts;
}

loadContactsRouter.get('/', (request, response) => {
  try {
    return response.json(LoadContacts());
  } finally {}
});
