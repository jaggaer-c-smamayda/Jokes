//let use pure promises sytax without AWAIT..
// Attached an event handler to the button
document.getElementById( 'jokeBtn' ).addEventListener('click',()=>{
    if(document.getElementById('inputId').value){
        const inputNumber = document.getElementById('inputId').value;
        // Fetching the API.
        fetch ( 'https://api.icndb.com/jokes/'+ inputNumber)
        // restore response that returns a promise
        .then( res => res.json() )
        //store data in form of json
        .then( json => {
            if( json.type==='success' ){
                let node=document.getElementById( 'j1' );
                if( node )node.innerHTML=json.value.joke;
            }
            //Notes to the clients about the no.needed to fetch jokes
            else {
              let node=document.getElementById( 'j1' );
              if( node )node.innerHTML= 'ValueNo should <=600 Thanks';
            }
           })
    }
    fetch ('https://api.icndb.com/jokes/random/3')
      // Grabbing the information from the JSON file.
    .then( res => res.json() )
      // Fetching the joke from value in JSON.
    .then( json => {
        if( json.type==='success' ){
          json.value.forEach( ( obj,i )=>{
            let node=document.getElementById( 'j' + ( i + 2 ) );
            if( node )node.innerHTML=obj.joke;
          })
        }
       })
  });