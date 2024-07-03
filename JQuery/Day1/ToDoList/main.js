
let but = $(".add")[0];
let inp = $("input")[0];
$(but).on("click", function () {

    let myNode = $(inp).val();

//   console.log(myNode === "");
    if(myNode != ""){
        $(".contenar").show();
        $(".contenar").append(`
            <div class='note'>
                <p>${myNode}</p>
                <button class='delete'>delete</button>
            </div>
        `);
    $(inp).val('');
    }
  
});
// $(".delete").click(function () {
//     $(this).parent().remove();
// })
$(document).on("click", ".delete", function() {
    $(this).parent().remove();
});