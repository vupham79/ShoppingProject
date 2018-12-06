import express from 'express';
import route from './routes/customer';
import middlewares from './config/middlewares';

const app = express();
middlewares(app);
app.use('/customer', route);
app.listen(8000, () => {
    console.log("   Server is running on port 8000 😢😢😢😢");
})