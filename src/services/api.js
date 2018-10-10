import  { get, post } from './request';

const URL = '/api';
const ESSAYS_URL = `${URL}/essays`;

export const getAllEssays = () => get(`${ESSAYS_URL}`);
export const getOneEssay = id => get(`${ESSAYS_URL}/${id}`);

export const postEssay = essay => {
  post(ESSAYS_URL, essay);
};