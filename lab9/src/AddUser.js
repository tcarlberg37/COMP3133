import React from 'react';
import axios from 'axios';

class AddUser extends React.Component {
    state = { 
        name: ""
    }

    handleChange = event => {
        this.setState(
            {name: event.target.value}
        )
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.name);
        axios.post('https://jsonplaceholder.typicode.com/users', {user: this.state.name}).then(res => {
            console.log(res.data);
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
                        Person Name:
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
         );
    }
}
 
export default AddUser;