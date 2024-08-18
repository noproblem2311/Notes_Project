import React, { useEffect, useState } from 'react';
import { getNotes } from '../services/noteService';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Paper,
  Box,
} from '@mui/material';

const NoteList: React.FC = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await getNotes();
      setNotes(response.data);
    };

    fetchNotes();
  }, []);

  return (
    <Container maxWidth="md">
      <Box mt={4} mb={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Notes
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/notes/create"
          sx={{ mb: 2 }}
        >
          Create New Note
        </Button>
        <Paper elevation={3}>
          <List>
            {notes.map((note: { id: string; title: string }) => (
              <ListItem
                key={note.id}
                button
                component={Link}
                to={`/notes/${note.id}`}
                sx={{ padding: '10px 20px' }}
              >
                <ListItemText primary={note.title} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Container>
  );
};

export default NoteList;
