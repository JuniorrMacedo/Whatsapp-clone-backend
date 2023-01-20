import { Router } from "express";
import { loadContactsRouter } from "./loadContacts.routes";
import { loadMessagesRouter } from "./loadMessages.routes";

export const routes = Router();

routes.use('/user/:userId/contacts', loadContactsRouter);
routes.use('/user/:userId/messages/:contactId', loadMessagesRouter);
