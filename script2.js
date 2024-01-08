// js for showing the files in the image and feature box
function displayImages(input, boxId) {
    var container = document.getElementById(boxId);
    var files = input.files;

    for (var i = 0; i < files.length; i++) {
        var file = files[i];

        if (file) {
            var reader = new FileReader();

            reader.onload = function (e) {
                var img = document.createElement('img');
                img.src = e.target.result;

                if (boxId === 'imageBox') {
                    // If it's the image box, append to the image box
                    document.getElementById('imageBox').appendChild(img);
                } else if (boxId === 'featureBox') {
                    // If it's the feature box, append to the feature box
                    container.appendChild(img);
                }
            };

            reader.readAsDataURL(file);
        }
    }
}

// js for cloning feature boxes
document.addEventListener("DOMContentLoaded", function() {
    
    var mainContainer = document.getElementById('mainContainer');

    
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('cloneButton')) {
            
            var clickedContainer = event.target.closest('.container');
            var clonedContainer = clickedContainer.cloneNode(true);
            mainContainer.appendChild(clonedContainer);

           
            clickedContainer.querySelector('.cloneButton').classList.add('hidden');

            
            clonedContainer.querySelector('.cloneButton').classList.remove('hidden');
        }
    });
});
// js for taking to the previous page

function goBack() {
    window.history.back();
}



function toggleInput(showInput) {
    var inputElement = document.getElementById("thirdPartyInput");
    inputElement.style.display = showInput ? "block" : "none";
}

// js for colorpicker


var selectedColor = null;

    function toggleColorPalette(show) {
      var colorPalette = document.getElementById("colorPalette");
      var selectedColorContainer = document.getElementById("selectedColorContainer");

      if (show) {
        colorPalette.classList.add("active");
        selectedColorContainer.classList.add("active");
      } else {
        colorPalette.classList.remove("active");
        selectedColorContainer.classList.remove("active");
      }
    }

    function selectColor(colorElement) {
      try {
        var color = colorElement.getAttribute("data-color");
        selectedColor = color;

        updateSelectedColor();
        console.log("Selected color:", selectedColor);
      } catch (error) {
        console.error("Error in selectColor:", error);
      }
    }

    function updateSelectedColor() {
      var selectedColorContainer = document.getElementById("selectedColor");
      selectedColorContainer.style.backgroundColor = selectedColor;

      var colorName = document.getElementById("colorName");
      colorName.textContent = getColorName(selectedColor);
    }

    function getColorName(color) {
      switch (color) {
        case "#3498db":
          return "Blue";
        // Add more color cases as needed
        default:
          return "Unknown";
      }
    }


    var selectedColors = [];

    // js for datepicker

    
    document.addEventListener('DOMContentLoaded', function () {
      flatpickr("#startDatePicker", {
        enableTime: false,
        dateFormat: "Y-m-d",
        minDate: "today",
        altInput: true,
        altFormat: "F j, Y",
        theme: "light",
        onChange: function(selectedDates, dateStr, instance) {
          console.log("Start Date Selected:", dateStr);
        },
      });

      flatpickr("#endDatePicker", {
        enableTime: false,
        dateFormat: "Y-m-d",
        minDate: "today",
        altInput: true,
        altFormat: "F j, Y",
        theme: "light",
        onChange: function(selectedDates, dateStr, instance) {
          console.log("End Date Selected:", dateStr);
        },
      });
    });

    


  





  

       











