document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header-contents-menu");
  const open = document.querySelector(".menu__open");
  const close = document.querySelector(".menu__close");
  open.addEventListener("click", () => {
    open.classList.toggle("hiden");
    close.classList.toggle("hiden");
    menu.classList.toggle("visibility");
  });
  close.addEventListener("click", () => {
    open.classList.toggle("hiden");
    close.classList.toggle("hiden");
    menu.classList.toggle("visibility");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const faqContents = document.querySelector(".faq-content");
  faqContents.addEventListener("click", (e) => {
    const faqQuesBox = e.target.closest(".faq-box-qus");
    if (!faqQuesBox) return;
    const faqBox = faqQuesBox.parentElement;
    const faqBoxBody = faqBox.querySelector(".faq-box-body");
    const faqIcon = faqQuesBox.querySelector("i");
    // !toggle icon
    faqIcon.classList.toggle("fa-plus");
    faqIcon.classList.toggle("fa-x");
    // !toggle visibility of body
    faqBoxBody.classList.toggle("open");
    // !close other open faq
    const faqAllContent = faqContents.querySelectorAll("[class^='faq-box-']");
    console.log(faqAllContent);
    faqAllContent.forEach((faqContent) => {
      if (faqContent !== faqBox) {
        const otherFaqBody = faqContent.querySelector(".faq-box-body");
        const otherIcon = faqContent.querySelector(".faq-box-qus i");
        otherFaqBody.classList.remove("open");
        otherIcon.classList.remove("fa-x");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});
