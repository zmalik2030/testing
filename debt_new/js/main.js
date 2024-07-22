// ===============fieldset============
$(document).on("click", ".nextBtn", function () {
  var curntField = $(this).parents("fieldset");
  var nextField = curntField.next("fieldset");
  $(".option >ul>li").eq($("fieldset").index(nextField)).addClass("active");
  curntField.hide();
  nextField.show();
});

$(document).on("click", ".backBtn", function () {
  var curntField = $(this).parents("fieldset");
  var prevField = curntField.prev("fieldset");
  $(".option >ul>li").eq($("fieldset").index(curntField)).removeClass("active");
  curntField.hide();
  prevField.show();
});
