$(function(){
  function kotobaHTML(data){
    var html =`<div class="mini_content" data-kotoba-id="${data.id}">
                  ${data.word}

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
    .done(function(ajaxで帰ってきたdata){
      // var html = htmlKotoba(kotoba);
      // $('.main_contents').append(html
      $('.main_contents').append(kotobaHTML(ajaxで帰ってきたdata))
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
      if (love.length === 0){
      return 
      } else {
        love.foreach( function( value, index, array ) {
 
          // 繰り返し処理を書く
         
        });
      var html = htmlKotoba(love);
      $('.main_contents').append(html);
      }
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