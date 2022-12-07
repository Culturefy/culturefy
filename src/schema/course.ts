
// ** Third Party Imports
import * as yup from 'yup'

const showErrors = (field: string, valueLen: number, min: number) => {
    if (valueLen === 0) {
        return `${field} field is required`
    } else if (valueLen > 0 && valueLen < min) {
        return `${field} must be at least ${min} characters`
    } else {
        return ''
    }
}

export default {
    add: yup.object().shape({
        title: yup.string().required(),
        number_of_lessons: yup.string().required(),
        duration: yup.string().required(),
        instructor: yup.string().required(),
        details: yup.string().required(),
        isPublish: yup.boolean().required(),
    })
}
