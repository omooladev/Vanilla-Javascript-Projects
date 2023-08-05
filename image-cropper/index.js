const container = document.querySelector(".container");
const imageElement = document.querySelector(".new_image");
const previewImageContainer = document.querySelector(".preview_image_container");
const imageInput = document.querySelector(".new_image");
const previewImage = document.querySelector("#preview_image");
const modalOverlay = document.querySelector(".modal_overlay");

let cropper;

const createCropper = async (previewImage) => {
  cropper = new Cropper(previewImage, {
    aspectRatio: 0,
    viewMode: 3,
  });
};
const changeImageHandler = (event) => {
  //----------> get the image file
  const image = event.target.files[0];

  //----------> check if file type if an image
  if (!image.type.includes("image/")) {
    console.log("Not an image file");
  }

  const fileReader = new FileReader();
  fileReader.readAsDataURL(image);
  fileReader.onloadend = async () => {
    previewImage.src = fileReader.result;

    await createCropper(previewImage);

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
