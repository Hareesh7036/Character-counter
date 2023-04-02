const textareaE1=document.getElementById("text_container")

const tot_counter=document.getElementById("tot_char")

const remaining= document.getElementById("remaining")

const msg=document.getElementById("msg");

textareaE1.addEventListener("keyup", ()=>{
    update_counter()
})
function update_counter(){
    tot_counter.innerText= textareaE1.value.length
    
    remaining.innerText=textareaE1.getAttribute("maxlength") - textareaE1.value.length;
    if (textareaE1.value.length == textareaE1.getAttribute("maxlength")){
        msg.innerText="You Reached maximum!!";
    }
}