import { setError } from "../../js/lib/setError.js";
import { setIsLoading } from "../../js/lib/setIsLoading.js";
import { validateImage } from "../image-validator.js";
import { createCropper } from "../cropper.js";

const transformImageHandler = async (event) => {
  //----------> reset error
  setError("");
  //----------> set loading
  setIsLoading(true);
  //----------> get the image file
  const image = event.target.files[0];

  //----------> validate image
  const response = await validateImage(image);
  if (response.hasError) {
    setIsLoading(false);
    return setError(response.errorMessage);
  }

  const fileReader = new FileReader();
  fileReader.readAsDataURL(image);
  fileReader.onloadend = async () => {
    previewImage.src = fileReader.result;
    await createCropper({ image: previewImage });
    setIsLoading(false);

    //----------> show the preview image container
    previewImageContainer.classList.add("show");
    modalOverlay.classList.add("show");
  };
};

export { transformImageHandler };
