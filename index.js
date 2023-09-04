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
    $("main").append(`<section class="Heading-append ml-5 mt-2"><h1>${value1} </h1> <button class="dltbtn">X</button></section> `);
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
    $(`main section:nth-child(${heading})`).append(`<div class="subHeading-append mt-2" style="margin-left: 60px;"><h2>${subheading} </h2><span class="dltbtn">X</span></div>`);
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
      $(`main section:nth-child(${value1}) div:nth-child(${subhead})`).append(`<p style="margin-left: 70px;"> <label>${label1}</label><select>${selectoption}</select><button class="dltbtn">X</button><br><p>`);
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
      $(`main section:nth-child(${value1}) div:nth-child(${subhead})`).append(`<p style="margin-left: 70px;"> <label>${label1}${optionsHTML1}  </label> <button class="dltbtn">X</button> <br></p>`);
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
      $(`main section:nth-child(${value1}) div:nth-child(${subhead})`).append(`<p style="margin-left: 70px;"> <label>${label1} ${checkboxoption}</label>  <button class="dltbtn">X</button><br><p> `);
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
      $(`main section:nth-child(${value1}) div:nth-child(${subhead})`).append(`<p style="margin-left: 70px;"> <label>${label1}:- </label> <textarea> ${valu} </textarea><button class="dltbtn">X</button> <p>`);
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
      $(`main section:nth-child(${value1}) div:nth-child(${subhead})`).append(`<p style="margin-left: 70px;"> <label>${label1}:- </label> <br> <input type="file" ${fileoption1} "/> <button class="dltbtn">X</button> <p>`);
      arr[value1 - 1].subarr[value2 - 1].subarr1.push({ 'inputvalue': inputType, label1, class1, valu, name1, placeholder1, selectOption1 });
      localStorage.setItem('key', JSON.stringify(arr));
    }

    //Button option in display
    else if (inputType === 'button') {
      $(`main section:nth-child(${value1}) div:nth-child(${subhead})`).append(`<p style="margin-left: 70px;"> <label>${label1}:- </label> <button> ${valu} </button> <button class="dltbtn">X</button><p>`);
      arr[value1 - 1].subarr[value2 - 1].subarr1.push({ 'inputvalue': inputType, label1, class1, valu, name1, placeholder1, selectOption1 });
      localStorage.setItem('key', JSON.stringify(arr));
    }

    else {
      $(`main section:nth-child(${value1}) div:nth-child(${subhead})`).append(`<p style="margin-left: 70px;"> <label>${label1}</label> <input class="${class1}" value="${valu}" name="${name1}" placeholder="${placeholder1}"/> <button class="dltbtn">X</button><p> <br>`);
      arr[value1 - 1].subarr[value2 - 1].subarr1.push({ 'inputvalue': inputType, label1, class1, valu, name1, placeholder1, selectOption1 });
      localStorage.setItem('key', JSON.stringify(arr));
    }

  });
});

window.onload = function () {
  check();
  function check() {
    var localrestore = localStorage.getItem('key');
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
    // console.log(valu, 'ppppppppppppppppppp');

    //Redio option in display
    // var selectedvalue = $('#selectOption').val();
    // var optionredio = selectedvalue.split(",")

    //Checkbox option in display
    // var checkvalue = $('#selectOption').val();
    // var optionsArr3 = checkvalue.split(",")

    //Textarea option in display
    // var textareavalue = $('#selectOption').val();
    // var textareaoptions = textareavalue.split(",")

    //File option in display
    // var filevalue = $('#selectOption').val();
    // var fileoptions = filevalue.split(",")

    // var selectoption = ''


    if (localrestore) {
      var newObj = $.parseJSON(localrestore);

      for (i = 0; i < newObj.length; i++) {
        $("main").append(`<section class="Heading-append ml-5 mt-2 "><h1>${newObj[i].title} </h1> <button class="dltbtn">X</button></section> `);
        $("#delete").on('click', function () {
          var url = localStorage.key('key');
          localStorage.removeItem(url);
          $("main").window.onload('refresh');
        });

        for (j = 0; j < newObj[i].subarr.length; j++) {
          $(`main`).append(`<div class="subHeading-append mt-2" style="margin-left: 100px;" ><h2>${newObj[i].subarr[j].subheading}</h2><button class="dltbtn">X</button><br></div>`);
          $("#delete1").on('click', function () {
            var ls_data = JSON.parse(localStorage.getItem('key'));
            var sub = (newObj[i].subarr[j].subheading)
          });

          for (k = 0; k < newObj[i].subarr[j].subarr1.length; k++) {

            //Select option in display
            if (newObj[i].subarr[j].subarr1[k].inputvalue === 'select') {
              var selectoption = ''
              for (s = 0; s < newObj[i].subarr[j].subarr1[k].selectOption1.length; s++) {
                selectoption += `<option value="${newObj[i].subarr[j].subarr1[k].selectOption1[s]}"> ${newObj[i].subarr[j].subarr1[k].selectOption1[s]}</option> `
              };
              $(`main`).append(`<p style="margin-left: 150px;"> <label>${newObj[i].subarr[j].subarr1[k].label1}</label> <select>${selectoption}</select><button class="dltbtn">X</button><br><p>`);
            }

            //Redio option in display
            else if (newObj[i].subarr[j].subarr1[k].inputvalue === 'radio') {
              // console.log(selected_value, 'ooooooooooo', selected_value);
              var optionsHTML1 = ''
              for (s = 0; s < newObj[i].subarr[j].subarr1[k].selectOption1.length; s++) {
                // console.log(i, optionredio[i]);
                optionsHTML1 += `<br><input type="radio" value="${newObj[i].subarr[j].subarr1[k].selectOption1[s]}"> ${newObj[i].subarr[j].subarr1[k].selectOption1[sss]} `
              };
              $(`main`).append(`<p style="margin-left: 150px;"> <label>${newObj[i].subarr[j].subarr1[k].label1}${optionsHTML1}  </label> <button class="dltbtn">X</button> <br></p>`);
            }

            // //Checkbox option in display
            else if (newObj[i].subarr[j].subarr1[k].inputvalue == "checkbox") {
              var checkboxoption = ''
              for (p = 0; p < newObj[i].subarr[j].subarr1[k].selectOption1.length; p++) {
                // console.log(i, optionsArr3[i]);
                checkboxoption += `<br><input type="checkbox" value="${newObj[i].subarr[j].subarr1[k].selectOption1[p]}"> ${newObj[i].subarr[j].subarr1[k].selectOption1[p]} `
              };
              $(`main`).append(`<p style="margin-left: 150px;"> <label>${newObj[i].subarr[j].subarr1[k].label1} ${checkboxoption} </label>  <button class="dltbtn">X</button><br><p> `);
            }

            // //Textarea option in display
            else if (newObj[i].subarr[j].subarr1[k].inputvalue === 'textarea') {
              $(`main`).append(`<p style="margin-left: 150px;"> <label>${newObj[i].subarr[j].subarr1[k].label1}:- </label> <textarea> ${newObj[i].subarr[j].subarr1[k].valu} </textarea><button class="dltbtn">X</button> <p>`);
            }

            // //File option in display
            else if (newObj[i].subarr[j].subarr1[k].inputvalue === 'file') {
              var fileoption1 = ''
              for (h = 0; h < newObj[i].subarr[j].subarr1[k].selectOption1.length; h++) {
                fileoption1 += `"${selectOption1[h]}"`
              };
              $(`main`).append(`<p style="margin-left: 150px;"> <label>${newObj[i].subarr[j].subarr1[k].label1}:- </label> <input type="file" ${newObj[i].subarr[j].subarr1[k].valu}"/>   <button class="dltbtn">X</button> <p>`);
            }

            //Button option in display
            else if (newObj[i].subarr[j].subarr1[k].inputvalue === 'button') {
              $(`main`).append(`<p style="margin-left: 150px;"> <label>${newObj[i].subarr[j].subarr1[k].label1}:- </label> <button> ${newObj[i].subarr[j].subarr1[k].valu} </button> <button class="dltbtn">X</button><p>`);
            }

            else {
              $(`main`).append(`<p style="margin-left: 150px;"> <label>${newObj[i].subarr[j].subarr1[k].label1}</label> <input class="${newObj[i].subarr[j].subarr1[k].class1}" value="${newObj[i].subarr[j].subarr1[k].valu}" name="${newObj[i].subarr[j].subarr1[k].name1}" placeholder="${newObj[i].subarr[j].subarr1[k].placeholder1}"/> <button class="dltbtn">X</button><p> <br>`);
            }


          }
        }
      }
    }
  }
}
