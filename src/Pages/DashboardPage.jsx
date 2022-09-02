import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddStatsToRedux, AddUserToRedux, SETPRODUCTS } from '../store/actions/ActionConstants';
import DashboardStats from '../Components/DashboardStats'
import DashboardUsers from '../Components/DashboardUsers';
import LoadingSpinner from '../ReUsable/LoadingSpinner';

function DashboardPage() {

  const dispatch = useDispatch();
  const stats = useSelector((state)=>state.stats);
  const users = useSelector((state)=> state.users);
  const searchedProduct = useSelector((state)=> state.searchedProduct);
  const value = useSelector((state)=> state.value);
  const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
      async function fetchStats(){
      const response = await fetch('https://630369f20de3cd918b34e39e.mockapi.io/transactionstats');
      const stats = await response.json();
      // console.log(stats);
      dispatch({ type: AddStatsToRedux, payload: stats });
      
      }
      fetchStats();   
  },[dispatch])

  useEffect(() => {
    if(value !== ""){
      dispatch({ type: AddUserToRedux, payload: searchedProduct });
    }else{

      async function fetchUser(){
          const response = await fetch('https://630369f20de3cd918b34e39e.mockapi.io/users');
          const users = await response.json();
          // console.log(users);
          dispatch({ type: AddUserToRedux, payload: users });
          dispatch({ type: SETPRODUCTS });
          setIsLoading(false);
          }
          fetchUser();  
        }
  },[dispatch,value])

  

  return (
    <div>
        <DashboardStats stats={stats} />
        {isLoading ? <LoadingSpinner /> :
        <DashboardUsers users={value === "" ? users : searchedProduct} />
        }
    </div>
  )
}

export default DashboardPage