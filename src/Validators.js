
export const emailValidator = (email) => {
  if (!email) {
    return "Esse campo é obrigatório";
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return "O e-mail deve ser válido";
  }
  return "";
};

export const passwordValidator = (password) => {
  if (!password) {
    return "Esse campo é obrigatório";
  } else if (password.length < 8) {
    return "A senha deve ter no mínimo 8 caracteres";
  }
  return "";
};

export const confirmEmailValidator = (confirmEmail, form) => {
  if (!confirmEmail) {
    return "Esse campo é obrigatório";
  } else if (confirmEmail !== form.email) {
    return " Os dois e-mails devem ser iguais.";
  }
  return "";
};
export const checkboxValidator = (checkbox) => {

  if (checkbox === false) {
    return "(Esse campo é obrigatório)";
  } 
  return "";
};
