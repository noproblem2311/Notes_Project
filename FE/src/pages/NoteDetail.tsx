import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getNote, deleteNote } from '../services/noteService';
import {
  Container,
  Typography,
  Button,
  Paper,
  Box,
} from '@mui/material';

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
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          {note.title}
        </Typography>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="body1" gutterBottom>
            {note.content}
          </Typography>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={`/notes/edit/${id}`}
            >
              Edit Note
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDelete}
            >
              Delete Note
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              to="/"
            >
              Back
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default NoteDetail;
