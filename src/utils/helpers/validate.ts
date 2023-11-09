import * as Yup from 'yup';

const validEmailMessage = 'validateForm.error_email';
const minPasswordMessage = 'validateForm.minSix';
const maxPasswordMessage = 'validateForm.maxTwenty';
const errorPass = 'validateForm.error_pass';
const errorConfirmPass = 'validateForm.error_confirm_pass';
const requireField = 'validateForm.require_field';
const phoneError = 'validateForm.phone_error';
const phoneRequire = 'validateForm.phone_require';
const nameRequire = 'validateForm.name_require';
const addressRequire = 'validateForm.address_require';
const orderDateRequire = 'validateForm.order_date_require';
const orderTimeRequire = 'validateForm.order_time_require';
const emptyBirthDay = 'validateForm.empty_birthday';
// const passwordMinSix = 'auth.password_must_be_at_least_8_characters';
const oneSpecial =
  'validateForm.password_must_have_at_least_one_special_character';
const oneNumber = 'validateForm.password_must_have_at_least_one_number';
const oneUppercase =
  'validateForm.password_must_have_at_least_one_uppercase_letter';

const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])/;

const loginSchema = Yup.object().shape({
  user: Yup.string().required(requireField),
  password: Yup.string()
    .min(6, minPasswordMessage)
    .max(20, maxPasswordMessage)
    .required(requireField),
});

const validatePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, minPasswordMessage)
    .max(20, maxPasswordMessage)
    .matches(/[A-Z]/, oneUppercase)
    .matches(/[0-9]/, oneNumber)
    .matches(/[!@#$%^&*]/, oneSpecial)
    .matches(regexPassword, errorPass)
    .required(requireField),
  rePassword: Yup.string()
    .required(requireField)
    .oneOf([Yup.ref('password'), null], errorConfirmPass),
});

const validateInputSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, minPasswordMessage)
    .max(20, maxPasswordMessage)
    .matches(regexPassword, errorPass)
    .required(requireField),
});

const validationInfoAccountSchema = Yup.object().shape({
  birthday: Yup.string().required(emptyBirthDay),
  phone_number: Yup.string()
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, phoneError)
    .required(phoneRequire),
  name: Yup.string().required(nameRequire),
  address: Yup.string().required(addressRequire),
});
const validationWarrantyHome = Yup.object().shape({
  orderDate: Yup.string().required(orderDateRequire),
  orderTime: Yup.string().required(orderTimeRequire),
});

const validateFormInforSchema = Yup.object().shape({
  name: Yup.string().required(nameRequire),
  phone: Yup.string().matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, phoneError),
});

const validatePhoneNumberSchema = Yup.object().shape({
  phoneNumber: Yup.string().matches(
    /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
    phoneError,
  ),
});

const validateEmailShema = Yup.object().shape({
  email: Yup.string()
    .matches(regexEmail, validEmailMessage)
    .required(requireField),
});

const yupSchemaInfoUser = Yup.object({
  fullName: Yup.string().required(requireField),
});

const validateFormRegister = Yup.object().shape({
  email: Yup.string()
    .matches(regexEmail, validEmailMessage)
    .required(requireField),
  password: Yup.string()
    .min(8, minPasswordMessage)
    .max(20, maxPasswordMessage)
    .matches(/[A-Z]/, oneUppercase)
    .matches(/[0-9]/, oneNumber)
    .matches(/[!@#$%^&*]/, oneSpecial)
    .required(requireField),
  confirmPassword: Yup.string()
    .required(requireField)
    .oneOf([Yup.ref('password'), null], errorConfirmPass),
});

const validateFormUpdateProfile = Yup.object().shape({
  email: Yup.string()
    .matches(regexEmail, validEmailMessage)
    .required(requireField),
  name: Yup.string().required(requireField),
  phone: Yup.string().matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, phoneError),
});

const validateFormLogin = Yup.object().shape({
  email: Yup.string()
    .matches(regexEmail, validEmailMessage)
    .required(requireField),
  password: Yup.string()
    .min(8, minPasswordMessage)
    .max(20, maxPasswordMessage)
    .required(requireField),
});

const validateForgotPasswordSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(8, minPasswordMessage)
    .max(20, maxPasswordMessage)
    .matches(/[A-Z]/, oneUppercase)
    .matches(/[0-9]/, oneNumber)
    .matches(/[!@#$%^&*]/, oneSpecial)
    .required(requireField),
  confirmNewPassword: Yup.string()
    .required(requireField)
    .oneOf([Yup.ref('newPassword'), null], errorConfirmPass),
});

const validateFormUpdatePassword = Yup.object().shape({
  oldPassword: Yup.string()
    .min(8, minPasswordMessage)
    .max(20, maxPasswordMessage)
    .required(requireField),
  password: Yup.string()
    .min(8, minPasswordMessage)
    .max(20, maxPasswordMessage)
    .matches(/[A-Z]/, oneUppercase)
    .matches(/[0-9]/, oneNumber)
    .matches(/[!@#$%^&*]/, oneSpecial)
    .required(requireField),
  confirmPassword: Yup.string()
    .required(requireField)
    .oneOf([Yup.ref('password'), null], errorConfirmPass),
});

const yupSchemaStore = Yup.object().shape({
  name: Yup.string().required(requireField),
  address: Yup.string().required(requireField),
  openAt: Yup.string().required(requireField),
  closeAt: Yup.string().required(requireField),
  taxCode: Yup.string().required(requireField),
});

const yupChangePass = Yup.object().shape({
  oldPassword: Yup.string().required(requireField),
  newPassword: Yup.string()
    .min(6, minPasswordMessage)
    .matches(regexPassword, errorPass)
    .matches(/[A-Z]/, oneUppercase)
    .matches(/[0-9]/, oneNumber)
    .matches(/[!@#$%^&*]/, oneSpecial)
    .required(requireField),

  confirmPassword: Yup.string()
    .required(requireField)
    .oneOf([Yup.ref('newPassword'), null], errorConfirmPass),
});

const yupContact = Yup.object().shape({
  rating: Yup.string().required(requireField),
  message: Yup.string().required(requireField),
});

export {
  loginSchema,
  validateEmailShema,
  validateFormInforSchema,
  validateFormLogin,
  validateFormRegister,
  validateInputSchema,
  validatePasswordSchema,
  validatePhoneNumberSchema,
  validationInfoAccountSchema,
  validationWarrantyHome,
  yupChangePass,
  yupContact,
  yupSchemaInfoUser,
  yupSchemaStore,
  validateForgotPasswordSchema,
  validateFormUpdatePassword,
  validateFormUpdateProfile,
};
