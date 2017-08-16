import React, { Component } from 'react';
import { render } from 'react-dom';
var axios = require('axios');
// const URI = window.encodeURI('https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc');
// var nama = [];
// var _data = [];
// const _res = [];
// var tokai = axios.get(URI).then(function (response){
// _data = response.data.items;
// _data.forEach((j,i)=>{
// 	_res.push(j);
// });
// return responseD;
// console.log(data);

// var auah = 
// console.log(auah);

// nama.push(auah);

// nama.map(function (item, i){
// 	console.log(item);
// 	return(
// 		<li>{item}</li>
// 	)
// });
// return nama;
// }); 


class Listrepo extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
	    };

	    // this.delta = this.delta.bind(this);
	}


    handleName(language){
		var URI = window.encodeURI('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc');
		axios.get(URI).then(function (response){
			var data = response.data.items;
			data.map(function (item, i){
				console.log(item.name);
				
				// return (
				// 	<li>
				// 		<h1>{item.name}</h1>
				// 	</li>
				// );
			});
		})
		.catch(function (error) {
		   console.log(error);
		});
    }
  // 	delta() {
  // 		console.log('clicked');
		// var URI = window.encodeURI('https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc')
  // 		var nama = [];
  // 		var tokai = axios.get(URI).then(function (response){
		// 	var data = response.data.items;
		// 	console.log(data);
		// 	// var auah = data.map(function (item, i){
		// 	// 	var beol = item.name;
		// 	// 	return (beol);
		// 	// });
		// 	// // console.log(auah);
		// 	// nama.push(auah);
		// 	// console.log(nama);

		// });

		// // nama.map(function (item, i){
		// // 	console.log('namanya ' + item);
		// // 	return(
		// // 		<li>item</li>
		// // 	)
		// // });

  // 		this.setState({
		// 	name : 'kontol'
		// });

  //   }
 	
	
	render() { 
		return (
			 <div>
				<ul>
					
				</ul>
                <h1>{this.state.name}</h1>
                <button onClick={this.delta}>+</button>
            </div>
		);
    }
}

module.exports = Listrepo;


