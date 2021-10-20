let pets = [
    {
        name: "Cool Dog",
        dog_img: "Pexels",
        description: "Lovely Dog",
        price: '$1200'
    },
    {
        name: "Kat-Smith Dog",
        dog_img: "Kat-Smith",
        description: 'Fun to  be with',
        price: '$800'
    },
    {
        name: "Homlet Dog",
        dog_img: "Pexel-16",
        description: 'Full of Life',
        price: '$1500'
    },
    {
        name: "Alexandru Dog",
        pet_img: "Alexandru",
        description: 'A lovely home Pet',
        price: '$1200'
    },
    {
        name: "Cutty Dog",
        pet_img: "pexel-9",
        description: 'A lovely home Pet',
        price: '$900'
    },
    {
        name: "Gilberto Dog",
        pet_img: "gilberto",
        description: 'Fun to  be with',
        price: '$1400'
    },
    {
        name: "Lisa Dog",
        pet_img: 'lisa',
        description: 'Full of Life',
        price: '$4000'
    },
    {
        name: "Susannah Dog",
        pet_img: 'susannah',
        description: 'A lovely home Pet',
        price: '$6000'
    },
    {
        name: "Rafael Dog",
        pet_img: "rafael",
        description: 'A lovely home Pet',
        price: '$900'
    },
    {
        name: "Simona Dog",
        pet_img: 'simona',
        description: 'Fun to  be with',
        price: '$2100'
    },
    {
        name: "Burst Dog",
        pet_img: "burst",
        description: 'Full of Life',
        price: '$1800'
    },
    {
        name: "Torsten Dog",
        pet_img: 'torsten',
        description: 'A lovely home Pet',
        price: '$1600'
    },
]

// console.log('The Total dogs in shop is', dog.length)

// for (let d=0; d < dog.length; d++) {
//     console.log(pets[d])
// }

function myFunction(x) {
    if (x.matches) { 
        let dogSection = document.getElementById("petWrap");
            html = "";
            dog.forEach(e => {
            html += `
        
                        div class="dog-card w-100 mx-3 pb-4 font2">
                            <div>
                                <img src="./img/${e.dog_img}.jpg" alt="Cool Dog" class="img-fluid ">
                            </div>
                            <div class="text-white pt-3 pb-3 mx-2">
                                <h4>${e.name}</h4>
                                <h6>${e.description}</h6>
                                <h5 class="fs-6 text-danger" >${e.price}</h5>
                                <button class="btn btn-primary">Add to Cart</button> 
                            </div>                            
                        </div> 
           
    `
    console.log(e);
    
    dogSection.innerHTML = html
})
    } else {
        let dogSection = document.getElementById('petWrap');
        html = "";
       dog.forEach(e => {
           html += `
               
           <div class="dog-card w-25 mx-3 pb-4 font2">
           <div>
               <img src="./img/${e.dog_img}.jpg" alt="Cool Dog" class="img-fluid ">
           </div>
           <div class="text-white pt-3 pb-3 mx-2">
               <h4>${e.name}</h4>
               <h6>${e.description}</h6>
               <h5 class="fs-6 text-danger" >${e.price}</h5>
               <button class="btn btn-primary">Add to Cart</button> 
           </div>                            
           </div> 
                  
           `
           console.log(e);
           
           dogSection.innerHTML = html
       })
    }
  }
  
  var x = window.matchMedia("(max-width: 500px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) 

