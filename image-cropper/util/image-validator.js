export const validateImage = async (image) => {
  if (!image.type.includes("image/")) {
    return { hasError: true, errorMessage: "Please upload an image" };
  }
  return { hasError: false };
};
