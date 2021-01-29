$(function() {
    var title = document.title,
      animSeq = ["|"],
        animIndex = 0,
        titleIndex = 0;
    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 1) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[0];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 150);
});
$(function() {
  $(".typed").typed({
      strings: ['dru9p0dru9', "Так так... Знаешь... Даже смертельно раненое животное... Загнаное в угол... Будет до последнего сражаться за свою жизнь... Но вы люди... Считающие себя самой совершенной формой жизни на планете... Готовы обосраться со страху... Когда попадаете в заподню..."],
      typeSpeed: 100,
      loop: true,
      cursorChar: "|",
  });
});
