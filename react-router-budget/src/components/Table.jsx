//component Import
import ExpenseItem from "./ExpenseItem";

const Table = ({ expenses }) => {
  return (
    <div className="table">
      <div>
        <thead>
          <tr>
            {["Name", "Amount", "Date", "Budget", ""].map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>{<ExpenseItem expense={expense} />}</tr>
          ))}
        </tbody>
      </div>
    </div>
  );
};

export default Table;
