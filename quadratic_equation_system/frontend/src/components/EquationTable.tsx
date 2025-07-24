import React, { useState } from 'react';
import { Equation, EquationInput } from '../types/Equation';
import './EquationTable.css';

interface EquationTableProps {
  equations: Equation[];
  onEdit: (id: number, equation: EquationInput) => void;
  onDelete: (id: number) => void;
  isLoading?: boolean;
}

const EquationTable: React.FC<EquationTableProps> = ({ 
  equations, 
  onEdit, 
  onDelete, 
  isLoading = false 
}) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValues, setEditValues] = useState<EquationInput>({ a: 0, b: 0, c: 0 });

  const handleEditClick = (equation: Equation) => {
    setEditingId(equation.id);
    setEditValues({
      a: parseFloat(equation.a),
      b: parseFloat(equation.b),
      c: parseFloat(equation.c),
    });
  };

  const handleSaveEdit = () => {
    if (editingId) {
      onEdit(editingId, editValues);
      setEditingId(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleDeleteClick = (id: number) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa phương trình này?')) {
      onDelete(id);
    }
  };

  if (equations.length === 0) {
    return (
      <div className="equation-table-container">
        <div className="empty-state">
          <div className="empty-icon">📊</div>
          <p>Chưa có phương trình nào được lưu</p>
        </div>
      </div>
    );
  }

  return (
    <div className="equation-table-container">
      <table className="equation-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>a</th>
            <th>b</th>
            <th>c</th>
            <th>Kết quả</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {equations.map((equation) => (
            <tr key={equation.id}>
              <td>{equation.id}</td>
              <td>
                {editingId === equation.id ? (
                  <input
                    type="number"
                    value={editValues.a}
                    onChange={(e) => setEditValues({ ...editValues, a: parseFloat(e.target.value) || 0 })}
                    className="edit-input"
                  />
                ) : (
                  parseFloat(equation.a)
                )}
              </td>
              <td>
                {editingId === equation.id ? (
                  <input
                    type="number"
                    value={editValues.b}
                    onChange={(e) => setEditValues({ ...editValues, b: parseFloat(e.target.value) || 0 })}
                    className="edit-input"
                  />
                ) : (
                  parseFloat(equation.b)
                )}
              </td>
              <td>
                {editingId === equation.id ? (
                  <input
                    type="number"
                    value={editValues.c}
                    onChange={(e) => setEditValues({ ...editValues, c: parseFloat(e.target.value) || 0 })}
                    className="edit-input"
                  />
                ) : (
                  parseFloat(equation.c)
                )}
              </td>
              <td className="result-cell">
                {equation.result === 'Vô nghiệm' ? (
                  <span className="no-solution">Vô nghiệm</span>
                ) : (
                  <span className="solution">{equation.result}</span>
                )}
              </td>
              <td>
                <div className="action-buttons">
                  {editingId === equation.id ? (
                    <>
                      <button
                        onClick={handleSaveEdit}
                        disabled={isLoading}
                        className="btn btn-save"
                        title="Lưu"
                      >
                        ✓
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        disabled={isLoading}
                        className="btn btn-cancel"
                        title="Hủy"
                      >
                        ✕
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEditClick(equation)}
                        disabled={isLoading}
                        className="btn btn-edit"
                        title="Sửa"
                      >
                        ✏️ Sửa
                      </button>
                      <button
                        onClick={() => handleDeleteClick(equation.id)}
                        disabled={isLoading}
                        className="btn btn-delete"
                        title="Xóa"
                      >
                        🗑️ Xóa
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquationTable;