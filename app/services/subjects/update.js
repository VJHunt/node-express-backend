import { Subject } from '../../models'
import { Errors } from '../../utils/errors'

const updateSubject = async ({ subjectId, userId, ...data }) => {
  try {
    const subject = await Subject.findByPk(subjectId)

    if (!subject) throw { error: { type: Errors.notFound } }

    if (subject.teacherId !== userId) throw { error: { type: Errors.forbidden } }

    await subject.update(data)
    return { subject }
  } catch ({ error }) {
    return { error } || { error: true }
  }
}

export default updateSubject
