$(function(){
  $(".questionnaire").submit(function(event){
    event.preventDefault();
    var ques1 = parseInt($("#q1select option:selected").val());
    var ques2 = parseInt($("#q2select option:selected").val());
    var ques3 = parseInt($("#q3select option:selected").val());
    var ques4 = parseInt($("#q4select option:selected").val());
    var ques5 = parseInt($("#q5select option:selected").val());
    var ques6 = parseInt($("#q6select option:selected").val());
    var star;
    var total = ques1 + ques2 + ques3 + ques4 + ques5;

    if(!ques6) {
      if (total >= 5 && total <10){
        star="Bob";
      } else if(total >= 10 && total < 15){
        star="Mary";
      } else {
        star="Larry";
      }
    } else {
      star="Kenny";
    }

    $(".output").empty().append("<div class='thumbnail'><img src='img/"+ star +".png'><div class='caption'><h3>You are: " + star + "</h3></div></div>");

  })
})
