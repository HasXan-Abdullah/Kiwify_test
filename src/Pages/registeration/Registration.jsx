import { useState } from "react";
import clsx from "clsx";
import styles from "../login/LoginForm.module.css";
import { useLoginFormValidator } from "../../hooks/ValidateLogin.js";

import Header from "../../Layouts/header/Header";
import { Link } from "react-router-dom";

const Registration = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmEmail: "",
    checkbox: false,
  });
  const { errors, validateForm, onBlurField } = useLoginFormValidator(form);

  const onUpdateField = (e) => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
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
        headerText="Criar nova conta"
        linkText="entrar na sua conta existente"
        url="/"
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
                className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm
                 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150
                  ease-in-out sm:text-sm sm:leading-5 w-full 
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
            <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
              Repetir e-mail
            </label>
            <div>
              {" "}
              <input
                type="email"
                autoComplete="off"
                name="confirmEmail"
                value={form.confirmEmail}
                onChange={onUpdateField}
                onBlur={onBlurField}
                className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm 
                focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition 
                duration-150 ease-in-out sm:text-sm sm:leading-5 w-full 
              ${clsx(
                styles.formField,
                errors.confirmEmail.dirty &&
                  errors.confirmEmail.error &&
                  styles.formFieldError
              )}`}
              />
              {errors.confirmEmail.dirty && errors.confirmEmail.error ? (
                <div>
                  {" "}
                  <div
                    className={` ${styles.formFieldErrorMessage} text-xs text-red-500`}
                  >
                    {errors.confirmEmail.message}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
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
                autoComplete="off"
                name="password"
                value={form.password}
                onChange={onUpdateField}
                onBlur={onBlurField}
                className={` 
                form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none 
                focus:shadow-outline-blue focus:border-blue-300 transition duration-150
                 ease-in-out sm:text-sm sm:leading-5 w-full
                 ${clsx(
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
          <div className="mt-6">
            <label className="relative flex items-start mt-2">
              <div className="flex items-center h-5">
                <input
                  name="checkbox"
                  value={form.checkbox}
                  truevalue="User Agreed"
                  onChange={onUpdateField}
                  onBlur={onBlurField}
                  type="checkbox"
                  className={`form-checkbox h-4 w-4  text-indigo-600  transition 
                  duration-150 ease-in-out cursor-pointer
                   rounded focus:ring-transparent 
                ${clsx(
                  styles.formcheckbox,
                  errors.checkbox.dirty &&
                    errors.checkbox.error &&
                    `border-red-500`
                )}`}
                />
              </div>
              <div className="ml-2 text-sm leading-5">
                <span className="font-medium text-gray-700">
                  Eu li e aceito os{" "}
                  <Link
                    to="https://kiwify.com.br/termos-de-uso"
                    target="_blank"
                    className="underline"
                  >
                    {" "}
                    termos de uso
                  </Link>
                  ,{" "}
                  <Link
                    to="https://kiwify.com.br/licenca-de-uso-software"
                    target="_blank"
                    className="underline"
                  >
                    {" "}
                    termos de licença de uso de software
                  </Link>
                  ,{" "}
                  <Link
                    href="https://kiwify.com.br/politica-de-conteudo"
                    target="_blank"
                    className="underline"
                  >
                    {" "}
                    política de conteúdo
                  </Link>{" "}
                  da Kiwify{" "}
                </span>
                {errors.checkbox.dirty && errors.checkbox.error ? (
                  <div
                    className={`text-red-500 text-s mt-1 ${styles.formFieldErrorMessage}`}
                  >
                    <div className="text-red-500 border-b-0">
                      {errors.checkbox.message}
                    </div>
                  </div>
                ) : null}
              </div>
            </label>
          </div>
          <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent 
                text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 
                focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 
                transition duration-150 ease-in-out"
              >
                {" "}
                Criar conta
              </button>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Registration;
