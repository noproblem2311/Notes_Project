import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNote } from '../services/noteService';
import { Container, TextField, Button, Typography } from '@mui/material';

const NoteCreate: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createNote({ title, content });
    navigate('/');
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Create New Note
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
          Create Note
        </Button>
      </form>
    </Container>
  );
};

export default NoteCreate;
