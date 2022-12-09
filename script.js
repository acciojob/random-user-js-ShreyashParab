//your code here
document.querySelector('#getUser').addEventListener('click',getData)

document.getElementById('age').setAttribute('data-attr',age)
document.getElementById('email').setAttribute('data-attr',email)
document.getElementById('phone').setAttribute('data-attr',phone)

function getAge(){
  document.querySelector('.addInfo').innerHTML = `${user.dob.age}`
  document.querySelector('.addInfo').style.display='block'
}

function getEmail(){
  document.querySelector('.addInfo').innerHTML = `${user.email}`
   document.querySelector('.addInfo').style.display='block'
}

function getPhone(){
  document.querySelector('.addInfo').innerHTML = `${user.phone}`

document.querySelector('.addInfo').style.display='block'
}

let user
function getData()
{
  fetch('https://randomuser.me/api/')
  .then((response)=>response.json())
  .then((data)=>{
    user = data.results[0]
    document.querySelector('.container1').innerHTML =
      `
      <div class="picture">
        <img src="${user.picture.large}" alt="image"/>
      </div>
      <div class="info">
        <h2> 
          ${user.name.first} ${user.name.last}
        </h2>
        <hr>
        <div class="btn-grp">
           <button class="btn primary" id="age" onclick="getAge()">
               Age
            </button>
            <button class="btn danger" id="email" onclick="getEmail()">  
               Email
            </button>
             <button class="btn warning" id="phone" onclick="getPhone()"> 
               Phone
             </button>
          </div>
      </div>
      <h2>Additional Info:</h2>
      <div class="addInfo">
                
      </div>
      `
  })
}

getData()
