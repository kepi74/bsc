import * as React from 'react';
import { NextPage } from 'next';
import NotesListContainer from '../src/NotesListContainer';
import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';

const IndexPage: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography.Title>{t('notes-list-title')}</Typography.Title>
      <NotesListContainer />
    </>
  );
};

export default IndexPage;
