// General email validator
export const isValidEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

// Specific validator for Noroff students
export const isNoroffStudentEmail = (email) => {
  return /@stud\.noroff\.no$/.test(email);
};
