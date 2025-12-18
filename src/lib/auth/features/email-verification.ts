import { sendVerificationEmail } from '../email/send-verification';

export const emailVerification = {
  sendVerificationEmail,
  autoSignInAfterVerification: true,
  sendOnSignUp: true,
};
