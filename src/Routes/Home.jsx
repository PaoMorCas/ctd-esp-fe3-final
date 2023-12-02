import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const {state, addToFavs} = useContextGlobal();
  
  const addFav = (dentist)=>{
    addToFavs(dentist);
  }
 
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
       {state?.data?.map(dentist => <Card dentist={dentist} key={dentist.id} msg="Add fav" action={addFav}/>)}
      </div>
    </main>
  )
}

export default Home