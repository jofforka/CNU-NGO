document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector(".main-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
  }

  document.querySelectorAll("[data-email-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const recipient = form.dataset.recipient;
      if (!recipient || recipient.includes("YOUR_EMAIL")) {
        alert("Please replace YOUR_EMAIL@example.com in this page with the Foundation's official email address.");
        return;
      }

      const values = new FormData(form);
      const lines = [];
      values.forEach((value, key) => lines.push(`${key}: ${value}`));

      const subject = encodeURIComponent(
        document.title.startsWith("Volunteer")
          ? "Volunteer Registration"
          : "Partnership Enquiry"
      );
      const body = encodeURIComponent(lines.join("\n\n"));
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  });
});
