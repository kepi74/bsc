import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Alert, Card } from 'antd';
import { ApiResponse } from '../useApi';
import { Note } from '../requests';
import assertNever from '../assertNever';

export interface NoteDetailProps {
  result: ApiResponse<Note>;
}

const NoteDetail: React.FC<NoteDetailProps> = ({ result }) => {
  const { t } = useTranslation();
  switch (result.type) {
    case 'NoData':
    case 'Loading':
      return <Typography.Text>{t('loading')}</Typography.Text>;
    case 'Data':
      return (
        <Card>
          <Card.Meta title={result.data.id} description={result.data.title} />
        </Card>
      );
    case 'Error':
      return <Alert message={result.message} type="error" />;
    default:
      return assertNever(result);
  }
};

export default NoteDetail;
