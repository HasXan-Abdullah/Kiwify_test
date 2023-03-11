import { useState } from "react";
import clsx from "clsx";
import styles from "./LoginForm.module.css";
import { useLoginFormValidator } from "../../hooks/ValidateLogin.js";

import "./login.css";
import Header from "../../Layouts/header/Header";
const Login = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { errors, validateForm, onBlurField } = useLoginFormValidator(form);

  const onUpdateField = (e) => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };
    setForm(nextFormState);
    if (errors[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const { isValid } = validateForm({ form, errors, forceTouchErrors: true });
    if (!isValid) return;
    alert(JSON.stringify(form, null, 2));
  };
  return (
    <>
      <Header
        headerText="Entrar na sua conta"
        linkText="fazer cadastro"
        url="/signup"
      />
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <form
          className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
          onSubmit={onSubmitForm}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-5 mb-1 text-gray-700"
            >
              E-mail
            </label>{" "}
            <div>
              <input
                type="text"
                autoComplete="username"
                name="email"
                value={form.email}
                onChange={onUpdateField}
                onBlur={onBlurField}
                className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full 
              ${clsx(
                styles.formField,
                errors.email.dirty &&
                  errors.email.error &&
                  styles.formFieldError
              )}`}
              />
              {errors.email.dirty && errors.email.error ? (
                <div>
                  {" "}
                  <div
                    className={` ${styles.formFieldErrorMessage} text-xs text-red-500`}
                  >
                    {errors.email.message}
                  </div>
                </div>
              ) : null}
            </div>{" "}
          </div>{" "}
          <div className="mt-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Senha
            </label>{" "}
            <div>
              <input
                type="password"
                autoComplete="current-password"
                name="password"
                value={form.password}
                onChange={onUpdateField}
                onBlur={onBlurField}
                className={` 
                form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full               ${clsx(
                  styles.formField,
                  errors.password.dirty &&
                    errors.password.error &&
                    styles.formFieldError
                )}`}
              />
              {errors.password.dirty && errors.password.error ? (
                <div className="text-red-500 text-xs mt-1">
                  <div>
                    <p className={styles.formFieldErrorMessage}>
                      {errors.password.message}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>{" "}
          <div className="mt-2 flex items-center justify-end">
            <div className="text-sm leading-5">
              <a
                href="/ResetPassword"
                className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
              >
                Esqueceu a senha?
              </a>
            </div>
          </div>{" "}
          <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
              >
                {" "}
                Entrar
              </button>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
