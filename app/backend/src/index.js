const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, World from the backend!');
});

// Export the app for testing purposes
module.exports = app;

if (require.main === module) {
  // Only start the server if it's run directly (not when required for tests)
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
