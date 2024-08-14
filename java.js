

// const mp = new MercadoPago('YOUR_PUBLIC_KEY' ,{
//     locale: "es-AR",
// });

// document.getElementById("compra__mp").addEventListener("click" , async ()=> {
//       try {
//         const orderData = {
//             title: "remera",
//             quanty: 1,
//             price: 45000,
//         };
    
//         const response = await fetch("",{
//             method: "POST" , 
//             headers: {
//                 "content-type": "aplication/json",
//             },
    
//             body: JSON.stringify(orderData),
//          });
    
//          const preference = await response.json()
//          createCheckoutButton(preference.id);
//       } catch(error) {
//         alert ("error : (")
//       }

// });


// const  createCheckoutButton = (preferenceId) =>{
//     const bricksBuilder = mp.bricks();

//     const renderComponent = async () => {
//         if (window.checkoutButton) window.checkoutButton.unmount();
//       await  bricksBuilder.create("wallet", "wallet_container", {
//             initialization: {
//                 preferenceId: preferenceId,
//             },
//          });
//     };
     
//     renderComponent ()

// }



















const fulImgBox = document.getElementById("fulImgBox");



function openImg(reference){
    fulImgBox.style.display = "flex";
    // fulImg.src = reference
}

function closeImg(){
    fulImgBox.style.display = "none";
}









const main__img = document.querySelector(".main__img")
const thumbnails = document.querySelectorAll(".thumbnail")



thumbnails.forEach(thumb => {
    thumb.addEventListener("click" , function (){
        const active = document.querySelector(".active")
        active.classList.remove("active")
        this.classList.add("active")
        main__img.src = this.src
    })
})














const Description = document.querySelector(".title__description")
const Additional = document.querySelector(".title__additional")
const Reviews = document.querySelector(".title__reviews")



const contentDescription = document.querySelector(".text__descriptions")
const contentAdditional = document.querySelector(".text__additional")
const contentReviews = document.querySelector(".text__reviews")





Description.addEventListener("click" , () => {
    contentDescription.classList.toggle("hidden");
});

Additional.addEventListener("click" , () => {
    contentAdditional.classList.toggle("hidden");
});

Reviews.addEventListener("click" , () => {
    contentReviews.classList.toggle("hidden");
});















const btnLeft = document.querySelector(".btn__left"),
      btnRight = document.querySelector(".btn__right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider__section");



        btnLeft.addEventListener("click" , e => moveToLeft())
        btnRight.addEventListener("click" , e => moveToRight())

        setInterval( () => {
              moveToRight()
        },5000);

         
         let operacion = 0;
         counter = 0,
         widthImg = 100 / sliderSection.length;



      function moveToRight() {

               if(counter >= sliderSection.length-1){
                counter = 0;
                operacion = 0;
                slider.style.transform = `translate(-${operacion}%)`
                slider.style.transition = "none";
                return;

               }  
                counter++;
                operacion = operacion + widthImg;
                slider.style.transform = `translate(-${operacion}%)`
                slider.style.transition = "all ease .6s"
               
           
      }



      function moveToLeft() {
       

        if (counter < 0 ) {
            counter = sliderSection.length-1;
            operacion = widthImg + (sliderSection.length-1)
            slider.style.transform = `translate(-${operacion}%)`;
            slider.style.transition = "none"
            return;
        } 
        counter--;
        operacion = operacion - widthImg;
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "all ease .6s"

        
        
      }



