import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote, deleteNote } from '../services/noteService';
import { Container, Typography, Button } from '@mui/material';

const NoteDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [note, setNote] = useState<{ title: string; content: string } | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      const response = await getNote(id!);
      setNote(response.data);
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    await deleteNote(id!);
    navigate('/');
  };

  if (!note) return <div>Loading...</div>;

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {note.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {note.content}
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Delete Note
      </Button>
      <Button variant="contained" color="primary" onClick={() => navigate(`/notes/edit/${id}`)}>
        Edit Note
      </Button>
    </Container>
  );
};

export default NoteDetail;
