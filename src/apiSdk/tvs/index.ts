import axios from 'axios';
import queryString from 'query-string';
import { TvInterface, TvGetQueryInterface } from 'interfaces/tv';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTvs = async (query?: TvGetQueryInterface): Promise<PaginatedInterface<TvInterface>> => {
  const response = await axios.get('/api/tvs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTv = async (tv: TvInterface) => {
  const response = await axios.post('/api/tvs', tv);
  return response.data;
};

export const updateTvById = async (id: string, tv: TvInterface) => {
  const response = await axios.put(`/api/tvs/${id}`, tv);
  return response.data;
};

export const getTvById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/tvs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTvById = async (id: string) => {
  const response = await axios.delete(`/api/tvs/${id}`);
  return response.data;
};
