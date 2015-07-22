onload = function(){
        for (var i = 0; i < document.images.length; i++) {
            centerImage(document.images[i]);
        }
    };
    function centerImage(img) {
        var container = img.parentNode;
        img.style.top = ((container.offsetHeight - img.offsetHeight) / 2) + "px";
        img.style.left = ((container.offsetWidth - img.offsetWidth) / 2) + "px";
    }
    function processFormData() { 
        var name_element = document.getElementById('txt_name'),
            email_element = document.getElementById('txt_email'),
            msg_element = document.getElementById('message'),
            name = name_element.value.trim(),
            email = email_element.value.trim(),
            msg = msg_element.value,
            obj=new Object(), dataArr=new Array();
        var error_message = 'The following fields had errors in them: \n\n';
        var data = 'You entered the following information: \n\n';
        var error_flag = false;
        if(name == '') {
            error_message += 'Name: Please enter your name\n';
            error_flag = true;
        }
        else {
            obj.name = name;
            data += 'Name: ' + name + '\n';
        }
        if(!checkEmail(email)) {
            error_message += 'Email: Please enter a valid email address';
            error_flag = true;
            email_element.style.background = "rgb(255, 71, 25)";
        }
        else {
            obj.email=email;
            data += 'Email: ' + email + '\n';
            email_element.style.background = "rgb(247,247,247)";
        }
        
        obj.msg=msg;
        data += 'Message: ' + msg.trim()+ '\n';

        if(error_flag) {
            console.log(error_message);
        }
        else {
            console.log(data);
            console.log(obj);
            document.getElementById('txt_name').value="";
            document.getElementById('txt_email').value="";
            document.getElementById('message').value="";
        }
    }
    function checkEmail(email){ 
        var pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
        if(pattern.test(email)) {         
            return true;
        } else {   
            return false; 
        }
    }
    function changeImage(current) {
        var imagesNumber = 6;
        for (i=1; i<=imagesNumber; i++) {
            if (i == current) {
                document.getElementById("normal" + current).style.display = "block";
            }
            else {
                document.getElementById("normal" + i).style.display = "none";
            }
        }
    }