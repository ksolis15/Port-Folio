const action = ['Studying', 'Swimming', 'Running', 'Hiking'];
const ocurrance = ['sometimes', 'always', 'mostly', 'ocassionally'];
const adjective = ['boring', 'tiring', 'cool', 'entertaining'];
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const generator = () =>{
    const randomAction = action[Math.floor(Math.random() * action.length)]; // Selecting a random action
    const randomOcurrance = ocurrance[Math.floor(Math.random() * ocurrance.length)]; // Selecting a random ocurrance
    const randomAdjective = adjective[Math.floor(Math.random() * adjective.length)]; // Selecting a random adjective
    const randomdays = days[Math.floor(Math.random() * days.length)]; // Selecting a random day
    
};