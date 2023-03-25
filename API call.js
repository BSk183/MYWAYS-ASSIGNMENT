const getUserAI = 'https://test-api-v3.myways.ai/user?email=';
const postUserAPI = ' https://test-api-v3.myways.ai/user';

const form = document.getElementById('user-form');
form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

fetch (getUserAI+email)
.then(response =>{
    if(response.ok){
        return response.json();

    }
    throw new Error('network response not ok');
})
.then(data=>{
    alert('user is found');

})
.catch( error=>{
    const requestBody={
        name : name,
        email: email,
        phone:phone
    };
        fetch(postUserAPI,{
            method:'POST',
            headers:{
                'content-Type': 'application?json'
            },
            body:JSON.stringify(resquestBody)
        })
        .then(response=>{
            if(response.ok){
                return response.json();

            }
            throw new Error('network response not ok');

        })
        .then (data =>{
            alert('user created sucessfullyyy')

        })
        .catch(error=> {
            alert('an error occured while creating user');
            
            });

        });
});

