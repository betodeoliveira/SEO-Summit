var timeclass = 'translate-time';

$(document).ready(function() {
  var wfdc = $('.' + timeclass);

  wfdc.each(function() {
    var wfdctxt = $(this).text();

    var timeEn = [
      ':',
    ];

    var timePtbr = [
      'h',
    ];

    for (var i = 0; i < timeEn.length; i++) {
      wfdctxt = wfdctxt.replace(timeEn[i], timePtbr[i]);
    }

    $(this).text(wfdctxt);
  });
});