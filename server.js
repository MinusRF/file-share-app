const express = require('express');
const app = express();
const connectDB = require('./config/db'); 


connectDB();
app.use(express.json());

app.use('/api/files', require('./routes/file'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});