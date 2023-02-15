// template_tvenkgoo
// service_fvub3ni 
// 5MuPbSN7wg6H0Zfmu

 //function contact(event) {
    //event.preventDefault(); 
   // const loading = document.querySelector('.modal__overlay--loading');
    //const success = document.querySelector('.modal__overlay--success');
   // loading.classList += " modal__overlay--visible";
   // emailjs 
      //  .sendForm(
         //   'service_fvub3ni',
         //   'template_tvenkgoo',
         //   event.target, 
          //  'user_5MuPbSN7wg6H0Zfmu'
       // ).then (() => {
         //   loading.classList.remove("modal__overlay--visible");
         //   success.classList += " modal__overlay--visible";
       // }).catch(() => {
        //    loading.classList.remove("modal__overlay--visible");
        //    alert(
         //       "The email service is temporarily unavailable. Please contact me directly at kathrynlytle@hotmail.com"
       //     );
     //   })
//}


function contact(event) {
    event.preventDefault();
    emailjs
    .sendForm(
        'service_fvub3ni',
        'template_tvenkgoo',
        event.target,
        'user_5MuPbSN7wg6H0Zfmu'
    ).then(() => {
        console.log('this worked')
    })
}
