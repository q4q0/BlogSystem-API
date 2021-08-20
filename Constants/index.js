module.exports = {
  USER_MESSAGES: {
    REQUIRED: {
      FIRST_NAME: 'first name is required',
      LAST_NAME: 'last name is required',
      USERNAME: 'user name is required',
      EMAIL: 'email address is required',
      PASSWORD: 'password is required',
    },
    VALIDATION_ERRORS: {
      FIRST_NAME_INVALID_LENGTH:
        'first name should be between 2 and 32 characters long',
      LAST_NAME_INVALID_LENGTH:
        'last name should be between 2 and 32 characters long',
      FIRST_NAME_NOT_ALPHA: 'first name must be letters only',
      LAST_NAME_NOT_ALPHA: 'last name must be letters only',
      USERNAME_CONFLICT: 'username is already exists',
      EMAIL_CONFLICT: 'email is already exists',
      USER_NAME_INVALID_LENGTH:
        'username should be between 6 and 32 characters long',
    },
  },
};
