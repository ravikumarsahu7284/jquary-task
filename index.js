$(document).ready(function () {
	$('.heading-form1').on('submit', function (e) {
		e.preventDefault();
		var value1 = $('.heading1').val();
		console.log(value1);
		$("main").append(`<section class="Heading-append ml-5 mt-2">${value1}</section>`);
		$("form").trigger("reset");
		$(".headinglist").find("option").remove();
		$(".headinglist").append(`<option value=''> select </option>`)
		$(".headinglist1").find("option").remove();
		$(".headinglist1").append(`<option value=''> select </option>`)
		$("main section").each(function (index) {
			$(".headinglist").append(`<option value='${index + 1}'>` + $(this).text() + `</option>`)
			$(".headinglist1").append(`<option value='${index + 1}'>` + $(this).text() + `</option>`)
		});
	});

	$('.heading-form2').on('submit', function (e) {
		e.preventDefault();
		var heading = $('.headinglist option:selected').val();
		var subheading = $('.heading2').val();
		console.log(heading);
		$(`main section:nth-child(${heading})`).append(`<div class="subHeading-append ml-3 mt-2">${subheading}</div>`);
		$("form").trigger("reset");

	});
});

$('.headinglist1').on('change', function (e) {
  e.preventDefault();
  var value1 = $('.headinglist1 option:selected').val();
  console.log(value1, '55555555555555');
  $(".subheadinglist1").find("option").remove();
  $(".subheadinglist1").append(`<option value=''> select </option>`);
  $(`main section:nth-child(${value1}) div`).each(function (index) {
    // console.log($(this).text(), 'pppppppppppppp');
    $(".subheadinglist1").append(`<option value='${index + 1}'>` + $(this).text() + `</option>`);
  });
});

$('.heading-form3').on('submit', function (e) {
  e.preventDefault();
  var inputType = $('#inputType').val();
  console.log(inputType, 'ppppppppppp');
  var label1 = $('#label').val();
  var class1 = $('#class').val();
  var valu = $('#value').val();
  var name1 = $('#name').val();
  var placeholder1 = $('#placeholder').val();
  var requiredValue = $('#required').is(':checked');
  var readonlyValue = $('#readonly').is(':checked');
  var disableValue = $('#disable').is(':checked');
  var selectedGender = $('input[name="gender"]:checked').val();

  var value1 = $('.headinglist1 option:selected').val();
  var value2 = $('.subheadinglist1 option:selected').val();
  console.log(value1, '1111', value2, '2222');

  if (inputType === 'radio') {
    // If the input type is radio, show the gender option and hide others
    $('#genderOption').show();
  } else {
    // Hide the gender option for other input types
    $('#genderOption').hide();
  }

  if (inputType == "text") {
    console.log(valu, 'ooooooooooo', valu);
    $(`main section:nth-child(${value1}) div:nth-child(${value2})`).append(`<div class="subHeading-append ml-3 mt-2"> <label>${label1}</label> <input class="${class1}" value="${valu}" name="${name1}" placeholder="${placeholder1}"/> </div>`);
  } else if (inputType == "checkbox") {
    $(`main section:nth-child(${value1}) div:nth-child(${value2})`).append(`<div class="subHeading-append ml-3 mt-2">  <input required="${requiredValue}" readonly="${readonlyValue}" disabled="${disableValue}" /></div>`);
  } else if (inputType === 'radio' && $('input[name="gender"]:checked').length > 0) {
    // $(`main section:nth-child(${value1}) div:nth-child(${value2})`).append(`<div class="subHeading-append ml-3 mt-2"> <input gender="${selectedGender}" /></div>`);
  } else {
    $(`main section:nth-child(${value1}) div:nth-child(${value2})`).append(`<div class="subHeading-append ml-3 mt-2">  <input class="${class1}" label="${label1}" /></div>`);
  }
});


