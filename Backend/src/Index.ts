import express,  {NextFunction, Request, Response, json} from 'express'
import cors from 'cors'
import user_router from './Routes/userRouter'
// import userRouter from './Routes/user.routes'
// import auth_router from './Routes/auth.router'
// import projectRouter from './Routes/projectroutes'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/users', user_router)
// app.use('/auth', auth_router)
// app.use('/projects', projectRouter)



app.use((error: Error, req: Request, res: Response, next: NextFunction)=>{
    res.json({
        message: error.message
    })
})

let port:number = 5000;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`); 
})

// console.error('This is an error message');