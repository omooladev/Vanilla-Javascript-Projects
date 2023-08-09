export const saveCroppedImageHandler = (event) => {
  const croppedImage = cropper.getCroppedCanvas().toDataURL("image/png");
  cropContainer.classList.add("hide");
  croppedImageContainer.classList.add("show");
  croppedImagePreview.src = croppedImage;
};
