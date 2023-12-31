import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getById, clearDetail, activityByCountry } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import './detail.css'

function Detail() {
  const { ID } = useParams();
  const countryDetails = useSelector((state) => state.countryDetails);
  const activityCountDetails = useSelector((state) => state.activityCountryDetails)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(activityByCountry(ID))
    
    return () => {
      dispatch(clearDetail()) 
    }
  }, [dispatch, ID])
  
  
  useEffect(() => {
    dispatch(getById(ID))
    
    return () => {
      dispatch(clearDetail()) 
    }
  }, [dispatch, ID])
  
  return (
    <div className="detail" >
      <div className="naav">
        <Link to={'/home'}>
          <button>Home</button>
        </Link>
        <Link to={'/create'}>
          <button>Create activity</button>
        </Link>
      </div>
      <div className="cd" >
        {countryDetails ? (
          <div>
            <img src={countryDetails.flags} alt={countryDetails.name} width={500} height={380}/>
            <p>ID: {countryDetails.ID}</p>
            <p>Name: {countryDetails.name}</p>
            <p>Continent:{countryDetails.continents} </p>
            <p>Capital: {countryDetails.capital}</p>
            <p>Subregion: {countryDetails.subregion} </p>
            <p>Area: {countryDetails.area}</p>
            <p>Population: {countryDetails.population}</p>
          </div>
        ) : (
          <p>Loading country details...</p>
        )}
        {activityCountDetails.length > 0 ? (
          <ul>
            <h2>Activities:</h2>
            {activityCountDetails.map((activity, index) => (
              <li key={index}>
                <p>Name: {activity.name}</p>
                <p>Difficulty: {activity.difficulty}</p>
                <p>Duration: {activity.duration}</p>
                <p>Season: {activity.season.join(', ')}</p>
              </li>
            ))}
          </ul>
        ) : (
          <h2>No activities available.</h2>
        )}
      </div>
    </div>
  );
}

export default Detail;
