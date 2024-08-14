




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




const fulImgBox = document.getElementById("fulImgBox");



function openImg(reference){
    fulImgBox.style.display = "flex";
    // fulImg.src = reference
}

function closeImg(){
    fulImgBox.style.display = "none";
}





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