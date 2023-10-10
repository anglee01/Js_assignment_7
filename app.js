
//chpater 46 and 47 ( Events)

//q1
// Get a reference to the button element by its ID
var myButton = document.getElementById("myButton");

// Add a click event listener to the button
myButton.addEventListener("click", function() {
    alert("Button clicked!");
});

//q2
//Function to be executed when the element is clicked
    function showMessage() {
      alert("Element Clicked!");
    }
     
    //q3
     // Function to change link color on hover
     function changeColorOnHover() {
        var link = document.getElementsByTagName("a")[0]; // Get the first <a> element
        link.style.color = "red"; // Change the link color on hover
      }
  
      // Function to restore the original link color when the mouse moves away
      function restoreOriginalColor() {
        var link = document.getElementsByTagName("a")[0]; // Get the first <a> element
        link.style.color = "blue"; // Restore the original link color
      }

    
      //q4
       // Function to scroll to the top of the page
    function scrollToTop() {
        // Scroll to the top of the page smoothly
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

      //q5
    
      //q6
      var openWindowLink = document.getElementById("openWindowLink");
      openWindowLink.addEventListener("click", function() {
        window.open("https://www.example.com", "_blank");
    });

    //q7
    var button = document.getElementById("my_Button");
    button.addEventListener("click", function() {
        // Show an alert message when the button is clicked
        alert("Button clicked!");
    });

    //q8
    function restoreOriginalColor() {
    var link = document.getElementsByTagName("a")[0]; // Get the first <a> element
    link.style.color = "red"; // Change the link color on hover
    }

    //q9


    //q10
    var button = document.getElementById("Button");
    button.addEventListener("click", function() {
        alert("welcome!");
    });

    //q11
    var element = document.getElementById("myElement");

        // Add a mouseout event listener to the element
        element.addEventListener("mouseout", function() {
            // Hide the element when the mouse moves out of it
            element.style.display = "none";
        });

        //q12
        var newWindow;

        function openWindow() {
            // Get the user's mouse position
            var mouseX = window.event.clientX;
            var mouseY = window.event.clientY;

            // Determine the size of the new window based on mouse position
            var windowWidth = mouseX + 100; // Adding 100 for some extra width
            var windowHeight = mouseY + 100; // Adding 100 for some extra height

            // Open the new window
            newWindow = window.open('', '', 'width=' + windowWidth + ', height=' + windowHeight);

            // Create a close button in the new window
            var closeButton = newWindow.document.createElement('button');
            closeButton.innerHTML = 'Close Window';
            closeButton.onclick = function () {
                newWindow.close();
            };

            // Append the close button to the new window
            newWindow.document.body.appendChild(closeButton);
        }

        //chapter 49 and 50(Reading and setting field values)
        //q1
        function printInputValue() {
          // Get the input element by its id
          var userInput = document.getElementById("userInput");
          // Get the value entered by the user
          var inputValue = userInput.value;
          // Print the value to the console
          console.log("User input: " + inputValue);
      }
       
      //q2
      function printCheckboxValue() {
        // Get the checkbox element by its id
        var checkbox = document.getElementById("myCheckbox");
        // Check if the checkbox is checked or not
        var isChecked = checkbox.checked;
        // Print the value to the console
        console.log("Checkbox value: " + isChecked);
    }

    //q3
    function printSelectValue() {
      // Get the select element by its id
      var select = document.getElementById("mySelect");
      // Get the selected value from the select element
      var selectedValue = select.value;
      // Print the selected value to the console
      console.log("Selected value: " + selectedValue);
  }

  //q4
  function setTextInField() {
    // Get the input element by its id
    var textField = document.getElementById("myTextField");
    // Set the text in the field
    textField.value = "This is some text set with JavaScript!";
}

//q5
function setStatus() {
  // Get the checkbox element by its id
  var maritalStatusCheckbox = document.getElementById("maritalStatus");
  // Get the value of the checkbox (true if checked, false if not)
  var isMarried = maritalStatusCheckbox.checked;
  // Get the input field by its id
  var statusField = document.getElementById("status");
  // Set the value in the "status" field based on the marital status
  if (!isMarried) {
      statusField.value = "available";
  } else {
      // If married, you can set a different value or leave it empty
      statusField.value = "";
  }
}

//q6
        function fillInput() {
            // Get the input element by its id
            var inputElement = document.getElementById("myInput");

            // Check if the input value is empty
            if (inputElement.value === "") {
                // If it's empty, fill it with a string
                inputElement.value = "Default Text";
            }
          }

          //q7
          function validateForm() {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var valid = true;

            // Clear previous error messages
            document.getElementById("nameError").innerHTML = "";
            document.getElementById("emailError").innerHTML = "";
            document.getElementById("passwordError").innerHTML = "";
            // Validate name (non-empty)
            if (name === "") {
                document.getElementById("nameError").innerHTML = "Name is required";
                valid = false;
            }
            // Validate email (simple check for @ and .)
            if (!email.includes("@") || !email.includes(".")) {
                document.getElementById("emailError").innerHTML = "Invalid email address";
                valid = false;
            }
            // Validate password (at least 6 characters)
            if (password.length < 6) {
                document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters";
                valid = false;
            }
            return valid;
        }