export function loadComponents() {
  // Load navbar
  const headerElement = document.querySelector("header");
  if (headerElement) {
    import("../components/navbar.js")
      .then((module) => {
        headerElement.innerHTML = module.navbar;
      })
      .catch((error) => console.error("Error loading navbar:", error));
  }

  // Load footer
  const footerElement = document.querySelector("footer");
  if (footerElement) {
    import("../components/footer.js")
      .then((module) => {
        footerElement.innerHTML = module.footer;
      })
      .catch((error) => console.error("Error loading footer:", error));
  }
}
