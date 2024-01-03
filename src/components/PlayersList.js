import React from "react";
import Player from "./Player";
import { playersData } from "../players"; // Using named import 

const flexStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',  
    padding: '1rem'                      
  };

const PlayersList = () => {
    return (
        <div style={flexStyle}>
            {playersData.map((player, index) => (
                <Player key={index} {...player} />
            ))}
        </div>
    );
};

export default PlayersList;