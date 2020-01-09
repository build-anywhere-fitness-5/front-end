import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { addClass } from '../../actions/index';

import { StyledInput } from "../StyledInput";
import { StyledSignupLoginButton } from "../StyledSignupLoginButton";

const Form = styled.form`
    width: 40vw;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {

        font-size: 1.5rem;
        line-height: 4rem;

        margin-right: 2rem;
    }

    @media (max-width: 1280px)
    {
        max-width: 70vw;

        input, label {

            font-size: 1rem;

            line-height: 2rem;

        }    

    }

    @media (max-width: 1024px)
    {
        max-width: 90vw;

    }

`

const FlexRow = styled.div`

    width: 100%;

    display: flex;
    justify-content: flex-end;

    margin: 0.5rem;

`;



const CreateClass = props => {

    const [newClass, setNewClass] = useState({
        className: '',
        classType: '',
        startTime: '',
        durationMinutes: 0,
        intensity: '',
        location: '',
        maxClassSize: 0,
        date: '',
        clients: []
    });

    console.log(newClass);

    const handleChanges = e => {
        console.log(e.target.value)
        setNewClass({
            ...newClass,
            [e.target.name]: e.target.type === 'number' ? +e.target.value : e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault()
        props.addClass(newClass);
        props.history.push(`/instructor/`);
    }

    return (
        <div>
            <h1>Create class</h1>

            <Form>

                <FlexRow>
                    <label htmlFor="className">Class Name</label>
                    <StyledInput
                        type="text"
                        name="className"
                        value={newClass.className}
                        id="className"
                        onChange={handleChanges}
                    />
                </FlexRow>
                <FlexRow>
                    <label htmlFor="classType">Type</label>
                    <StyledInput
                        type="text"
                        value={newClass.classType}
                        id="classType"
                        name="classType"
                        onChange={handleChanges}
                    />
                </FlexRow>
                <FlexRow>
                    <label htmlFor="startTime">Start time</label>
                    <StyledInput
                        type="time"
                        value={newClass.startTime}
                        id="startTime"
                        name="startTime"
                        onChange={handleChanges}
                    />
                </FlexRow>
                <FlexRow>
                    <label htmlFor="durationMinutes">Duration (minutes)</label>
                    <StyledInput
                        type="number"
                        value={newClass.durationMinutes}
                        id="durationMinutes"
                        name="durationMinutes"
                        onChange={handleChanges}
                    />
                </FlexRow>
                <FlexRow>
                <label htmlFor="intensity">Intensity</label>
                    <StyledInput
                        type="text"
                        value={newClass.intensity}
                        id="intensity"
                        name="intensity"
                        onChange={handleChanges}
                    />
                </FlexRow>
                <FlexRow>
                    <label htmlFor="location">Location</label>
                    <StyledInput
                        type="text"
                        value={newClass.location}
                        id="location"
                        name="location"
                        onChange={handleChanges}
                    />
                </FlexRow>
                <FlexRow>
                    <label htmlFor="maxClassSize">Max Class Size</label>
                    <StyledInput
                        type="number"
                        value={newClass.maxClassSize}
                        id="maxClassSize"
                        name="maxClassSize"
                        onChange={handleChanges}
                    />
                </FlexRow>
                <FlexRow>
                    <label htmlFor="date">Date</label>
                    <StyledInput
                        type="date"
                        value={newClass.date}
                        id="date"
                        name="date"
                        onChange={handleChanges}
                    />
                </FlexRow>
                <StyledSignupLoginButton onClick={handleSubmit}>Create class</StyledSignupLoginButton>
            </Form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        addClass: addClass
    }
}

export default connect(mapStateToProps, { addClass })(CreateClass);