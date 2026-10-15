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
