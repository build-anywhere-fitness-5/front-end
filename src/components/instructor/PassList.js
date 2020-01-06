import React from 'react';
import { connect } from 'react-redux'

const PassList = props => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Pass holder</th>
                        <th>Class</th>
                        <th>Classes Remaining</th>
                    </tr>
                </thead>
                <tbody>
                    {props.passes.map((pass, index) => (
                        <tr key={index}>
                            <td>{pass.client}</td>
                            <td>{pass.className}</td>
                            <td>{pass.classesRemaining}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        passes: state.passes
    }
}

export default connect(mapStateToProps, {})(PassList);