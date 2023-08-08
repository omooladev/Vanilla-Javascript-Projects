const container = document.querySelector(".container");
const imageElement = document.querySelector(".new_image");
const previewImageContainer = document.querySelector(".preview_image_container");
const imageInput = document.querySelector(".new_image");
const previewImage = document.querySelector("#preview_image");
const modalOverlay = document.querySelector(".modal_overlay");
const reply = document.querySelector(".reply");
const loader = document.querySelector(".loader");

let cropper;

const createCropper = async (previewImage) => {
  cropper = new Cropper(previewImage, {
    aspectRatio: 0,
    viewMode: 3,
  });
};
const setError = (message) => {
  if (!message) {
    reply.innerHTML = "";
    return reply.classList.remove("error");
  }
  reply.innerHTML = message;
  reply.classList.add("error");
};
const setIsLoading = (bool) => {
  if (bool) {
    return loader.classList.add("loading");
  }
  return loader.classList.remove("loading");
};
const changeImageHandler = (event) => {
  //----------> reset error
  setError("")

  //----------> set loading
  setIsLoading(true);
  //----------> get the image file
  const image = event.target.files[0];

  //----------> check if file type if an image
  if (!image.type.includes("image/")) {
    setIsLoading(false);
    setError("Please upload an image");
    return;
  }

  const fileReader = new FileReader();
  fileReader.readAsDataURL(image);
  fileReader.onloadend = async () => {
    previewImage.src = fileReader.result;

    await createCropper(previewImage);
    setIsLoading(false);
    previewImageContainer.classList.add("show");
    modalOverlay.classList.add("show");
  };
};

const closeImageContainer = (event) => {
  event.stopPropagation();
  if (!previewImageContainer.className.includes("show")) return;
  previewImageContainer.classList.remove("show");
  modalOverlay.classList.remove("show");
  previewImage.src = "";
  imageInput.value = "";
  //----------> delete cropper container
  cropper.destroy();
};
//----------> event listeners

imageElement.oninput = (event) => changeImageHandler(event);

modalOverlay.onclick = (event) => closeImageContainer(event);
