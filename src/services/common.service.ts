export const maskedMobile = (mobile: string) => {
  const phone = String(mobile).split("");
  const start = phone.shift();
  const end = phone.pop();
  const middle = String(phone.splice(3, 2)).replace(",", "");
  return `+91 ${start}***${middle}***${end}`;
};

export const maskedEmail = (email: string) => {
  const start = String(email).substring(0, 3);
  const end = String(email).split(".").pop();
  const middle = String(email).split("");
  const middle_index = middle.lastIndexOf("@");
  const middle_letters = `${middle[middle_index - 2]}${middle[middle_index - 1]}`;
  return `${start}${"*".repeat(8)}${middle_letters}@${"*".repeat(5)}.${end}`;
};
