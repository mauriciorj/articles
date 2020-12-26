import React from "react";

import { FormLogin } from "./FormLogin";

export default {
  title: "Components/FormLogin",
  component: FormLogin,
};

const Template = (args) => <FormLogin {...args} />;

export const MainLoginForm = Template.bind({});
MainLoginForm.args = {
  title: "Log In",
  subtitle: "Use your social network",
  facebookLink: "#",
  googleLink: "#",
  githubLink: "#",
  twitterLink: "#",
  textBetweenLogins: "or",
  emailLabel: "Your email",
  emailError: false,
  emailErrorText: "Please insert a valid email",
  passwordLabel: "Your password",
  passwordError: true,
  passwordErrorText: "Please insert a valid password",
  forgotPasword: "Forgot your password?",
  forgotPaswordLink: "#",
  buttonLabel: "login",
};
