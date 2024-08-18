import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote, updateNote } from '../services/noteService';
import { Container, TextField, Button, Typography } from '@mui/material';

const NoteEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      const response = await getNote(id!);
      setTitle(response.data.title);
      setContent(response.data.content);
    };

    fetchNote();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateNote(id!, { title, content });
    navigate(`/notes/${id}`);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Edit Note
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          fullWidth
          margin="normal"
          required
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary">
          Update Note
        </Button>
      </form>
    </Container>
  );
};

export default NoteEdit;
