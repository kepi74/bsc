export type ApiRequest = [RequestInfo, RequestInit | undefined];

export interface Note {
  id: number;
  title: string;
}

const API_URL = 'http://private-9aad-note10.apiary-mock.com';

export const makeGetNotes = (): ApiRequest => [`${API_URL}/notes`, undefined];

export const makeGetNote = (id: number): ApiRequest => [
  `${API_URL}/notes/${id}`,
  undefined,
];

export const makeCreateNote = (title: string) => [
  `${API_URL}/notes`,
  { method: 'POST', body: { title } },
];

export const makeUpdateNote = (id: number, title: string) => [
  `${API_URL}/notes/${id}`,
  { method: 'PUT', body: { title } },
];

export const makeDeleteNote = (id: number) => [
  `${API_URL}/notes/${id}`,
  { method: 'DELETE' },
];
