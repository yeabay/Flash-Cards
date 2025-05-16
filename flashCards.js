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
const cards = [
    {quest:"1. question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"its 1"},
    {quest:"2. question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"its 1"},
    {quest:"3. question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"its 1"},
    {quest:"4.question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"its 1"},
    {quest:"5.question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"its 1"},
    {quest:"6.question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"its 1"},
    {quest:"7.question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"its 1"},
    {quest:"8.question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"its 1"},
    {quest:"9.question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"its 1"},
    {quest:"10. question Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam voluptatum blanditiis ipsum officia obcaecati nobis beatae, rem reprehenderit sint veniam modi similique voluptatem. Esse facere doloribus perspiciatis cum natus sit?", ans:"its 1"}
]

let currentIndex = 0;

showAns.addEventListener("click", function(){
    document.querySelector(".card").classList.toggle("flipped");
     answerBox.hidden =false;
     questionBox.hidden = true;
     showAns.hidden =true;
     hideAns.hidden = false;
})

hideAns.addEventListener("click", function(){
     document.querySelector(".card").classList.remove("flipped");
     answerBox.hidden =true;
     questionBox.hidden = false;
     showAns.hidden =false;
     hideAns.hidden = true;
})

function slideCard(direction, newIndex){
    const card = document.querySelector(".card");
    card.classList.remove("slide-in");
    card.classList.add(direction === "next" ? "slide-left" : "slide-right");
   

    setTimeout(() => {
    // Step 2: Change content after slide out
    
    question.textContent = cards[newIndex].quest
    answer.textContent = cards[newIndex].ans

    // Step 3: Reset position to opposite off-screen
    card.classList.remove("slide-left", "slide-right");
    card.style.transform = `translateX(${direction === "next" ? "100%" : "-100%"})`;
 
     // Step 4: Slide new card in
    setTimeout(() => {
      card.classList.add("slide-in");
      card.style.transform = "translateX(0)";
    }, 20); // slight delay lets DOM register the off-screen shift

    currentIndex = newIndex;
  }, 300); // wait for slide-out to finish
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
