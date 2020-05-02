import { Field, FormikProps, useField, withFormik } from "formik"
import React from "react"

interface MyPasswordFieldProps {
  name: keyof Values
  placeholder?: string
}

const MyPasswordField: React.FunctionComponent<MyPasswordFieldProps> = ({
  name,
  placeholder,
}) => {
  const [field, meta, helpers] = useField<string>(name)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    helpers.setValue(event.currentTarget.value)

  const handleBlur = () => helpers.setTouched(true)

  return (
    <>
      <input
        type="password"
        name={name}
        value={field.value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <pre>meta: {JSON.stringify(meta, null, 2)}</pre>
    </>
  )
}

interface Values {
  email: string
  password: string
}

const InnerForm: React.FunctionComponent<FormikProps<Values>> = ({
  handleSubmit,
}) => (
  <form noValidate={true} onSubmit={handleSubmit}>
    <p>
      This form uses <code>formik</code> and a custom field implemented with the{" "}
      <code>useField</code> hook.
    </p>
    <Field name="email" type="email" placeholder="Email" />
    <MyPasswordField name="password" placeholder="Password" />
    <button type="submit">Send</button>
  </form>
)

const Form = withFormik<{}, Values>({
  handleSubmit: (values) => {
    console.log("submitting...", values)
  },
  mapPropsToValues: () => ({
    email: "someone@example.com",
    password: "not-so-secret",
  }),
})(InnerForm)

export default Form
