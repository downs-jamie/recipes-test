import React, { Component } from 'react';
import data from './Recipes.json';


console.log(data);

// for(var i = 0; i < data.length; i++) {
//     var obj = data[i];

//     // console.log("Name: " + obj.title + ", " + obj.image);
// }
// console.log(obj);

class Home extends Component{
	render() {
		console.log(data)
		return (
			<div>
				<h1>{data.title}</h1>
				{/*<h1>{obj.title}</h1>
				<h1>{obj.step}</h1>
				<img className="image" src={obj.image}/>*/}
			</div>
		)
	}
}

export default Home;