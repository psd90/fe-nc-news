import React, {Component} from 'react';

class Sort extends Component {
    state = {
        value : ""
    }

handleChange = (event) => {
    event.preventDefault();
    const {value} = event.target;
    this.setState()
}
    render(){
        return (
            <div>
                <select onChange={this.handleChange}>
                    <option value="comment_count">comment count</option>
                </select>
            </div>
        )
    }
}
export default Sort;