import { destroyCropper } from "../../js/cropper.js";
export const closeImageContainer = (event) => {
  event.stopPropagation();
  if (!previewImageContainer.className.includes("show")) {
    return;
  }
  previewImageContainer.classList.remove("show");
  modalOverlay.classList.remove("show");
  previewImage.src = "";
  imageInput.value = "";
  //----------> delete cropper container
  destroyCropper();
};
