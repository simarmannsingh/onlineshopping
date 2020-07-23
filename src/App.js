// /client/App.js
import React, { Component } from 'react';
import axios from 'axios';

// Importing components
import Counters from "./components/counters";
import Pageheader from "./components/pageheader";
//import { getAllByTestId } from '@testing-library/react';
import DBUpdate from "./components/dbupdate"

class App extends Component {
  // initialize our state
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  // when component mounts, first thing it does is fetch all existing data in our db
  // then we incorporate a polling logic so that we can easily see if our db has
  // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    // if (!this.state.intervalIsSet) {
    //   let interval = setInterval(this.getDataFromDb, 5000);   // Fetching data using GET after every 5s (5000 ms)
    //   this.setState({ intervalIsSet: interval });
    // }
  }
  
  // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // just a note, here, in the front end, we use the id key of our data object
  // in order to identify which we want to Update or delete.
  // for our back end, we use the object id assigned by MongoDB to modify
  // data base entries

  // our first get method that uses our backend api to
  // fetch data from our data base
  getDataFromDb = () => {
    fetch('https://chernobyl-reactor.herokuapp.com/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res.data }));
  };

  // our put method that uses our backend api
  // to create new query into our data base
  putDataToDB = (prodName) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 0;    
    while (currentIds.includes(idToBeAdded)) {    // *--Remark: This logic may work well for low number of ids but won't work well as ids grow
      ++idToBeAdded;
    }

    axios.post('https://chernobyl-reactor.herokuapp.com/api/putData', {
      id: idToBeAdded,
      productName: prodName,
      price: 199,
      paid: true
    });
  };

  // our delete method that uses our backend api
  // to remove existing database information
  deleteFromDB = (idTodelete) => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach((dat) => {
      // eslint-disable-next-line eqeqeq
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete('https://chernobyl-reactor.herokuapp.com/api/deleteData', {
      data: {
        id: objIdToDelete,
      },
    });
  };

  // our update method that uses our backend api
  // to overwrite existing data base information
  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach((dat) => {
      // eslint-disable-next-line eqeqeq
      if (dat.id == idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post('https://chernobyl-reactor.herokuapp.com/api/updateData', {
      id: objIdToUpdate,
      update: { message: updateToApply },
    });
  };

  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Pageheader></Pageheader>

        <div className="grid-container">                   
          {data.length <= 0
            ? <p className="special-font">'Stock Unavailable. Please retry after some time. It should be back soon.'</p>
            : data.map((dat) => (
              <Counters key={data.id}
              item={dat.productName}
              price={dat.price}
              imglink="https://picsum.photos/id/0/100">
            </Counters>              
          ))}              
        </div>

        {/* <section>          
          <hr style={{
            color: '#fff',
            backgroundColor: '#fff',
            height: .75,
            borderColor : '#fff'}} />
    
          <h4 style={{color:'#124322', textAlign:'center'}} >Adjust values in Database here...</h4>
          <DBUpdate></DBUpdate>
        </section> */}
        
      </div>
    );
  }
}

export default App;