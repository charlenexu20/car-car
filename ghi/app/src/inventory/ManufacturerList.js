import React from 'react';
import {Link} from 'react-router-dom'

class ManufacturerList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            manufacturers: []
        }
    }

    async componentDidMount() {
        const url = "http://localhost:8100/api/manufacturers/"
        const response = await fetch(url)
        if (response.ok) {
            let data = await response.json();
            this.setState({manufacturers: data.manufacturers})
        }
    }

    render() {
        return (
            <div>
                <h1>Manufacturers</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.manufacturers.map(manufacturer => {
                            return (
                                <tr key={manufacturer.href}>
                                    <td>{manufacturer.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ManufacturerList;
