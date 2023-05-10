
const name = document.getElementById("name")
const tagsSelector = document.querySelector(".tags")
const addName=()=>{

    if(name.value == ""){
        return ;
    }
const tag = document.createElement("div");
tag.setAttribute("class" , "tag");
tag.innerHTML=`Hey, I am ${name.value}`;
tagsSelector.append(tag)
}