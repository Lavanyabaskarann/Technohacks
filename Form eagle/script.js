document.getElementById("loginform").addEventListener("submit",function(event){
    event.preventDefault();
    const email=document.getElementById("emailjs").value;
    const password=document.getElementById("passwordjs").value;
    let isvalid="true";
    document.getElementById("emailerror").textcontent="";
    document.getElementById("passworderror").textcontent="";
    document.getElementById("result").textcontent="";
    if(!validatemail(email)){
        document.getElementById("emailerror").textContent="please enter valid email"
        isvalid="false";
    }
    if(!validatepassword(password)){
        DocumentType.getElementById("passworderror").textContent="please enter password";
        isvalid="false";
    }
    if(isvalid){
        document.getElementById("result").textContent="logged in successfully"}
    });
    function validatEmail(email){
        const emailpattern=/^[^\&@]+@[^\&@]+\.[^|&@]+$/;
        return emailpattern.test(email);

    }
    function validatePassword(password){
        return password.length>=6;
    }
    document.getElementById('emailbutton').addEventListener('click',function(){
        const email=document.getElementById("emailJS").value;
        const password=document.getElementById("passwordJS").value;
        if(validateEmail(email)&&validatePassword(password)){
            const subject=encodeURIComponent('Login Attempt');
            const body=encodeURIComponent('Email:${email}\n password:${password}\n\n Thankyou for login');
            const mailtolink='mail to::lavannyalavanya401@gmail.com?subject=${subject}&body=${body}';
            window.location.href=mailtolink;
        }else{
            alert('Enter valid email& password to send an email');

        }
        })