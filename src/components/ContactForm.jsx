    import { Formik, Form, Field } from "formik";
    import { useId } from "react";
    import * as Yup from "yup";
    import { ErrorMessage } from "formik";
    import "../css/ContactForm.css";

    const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, "Too Short!")
        .max(30, "Too Long!")
        .required("Required"),
    tel: Yup.string()
        .min(3, "Too Short!")
        .max(30, "Too Long!")
        .required("Required")
    });

    const initialValues = {
    username: "",
    tel: ""
    };

    export default function ContactForm({ onSubmit }) {
    const nameFieldId = useId();
    const telFieldId = useId();

    const handleSubmit = (values, actions) => {
        onSubmit(values);
        actions.resetForm();
    };

    

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
        >
        <Form className="contactform-container">
            <div className="contactform-input">
                <label htmlFor={nameFieldId}>Name</label>
                <Field type="text" name="username" id={nameFieldId} />
                <ErrorMessage name="username" as="span" />
                </div>
            <div className="contactform-input">
                <label htmlFor={telFieldId}>Number</label>
                <Field type="tel" name="tel" id={telFieldId} />
                <ErrorMessage name="tel" as="span" />
            </div>
            <button type="submit" className="btn-addcontact">Add contact</button>
        </Form>
        </Formik>
    );
}

