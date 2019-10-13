import express,{Application,Request,Response,NextFunction} from 'express';
const app:Application = express();
app.set('port',process.env.PORT || 5000);
app.get('/', (req:Request, res:Response, next:NextFunction) => {
    res.status(200).json({ "message": "API Running" });
})

export default app;