const showAns = document.querySelector('.show')
const hideAns = document.querySelector('.hide')
const prevQ = document.querySelector('.prev')
const nextQ = document.querySelector('.next')
const question= document.querySelector('.question')
const answer = document.querySelector('.answer')
const questionBox= document.querySelector('.questionbox')
const answerBox = document.querySelector('.answerbox')
const previous = document.querySelector('.prev')
const next = document.querySelector('.next')
const card = document.querySelector(".card");
const cards = [
    {quest:"1. question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"1. answer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?"},
    {quest:"2. question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"2. answer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?"},
    {quest:"3. question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"3. answer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?"},
    {quest:"4.question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"4. answer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?"},
    {quest:"5.question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"5. answer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?"},
    {quest:"6.question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"6. answer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?"},
    {quest:"7.question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"7. answer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?"},
    {quest:"8.question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"8. answer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?"},
    {quest:"9.question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"9. answer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?"},
    {quest:"10. question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"10. answer Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?"}
]

let currentIndex = 0;

showAns.addEventListener("click", function(){
    
    card.classList.add("flipped");
     answerBox.hidden =false;
     questionBox.hidden = true;
     showAns.hidden =true;
     hideAns.hidden = false;
})

hideAns.addEventListener("click", function(){
     card.classList.remove("flipped");
     
     answerBox.hidden =true;
     questionBox.hidden = false;
     showAns.hidden =false;
     hideAns.hidden = true;
})

function slideCard(direction, newIndex){
    
    card.classList.remove("slide-in");
    card.classList.add(direction === "next" ? "slide-left" : "slide-right");
   

    setTimeout(() => {
    // Step 2: Change content after slide out
    
    question.textContent = cards[newIndex].quest
    answer.textContent = cards[newIndex].ans

    // Step 3: Reset position to opposite off-screen
    //card.classList.add(direction === "next" ? "slide-right" : "slide-left");
    card.classList.remove("slide-left", "slide-right");
    //card.style.transform = `translateX(${direction === "next" ? "100%" : "-100%"})`;
 
     // Step 4: Slide new card in
   
      //card.classList.add("slide-in");
      //card.style.transform = "translateX(0)";
     // slight delay lets DOM register the off-screen shift

    currentIndex = newIndex;
    updateProgressbar()
  }, 800); // wait for slide-out to finish
  
}



function updateProgressbar(){
    const progress =((currentIndex+1)/cards.length)*100;
    document.querySelector(".bar").style.width = `${progress}%`;
    document.querySelector(".progressnum").textContent=`${progress}% ,`;
    document.querySelector(".cardnum p").textContent= `${currentIndex+1} out of ${cards.length}`;

}

slideCard("next", currentIndex);

next.addEventListener("click", function(){
   if (currentIndex < cards.length - 1) {
    slideCard("next", currentIndex + 1);
    
  }
    
});
previous.addEventListener("click", function(){
     if (currentIndex > 0) {
    slideCard("prev", currentIndex - 1);
    
  }

})
