$(document).ready(function () {
  var arr = [];
  // add delete buttotn on every div and section body 
  $('body').on('click', '.dltbtn', function () {
    // console.log('0000000000000000000');
    // console.log(this);
    $(this).parent().children().remove()
  })



  $('.heading-form1').on('submit', function (e) {
    e.preventDefault();

    var value1 = $('.heading1').val();
    // console.log(value1);
    $("main").append(`<section class="Heading-append ml-5 mt-2"><h1 style="display: inline;">${value1} </h1> <button class="dltbtn" style="display: inline;">X</button></section> `);
    $("form").trigger("reset");
    $(".headinglist").find("option").remove();
    $(".headinglist").append(`<option value=''> select </option>`)
    $(".headinglist1").find("option").remove();
    $(".headinglist1").append(`<option value=''> select </option>`)
    $("main section h1").each(function (index) {
      $(".headinglist").append(`<option value='${index + 1}'>` + $(this).text() + `</option>`)
      $(".headinglist1").append(`<option value='${index + 1}'>` + $(this).text() + `</option>`)
    });
    arr.push({ 'title': value1, 'subarr': [] });
    localStorage.setItem('key', JSON.stringify(arr));
  });

  $('.heading-form2').on('submit', function (e) {
    e.preventDefault();
    var heading = $('.headinglist option:selected').val();
    var subheading = $('.heading2').val();
    // console.log(heading);
    $(`main section:nth-child(${heading})`).append(`<div class="subHeading-append mt-2" style="margin-left: 60px;"><h2 style="display: inline;">${subheading} </h2><button class="dltbtn" style="display: inline;">X</button></div>`);
    $("form").trigger("reset");

    $('.headinglist1').on('change', function (e) {
      e.preventDefault();
      var value1 = $('.headinglist1 option:selected').val();
      // console.log(value1, '55555555555555');
      $(".subheadinglist1").find("option").remove();
      $(".subheadinglist1").append(`<option value=''> select </option>`);
      $(`main section:nth-child(${value1}) div h2`).each(function (index) {
        // console.log($(this).text(), 'pppppppppppppp');
        $(".subheadinglist1").append(`<option value='${index + 1}'>` + $(this).text() + `</option>`);
      });
    });
    arr[heading - 1].subarr.push({ 'subheading': subheading, 'subarr1': [] });
    localStorage.setItem('key', JSON.stringify(arr));
  });

  $('.heading-form3').on('submit', function (e) {
    e.preventDefault();
    var inputType = $('#inputType').val();
    // console.log(inputType, 'ppppppppppp');
    var label1 = $('#label').val();
    var class1 = $('#class').val();
    var valu = $('#value').val();
    var name1 = $('#name').val();
    var placeholder1 = $('#placeholder').val();
    var selectOption1 = $('#selectOption').val().split(",");

    // var selectedGender = $('input[name="gender"]:checked').val();
    var value1 = $('.headinglist1 option:selected').val();
    var value2 = $('.subheadinglist1 option:selected').val();
    // console.log(value1, '1111', subhead, '2222');
    var subhead = parseInt(value2) + 2;

    //Select option in display
    // var selected_option = $('#selectOption').val();
    // var optionsArr = selected_option.split(",")

    //Redio option in display
    // var selected_value = $('#selectOption').val();
    // var optionredio = selected_value.split(",")

    //Checkbox option in display
    // var checkvalue = $('#selectOption').val();
    // var optionsArr3 = checkvalue.split(",")

    //Textarea option in display
    // var textareavalue = $('#selectOption').val();
    // var textareaoptions = textareavalue.split(",")

    //File option in display
    // var filevalue = $('#selectOption').val();
    // var fileoptions = filevalue.split(",")


    //Select option in display
    if (inputType === 'select') {
      // console.log(selected_option, 'ooooooooooo', selected_option);
      var selectoption = ''
      for (i = 0; i < selectOption1.length; i++) {
        // console.log(i, optionsArr[i]);
        selectoption += `<option value="${selectOption1[i]}"> ${selectOption1[i]} `
      };
      $(`main section:nth-child(${value1}) div:nth-child(${subhead})`).append(`<p class="sortable" style="margin-left: 70px;" style="display: inline;"> <label>${label1}</label><select>${selectoption}</select><button class="dltbtn" style="display: inline;">X</button><br></p>`);
      arr[value1 - 1].subarr[value2 - 1].subarr1.push({ 'inputvalue': inputType, label1, class1, valu, name1, placeholder1, selectOption1 });
      localStorage.setItem('key', JSON.stringify(arr));
    }

    //Redio option in display
    else if (inputType === 'radio') {
      // console.log(selected_value, 'ooooooooooo', selected_value);
      var optionsHTML1 = ''
      for (i = 0; i < selectOption1.length; i++) {
        // console.log(i, optionredio[i]);
        optionsHTML1 += `<br><input type="radio" value="${selectOption1[i]}"> ${selectOption1[i]} `
      };
      $(`main section:nth-child(${value1}) div:nth-child(${subhead})`).append(`<p class="sortable" style="margin-left: 70px;" style="display: inline;"> <label>${label1}${optionsHTML1}  </label> <button class="dltbtn" style="display: inline;">X</button> <br></p>`);
      arr[value1 - 1].subarr[value2 - 1].subarr1.push({ 'inputvalue': inputType, label1, class1, valu, name1, placeholder1, selectOption1 });
      localStorage.setItem('key', JSON.stringify(arr));
    }

    //Checkbox option in display
    else if (inputType == "checkbox") {
      var checkboxoption = ''
      for (i = 0; i < selectOption1.length; i++) {
        // console.log(i, optionsArr3[i]);
        checkboxoption += `<input type="checkbox" value="${selectOption1[i]}"> ${selectOption1[i]} `
      };
      $(`main section:nth-child(${value1}) div:nth-child(${subhead})`).append(`<p class="sortable" style="margin-left: 70px;" style="display: inline;"> <label>${label1} ${checkboxoption}</label>  <button class="dltbtn" style="display: inline;">X</button><br></p> `);
      arr[value1 - 1].subarr[value2 - 1].subarr1.push({ 'inputvalue': inputType, label1, class1, valu, name1, placeholder1, selectOption1 });
      localStorage.setItem('key', JSON.stringify(arr));
    }

    //Textarea option in display
    else if (inputType === 'textarea') {
      // console.log(selected_value, 'ooooooooooo', selected_value);
      // var textareaoption1 = ''
      // for (i = 0; i < textareaoptions.length; i++) {
      //   console.log(i, textareaoptions[i]);
      //   textareaoption1 += `"${textareaoptions[i]}"`
      // };
      $(`main section:nth-child(${value1}) div:nth-child(${subhead})`).append(`<p class="sortable" style="margin-left: 70px;" style="display: inline;"> <label>${label1}:- </label> <textarea> ${valu} </textarea><button class="dltbtn" style="display: inline;">X</button> </p>`);
      arr[value1 - 1].subarr[value2 - 1].subarr1.push({ 'inputvalue': inputType, label1, class1, valu, name1, placeholder1, selectOption1 });
      localStorage.setItem('key', JSON.stringify(arr));
    }
    //File option in display
    else if (inputType === 'file') {
      // console.log(selected_value, 'ooooooooooo', selected_value);
      var fileoption1 = ''
      for (i = 0; i < selectOption1.length; i++) {
        // console.log(i, fileoptions[i]);
        fileoption1 += `"${selectOption1[i]}"`
      };
      $(`main section:nth-child(${value1}) div:nth-child(${subhead})`).append(`<p class="sortable" style="margin-left: 70px;" style="display: inline;"> <label>${label1}:- </label> <br> <input type="file" ${fileoption1} "/> <button class="dltbtn" style="display: inline;">X</button> </p>`);
      arr[value1 - 1].subarr[value2 - 1].subarr1.push({ 'inputvalue': inputType, label1, class1, valu, name1, placeholder1, selectOption1 });
      localStorage.setItem('key', JSON.stringify(arr));
    }

    //Button option in display
    else if (inputType === 'button') {
      $(`main section:nth-child(${value1}) div:nth-child(${subhead})`).append(`<p class="sortable" style="margin-left: 70px;" style="display: inline;"> <label>${label1}:- </label> <button> ${valu} </button> <button class="dltbtn" style="display: inline;">X</button></p>`);
      arr[value1 - 1].subarr[value2 - 1].subarr1.push({ 'inputvalue': inputType, label1, class1, valu, name1, placeholder1, selectOption1 });
      localStorage.setItem('key', JSON.stringify(arr));
    }

    else {
      $(`main section:nth-child(${value1}) div:nth-child(${subhead})`).append(`<p class="sortable" style="margin-left: 70px;" style="display: inline;"> <label>${label1}</label> <input class="${class1}" value="${valu}" name="${name1}" placeholder="${placeholder1}"/> <button class="dltbtn" style="display: inline;">X</button></p> <br>`);
      arr[value1 - 1].subarr[value2 - 1].subarr1.push({ 'inputvalue': inputType, label1, class1, valu, name1, placeholder1, selectOption1 });
      localStorage.setItem('key', JSON.stringify(arr));
    }

  });
});

$(document).ready(function () {
  var arr = [];

  function loadDataFromLocalStorage() {
    var localData = localStorage.getItem('key');
    if (localData) {
      arr = JSON.parse(localData);
      renderData();
    }
  }

  function saveDataToLocalStorage() {
    localStorage.setItem('key', JSON.stringify(arr));
  }

  // $( function() {
  //   $( "#drag" ).draggable();
  //   $( "#drop" ).droppable(
  //       {
  //           drop :function()
  //       {
  //           alert("I am dropped");
  //       }
  //       } );
  //       } );

  function renderData() {
    $('main').empty();
    for (var i = 0; i < arr.length; i++) {
      var section = $(`<section class="sortable ml-5 mt-2" id="drop"><h1 style="display: inline;">${arr[i].title}<button class="dltbtn-section" data-section-index="${i}" style="display: inline;">X</button></h1></section>`);
      
      $('main').sortable({
        connectWith: 'section',
      });

      for (var j = 0; j < arr[i].subarr.length; j++) {
        var subHeading = $(`<div class="sortable mt-2" style="margin-left: 100px;" id="drop"><h2 style="display: inline;">${arr[i].subarr[j].subheading}<button class="dltbtn-subheading" data-section-index="${i}" data-subheading-index="${j}" style="display: inline;">X</button></h2><br></div>`);

        for (var k = 0; k < arr[i].subarr[j].subarr1.length; k++) {
          var inputType = arr[i].subarr[j].subarr1[k].inputvalue;
   
          if (inputType === 'select') {
            var selectOptions = arr[i].subarr[j].subarr1[k].selectOption1.map(option => `<option value="${option}">${option}</option>`)
            subHeading.append(`<p class="sortable" style="margin-left: 70px;" id="drag" id="drop" style="display: inline;"><label>${arr[i].subarr[j].subarr1[k].label1}<select>${selectOptions}</select><button class="dltbtn-value" data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}" style="display: inline;">X</button></label><br></p>`);
          }

          else if (inputType === 'radio') {
            var radioOptions = arr[i].subarr[j].subarr1[k].selectOption1.map(option => `<br><input type="radio" value="${option}">${option}`)
            subHeading.append(`<p class="sortable" style="margin-left: 70px;" id="drag" id="drop" style="display: inline;"><label>${arr[i].subarr[j].subarr1[k].label1}${radioOptions}<button class="dltbtn-value" data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}" style="display: inline;">X</button></label><br></p>`);
          }

          else if (inputType === 'checkbox') {
            var radioOptions = arr[i].subarr[j].subarr1[k].selectOption1.map(option => `<br><input type="checkbox" value="${option}">${option}`)
            subHeading.append(`<p class="sortable" style="margin-left: 70px;" id="drag" id="drop" style="display: inline;"><label>${arr[i].subarr[j].subarr1[k].label1}${radioOptions}<button class="dltbtn-value" data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}" style="display: inline;">X</button></label><br></p>`);
          }

          else if (inputType === 'file') {
            subHeading.append(`<p class="sortable" style="margin-left: 70px;" id="drag" id="drop" style="display: inline;"><label>${arr[i].subarr[j].subarr1[k].label1}<input type="file" value="${arr[i].subarr[j].subarr1[k].valu}"/><button class="dltbtn-value" data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}" style="display: inline;">X</button></label><br></p>`);
          }

          else if (inputType === 'button') {
            subHeading.append(`<p class="sortable" style="margin-left: 70px;" id="drag" id="drop" style="display: inline;"><label>${arr[i].subarr[j].subarr1[k].label1}<input type="button" value="${arr[i].subarr[j].subarr1[k].valu}"/><button class="dltbtn-value" data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}" style="display: inline;">X</button></label><br></p>`);
          }

          else if (inputType === 'textarea') {
            subHeading.append(`<p class="sortable" style="margin-left: 70px;" id="drag" id="drop" style="display: inline;"><label>${arr[i].subarr[j].subarr1[k].label1}<input type="textarea" value="${arr[i].subarr[j].subarr1[k].valu}"/><button class="dltbtn-value" data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}" style="display: inline;">X</button></label><br></p>`);
          }

          else if (inputType === 'number') {
            subHeading.append(`<p class="sortable" style="margin-left: 70px;" id="drag" id="drop" style="display: inline;"><label>${arr[i].subarr[j].subarr1[k].label1}<input type="number" value="${arr[i].subarr[j].subarr1[k].valu}"/><button class="dltbtn-value" data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}" style="display: inline;">X</button></label><br></p>`);
          }

          else if (inputType === 'email') {
            subHeading.append(`<p class="sortable" style="margin-left: 70px;" id="drag" id="drop" style="display: inline;">${arr[i].subarr[j].subarr1[k].label1}</label><input type="email" value="${arr[i].subarr[j].subarr1[k].valu}"/><button class="dltbtn-value" data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}" style="display: inline;">X</button><label><br></p>`);
          }

          else if (inputType === 'text') {
            subHeading.append(`<span><p id="drag" class="sortable" data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}" style="margin-left: 70px;"><label>${arr[i].subarr[j].subarr1[k].label1}<input type="text" value="${arr[i].subarr[j].subarr1[k].valu}"/><button class="dltbtn-value" data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}" style="display: inline;">X</button></label><br></p></span>`);
          }
        }
        $("form").trigger("reset");
        $(".headinglist").find("option").remove();
        $(".headinglist").append(`<option value=''> select </option>`)
        $(".headinglist1").find("option").remove();
        $(".headinglist1").append(`<option value=''> select </option>`)
        $("main section h1").each(function (index) {
          $(".headinglist").append(`<option value='${index + 1}'>` + $(this).text() + `</option>`)
          $(".headinglist1").append(`<option value='${index + 1}'>` + $(this).text() + `</option>`)
        });
        section.append(subHeading);
      }
      $("form").trigger("reset");
        $(".headinglist").find("option").remove();
        $(".headinglist").append(`<option value=''> select </option>`)
        $(".headinglist1").find("option").remove();
        $(".headinglist1").append(`<option value=''> select </option>`)
        $("main section h1").each(function (index) {
          $(".headinglist").append(`<option value='${index + 1}'>` + $(this).text() + `</option>`)
          $(".headinglist1").append(`<option value='${index + 1}'>` + $(this).text() + `</option>`)
        });
        // arr.push({ 'title': value1, 'subarr': [] });
        // localStorage.setItem('key', JSON.stringify(arr));
      $('main').append(section);
    }
  }

  $('body').on('click', '.dltbtn-section', function () {
    var sectionIndex = parseInt($(this).data('section-index'));
    arr.splice(sectionIndex, 1);
    saveDataToLocalStorage();
    renderData();
  });

  $('body').on('click', '.dltbtn-subheading', function () {
    var sectionIndex = parseInt($(this).data('section-index'));
    var subheadingIndex = parseInt($(this).data('subheading-index'));
    arr[sectionIndex].subarr.splice(subheadingIndex, 1);

    saveDataToLocalStorage();
    renderData();
  });

  $('body').on('click', '.dltbtn-value', function () {
    var sectionIndex = parseInt($(this).data('section-index'));
    var subheadingIndex = parseInt($(this).data('subheading-index'));
    var subheadingValueIndex = parseInt($(this).data('subheading-value-index'));
    console.log(subheadingValueIndex, '654646464646644646');
    arr[sectionIndex].subarr[subheadingIndex].subarr1.splice(subheadingValueIndex, 1);
    saveDataToLocalStorage();
    renderData();
  });

  loadDataFromLocalStorage();


$('section').sortable({
  connectWith: 'section',
  update: function() {
    var changedList = this.id;
    // var order = $(this).sortable('toArray');
    // var positions = order.join(';');
    
    console.log({
      id: changedList,
      positions: positions,
      position: relative,
    });
  }
});


});










// window.onload = function () {
//   check();

//   function check() {
//     var localrestore = localStorage.getItem('key');
    
//     if (localrestore) {
//       $('main').empty();  
    
//       var newObj = JSON.parse(localrestore);
      
//       for (var i = 0; i < newObj.length; i++) {
//         var section = $(`<section class="Heading-append ml-5 mt-2"><h1>${newObj[i].title}</h1><button class="dltbtn1" id="item1">X</button></section>`);

//         for (var j = 0; j < newObj[i].subarr.length; j++) {
//           var subHeading = $(`<div class="subHeading-append mt-2" style="margin-left: 100px;"><h2>${newObj[i].subarr[j].subheading}</h2><button class="dltbtn2" id="item2">X</button><br></div>`);

//           for (var k = 0; k < newObj[i].subarr[j].subarr1.length; k++) {
//             var inputType = newObj[i].subarr[j].subarr1[k].inputvalue;

//             if (inputType === 'select') {
//               var selectOptions = newObj[i].subarr[j].subarr1[k].selectOption1.map(option => `<option value="${option}">${option}</option>`)
//               subHeading.append(`<p class="sortable" style="margin-left: 70px;" style="display: inline;"><label>${newObj[i].subarr[j].subarr1[k].label1}</label><select>${selectOptions}</select><button class="dltbtn3" data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}">X</button><br></p>`);
//             } 
            
//             else if (inputType === 'radio') {
//               var radioOptions = newObj[i].subarr[j].subarr1[k].selectOption1.map(option => `<br><input type="radio" value="${option}">${option}`)
//               subHeading.append(`<p class="sortable" style="margin-left: 70px;" style="display: inline;"><label>${newObj[i].subarr[j].subarr1[k].label1}${radioOptions}</label><button class="dltbtn3" data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}">X</button><br></p>`);
//             }
            
//             else if (inputType === 'checkbox') {
//               var radioOptions = newObj[i].subarr[j].subarr1[k].selectOption1.map(option => `<br><input type="checkbox" value="${option}">${option}`)
//               subHeading.append(`<p class="sortable" style="margin-left: 70px;" style="display: inline;"><label>${newObj[i].subarr[j].subarr1[k].label1}${radioOptions}</label><button class="dltbtn3" data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}">X</button><br></p>`);
//             }
            
//             else if (inputType === 'file') {
//               subHeading.append(`<p class="sortable" style="margin-left: 70px;" style="display: inline;"><label>${newObj[i].subarr[j].subarr1[k].label1}</label><input type="file" value="${newObj[i].subarr[j].subarr1[k].valu}"/><button class="dltbtn3" data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}">X</button><br></p>`);
//             }
            
//             else if (inputType === 'button') {
//               subHeading.append(`<p class="sortable" style="margin-left: 70px;" style="display: inline;"><label>${newObj[i].subarr[j].subarr1[k].label1}</label><input type="button" value="${newObj[i].subarr[j].subarr1[k].valu}"/><button class="dltbtn3" data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}">X</button><br></p>`);
//             }
            
//             else if (inputType === 'textarea') {
//               subHeading.append(`<p class="sortable" style="margin-left: 70px;" style="display: inline;"><label>${newObj[i].subarr[j].subarr1[k].label1}</label><input type="textarea" value="${newObj[i].subarr[j].subarr1[k].valu}"/><button class="dltbtn3" data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}">X</button><br></p>`);
//             }
            
//             else if (inputType === 'number') {
//               subHeading.append(`<p class="sortable" style="margin-left: 70px;" style="display: inline;"><label>${newObj[i].subarr[j].subarr1[k].label1}</label><input type="number" value="${newObj[i].subarr[j].subarr1[k].valu}"/><button class="dltbtn3" data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}">X</button><br></p>`);
//             }
            
//             else if (inputType === 'email') {
//               subHeading.append(`<p class="sortable" style="margin-left: 70px;" style="display: inline;"><label>${newObj[i].subarr[j].subarr1[k].label1}</label><input type="email" value="${newObj[i].subarr[j].subarr1[k].valu}"/><button class="dltbtn3" data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}">X</button><br></p>`);
//             }

//             else if (inputType === 'text') {
//               subHeading.append(`<p data-section-index="${i}" data-subheading-index="${j}" data-subheading-value-index="${k}" style="margin-left: 70px;"><label>${newObj[i].subarr[j].subarr1[k].label1}</label><input type="text" value="${newObj[i].subarr[j].subarr1[k].valu}"/><button class="dltbtn3">X</button><br></p>`);
//             }

//             $('p').ready(function() {
              
//               // Event listener for the button click using event delegation
//               $('p').on('click', '.dltbtn3', function() {
//                 var datas = JSON.parse(localStorage.getItem('key'));
//                 var paragraphId = $(this).closest('p').attr('#item3');
//                 console.log(datas, '99999999999999999');
            
//                 // Clear the content of the specified paragraph
//                 // $(this).closest('p').remove();
            
//                 // Remove the item associated with the paragraph from localStorage
//                 localStorage.removeItem(paragraphId);  
//                 datas = datas.filter(item3 => item3 !== paragraphId);
//                 console.log(datas, '55555555555555555555555555555555555555555');
//                 localStorage.setItem('key', JSON.stringify(datas));
//               });
//             });
//           }
//           section.append(subHeading);
//         }
//         // var value1 = $('.headin/g1').val();
//         $("form").trigger("reset");
//         $(".headinglist").find("option").remove();
//         $(".headinglist").append(`<option value=''> select </option>`)
//         $(".headinglist1").find("option").remove();
//         $(".headinglist1").append(`<option value=''> select </option>`)
//         $("main section h1").each(function (index) {
//           $(".headinglist").append(`<option value='${index + 1}'>` + $(this).text() + `</option>`)
//           $(".headinglist1").append(`<option value='${index + 1}'>` + $(this).text() + `</option>`)
//         });
//         // arr.push({ 'title': value1, 'subarr': [] });
//         // localStorage.setItem('key', JSON.stringify(arr));
//         $('main').append(section);
//       }
//     }
//   }
// }




// $('section').on('click', "#item1", function() {
//   var datas = JSON.parse(localStorage.getItem('key'));  // Parse the JSON string into an array

//   if (datas) {
//     var indexToRemove = $(main).parent().remove()  // Replace with the actual index you want to remove
//     datas.splice(indexToRemove);  // Remove the item at the specified index

//     console.log('Item removed at index:', indexToRemove);
//     console.log('Updated data:', datas);

//     localStorage.setItem('key', JSON.stringify(datas));  // Update localStorage with the updated array
//   } else {
//     console.log('No data found in localStorage.');
//   }
// });

// $('div').on('click', "#item2", function() {
//   var datas = JSON.parse(localStorage.getItem('key'));  // Parse the JSON string into an array

//   if (datas) {
//     var indexToRemove = $(section).parent().remove()  // Replace with the actual index you want to remove
//     datas.splice(indexToRemove);  // Remove the item at the specified index

//     console.log('Item removed at index:', indexToRemove);
//     console.log('Updated data:', datas);

//     localStorage.setItem('key', JSON.stringify(datas));  // Update localStorage with the updated array
//   } else {
//     console.log('No data found in localStorage.');
//   }

// });


// $('p').on('click', "#item3", function() {
//   var datas = JSON.parse(localStorage.getItem('key'));  // Parse the JSON string into an array

//   if (datas) {
//     var indexToRemove = $(div).parent().remove()  // Replace with the actual index you want to remove
//     datas.splice(indexToRemove);  // Remove the item at the specified index

//     console.log('Item removed at index:', indexToRemove);
//     console.log('Updated data:', datas);

//     localStorage.setItem('key', JSON.stringify(datas));  // Update localStorage with the updated array
//   } else {
//     console.log('No data found in localStorage.');
//   }

// });


//   $(".dltbtn").on('click', function() {
//     var localRestore = localStorage.getItem('key');
    
//     if (localRestore) {
//         var datas = JSON.parse(localRestore);  // Parse the JSON string into an object
//         console.log(datas, '878787878787');
        
//         // Assuming you want to remove the entire item from localStorage
//         localStorage.removeItem('key');  // Remove the item by its key
//         console.log('Item removed:', datas);
//     } else {
//         console.log('Item not found in localStorage');
//     }
// });
// }
// $("#item3").on('click', function() {
//   var localRestore = localStorage.getItem('key');
//   // console.log(localRestore, '999999999999999999999');
  
//   if (localRestore) {
//       var datas = JSON.parse(localRestore);  // Parse the JSON string into an object
//       console.log(datas, '878787878787');

//       // Assuming you want to remove the item at index 0 (first item)
//       var indexToRemove = 1;

//       // Check if the index is valid
//       if (indexToRemove >= 0 && indexToRemove < datas.length) {
//           datas.splice(indexToRemove, 1);  // Remove the item at the specified index
//           localStorage.setItem('key', JSON.stringify(datas));  // Update localStorage
//           console.log('Item at index', indexToRemove, 'removed:', datas);
//       } else {
//           console.log('Invalid index:', indexToRemove);
//       }
//   } else {
//       console.log('Item not found in localStorage');
//   }
// });


    // $(section).on('click','#item', function() {
        //   const data = localStorage.getItem('key');
        //   var index = $(section).index(data);
        //   console.log(index, '0030000030303');
        //   if (index) {
        //     localStorage.removeItem(index);
        //     console.log('Item removed:', index);
        //   } else {
        //     console.log('Item not found in localStorage');
        //   }
        // });