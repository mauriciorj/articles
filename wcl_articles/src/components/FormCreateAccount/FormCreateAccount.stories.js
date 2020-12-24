import React from "react";

import { FormCreateAccount } from "./FormCreateAccount";

export default {
  title: "Components/FormCreateAccount",
  component: FormCreateAccount,
};

const Template = (args) => <FormCreateAccount {...args} />;

export const MainFormCreateAccount = Template.bind({});
MainFormCreateAccount.args = {
  title: "Create Account",
  subtitle: "Use your social network",
  facebookLink: "#",
  googleLink: "#",
  githubLink: "#",
  twitterLink: "#",
  textBetweenLogins: "or",
  firstNameLabel: "Your First Name",
  firstNameError: false,
  firstNameErrorText: "Please insert a valid first name",
  lastNameLabel: "Your Last Name",
  lastNameError: true,
  lastNameErrorText: "Please insert a valid last name",
  emailLabel: "Your email",
  emailError: false,
  emailErrorText: "Please insert a valid email",
  passwordLabel: "Your password",
  passwordError: true,
  passwordErrorText: "Please insert a valid password",
  forgotPasword: "Forgot your password?",
  forgotPaswordLink: "#",
  buttonLabel: "Create Account",
};
