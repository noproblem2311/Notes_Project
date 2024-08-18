import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteList from '../pages/NoteList';
import NoteCreate from '../pages/NoteCreate';
import NoteEdit from '../pages/NoteEdit';
import NoteDetail from '../pages/NoteDetail';

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<NoteList />} />
      <Route path="/notes/create" element={<NoteCreate />} />
      <Route path="/notes/edit/:id" element={<NoteEdit />} />
      <Route path="/notes/:id" element={<NoteDetail />} />
    </Routes>
  </Router>
);

export default AppRoutes;
