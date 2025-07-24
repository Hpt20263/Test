import React, { useState } from 'react';
import { EquationInput } from '../types/Equation';
import './EquationForm.css';

interface EquationFormProps {
  onCalculate: (equation: EquationInput) => void;
  onAdd: (equation: EquationInput) => void;
  isLoading?: boolean;
}

const EquationForm: React.FC<EquationFormProps> = ({ onCalculate, onAdd, isLoading = false }) => {
  const [a, setA] = useState<string>('');
  const [b, setB] = useState<string>('');
  const [c, setC] = useState<string>('');

  const handleCalculate = () => {
    const equation: EquationInput = {
      a: parseFloat(a) || 0,
      b: parseFloat(b) || 0,
      c: parseFloat(c) || 0,
    };
    onCalculate(equation);
  };

  const handleAdd = () => {
    const equation: EquationInput = {
      a: parseFloat(a) || 0,
      b: parseFloat(b) || 0,
      c: parseFloat(c) || 0,
    };
    onAdd(equation);
    // Reset form after adding
    setA('');
    setB('');
    setC('');
  };

  const isFormValid = a !== '' && b !== '' && c !== '';

  return (
    <div className="equation-form">
      <div className="form-header">
        <div className="calculator-icon">🧮</div>
        <h1>Giải phương trình bậc 2</h1>
      </div>
      
      <div className="form-inputs">
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="a"
          className="input-field"
          disabled={isLoading}
        />
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="b"
          className="input-field"
          disabled={isLoading}
        />
        <input
          type="number"
          value={c}
          onChange={(e) => setC(e.target.value)}
          placeholder="c"
          className="input-field"
          disabled={isLoading}
        />
        
        <div className="button-group">
          <button
            onClick={handleAdd}
            disabled={!isFormValid || isLoading}
            className="btn btn-add"
          >
            + Thêm
          </button>
          <button
            onClick={handleCalculate}
            disabled={!isFormValid || isLoading}
            className="btn btn-calculate"
          >
            🧮 Tính toán
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquationForm;