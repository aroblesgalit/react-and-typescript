import React from 'react';
import './App.css';

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string]; //tuple

let printName: (name: string) => never; //void vs never

// Object
// type Person = {
//   name: string;
//   age?: number; // Optional
// };

// let person: Person = {
//   name: 'alvin',
//   // age: 36
// }

// let lotsOfPeople: Person[];

let personName: unknown;

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
