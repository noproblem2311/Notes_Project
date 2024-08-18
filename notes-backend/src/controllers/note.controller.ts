import { Request, Response } from 'express';
import { AppDataSource } from '../config/ormconfig';
import { Notes } from '../entities/Notes';

const noteRepository = AppDataSource.getRepository(Notes);

export const getAllNotes = async (req: Request, res: Response) => {
  const notes = await noteRepository.find();
  res.json(notes);
};

export const getNoteById = async (req: Request, res: Response) => {
  const note = await noteRepository.findOneBy({ id: parseInt(req.params.id) });
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
};

export const createNote = async (req: Request, res: Response) => {
  const newNote = noteRepository.create(req.body);
  const savedNote = await noteRepository.save(newNote);
  res.status(201).json(savedNote);
};

export const updateNote = async (req: Request, res: Response) => {
  const note = await noteRepository.findOneBy({ id: parseInt(req.params.id) });
  if (note) {
    noteRepository.merge(note, req.body);
    const updatedNote = await noteRepository.save(note);
    res.json(updatedNote);
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  const result = await noteRepository.delete({ id: parseInt(req.params.id) });
  if (result.affected) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
};
