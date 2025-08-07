//component Import
import ExpenseItem from "./ExpenseItem";

const Table = ({ expenses, showBudget = true }) => {
  return (
    <div className="table">
      <div>
        <thead>
          <tr>
            {["Name", "Amount", "Date", showBudget ? "Budget" : "", ""].map(
              (i, index) => (
                <th key={index}>{i}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <ExpenseItem expense={expense} showBudget={showBudget} />
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
};

export default Table;
