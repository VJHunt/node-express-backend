import userRouter from './user'
import subjectsRouter from './subjects'
import studentRouter from './student'

const initRoutes = app => {
  app.post('/_ping', (req, res) => {
    res.send('ok')
  })
  app.use('/user', userRouter)
  app.use('/subjects', subjectsRouter)
  app.use('/student', studentRouter)
}

export default initRoutes
