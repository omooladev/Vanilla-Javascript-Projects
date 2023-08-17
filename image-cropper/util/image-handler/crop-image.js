import { cropper } from "../cropper.js";
export const saveCroppedImageHandler = async (event) => {
  previewImageContainer.classList.add("saving");
  saveButton.disabled = true;

  setTimeout(() => {
    //----------> get the cropped canvas and convert it to a data url in jpeg format
    const croppedImage = cropper.getCroppedCanvas().toDataURL("image/jpeg");

    saveButton.disabled = false;
    //----------> configure the element
    croppedImagePreview.src = croppedImage;

    imageBorder.classList.add("hide");
    saveButton.classList.add("hide");
    previewImageContainer.classList.remove("saving");
    croppedImageContainer.classList.remove("hide");
    editButton.classList.remove("hide");
    downloadButton.classList.remove("hide");
  }, 10);
};
export const editCroppedImageHandler = (event) => {
  //----------> configure the element
  croppedImagePreview.src = "";
  downloadButton.href = "";
  imageBorder.classList.remove("hide");
  saveButton.classList.remove("hide");
  croppedImageContainer.classList.add("hide");
  editButton.classList.add("hide");
  downloadButton.classList.add("hide");
};
export const downloadCroppedImageHandler = (event) => {
  if (!croppedImagePreview.src) {
    return;
  }
  downloadButton.href = croppedImagePreview.src;
  downloadButton.download = "cropped.jpeg";
  downloadButton.disabled = false;
};
