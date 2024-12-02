import React, { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, { ...newExpense, id: Date.now() }]);
    setTotal((prevTotal) => prevTotal + newExpense.amount);
  };
  const deleteExpense = (id) => {
    const deleteamount = expenses.find(expense => expense.id === id);
    setExpenses((prevExpenses) => prevExpenses.filter(expense => expense.id !== id));
    setTotal((prevTotal) => prevTotal - deleteamount.amount);
  };


  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>지출 장부 프로그램</h1>
      <h2 style={{ marginBottom: 0, color: 'blue' }}>거래목록</h2>

      <table border="1" style={{borderCollapse: 'collapse', width: '100%'}}>

        <caption><h2>Expense List</h2></caption>

        <thead style={{background: 'lightgray'}}>
          <th  style={{width: '10%'}}>날짜</th><th>사용처</th><th style={{width: '20%'}}>금액</th><th style={{width: '5%'}}>삭제</th>
        </thead>

        <tbody>
          <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>
        </tbody>

        <tfoot style={{background: 'lightgray'}}>
          <tr><th></th><th>Total</th><th>$ {total}</th><th></th></tr>
        </tfoot>

      </table>
      
      <br/>
      <hr/>

      <h2 style={{ color: 'blue' }}>항목 추가</h2>
      <ExpenseForm addExpense={addExpense} />
    </div>
  );
}

export default App;