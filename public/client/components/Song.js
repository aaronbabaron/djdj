import React from 'react';
import ReactDOM from 'react-dom';


var Song = ({ data }) => (
	//need to inherit song info from parent
 (
 	<div>    
    <img src={data.snippet.thumbnails.default.url}/>
		<li className="list-group-item song">{data.snippet.title}</li>
	</div>
	)
)
module.exports = Song;