const express = require("express");
const app = express();
const port = process.env.PORT || 5656;

const productRouter = require('./Routes/productRouter');

// routes go here
app.use('/api/Products', productRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})