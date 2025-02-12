/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { getExpenses, addExpense, updateExpense, deleteExpense } from "../services/api";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseChart from "../components/ExpenseChart";
import "./Dashboard.css";

function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState(null);

  const getCurrentMonthExpenses = (expenses) => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    return expenses.filter((expense) => {
      const expenseDate = new Date(expense.date);
      return (
        expenseDate.getMonth() === currentMonth &&
        expenseDate.getFullYear() === currentYear
      );
    });
  };

  const fetchExpenses = async () => {
    try {
      const data = await getExpenses(startDate, endDate);
      setError(data.length === 0 ? "No data available." : null);
      const sortedExpenses = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setExpenses(sortedExpenses);
      setFilteredExpenses(!startDate && !endDate ? getCurrentMonthExpenses(sortedExpenses) : filterByDate(sortedExpenses));
    } catch (error) {
      setError("Failed to fetch expenses.");
      console.error("Failed to fetch expenses:", error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, [startDate, endDate]);

  const filterByDate = (expensesList) => {
    return expensesList.filter((expense) => {
      const expenseDate = new Date(expense.date);
      return (
        (!startDate || expenseDate >= new Date(startDate)) &&
        (!endDate || expenseDate <= new Date(endDate))
      );
    });
  };

  const handleAddExpense = async (expense) => {
    try {
      const newExpense = await addExpense(expense);
      const updatedExpenses = [...expenses, newExpense];
      setExpenses(updatedExpenses);
      setFilteredExpenses(!startDate && !endDate ? getCurrentMonthExpenses(updatedExpenses) : filterByDate(updatedExpenses));
    } catch (error) {
      console.error("Failed to add expense:", error);
    }
  };

  const handleUpdateExpense = async (id, updatedExpense) => {
    try {
      const updatedData = await updateExpense(id, updatedExpense);
      const updatedList = expenses.map(expense => expense.id === id ? updatedData : expense);
      setExpenses(updatedList);
      setFilteredExpenses(!startDate && !endDate ? getCurrentMonthExpenses(updatedList) : filterByDate(updatedList));
    } catch (error) {
      console.error("Failed to update expense:", error);
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      await deleteExpense(id);
      const updatedList = expenses.filter(expense => expense.id !== id);
      setExpenses(updatedList);
      setFilteredExpenses(!startDate && !endDate ? getCurrentMonthExpenses(updatedList) : filterByDate(updatedList));
    } catch (error) {
      console.error("Failed to delete expense:", error);
    }
  };

  return (
    <div className="dashboard">
      <div className="main-content">
        <header>
          <h1 className="text-2xl font-bold text-gray-800 ">Personal Finance Tracker</h1>
        </header>
        <ExpenseForm onAddExpense={handleAddExpense} />
        <div className="my-4">
          <h2>Filter</h2>
          <label className="block mb-2">
            Start Date:
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="ml-2 p-1 border border-gray-300 rounded" />
          </label>
          <label className="block mb-2">
            End Date:
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="ml-2 p-1 border border-gray-300 rounded" />
          </label>
          <button onClick={fetchExpenses} className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Filter</button>
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <ExpenseList expenses={filteredExpenses} onExpenseUpdated={handleUpdateExpense} onExpenseDeleted={handleDeleteExpense} />
      </div>
      <div className="chart-container">
        <ExpenseChart expenses={filteredExpenses} />
      </div>
    </div>
  );
}

export default Dashboard;
