export const validateRecipient = (recipient) => {
  const errors = {};

  if (recipient.name.trim() === "") {
    errors.name = "Введите ФИО";
  }

  if (recipient.phones.trim() === "") {
    errors.phones = "Введите номер телефона";
  } else {
    const phoneRegex = /^[0-9]{11}$/;
    if (!phoneRegex.test(recipient.phones)) {
      errors.phones = "Введите корректный номер телефона";
    }
  }

  return errors;
};

export const validateAddress = (address) => {
  if (address.trim() === "") {
    return "Введите корректный адрес";
  }
  return "";
};
