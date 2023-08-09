const loader = document.querySelector(".loader");
export const setIsLoading = (bool) => {
  if (bool) {
    return loader.classList.add("loading");
  }
  return loader.classList.remove("loading");
};
