const imageElement = document.querySelector(".new_image");

const cropContainer = document.querySelector(".crop_container");

const imageInput = document.querySelector(".new_image");


const saveButton = document.querySelector(".save");
const croppedImagePreview = document.querySelector("#cropped_image_preview");
const croppedImageContainer = document.querySelector(".cropped_image_container");
import { transformImageHandler } from "../util/image-handler/image-handler.js";
import { closeImageContainer } from "../util/image-handler/close-image-container.js";
import { saveCroppedImageHandler } from "../util/image-handler/saveCroppedImage.js";
//----------> event listeners

imageElement.oninput = (event) => transformImageHandler(event);

modalOverlay.onclick = (event) => closeImageContainer(event);

saveButton.onclick = (event) => saveCroppedImageHandler(event);
