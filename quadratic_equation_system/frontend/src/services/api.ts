import axios from 'axios';
import { Equation, EquationInput, CalculateResponse } from '../types/Equation';

const API_BASE_URL = 'https://work-1-vbprwaewdegzdjuo.prod-runtime.all-hands.dev/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const equationAPI = {
  // Lấy tất cả phương trình
  getAll: async (): Promise<Equation[]> => {
    const response = await api.get('/equations/');
    return response.data;
  },

  // Tạo phương trình mới
  create: async (equation: EquationInput): Promise<Equation> => {
    const response = await api.post('/equations/', equation);
    return response.data;
  },

  // Cập nhật phương trình
  update: async (id: number, equation: EquationInput): Promise<Equation> => {
    const response = await api.put(`/equations/${id}/`, equation);
    return response.data;
  },

  // Xóa phương trình
  delete: async (id: number): Promise<void> => {
    await api.delete(`/equations/${id}/`);
  },

  // Tính toán không lưu
  calculate: async (equation: EquationInput): Promise<CalculateResponse> => {
    const response = await api.post('/equations/calculate/', equation);
    return response.data;
  },
};