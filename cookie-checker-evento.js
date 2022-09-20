  if (window.location.href.indexOf(".webflow.io") > -1) {
  // it is on test mode
}
else {
  var cookieEvento = "seo-summit-2022";
  var cookieUserEmail = "seo-summit-user-email";
  // First checks if the user already has the cookie or not
  if (typeof Cookies.get(cookieEvento) !== "undefined") {
    // console.log("cookie exists");
    window.location.href = "/palcos/palco-negocio";
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
      Cookies.set(cookieEvento, "verified", { expires: 30 });
      // Save user email to submit it again when they visit the palco tech page
      Cookies.set(cookieUserEmail, $("#input-field-verified-email").val(), { expires: 30 });
      // Then submit the form
      return true;
    });
  });
}