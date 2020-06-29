function animaModal(modalID){
    const anima_modal = document.getElementById(modalID)
    anima_modal.classList.add("sign-in-js")
    anima_modal.classList.remove("sign-up-js")
}

function animaModal2(modalID){
    const anima_modal = document.getElementById(modalID)
    anima_modal.classList.add("sign-up-js")
    anima_modal.classList.remove("sign-in-js")
}

var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

btnSignin.addEventListener("click", function () {
    animaModal('modal-cadastro'); 
 });

 btnSignup.addEventListener("click", function () {
    animaModal2('modal-cadastro'); 
})

//Autenticar Google Account
function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
}

//facebook
window.fbAsyncInit = function() {
    FB.init({
    appId      : '{274401163831368}',
    cookie     : true,
    xfbml      : true,
    version    : '{7.0}'
    });
    
    FB.AppEvents.logPageView();   
    
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
