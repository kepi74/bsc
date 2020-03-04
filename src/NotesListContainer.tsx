import React from 'react';
import useApi from './useApi';
import { Note, makeGetNotes } from './requests';
import NotesList from './components/NotesList';

const NotesListContainer: React.FC = () => {
  const [result] = useApi<Note[]>(...makeGetNotes());
  return <NotesList result={result} />;
};

export default NotesListContainer;
