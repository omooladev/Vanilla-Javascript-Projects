import { cropper } from "../cropper.js";
export const saveCroppedImageHandler = async (event) => {
  previewImageContainer.classList.add("saving");
  saveButton.disabled = true;

  setTimeout(() => {
    const croppedImage = cropper.getCroppedCanvas().toDataURL("image/png");

    saveButton.disabled = false;
    //----------> configure the element
    croppedImagePreview.src = croppedImage;
    imageBorder.classList.add("hide");
    saveButton.classList.add("hide");
    previewImageContainer.classList.remove("saving");
    croppedImageContainer.classList.remove("hide");
    editButton.classList.remove("hide");
  }, 10);
};
export const editCroppedImageHandler = (event) => {
  //----------> configure the element
  croppedImagePreview.src = "";
  imageBorder.classList.remove("hide");
  saveButton.classList.remove("hide");
  croppedImageContainer.classList.add("hide");
  editButton.classList.add("hide");
};
