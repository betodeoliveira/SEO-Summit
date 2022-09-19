// Palco Tech doesn't has names for each day so we need to hide the title if it is selected
$("#select-field-palco").change(function() {
    console.log($("#select-field-palco").val());
    if($("#select-field-palco").val() == "Palco SEO Tech") {
        $(".programacao-title-wrapper").css("display", "none");
    }
    else {
        $(".programacao-title-wrapper").css("display", "block");
    }
});

// Select the correct title depending on the day selected
$("#select-field-dia").change(function() {
    // console.log($("#select-field-dia").val());
    if($("#select-field-dia").val() == "21") {
        $(".programacao-dia-title.is-01").css("display", "block");
        $(".programacao-dia-title.is-02").css("display", "none");
        $(".programacao-dia-title.is-03").css("display", "none");
    } else if($("#select-field-dia").val() == "22") {
        $(".programacao-dia-title.is-01").css("display", "none");
        $(".programacao-dia-title.is-02").css("display", "block");
        $(".programacao-dia-title.is-03").css("display", "none");
    }
    else {
        $(".programacao-dia-title.is-01").css("display", "none");
        $(".programacao-dia-title.is-02").css("display", "none");
        $(".programacao-dia-title.is-03").css("display", "block");
    }
});

$(".progrmacao-select-field").change(function() {
    $("#programacao").click();
});