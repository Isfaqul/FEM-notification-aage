const unreadItems = document.querySelectorAll(".unread-item");
const markReadAllBtn = document.querySelector(".mark-as-read-btn");
const notificationCounter = document.querySelector("#counter");

markReadAllBtn.addEventListener("click", () => {
  unreadItems.forEach((item) => {
    item.classList.remove("unread-item");
  });

  notificationCounter.remove();
});
