import Toast from "@js/notification/toast/Toast.js"

document.querySelector("button").addEventListener("click", () => {
  const toast = new Toast({
    text: "Hello",
    position: "top-right",
    pauseOnHover: true,
    pauseOnFocusLoss: true,
  })
})
