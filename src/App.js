
import React, { useState } from 'react';
import './App.css';

function App() {
  const [array, setArray] = useState([]);
  const [algorithm, setAlgorithm] = useState('bubble');

  const generateArray = () => {
    const newArr = Array.from({ length: 30 }, () => Math.floor(Math.random() * 250) + 20);
    setArray(newArr);
  };

  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

  const bubbleSort = async () => {
    const arr = [...array];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await sleep(50);
        }
      }
    }
  };

  const insertionSort = async () => {
    const arr = [...array];
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
        setArray([...arr]);
        await sleep(50);
      }
      arr[j + 1] = key;
      setArray([...arr]);
      await sleep(50);
    }
  };

  const selectionSort = async () => {
    const arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      setArray([...arr]);
      await sleep(50);
    }
  };

  const runSelectedSort = () => {
    if (algorithm === 'bubble') bubbleSort();
    else if (algorithm === 'insertion') insertionSort();
    else if (algorithm === 'selection') selectionSort();
  };

  return (
    <div className="App">
      <aside className="sidebar">
        <h2>DSA Topics</h2>
        <ul>
          <li>Sorting Algorithms</li>
          <li>Searching Algorithms</li>
          <li>Linked Lists</li>
          <li>Stacks</li>
          <li>Queues</li>
          <li>Trees</li>
          <li>Graphs</li>
          <li>Recursion</li>
        </ul>
      </aside>

      <main className="main">
        <header>
          <h1>DSA Visualizer</h1>
          <p>Interactive sorting algorithm animations using React</p>
        </header>

        <div className="controls">
          <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
            <option value="bubble">Bubble Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="selection">Selection Sort</option>
          </select>
          <button onClick={generateArray}>Generate New Array</button>
          <button onClick={runSelectedSort}>Run Sort</button>
        </div>

        <div className="bars-container">
          {array.map((val, idx) => (
            <div className="bar" key={idx} style={{ height: `${val}px` }}></div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
