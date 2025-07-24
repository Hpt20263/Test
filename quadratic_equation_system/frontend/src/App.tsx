import React, { useState, useEffect } from 'react';
import EquationForm from './components/EquationForm';
import EquationTable from './components/EquationTable';
import { equationAPI } from './services/api';
import { Equation, EquationInput, CalculateResponse } from './types/Equation';
import './App.css';

function App() {
  const [equations, setEquations] = useState<Equation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [calculateResult, setCalculateResult] = useState<string>('');

  // Load equations on component mount
  useEffect(() => {
    loadEquations();
  }, []);

  const loadEquations = async () => {
    try {
      setIsLoading(true);
      const data = await equationAPI.getAll();
      setEquations(data);
    } catch (error) {
      console.error('Error loading equations:', error);
      alert('Lỗi khi tải danh sách phương trình');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCalculate = async (equation: EquationInput) => {
    try {
      setIsLoading(true);
      const result = await equationAPI.calculate(equation);
      setCalculateResult(`Kết quả: ${result.result}`);
    } catch (error) {
      console.error('Error calculating equation:', error);
      alert('Lỗi khi tính toán phương trình');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdd = async (equation: EquationInput) => {
    try {
      setIsLoading(true);
      await equationAPI.create(equation);
      await loadEquations(); // Reload the list
      setCalculateResult(''); // Clear calculate result
    } catch (error) {
      console.error('Error adding equation:', error);
      alert('Lỗi khi thêm phương trình');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async (id: number, equation: EquationInput) => {
    try {
      setIsLoading(true);
      await equationAPI.update(id, equation);
      await loadEquations(); // Reload the list
    } catch (error) {
      console.error('Error updating equation:', error);
      alert('Lỗi khi cập nhật phương trình');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      setIsLoading(true);
      await equationAPI.delete(id);
      await loadEquations(); // Reload the list
    } catch (error) {
      console.error('Error deleting equation:', error);
      alert('Lỗi khi xóa phương trình');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <EquationForm
          onCalculate={handleCalculate}
          onAdd={handleAdd}
          isLoading={isLoading}
        />
        
        {calculateResult && (
          <div className="calculate-result">
            {calculateResult}
          </div>
        )}
        
        <EquationTable
          equations={equations}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default App;
