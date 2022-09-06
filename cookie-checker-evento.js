// First checks if the user already has the cookie or not
var cookieName = "seo-summit-2022";
if (typeof Cookies.get(cookieName) !== "undefined") {
  // console.log("cookie exists");
  window.location.href = "/palcos/palco-de-negocios";
} else {
  // console.log("cookie doesn't exists");
  $(".evento_validate-trigger").click();
}

// When the form's submit button is clicked
$(document).ready(function () {
  const $validateForm = $("#wf-form-Evento-Checagem");

  $validateForm.submit(function (e) {
    // console.log("creating cookie");
    // Creates the Cookie
    Cookies.set(cookieName, "verified", { expires: 365 });
    // Then submit the form
    return true;
  });
});