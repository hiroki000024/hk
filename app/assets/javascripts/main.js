$(function(){
  $('#sample').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false,
    })
  })
})






// window.addEventListener("load", function() {
//   let btn = document.querySelector("#main_sub");
//   btn.addEventListener("click", function(e) {
//   let btn2 = document.getElementById("main_text").value;
//   e.preventDefault();
//     $.ajax({
//       type: 'POST',
//       url: '/main/create',
//       data: btn2,
//       dataType:'json'
//     })
//     .done(function(data){
//       console.log(btn2)
//     })
//     .fail(function(){

//     })
//   })
// });