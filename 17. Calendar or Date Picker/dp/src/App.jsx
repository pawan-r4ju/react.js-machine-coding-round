import { useState } from "react";
import "./App.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() - 1))
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.setMonth(currentMonth.getMonth() + 1))
    );
  };

  const handleDateClick = (day) => {
    setSelectedDate(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    );
  };

  const renderDays = () => {
    const days = [];
    const daysInCurrentMonth = daysInMonth(
      currentMonth.getMonth(),
      currentMonth.getFullYear()
    );
    const firstDay = firstDayOfMonth(
      currentMonth.getMonth(),
      currentMonth.getFullYear()
    );

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let day = 1; day <= daysInCurrentMonth; day++) {
      days.push(
        <div
          key={day}
          className={`day p-2 text-center cursor-pointer ${
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentMonth.getMonth()
              ? "bg-blue-500 text-white rounded-full"
              : ""
          }`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Date Picker</h1>
      <div className="border border-gray-300 rounded-lg p-4 w-80">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrevMonth}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            &lt;
          </button>
          <div>
            {currentMonth.toLocaleString("default", { month: "long" })}{" "}
            {currentMonth.getFullYear()}
          </div>
          <button
            onClick={handleNextMonth}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            &gt;
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">{renderDays()}</div>
      </div>
      {selectedDate && (
        <div className="mt-4">
          <p>Selected Date: {selectedDate.toDateString()}</p>
        </div>
      )}
    </div>
  );
}

export default App;
