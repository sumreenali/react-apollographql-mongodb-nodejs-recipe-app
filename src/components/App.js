import React from 'react';
import './App.css';
import {Query} from 'react-apollo';
import {GEL_ALL_RECIPES} from '../queries';


const App = () =>{
  return (
    <div className="App">
    <h1> Home</h1>

     <Query query={GEL_ALL_RECIPES}>
       {({data, loading, error})=>{

         if(loading) return <div>Loading</div>
         else if(error) return <div>Error</div>
         console.log(data)       
         return <p>Recipes</p>  
       }}
     </Query>
    </div>
  );
}

export default App;
