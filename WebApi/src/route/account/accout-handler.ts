import express, { Request, Response, NextFunction } from "express";
import * as jsonToken from 'jsonwebtoken';
import LoginModel from '../../model/account-model/login-model';

const app = express();
let login = <LoginModel>{};
app.use(require('body-parser').urlencoded({ extended: false }));
const router = express.Router();

router.post('/register', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ 'Message': 'Account register' })
})

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
    login.EmailId = req.body.Email;
    login.Password = req.body.Password;
   let token= jsonToken.sign({ userId: login.EmailId }, 'mySecretKey123', { expiresIn: '1h' });
    res.status(200).json({ 'token': token })
})

router.get('/userDetails', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ 'Message': 'users details' })
})

router.delete('/deleteUser:userId', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ 'Message': 'users details' + req.params.userId })
})


export default router;