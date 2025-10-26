// Toggle Menu
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth scroll
const viewWorkBtn = document.getElementById("viewWorkBtn");
viewWorkBtn.addEventListener("click", () => {
  document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
});

// Form Validation
const form = document.getElementById("contactForm");
form.addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMsg = document.getElementById("successMessage");

  // Reset error messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMsg.textContent = "";

  if (name.value.trim() === "") {
    nameError.textContent = "Vui lòng nhập tên!";
    isValid = false;
  }

  if (!email.value.includes("@") || !email.value.includes(".com")) {
    emailError.textContent = "Email không hợp lệ!";
    isValid = false;
  }

  if (message.value.trim().length < 10) {
    messageError.textContent = "Tin nhắn phải ít nhất 10 ký tự!";
    isValid = false;
  }

  if (isValid) {
    successMsg.textContent = "✅ Cảm ơn bạn đã gửi liên hệ!";
    form.reset();
  }
});
