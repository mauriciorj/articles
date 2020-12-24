import React from "react";

import { FormResetPassword } from "./FormResetPassword";

export default {
  title: "Components/FormResetPassword",
  component: FormResetPassword,
};

const Template = (args) => <FormResetPassword {...args} />;

export const MainFormResetPassword = Template.bind({});
MainFormResetPassword.args = {
  title: "Reset your password",
  resetPasswordLabel: "Please inform your email",
  resetPasswordError: true,
  resetPasswordErrorText: "Please insert a valid email",
  buttonLabel: "Reset your password",
};
