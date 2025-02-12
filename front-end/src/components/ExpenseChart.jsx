import PropTypes from "prop-types"; // Import PropTypes
import { Line } from "react-chartjs-2";
import "chart.js/auto";

function ExpenseChart({ expenses }) {
  // Handle case with no expenses
  if (expenses.length === 0) {
    return <p>No expenses to display.</p>;
  }

  // Extract dates and amounts from expenses
  const dates = expenses.map((expense) =>
    new Date(expense.date).toLocaleDateString()
  );
  const amounts = expenses.map((expense) => expense.amount);

  // Define chart data
  const data = {
    labels: dates,
    datasets: [
      {
        label: "Expenses Over Time",
        data: amounts,
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount",
        },
      },
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

// PropTypes validation
ExpenseChart.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExpenseChart;
