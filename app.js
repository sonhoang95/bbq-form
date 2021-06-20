const emailCollectorForm = document.getElementById("email-collector");

emailCollectorForm.addEventListener("submit", e => {
  e.preventDefault();
  let formData = new FormData(e.target);
  let userFirstName = formData.get("first-name");
  let userEmailAddress = formData.get("email-address");

  let updatedHtmlContent = `
  <h2>Congratulations, ${userFirstName}</h2>
  <p>You're on your way to becoming a BBQ Master!</p>
  <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>`;
  let mainContent = document.getElementById("main-content");
  mainContent.innerHTML = updatedHtmlContent;
});
