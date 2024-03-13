const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const master = document.getElementById("master");
const basic = document.getElementById("basic");

checkbox.addEventListener("click", () => {
  basic.textContent = basic.textContent === "₹99.99" ? "₹9.99" : "₹99.99";
  professional.textContent =
    professional.textContent === "₹149.99" ? "₹4.99 " : "₹149.99";
  master.textContent = master.textContent === "₹299.99" ? "₹89.99" : "₹299.99";
});
