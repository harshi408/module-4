const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ MongoDB connection (NO extra options, NO error)
mongoose.connect(
  "mongodb+srv://harshikabss111_db_user:LFovIdGwGfDwp8yx@cluster0.oopn8ku.mongodb.net/module4"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

// ✅ Routes
app.use('/products', require('./src/routes/product.routes'));
app.use('/orders', require('./src/routes/order.routes'));
app.use('/payments', require('./src/routes/payment.routes'));

// ✅ REQUIRED FOR RENDER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
