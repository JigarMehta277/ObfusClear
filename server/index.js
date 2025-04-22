const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// TODO- Dummy deobfuscation logic — replace with model later
function fakeDeobfuscate(code, language) {
  return `// Deobfuscated (${language})\n\n${code.replace(/;/g, ';\n')}`;
}

app.post('/api/deobfuscate', (req, res) => {
  const { code, language } = req.body;

  if (!code || !language) {
    return res.status(400).json({ error: 'Code and language are required' });
  }

  // TODO: Replace with actual model call
  const result = fakeDeobfuscate(code, language);
  res.json({ deobfuscatedCode: result });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
