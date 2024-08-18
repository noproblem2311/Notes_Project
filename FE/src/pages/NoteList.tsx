import React, { useEffect, useState } from 'react';
import { getNotes } from '../services/noteService';
import { Link } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

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
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Note List
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/notes/create">
        Create New Note
      </Button>
      <List>
        {notes.map((note: { id: string; title: string }) => (
          <ListItem key={note.id} button component={Link} to={`/notes/${note.id}`}>
            <ListItemText primary={note.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default NoteList;
