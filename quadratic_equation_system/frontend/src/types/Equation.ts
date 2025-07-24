export interface Equation {
  id: number;
  a: string;
  b: string;
  c: string;
  result: string;
  created_at: string;
  updated_at: string;
}

export interface EquationInput {
  a: number;
  b: number;
  c: number;
}

export interface CalculateResponse {
  a: number;
  b: number;
  c: number;
  result: string;
}