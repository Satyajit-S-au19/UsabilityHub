const toggleButton=document.getElementById("nav-toggle")
      const toggleNav=document.getElementById("nav-links")

      toggleButton.addEventListener("click",()=>{
        toggleNav.classList.toggle('active')
      })