const reply = document.querySelector(".reply");
export const setError = (message) => {
  if (!message) {
    reply.innerHTML = "";
    return reply.classList.remove("error");
  }
  reply.innerHTML = message;
  reply.classList.add("error");
};
