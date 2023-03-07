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


// import React, { useState, useEffect } from 'react';
// import "../index.css"

// function ManufacturerList() {
//     const [manufacturers, setManufacturers] = useState([]);
//     const getManufacturers = async () => {
//         const manufacturerUrl = `http://localhost:8100/api/manufacturers/`;
//         const response = await fetch(manufacturerUrl);
//         if (response.ok) {
//             const listManufacturer = await response.json();
//             setManufacturers(listManufacturer.manufacturers);
//         }
//     };

//     useEffect(() => {
//         getManufacturers();
//     }, []);

//     if (manufacturers === undefined) {
//         return null;
//     }


//     return (
//         <>
//         <div>
//             <h1>Manufacturers</h1>
//         </div>
//         <table className="table table-striped">
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th></th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {manufacturers.map((manufacturer) => {
//                     return (
//                         <tr key={ manufacturer.id }>
//                             <td>{ manufacturer.name }</td>
//                         </tr>
//                     );
//                 })}
//             </tbody>
//         </table>
//         </>
//     );
// }

// export default ManufacturerList;
