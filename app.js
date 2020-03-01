// console.log("hi");
const data = [
    {
        name : "Scarlett johansson",
        age : 18,
        location : "NewYork",
        gender : "Female",
        interestedIn : "Male",
        image : "https://randomuser.me/api/portraits/women/19.jpg"
    },
    {
        name : "James Bond",
        age : 38,
        location : "Caleforia",
        gender : "Male",
        interestedIn : "Female",
        image : "https://randomuser.me/api/portraits/men/14.jpg"
    },
    {
        name : "Agent Carter",
        age : 28,
        location : "Washinton DC",
        gender : "Female",
        interestedIn : "Male",
        image : "https://randomuser.me/api/portraits/women/14.jpg"
    },
    {
        name : "Dumbledore",
        age : 43,
        location : "Albenia",
        gender : "Male",
        interestedIn : "Female",
        image : "https://randomuser.me/api/portraits/men/17.jpg"
    },
    {
        name : "Scyra cirus",
        age : 30,
        location : "Santacruz",
        gender : "Female",
        interestedIn : "Male",
        image : "https://randomuser.me/api/portraits/women/44.jpg"
    }
];


const profile = IteratingProfiles(data);

document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
    let currentProfile = profile.next().value;
    if(currentProfile !== undefined){
        document.getElementById("profileDisplay").innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">${currentProfile.gender} interested in ${currentProfile.interestedIn}</li>
        </ul>
    `;

    document.getElementById("imageDisplay").innerHTML = `
        <img src="${currentProfile.image}">
    `;
    }else{
        window.location.reload();
    }
    
}

nextProfile();

// Iterator Function 
function IteratingProfiles(profiles) {
    let profileIndex = 0;
    return {
        next: function() {
            return profileIndex < profiles.length ?
                { value: profiles[profileIndex++], done: false} :
                { done: true }
        }
    }
}
