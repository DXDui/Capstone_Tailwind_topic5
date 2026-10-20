
  const themeToggle = document.getElementById("themeToggle");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

// Kiểm tra chế độ đã lưu trước đó
const savedTheme = localStorage.getItem("theme");

// Nếu trước đó đã chọn dark thì bật dark mode
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");

  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
}

// Khi nhấn nút Sun/Moon
themeToggle.addEventListener("click", function () {
  // Thêm hoặc xóa class dark
  document.documentElement.classList.toggle("dark");

  // Kiểm tra hiện tại có đang là dark mode không
  const isDark = document.documentElement.classList.contains("dark");

  // Đổi biểu tượng
  sunIcon.classList.toggle("hidden", isDark);
  moonIcon.classList.toggle("hidden", !isDark);

  // Lưu lựa chọn
  localStorage.setItem("theme", isDark ? "dark" : "light");
});