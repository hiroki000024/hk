window.addEventListener("load", function() {
  let btn = document.querySelector("#main_sub");
  btn.addEventListener("click", function(e) {
  let btn2 = document.getElementById("main_text").value;
  console.log(btn2)
  e.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/main/create',
      data: btn2,
      dataType:'json'
    })
  })
});