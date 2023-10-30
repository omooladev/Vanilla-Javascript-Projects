import { cropper } from "../cropper.js";
export const saveCroppedImageHandler = async (event) => {
  previewImageContainer.classList.add("saving");
  saveButton.disabled = true;

  //----------> get access to the default file type
  const fileType = imageToCrop.type;


  setTimeout(() => {
    //----------> get the cropped canvas and convert it to a data url in jpeg format
    const croppedImage = cropper.getCroppedCanvas().toDataURL(`${fileType}`);

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
  const fileType = imageToCrop.type;
  downloadButton.href = croppedImagePreview.src;
  downloadButton.download = `cropped.${fileType.split("/")[1]}`;
  downloadButton.disabled = false;
};
