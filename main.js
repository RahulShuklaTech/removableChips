const inputRef = document.querySelector(".input-text");
const addRef = document.querySelector(".btn");
const chipsRef = document.querySelector(".chips")

addRef.addEventListener("click", () => {
   const chip =  document.createElement("div");
   const image = document.createElement("img");
   const name = document.createElement("h3")
   const deleteBtn = document.createElement("button");
   deleteBtn.textContent = "X";
   deleteBtn.className = "delete-btn" 
   image.src = "./avatar.png";
   image.className = "image";
   name.textContent = inputRef.value
   chip.className = "chip"
   chip.append(image,name,deleteBtn)
   chipsRef.append(chip)
   const deleteBtnRef = document.querySelectorAll(".delete-btn")
   deleteBtnRef.forEach(element => { 
    element.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log(e.target.parentElement)
        e.target.parentElement.remove()
    })}) 
})
