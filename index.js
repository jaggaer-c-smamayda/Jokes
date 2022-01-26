// Attached an event handler to the button
document.getElementById( 'jokeBtn' ).addEventListener('click', ()=>{
    // Fetching the API.
    if(document.getElementById('inputId').value){
       // console.log(document.getElementById('inputId').value);
        var inputNumber = document.getElementById('inputId').value;
        //console.log(inputNumber);
        fetch ( 'https://api.icndb.com/jokes/'+ inputNumber)
        .then( res => res.json() )
        .then( json => {
            if( json.type==='success' ){
                //console.log(json.value);
                //json.value.forEach( ( obj, i)=>{
                let node=document.getElementById( 'j1' );
                if( node )node.innerHTML=json.value.joke;

              //})
            }
            else {
              let node=document.getElementById( 'j1' );
              if( node )node.innerHTML= 'ValueNo should <==600 Thanks';
            }
           })
    }
 
    fetch ( 'https://api.icndb.com/jokes/random/3' )
      // Grabbing the information from the JSON file.
    .then( res => res.json() )
      // Fetching the joke from value in JSON.
    .then( json => {
        if( json.type==='success' ){
          json.value.forEach( ( obj, i )=>{
            let node=document.getElementById( 'j' + ( i + 2 ) );
            if( node )node.innerHTML=obj.joke;
          })
        }
       })
  })