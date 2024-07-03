const btnSubmit=document.querySelector(".btn");
btnSubmit.addEventListener("click",()=>{
  const first=document.querySelector('.data #first').value;
  const last=document.querySelector('.data #last').value;
  const age=document.querySelector('.data #age').value;
  const city=document.querySelector('.data #city').value;

  console.log(first);
  document.querySelector('.status #firstName').textContent = first;
  document.querySelector('.status #lastName').textContent = last;
  document.querySelector('.status #age').textContent = age;
  document.querySelector('.status #city').textContent = city;

  document.querySelector('.data #first').value = '';
  document.querySelector('.data #last').value = '';
  document.querySelector('.data #age').value = '';
  document.querySelector('.data #city').value = '';
});
