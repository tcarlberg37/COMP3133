import React from 'react';
import axios from 'axios';

class DeleteUser extends React.Component {
    state = { 
        name: "",
        id: ""
    }

    handleChange = event => {
        this.setState(
            {id: event.target.value}
        )
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        var id = String(this.state.id);
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`).then(res => {
            console.log(res);
        })
        // Call refreshList function once form has been submitted
        this.refreshList();
    }

    refreshList() {
        // call parent refresh function using props
        this.props.refresh();
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        ID to Delete:
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
         );
    }
}
 
export default DeleteUser;