import express,{Application,Request,Response,NextFunction} from 'express';
import abc from './route/account/accout-handler';
import router from './route/account/accout-handler'
const app:Application = express();
app.set('port',process.env.PORT || 5000);

app.use('/Account',abc);

app.get('/', (req:Request, res:Response, next:NextFunction) => {
    res.status(200).json({ "message": "API Running" });
})

export default app;