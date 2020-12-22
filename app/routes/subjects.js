import express from 'express'

import * as subjectsController from '../controllers/subjects.controller'
import { validatorMiddleware, subjectsSchema } from '../validation'
import { isAuthenticated, isAuthenticatedTeacher } from '../lib/auth'

const subjectRouter = express.Router()

subjectRouter.get('/', isAuthenticated, (req, res) => { console.log('OK') })
subjectRouter.post('/',
  isAuthenticatedTeacher,
  subjectsSchema.createSubject,
  validatorMiddleware(subjectsController.createSubjects)
)

export default subjectRouter