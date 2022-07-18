import { useState, useEffect } from "react";

function App() {
  
  return (
    <div className="h-full p-8 text-slate-800 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-center text-5xl mb-4 font-display text-white">
        Tic Tac Toe
      </h1>
      <div>
        <div className="grid grid-cols-3 gap-3 mx-auto w-96">ччччччч</div>

        <div className="mx-auto w-96 text-2xl text-serif">
          Player X wins: Player O wins
        </div>
      </div>
    </div>
  );
}

export default App;
