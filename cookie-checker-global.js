if (window.location.href.indexOf("webflow.io") > -1) {
  // it is on test mode
  $(".evento-display-trigger").click();
}
else {
  // First checks if the user already has the cookie or not
  var cookieName = "seo-summit-2022";
  if (typeof Cookies.get(cookieName) !== "undefined") {
    // console.log("cookie exists");
    $(".evento-display-trigger").click();
  } else {
    // console.log("cookie doesn't exists");
    Cookies.set("seo-summit-previous-url", window.location.href, { expires: 30 });
    window.location.href = "/evento";
  }
}
