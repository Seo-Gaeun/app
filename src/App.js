import React, { useState } from 'react';
// import ExpenseList from './components/ExpenseList';  // MonthFilter.js에 다 포함돼서 ExpenseList.js 별도 필요 없음
import ExpenseForm from './components/ExpenseForm';
import MonthFilter from './components/MonthFilter';  //test

function App() {
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);
  const [selectMonth, setSelectMonth] = useState(''); //test

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, { ...newExpense, id: Date.now() }]);
    setTotal((prevTotal) => prevTotal + newExpense.amount);
  };

  const deleteExpense = (id) => {
    const deleteamount = expenses.find(expense => expense.id === id);
    setExpenses((prevExpenses) => prevExpenses.filter(expense => expense.id !== id));
    setTotal((prevTotal) => prevTotal - deleteamount.amount);
  };

  //GPT
  const monthChange = (event) =>{         //36번째 줄의 onChange={monthChange}
    setSelectMonth(event.target.value);   //select의 값이 바뀔 때마다 monthChange 실행
  };                                      //event.target.value는 select의 value 값을 selectMonth에 저장

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>지출 장부 프로그램</h1>
      
      <table border="1" style={{borderCollapse: 'collapse', width: '100%'}}>

        <caption><h2>Expense List</h2></caption>

        <thead style={{background: 'lightgray'}}>
          <th  style={{width: '10%'}}>
            날짜 &nbsp;
            <select id='month_select' value={selectMonth} onChange={monthChange}>
              <option value=''>전체</option>
              <option value='1'>1월</option>
              <option value='2'>2월</option>
              <option value='3'>3월</option>
              <option value='4'>4월</option>
              <option value='5'>5월</option>
              <option value='6'>6월</option>
              <option value='7'>7월</option>
              <option value='8'>8월</option>
              <option value='9'>9월</option>
              <option value='10'>10월</option>
              <option value='11'>11월</option>
              <option value='12'>12월</option>
            </select>  
          </th><th>사용처</th><th style={{width: '20%'}}>금액</th><th style={{width: '5%'}}>삭제</th>
        </thead>

        <tbody>
          <MonthFilter expenses={expenses} selectMonth={selectMonth} deleteExpense={deleteExpense} />
        </tbody>

        <tfoot style={{background: 'lightgray'}}>
          <tr><th></th><th>Total</th><th>$ {total}</th><th></th></tr>
        </tfoot>

      </table>
      
      <br/>
      <hr/>

      <ExpenseForm addExpense={addExpense} />
    </div>
  );
}

export default App;
