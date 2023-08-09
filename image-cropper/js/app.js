
import { transformImageHandler } from "../util/image-handler/image-handler.js";
import { closeImageContainer } from "../util/image-handler/close-image-container.js";
import { saveCroppedImageHandler } from "../util/image-handler/saveCroppedImage.js";
//----------> event listeners

imageElement.oninput = (event) => transformImageHandler(event);

modalOverlay.onclick = (event) => closeImageContainer(event);

saveButton.onclick = (event) => saveCroppedImageHandler(event);
