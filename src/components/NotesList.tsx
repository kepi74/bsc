import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Alert, List } from 'antd';
import Link from 'next/link';
import { TFunction } from 'i18next';
import { ApiResponse } from '../useApi';
import { Note } from '../requests';
import assertNever from '../assertNever';

const renderItem = (t: TFunction) => (item: Note) => (
  <List.Item actions={[<Link href={`/detail/${item.id}`}>{t('detail')}</Link>]}>
    <List.Item.Meta title={item.id} description={item.title} />
  </List.Item>
);

export interface NotesListProps {
  result: ApiResponse<Note[]>;
}

const NotesList: React.FC<NotesListProps> = ({ result }) => {
  const { t } = useTranslation();
  switch (result.type) {
    case 'NoData':
    case 'Loading':
      return <Typography.Text>{t('loading')}</Typography.Text>;
    case 'Data':
      return (
        <List
          itemLayout="horizontal"
          dataSource={result.data}
          renderItem={renderItem(t)}
        />
      );
    case 'Error':
      return <Alert message={result.message} type="error" />;
    default:
      return assertNever(result);
  }
};

export default NotesList;
