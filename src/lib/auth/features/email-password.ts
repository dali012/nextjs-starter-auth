import { sendResetPasswordEmail } from '../email/send-reset-password';

export const emailAndPassword = {
  enabled: true,
  requireEmailVerification: true,
  sendResetPassword: sendResetPasswordEmail,
};
