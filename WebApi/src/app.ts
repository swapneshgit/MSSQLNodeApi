import express,{Application,Request,Response,NextFunction} from 'express';
import morgan from 'morgan';
import accoundHandler from './route/account/accout-handler';
import bodyParser from 'body-parser';


const app:Application = express();
app.set('port',process.env.PORT || 5000);
app.use(morgan('dev  '));
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json


app.use('/Account',accoundHandler);

app.get('/', (req:Request, res:Response, next:NextFunction) => {
    res.status(200).json({ "message": "API Running" });
})

export default app;