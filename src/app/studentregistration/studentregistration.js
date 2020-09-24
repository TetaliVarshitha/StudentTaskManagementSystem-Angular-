
        function validation() {
            var form = document.getElementById("form");
            var email = document.getElementById("b").value;
            var text = document.getElementById("text");
            var pattern = /^[^ ]+@bvrithyderabad.edu.in/;
        
            if (email.match(pattern)) {
                form.classList.add("valid");
                form.classList.remove("invalid");
                text.innerHTML = "Your Email Address is Valid.";
                text.style.color = "#00ff00";
            } else {
                form.classList.remove("valid");
                form.classList.add("invalid");
                text.innerHTML = "Please Enter Valid Email Address.";
                text.style.color = "#ff0000";
            }
        }