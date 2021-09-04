const list = document.querySelector('#book-list ul');
let all=list.getElementsByTagName("li");
const forms = document.forms;
let bookName=document.querySelectorAll(".name");

// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// add books
const addForm = forms['add-book'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add text content
  bookName.textContent = value;
  deleteBtn.textContent = 'delete';

  // add classes
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to DOM
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

// hide books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

//filter books
let searchForm=document.querySelector("#search-books");

let inputField=searchForm.querySelector("input");

inputField.addEventListener("keyup",function(e){
  e.preventDefault();
  let value=e.target.value.toLowerCase();

  bookName.forEach((name)=>{
    let textName=name.textContent.toLowerCase();
    console.log(name);
  if(textName.indexOf(value)!=-1){
    name.style.display="block";
  }else{
    name.style.display="none";
  }
  })

})

