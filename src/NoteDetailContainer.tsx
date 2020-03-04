import React from 'react';
import { useRouter } from 'next/router';
import useApi from './useApi';
import { Note, makeGetNote } from './requests';
import NoteDetail from './components/NoteDetail';

const NoteDetailContainer: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const numId = typeof id === 'string' ? parseInt(id, 10) : 0;
  const [result] = useApi<Note>(...makeGetNote(numId));

  return <NoteDetail result={result} />;
};

export default NoteDetailContainer;
