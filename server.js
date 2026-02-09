const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(
  "mongodb+srv://harshikabss111_db_user:LFovIdGwGfDwp8yx@cluster0.oopn8ku.mongodb.net/"
).then(() => console.log("MongoDB Connected"))

app.use('/products', require('./src/routes/product.routes'))
app.use('/orders', require('./src/routes/order.routes'))
app.use('/payments', require('./src/routes/payment.routes'))

app.listen(5000, () => console.log("Server running on 5000"))
