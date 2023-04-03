import express from 'express';
import { getAllEvents, createNewEvent, getOneEvent, deleteOneEvent, updatOneEvent } from '../controllers/eventController.js'

const router = express.Router();

router.get('/', getAllEvents);

router.get('/:id', getOneEvent);

router.post('/', createNewEvent);

router.delete('/', deleteOneEvent);

router.patch('/', updatOneEvent);

export default router;