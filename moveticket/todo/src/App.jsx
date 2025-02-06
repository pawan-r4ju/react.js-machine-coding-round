import React, { useState } from 'react';
import './App.css';

// Sample movie data
const movie = {
  title: 'Avengers: Endgame',
  totalSeats: 30, // Total seats in the cinema
  rows: 5, // Number of rows
  cols: 6, // Number of columns
};

function App() {
  // Initializing the seats state
  const [seats, setSeats] = useState(generateSeats(movie.rows, movie.cols));

  // Function to generate seats grid
  function generateSeats(rows, cols) {
    let seatArr = [];
    for (let i = 0; i < rows; i++) {
      let rowSeats = [];
      for (let j = 0; j < cols; j++) {
        rowSeats.push({ id: `${i}-${j}`, booked: false });
      }
      seatArr.push(rowSeats);
    }
    return seatArr;
  }

  // Handle seat selection and booking
  const handleSeatClick = (rowIndex, colIndex) => {
    setSeats((prevSeats) => {
      const updatedSeats = [...prevSeats];
      const seat = updatedSeats[rowIndex][colIndex];

      // Toggle booking state
      if (!seat.booked) {
        seat.booked = true; // Mark as booked
      } else {
        seat.booked = false; // Unbook
      }

      return updatedSeats;
    });
  };

  // Display seat grid
  const renderSeats = () => {
    return seats.map((row, rowIndex) => (
      <div key={rowIndex} className="flex justify-center space-x-2 mb-4">
        {row.map((seat, colIndex) => (
          <button
            key={seat.id}
            className={`w-12 h-12 rounded-md ${seat.booked ? 'bg-red-500' : 'bg-green-400'} text-white font-bold hover:opacity-75`}
            onClick={() => handleSeatClick(rowIndex, colIndex)}
          >
            {seat.booked ? 'X' : 'O'}
          </button>
        ))}
      </div>
    ));
  };

  // Count the total booked seats
  const getBookedSeatsCount = () => {
    let count = 0;
    seats.forEach((row) => row.forEach((seat) => count += seat.booked ? 1 : 0));
    return count;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
      <h1 className="text-3xl font-semibold mb-4">{movie.title}</h1>
      <h3 className="text-xl mb-6">Available Seats: {movie.totalSeats - getBookedSeatsCount()} / {movie.totalSeats}</h3>
      <div className="seat-layout mb-6">
        {renderSeats()}
      </div>
      <button
        className="px-6 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
        disabled={getBookedSeatsCount() === 0}
        onClick={() => alert(`You have successfully booked ${getBookedSeatsCount()} seats!`)}
      >
        Book Tickets
      </button>
    </div>
  );
}

export default App;
