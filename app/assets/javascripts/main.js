$(function(){
  function htmlKotoba(kotoba){
    var html =`<div class="mini_content" data-kotoba-id="${kotoba.id}">
                  ${kotoba.word}

              </div>`
    return html
  }
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
    .done(function(kotoba){
      var html = htmlKotoba(kotoba);
      $('.main_contents').append(html)
      $("#main_text").val("")
    })
    .fail(function(){
      arert("エラーが出ております")
    })
  })
  var autometion = function(){
    var lastId = $('.mini_content').last().data('kotoba-id');

    $.ajax({
      type:"GET",
      dataType:"json",
      url:'/api/main',
      data:{id:lastId}
    })
    .done(function(love){
      console.log(love)

    })
    .fail(function(){
      // alert("更新できません");
    })
  };
  setInterval(autometion, 5000);
  // autometion()
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