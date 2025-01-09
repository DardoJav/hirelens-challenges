import { Router } from 'express';
import { NoteController } from '../controllers/note.controller.js';
const router = Router();
const noteController = new NoteController();
router.post('/', noteController.create.bind(noteController));
router.put('/:id', noteController.update.bind(noteController));
router.delete('/:id', noteController.delete.bind(noteController));
router.get('/active/:userId', noteController.getActiveNotes); // Rutas para notas activas
router.get('/archived/:userId', noteController.getArchivedNotes);
router.post('/:id/category/:categoryId', noteController.addCategoryToNote.bind(noteController));
router.delete('/:id/category/:categoryId', noteController.removeCategoryFromNote.bind(noteController));
router.get('/by-category/:categoryId', noteController.getNotesByCategory.bind(noteController));
export default router;
