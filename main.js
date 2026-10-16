const billSwitch = document.getElementById("billSwitch");
const switchCircle = document.getElementById("switchCircle");

const monthlyLabel = document.getElementById("monthlyLabel");
const annuallyLabel = document.getElementById("annuallyLabel");

let isAnnually = false;

billSwitch.addEventListener("click", function () {
  isAnnually = !isAnnually;

  // Di chuyển vòng tròn
  if (isAnnually) {
    switchCircle.classList.remove("translate-x-0");
    switchCircle.classList.add("translate-x-6");
  } else {
    switchCircle.classList.remove("translate-x-6");
    switchCircle.classList.add("translate-x-0");
  }

  // Đổi màu nhãn
  monthlyLabel.classList.toggle("text-blue-600", !isAnnually);
  monthlyLabel.classList.toggle("text-gray-500", isAnnually);

  annuallyLabel.classList.toggle("text-blue-600", isAnnually);
  annuallyLabel.classList.toggle("text-gray-500", !isAnnually);

  // Cập nhật trạng thái nút
  billSwitch.setAttribute("aria-pressed", isAnnually);

  // Đổi giá tháng/năm
  document
    .querySelectorAll("[data-monthly][data-annually]")
    .forEach(function (price) {
      price.textContent =
        "$" + (isAnnually ? price.dataset.annually : price.dataset.monthly);
    });

  // Đổi chu kỳ thanh toán
  document.querySelectorAll(".billing-period").forEach(function (period) {
    period.textContent = isAnnually ? "/per year" : "/per month";
  });
});

// Projects Start

const filterButtons = document.querySelectorAll(".project-filter");
const projectCards = document.querySelectorAll(".project-wrapper");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedFilter = button.dataset.filter;

    // Lọc dự án
    projectCards.forEach(function (project) {
      const categories = project.dataset.category.split(" ");

      if (selectedFilter === "all" || categories.includes(selectedFilter)) {
        project.classList.remove("hidden");
      } else {
        project.classList.add("hidden");
      }
    });

    // Cập nhật giao diện nút đang chọn
    filterButtons.forEach(function (item) {
      item.classList.remove("bg-blue-600", "text-white");
      item.classList.add("border", "border-gray-200", "text-gray-600");
    });

    button.classList.remove("border", "border-gray-200", "text-gray-600");

    button.classList.add("bg-blue-600", "text-white");
  });
});
// Projects End
