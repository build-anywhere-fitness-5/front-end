import React from "react";
import styled from "styled-components";

const StyledClassCard = styled.div`
    min-width: 450px;
    background-color: white;

    box-sizing: border-box;
    margin: 2.5rem;
    padding: 1rem;

    border: 2px solid #828282;
    
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

    @media (max-width: 800px) {
        min-width: 50vw;
    }

`;

const FlexboxRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FlexboxCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;


const ClassName = styled.h2`
    font-size: 2rem;
    margin: 0 auto;

    text-align: left;
`;

const InstructorAndLocation = styled.p`
    font-size: 1rem;
    font-style: oblique;

    text-align: left;
`;

const IntensityText = styled.span`
    font-weight: bold;
`;

const IntensityDescription = styled.p`

    font-size: 1.25rem;
    color: #333333;
    line-height: 1.5rem;

    margin-left: 10%;

`;

const StyledHr = styled.hr`
    width: 100%;
    border: 2px solid #BDBDBD;
`;

const ClassDate = styled.p`
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0;
`;

const ClassTime = styled.p`
    font-size: 1.25rem;
    font-weight: bold;
    color: #828282;
    
    margin-top: 0.5rem;
`;

const Attendees = styled.p`
    font-size: 1rem;

    color: #828282;
    
`;




const ClassCard = function ({ item, index, scheduleClass, unscheduleClass, setUnScheduledClass, setFilteredClass }) {
    console.log("item", item, "index", index, scheduleClass )
    let [year, month, day] = item.date.split("-");

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthName = months[month - 1];

    // let dateObj = new Date(item.date);
    // let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursdasy", "Friday", "Saturday"];
    // let dayOfWeek = daysOfWeek[dateObj.getDay()];

    let dateString = `${monthName} ${day}, ${year}`;

    // get hour and minutes from startTime
    let [hour, minutes] = item.startTime.split(":");
    hour = parseInt(hour);
    minutes = parseInt(minutes);

    let duration = parseInt(item.durationMinutes);

    // compute the end time from the given start time and duration
    let endTimeObj = new Date();
    endTimeObj.setHours(hour);
    endTimeObj.setMinutes(minutes + duration);

    let endTimeString = endTimeObj.getHours() + ":" + endTimeObj.getMinutes();

    // create gradient to specify intensity level of class
    let gradientColors = "to top, #FF6900";

    if (item.intensity === "high")
        { gradientColors += ", #FF6900, black"; }

    else if (item.intensity === "medium")
        { gradientColors += ", #FF6900, white, white"; }
    
    else
        { gradientColors += ", white, white, white, white"; }

    const IntensityMeter = styled.div`
        min-width: 10px;
        height: 100px;
        background-color: #BDBDBD;
        background-image: linear-gradient(${gradientColors});
        border: 1px solid #BDBDBD;

    `;

    return (
        <StyledClassCard key={index}>

            <FlexboxRow>
                <div>
                    <ClassName>{item.className}</ClassName>
                    <InstructorAndLocation>with {item.instructor} at {item.location}</InstructorAndLocation>
                </div>
                
                    <IntensityDescription>
                        <IntensityText>
                            {item.intensity[0].toUpperCase() + item.intensity.slice(1, item.intensity.length)}
                        </IntensityText>
                        <br />Intensity<br />{item.classType}
                    </IntensityDescription>

                    <IntensityMeter />
                
            </FlexboxRow>

            <StyledHr />

            <FlexboxRow>
                <FlexboxCol>
                    <ClassDate>{dateString}</ClassDate>
                    <ClassTime>{item.startTime} to {endTimeString}<br />({duration} min)</ClassTime>
                </FlexboxCol>

                <FlexboxCol>
                    <Attendees>Attending: {item.clients.length} / {item.maxClassSize}</Attendees>
                    {scheduleClass ? (<button
                        onClick={() => {
                        scheduleClass(item);
                        setUnScheduledClass(filteredClass =>
                            filteredClass.filter((item, i) => i !== index)
                        );
                        setFilteredClass(filteredClass =>
                            filteredClass.filter((item, i) => i !== index)
                        );
                        }}
                    >
                        Schedule Class
                    </button>): (<button
                        onClick={() => {
                        unscheduleClass(item);
                        setUnScheduledClass(filteredClass =>
                            filteredClass.filter((item, i) => i !== index)
                        );
                        setFilteredClass(filteredClass =>
                            filteredClass.filter((item, i) => i !== index)
                        );
                        }}
                    >
                        Unschedule Class
                    </button>)}
                    
                </FlexboxCol>

                
            </FlexboxRow>

        </StyledClassCard>

    )
}

export default ClassCard;