const hambuger = document.getElementById("hambuger")
const cancel = document.getElementById("cancel")
hambuger.addEventListener("click" , ()=>{
    document.getElementById("header2").style.display="flex"
    document.body.style.overflow="hidden"
})

cancel.addEventListener("click" , ()=>{
    document.getElementById("header2").style.display="none"
    document.body.style.overflow="scroll"

})
