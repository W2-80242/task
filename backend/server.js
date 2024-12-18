
const express = require('express');
const cors = require('cors');
require('dotenv').config(); 
const PORT = process.env.PORT;
const UserRouterHandler = require('./routes/users');
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", UserRouterHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
