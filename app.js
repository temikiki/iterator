const data = [
  {
    name: 'John Doe',
    age: 23,
    gender: "male",
    lookingfor: 'female',
    location: 'LA',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  },

  {
    name: 'Sarah Cane',
    age: 25,
    gender: "Female",
    lookingfor: 'Male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/75.jpg'
  },

  {
    name: 'Johnson Tate',
    age: 32,
    gender: "male",
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/76.jpg'
  }
];

const profiles = profileIterator(data);

//calls first profile
nextProfile();

//next Event
document.getElementById('next').addEventListener('click', nextProfile);

//next profile Display
function nextProfile(){
  const currentProfile = profiles.next().Value;
   
if(currentProfile !== undefined){
 

  document.getElementById('profileDisplay').innerHTML =`
  <ul class= "list-group">
  <li class="list-group-item"> Name: ${currentProfile.name}</li>  
  <li class="list-group-item"> Age: ${currentProfile.age}</li>  
  <li class="list-group-item"> Gender: ${currentProfile.gender}</li>  
  <li class="list-group-item"> Location: ${currentProfile.location}</li>  
  <li class="list-group-item"> Preference: ${currentProfile.lookingfor}</li>  
    </ul>
  `;
  document.getElementById('imageDisplay').innerHTML =`
    
  <img src="${currentProfile.image}">
  `;
 
}else{
    window.location.reload();
}
} 

//profile Iterator

function profileIterator(profiles){
  let nextIndex = 0;

  return{
    next: function(){
      return nextIndex < profiles.length ? {Value: profiles[nextIndex++], done: false}: {done: true }
    }
  };
}