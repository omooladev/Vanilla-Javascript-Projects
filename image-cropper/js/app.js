import { transformImageHandler } from "../util/image-handler/image-handler.js";
import { closeImageContainer } from "../util/image-handler/close-image-container.js";
import {
  saveCroppedImageHandler,
  editCroppedImageHandler,
  downloadCroppedImageHandler,
} from "../util/image-handler/crop-image.js";
//----------> event listeners

imageElement.oninput = (event) => transformImageHandler(event);

modalOverlay.onclick = (event) => closeImageContainer(event);

editButton.onclick = (event) => editCroppedImageHandler(event);
saveButton.onclick = (event) => saveCroppedImageHandler(event);
downloadButton.onclick = (event) => downloadCroppedImageHandler(event);
