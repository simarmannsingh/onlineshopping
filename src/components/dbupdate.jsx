import React, { Component } from 'react';

class DBUpdate extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="dbupdate">
                <div>
                    <input
                        type="text"
                        onChange={(e) => this.setState({ message: e.target.value })}
                        placeholder="add something in the database"
                        />

                    <button onClick={() => this.putDataToDB(this.state.message)}>
                        ADD
                    </button>
                </div>
              
                <div >
                    <input
                        type="text"                        
                        onChange={(e) => this.setState({ idToDelete: e.target.value })}
                        placeholder="put here id of item to delete" />
                        
                    <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>
                        DELETE
                    </button>
                </div>

                <div >
                    <input
                        type="text"                        
                        onChange={(e) => this.setState({ idToUpdate: e.target.value })}
                        placeholder="put here id of item to update"/>

                    <input
                        type="text"                        
                        onChange={(e) => this.setState({ updateToApply: e.target.value })}
                        placeholder="put here new value of the item"/>
                    
                    <button
                        onClick={() =>
                        this.updateDB(this.state.idToUpdate, this.state.updateToApply)}>
                        UPDATE
                    </button>
                </div>
            </div>
         );
    }
}
 
export default DBUpdate;