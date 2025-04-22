import React, { useState } from 'react';
import './App.css';

function App() {
  const [codeInput, setCodeInput] = useState('');
  const [deobfuscatedCode, setDeobfuscatedCode] = useState('');
  const [language, setLanguage] = useState('python');

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setCodeInput(event.target.result);
    };
    reader.readAsText(file);
  };

  const handleDeobfuscate = async () => {
    
    alert('This will call the server to deobfuscate');
  };

  return (
    <div className="app">
      <h1>🕵️ ObfusClear</h1>
      <div className="controls">
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
          <option value="java">Java</option>
          <option value="lua">Lua</option>
        </select>
        <input type="file" onChange={handleFileUpload} />
        <button onClick={handleDeobfuscate}>Deobfuscate</button>
      </div>
      <div className="editor-container">
        <textarea
          placeholder="Paste obfuscated code here..."
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)}
        />
        <textarea
          placeholder="Deobfuscated output will appear here..."
          value={deobfuscatedCode}
          readOnly
        />
      </div>
    </div>
  );
}

export default App;
