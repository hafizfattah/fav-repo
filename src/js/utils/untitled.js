handlePony(feeling){

    let ponyArray = [];

    axios.post('http://localhost:5000/User/ponys', {
      feeling:feeling
    })

      .then((response) => { // Arrow function to bind this with your Component

        let jsonobj = JSON.parse(response.data.body);
        console.log('pony returned ok ', jsonobj);
        let keyindex = 0;
        jsonobj.faces.forEach(function(face){

            ponyArray.unshift({
              image: face.image,
              key: keyindex
            });
            keyindex+=1;

        });

        console.log('this', this);

        this.setState({
          ponyArray: ponyArray
        }, function(){
            console.log('ponyArray', ponyArray);
            console.log('this.state.ponyArray', this.state.ponyArray);
        });

      })
      .catch(function(error){
          console.error(error);
      });
  }