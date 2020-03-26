import React from 'react';
import axios from 'axios';
import DeleteAction from './DeleteAction';
import AddUser from './AddUser';


class UserList extends React.Component {
    state = { 
        users: []
    }

    componentDidMount(params) {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            this.setState({
                users: res.data
            })
        })
    }

    refresh = event => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            this.setState({
                users: res.data
            })
        })
        console.log('refresh called');
    }

    render() { 
        return ( 
            <div>
                <AddUser refresh={this.refresh} />
                {this.state.users.map(user => 
                    <div>
                        <p>
                            {user.name}
                            <DeleteAction id={user.id} refresh={this.refresh}/> {/* Challenge part using the same method as AddUser refresh*/}
                        </p>
                    </div>
                )}
            </div>
         );
    }
}
 
export default UserList;