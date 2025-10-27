
// Toggle Menu (ẩn/hiện menu khi bấm ☰)
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth Scroll (cuộn mượt đến phần Projects)
const viewWorkBtn = document.getElementById("viewWorkBtn");
if (viewWorkBtn) {
  viewWorkBtn.addEventListener("click", () => {
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
  });
}

// Form Validation + Hiển thị thông báo lỗi
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Lấy giá trị từ form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Các phần hiển thị lỗi
    const nameErr = document.getElementById("nameError");
    const emailErr = document.getElementById("emailError");
    const msgErr = document.getElementById("messageError");
    const successMsg = document.getElementById("successMessage");

    // Reset lỗi
    nameErr.textContent = "";
    emailErr.textContent = "";
    msgErr.textContent = "";
    successMsg.textContent = "";

    let isValid = true;

    // Kiểm tra Name
    if (name === "") {
      nameErr.textContent = "Vui lòng nhập tên.";
      isValid = false;
    }

    // Kiểm tra Email
    if (email === "") {
      emailErr.textContent = "Vui lòng nhập email.";
      isValid = false;
    } else if (!email.includes("@") || !email.includes(".com")) {
      emailErr.textContent = "Email không hợp lệ.";
      isValid = false;
    }

    // Kiểm tra Message
    if (message === "") {
      msgErr.textContent = "Vui lòng nhập tin nhắn.";
      isValid = false;
    } else if (message.length < 10) {
      msgErr.textContent = "Tin nhắn phải ít nhất 10 ký tự.";
      isValid = false;
    }

    // Nếu hợp lệ
    if (isValid) {
      successMsg.textContent = "✅ Cảm ơn bạn đã gửi liên hệ!";

      // Lưu dữ liệu form vào localStorage
      const formData = { name, email, message };
      localStorage.setItem("contactForm", JSON.stringify(formData));

      contactForm.reset();
    }
  });
}

// Dark Mode Toggle 
const themeToggle = document.getElementById("themeToggle");
// Kiểm tra xem người dùng đã chọn chế độ nào trước đó chưa
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️"; // nếu đang dark thì icon là mặt trời
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
