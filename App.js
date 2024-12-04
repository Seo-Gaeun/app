import React, { useState } from 'react';
// import ExpenseList from './components/ExpenseList';  // MonthFilter.js에 다 포함돼서 ExpenseList.js 별도 필요 없음
import ExpenseForm from './components/ExpenseForm';
import MonthFilter from './components/MonthFilter';  //test
import TotalFilter from './components/TotalFilter';  //test

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectMonth, setSelectMonth] = useState(''); //test
  const [selectCategory, setSelectCategory] = useState(''); //test

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, { ...newExpense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter(expense => expense.id !== id));
  };


  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>지출 장부 프로그램</h1>

      <table border="1" style={{borderCollapse: 'collapse', width: '100%'}}>

        <caption><h2>Expense List</h2></caption>

        <thead style={{background: 'lightgray'}}>
          <th  style={{width: '10%'}}>
            날짜<br/>
            <select id='month_select' value={selectMonth} onChange={(e) => setSelectMonth(e.target.value)}>
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
          </th><th style={{width: '10%'}}>분류<br/>
            <select id='category_select' value={selectCategory} onChange={(e) => setSelectCategory(e.target.value)}>
              <option value="">전체</option>
              <option value="식비">식비</option>
              <option value="통신비">통신비</option>
              <option value="의료비">의료비</option>
              <option value="취미생활">취미생활</option>
              <option value="보험료">보험료</option>
            </select>
            </th><th>사용처</th><th style={{width: '20%'}}>금액</th><th style={{width: '5%'}}>삭제</th>
        </thead>
        
        <tbody>
          <MonthFilter expenses={expenses} selectMonth={selectMonth} selectCategory={selectCategory} deleteExpense={deleteExpense} />
        </tbody>

        <tfoot style={{background: 'lightgray'}}>
          <tr><th></th><th></th><th>Total</th><th>$ <TotalFilter expenses={expenses} selectMonth={selectMonth} selectCategory={selectCategory}/></th><th></th></tr>
        </tfoot>

      </table>
      
      <br/>
      <hr/>

      <ExpenseForm addExpense={addExpense} />
    </div>
  );
}

export default App;