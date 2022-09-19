// Get the current Date
let date = new Date();
// Convert the current Date to an UTC Date
let dateUTC = new Date(date.toUTCString());
// Set the Date as UTC - 3
dateUTC.setHours(dateUTC.getHours() - 3);
// Get the Day
currentDay = date.getUTCDate();

let cookieUserEmail = "seo-summit-user-email";

let cookieDay21 = "cookie-day-21";
let cookieDay22 = "cookie-day-22";
let cookieDay23 = "cookie-day-23";

if (window.location.href.indexOf("palco-seo-tech") > -1) {
    setTimeout(() => {  
        if(currentDay == "21") {
            if (typeof Cookies.get(cookieDay21) == "undefined") {
                Cookies.set(cookieDay21, "verified", { expires: 30 });
                $("#palco-tech-email-dia-1").val(Cookies.get(cookieUserEmail));
                setTimeout(() => {  
                    $("#wf-form-Palco-Tech---Dia-1").submit();
                }, 2000);
            }
        }
        else if(currentDay == "22") {
            if (typeof Cookies.get(cookieDay22) == "undefined") {
                Cookies.set(cookieDay22, "verified", { expires: 30 });
                $("#palco-tech-email-dia-2").val(Cookies.get(cookieUserEmail));
                setTimeout(() => {  
                    $("#wf-form-Palco-Tech---Dia-2").submit();
                }, 2000);
            }
        }
        else{
            if (typeof Cookies.get(cookieDay23) == "undefined") {
                Cookies.set(cookieDay23, "verified", { expires: 30 });
                $("#palco-tech-email-dia-3").val(Cookies.get(cookieUserEmail));
                setTimeout(() => {  
                    $("#wf-form-Palco-Tech---Dia-3").submit();
                }, 2000);
            }
        }
    }, 2000);
};