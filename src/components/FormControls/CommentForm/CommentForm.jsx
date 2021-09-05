import c from "../FormControls.module.css";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

const CommentForm = (props) => {
    const validationsSchema = yup.object().shape({
        commentField: yup.string().typeError('Должно быть строкой').max(200).required('Обязательное поле')
    })
    return (
        <div className={c.commentFormWrapper}>

            <Formik
                initialValues={{commentField: ''}}
                validationSchema={validationsSchema}
                onSubmit={(values, actions) => {
                    props.addComment(values.commentField);
                    actions.setSubmitting(false);
                    actions.resetForm();
                }
                }
            >
                {({isSubmitting}) => (
                    <Form className={c.commentForm}>
                        {props.commentAdded || !props.isAuth
                            ? null
                            : <Field name="commentField" component="textarea" className={c.commentField}/>
                        }
                        <ErrorMessage name="commentField" component="div" className={c.errorMessage}/>
                        {props.isAuth && !props.commentAdded
                            ? <button type="submit" disabled={isSubmitting} className={c.commentSubmit}>
                                Оставить комментарий</button>
                            : null}
                        {props.commentAdded && props.isAuth
                            ? <button type="button" onClick={comment => props.deleteComment(comment)}
                                      className={c.commentSubmit}>Удалить свой</button>
                            : null}
                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default CommentForm;