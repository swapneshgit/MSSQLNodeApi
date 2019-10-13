import express, { Request,Response, NextFunction } from "express";
const app = express();
app.use(require('body-parser').urlencoded({ extended: false }));
const router = express.Router();

router.post('/register', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ 'Message': 'Account register' })
})

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ 'Message': 'Account login' })
})

router.get('/userDetails', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ 'Message': 'users details' })
})


export default router;