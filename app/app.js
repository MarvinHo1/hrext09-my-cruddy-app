$(document).ready(function() {

$('#list').html(localStorage.getItem('Notes'));

$('.form').submit(function(event){
  event.preventDefault();
  var inputText = $('#notes').val();
  $('#list').append("<li>" + inputText + "</li>");
    localStorage.setItem('Notes', $('#list').html());
  $('#notes').val("");
});

$('ul').on('click', 'li', function(){
  $(this).fadeOut(500);
  localStorage.setItem('Notes', $('#list').html());
});

$('#clearBtn').click(function() {
    window.localStorage.removeItem('Notes');
    $("#list").empty()
});

    $('#diet-types').change(function (){
      var selectOption = $('#diet-types option:selected');
      // console.log(selectOption.val());
    $('#places').change(function (){
      var selectOption1 = $('#places option:selected');
      // console.log(selectOption1.val())
        if (selectOption.val() === "Keto" && selectOption1.val() === "McD"){
          $(".container2").css("background-image", "url('fries.jpg')");
          $(".container2").css("background-size", "contain");
          // console.log('hello')
        var mcKeto = JSON.parse(localStorage.getItem('mcd-keto'))
            // console.log(mcKeto)
    $.each(mcKeto.mcd_keto, function(key, value){
       $('#add-menu').append(
        `<tr>
            <td class="m-items">${value.menuItem}</td>
            <td class="cal">${value.calories}</td>
            <td class="carb">${value.carbs}</td>
            <td class="protein">${value.protein}</td>
            <td class="sugar">${value.sugar}</td>
            </tr>`);
        })
      } else if(selectOption.val() === "Vegetarian" && selectOption1.val() === "McD"){
        $(".container2").css("background-image", "url('mac.jpg')");
      var mcVeg = JSON.parse(localStorage.getItem('mcd-veg'))
          $.each(mcVeg.mcd_veg, function(key, value){
       $('#add-menu').append(
        `<tr>
            <td class="m-items">${value.menuItem}</td>
            <td class="cal">${value.calories}</td>
            <td class="carb">${value.carbs}</td>
            <td class="protein">${value.protein}</td>
            <td class="sugar">${value.sugar}</td>
            </tr>`);
        })
      } else if (selectOption.val() === "Keto" && selectOption1.val() === "BK"){
        $(".container2").css("background-image", "url('bk.jpg')");
      var bkKeto = JSON.parse(localStorage.getItem('bk-keto'))
          $.each(bkKeto.bk_keto, function(key, value){
       $('#add-menu').append(
        `<tr>
            <td class="m-items">${value.menuItem}</td>
            <td class="cal">${value.calories}</td>
            <td class="carb">${value.carbs}</td>
            <td class="protein">${value.protein}</td>
            <td class="sugar">${value.sugar}</td>
            </tr>`);
        })
      } else if (selectOption.val() === "Vegetarian" && selectOption1.val() === "BK"){
        $(".container2").css("background-image", "url('bk2.jpg')");
      var bkKeto = JSON.parse(localStorage.getItem('bk-keto'))
          $.each(bkKeto.bk_keto, function(key, value){
       $('#add-menu').append(
        `<tr>
            <td class="m-items">${value.menuItem}</td>
            <td class="cal">${value.calories}</td>
            <td class="carb">${value.carbs}</td>
            <td class="protein">${value.protein}</td>
            <td class="sugar">${value.sugar}</td>
            </tr>`);
        })

      }
    })
  })

$('#refresh').click(function(){
window.location.reload()
})
});


// {"menuItem":"McNasty w/o sauce","calories":650,"carbs":3,"protein":50,"sugar":5},
// {"menuItem":"Mcpatty...","calories": "ouch","carbs": 0,"protein": 10,"sugar":0},
// {"menuItem":"McEgg","calories":90,"carbs":0,"protein":5,"sugar":0},
// {"menuItem":"McBunless Chicken Sandwhich","calories":250,"carbs":3,"protein":25,"sugar":3},
// {"menuItem":"McStuff","calories":450,"carbs":10,"protein":100000,"sugar":0},
// {"menuItem":"McAir","calories":0.5,"carbs":0,"protein":0.2,"sugar":0},
// {"menuItem":"McFill_Me_In","calories":10,"carbs":1,"protein":150,"sugar":51},
// {"menuItem":"McHackReactor","calories":"Stress","carbs":"Too Much","protein":"you get none","sugar":"no sugar Salt level 1000000000000"}

// {"mcd_veg":[{"menuItem":"Salad w/ crutons","calories":375,"carbs":30,"protein":0,"sugar":8},
// {"menuItem":"Vegetarian McMuffin","calories":250,"carbs":15,"protein":8,"sugar":0},
// {"menuItem":"Fruit & Maple Oatmeal","calories":425,"carbs":20,"protein":5,"sugar":5},
// {"menuItem":"Rabbit Food","calories":280,"carbs":15,"protein":5,"sugar":0},
// {"menuItem":"Cookies","calories":150,"carbs":15,"protein":0,"sugar":15},
// {"menuItem":"Food Vegitarian Likes","calories":195,"carbs":30,"protein":10,"sugar":5}]}

// {"bk_keto":[{"menuItem":"BKnasty w/o sauce","calories":650,"carbs":3,"protein":50,"sugar":5},
// {"menuItem":"BKpatty","calories": "ouch","carbs": 0,"protein": 10,"sugar":0},
// {"menuItem":"BKegg","calories":90,"carbs":0,"protein":5,"sugar":0},
// {"menuItem":"BKbunless Chicken Sandwhich","calories":250,"carbs":3,"protein":25,"sugar":3},
// {"menuItem":"BKstuff","calories":450,"carbs":10,"protein":100000,"sugar":0},
// {"menuItem":"BKair","calories":0.5,"carbs":0,"protein":0.2,"sugar":0},
// {"menuItem":"BKbk","calories":10,"carbs":1,"protein":150,"sugar":51}]}

// {"bk_veg":[{"menuItem":"BK Salad w/ crutons","calories":375,"carbs":30,"protein":0,"sugar":8},
// {"menuItem":"Vegetarian BKmcMuffin","calories":250,"carbs":15,"protein":8,"sugar":0},
// {"menuItem":"BKfruit & Maple Oatmeal","calories":425,"carbs":20,"protein":5,"sugar":5},
// {"menuItem":"BKrabbit Food","calories":280,"carbs":15,"protein":5,"sugar":0},
// {"menuItem":"BKcookies","calories":150,"carbs":15,"protein":0,"sugar":15},
// {"menuItem":"BKfood Vegitarian Likes","calories":195,"carbs":30,"protein":10,"sugar":5}]}

/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

*/

//localStorage interaction function
//get item
// var getItem = function (key) {
//   return window.localStorage.getItem(key);
// }

// //create
// var createItem = function(key, value) {
//   return localStorage.setItem(key,value);
// }

// //update
// var updateItem = function(key, value) {
//   return window.localStorage.setItem(key, value);
// }

// //delete
// var deleteItem = function(key) {
//   return window.localStorage.removeItem(key);
// }

// // //clear everything
// // var clearEverything = function() {
// //   return window.localStorage.clear();
// // }

// var keyExists = function(key) {
//   var currentValue = getItem(key);
//   return currentValue !== null;
// }



  // $('#removeButton').click(function() {
  //   return window.localStorage.removeItem('Notes')
  // });

  // $('#createButton').click(function(event) {
  //   event.preventDefault();

  //   var currentKey = $("#keyInput").val();
  //   var currentValue = $("#valueInput").val();
  //   // if (keyExists(currentKey)) {
  //   //   //current key exists, do something error-handle-y
  //   // } else {
  //     createItem(currentKey, currentValue);
  //   // }
  // });

  // $('#updateButton').click(function(event) {
  //   event.preventDefault();

  //   var currentKey = $("#keyInput").val();
  //   var currentValue = $("#valueInput").val();
  //   if (keyExists(currentKey)) {
  //     updateItem(currentKey, currentValue);
  //   } else {
  //     //current key doesnt exist, do stuff
  //   }
  // });

  // $('#clearButton').click(function(event){
  // return window.localStorage.clear();
  // })

///////////////////////////////////////////
//event handlers for the buttons and ... possibly the inputboxes
  //preventdefault on button clicks