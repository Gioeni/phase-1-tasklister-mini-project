document.addEventListener("DOMContentLoaded", () => {
document.querySelector("form").addEventListener('submit' , (e) =>{
e.preventDefault()
addToDo(e.target.newtaskdescription.value)
});

function addToDo(task){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  li.textContent = task
  btn.textContent = 'Delete'
  li.appendChild(btn)
  document.querySelector('ul').appendChild(li)
  //document.querySelector(task).appendChild(btn)
  //console.log(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
})
