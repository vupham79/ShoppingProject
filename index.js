import express from 'express';
import middlewaresConfig from './config/middlewares';
import apiRoutes from './routes';

const app = express();
const PORT = process.env.PORT || 8000;

middlewaresConfig(app);
apiRoutes(app);

app.listen(PORT, () => {
    console.log("   Server is running on port 8000 😢😢😢😢");
})