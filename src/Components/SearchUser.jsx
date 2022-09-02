import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import searchCss from '../Css/searchCss.module.css'
import image from '../helpers/icons8-search-60.png'
import { SEARCH, SETVALUE } from '../store/actions/ActionConstants';

function SearchUser() {

  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({ type: SETVALUE, payload: search});
  },[search,dispatch])
  
  const onSearchHandler = (e) =>{
    setSearch(e.target.value);
    
    dispatch({ type: SEARCH });
    
  }

  return (
    <div className={searchCss.container}>
        <input className={searchCss.input} onChange={onSearchHandler} type="text" name='search' placeholder='Search User ...'/>
        <span className={searchCss.span}>
            <img src={image} alt="" className={searchCss.img} />
        </span>
    </div>
  )
}

export default SearchUser;