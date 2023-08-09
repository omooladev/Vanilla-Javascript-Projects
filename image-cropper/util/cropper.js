let cropper;
const createCropper = async ({ image, aspectRatio = 0, viewMode = 3 }) => {
  cropper = new Cropper(image, {
    aspectRatio,
    viewMode,
  });
};
const destroyCropper = () => {
  cropper.destroy();
};
export { cropper, createCropper, destroyCropper };
