window.addEventListener('load', () => {

   const sounds = document.querySelectorAll('.sound');
   const blocks = document.querySelectorAll('.blocks div'); 
   const colors = ['green', 'blue', 'pink', 'purple', 'skyblue', 'brown'];

   blocks.forEach((block, index) => {
      block.addEventListener('click', function () {
         sounds[index].currentTime = 0;
         sounds[index].play();
      })
   });
});
