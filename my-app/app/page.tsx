"use client";

import { useState } from 'react';
import './globals.css';
type Movie = {
  id: number;
  title: string;
  description: string;
  seats: number;
};

const movies: Movie[] = [
  { id: 1, title: 'Furiosa 2', description: 'An exciting movie.', seats: 50 },
  { id: 2, title: 'The Minions 2', description: 'Another great movie.', seats: 30 },
];

export default function CinemaBooking() {
  const [view, setView] = useState<'home' | 'movies' | 'detail' | 'booking'>('home');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [seats, setSeats] = useState(1);

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
    setView('detail');
  };

  const handleBooking = () => {
    alert(`You have booked ${seats} seat(s) for ${selectedMovie?.title}!`);
    setView('home');
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-10">
      {view === 'home' && (
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-extrabold mb-6 text-blue-600">Cinema Booking System</h1>
          <button
            onClick={() => setView('movies')}
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            Book a Movie
          </button>
        </div>
      )}

      {view === 'movies' && (
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Available Movies</h2>
          <ul className="space-y-6">
            {movies.map((movie) => (
              <li key={movie.id} className="border-b pb-4">
                <button
                  onClick={() => handleSelectMovie(movie)}
                  className="text-2xl text-blue-600 hover:underline"
                >
                  {movie.title}
                </button>
                <p className="text-gray-600">{movie.description}</p>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setView('home')}
            className="mt-4 bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            Back to Home
          </button>
        </div>
      )}

      {view === 'detail' && selectedMovie && (
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{selectedMovie.title}</h2>
          <p className="text-lg text-gray-700">{selectedMovie.description}</p>
          <p className="text-lg font-semibold text-gray-800 mt-2">Available Seats: {selectedMovie.seats}</p>
          <button
            onClick={() => setView('booking')}
            className="mt-6 bg-blue-600 text-white hover:bg-blue-700"
          >
            Book Now
          </button>
          <button
            onClick={() => setView('movies')}
            className="mt-4 bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            Back to Movies
          </button>
        </div>
      )}

      {view === 'booking' && selectedMovie && (
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Complete Your Booking</h2>
          <label className="block mb-4">
            Number of Seats:
            <input
              type="number"
              value={seats}
              onChange={(e) => setSeats(parseInt(e.target.value))}
              className="ml-2 mt-2 p-2 border border-gray-300 rounded"
              min="1"
              max={selectedMovie.seats}
            />
          </label>
          <button
            onClick={handleBooking}
            className="bg-green-600 text-white hover:bg-green-700"
          >
            Confirm Booking
          </button>
          <button
            onClick={() => setView('detail')}
            className="mt-4 bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            Back to Movie Details
          </button>
        </div>
      )}
    </div>
  );
}
