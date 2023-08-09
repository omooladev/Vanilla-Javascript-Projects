import { cropper } from "../cropper.js";
export const saveCroppedImageHandler = (event) => {
  const croppedImage = cropper.getCroppedCanvas().toDataURL("image/png");
  //----------> configure the element
  croppedImagePreview.src = croppedImage;
  imageBorder.classList.add("hide");
  saveButton.classList.add("hide");
  croppedImageContainer.classList.remove("hide");
  editButton.classList.remove("hide");
};
export const editCroppedImageHandler = (event) => {
  //----------> configure the element
  croppedImagePreview.src = "";
  imageBorder.classList.remove("hide");
  saveButton.classList.remove("hide");
  croppedImageContainer.classList.add("hide");
  editButton.classList.add("hide");
};
