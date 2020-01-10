import React from "react";

import styled from "styled-components";

import personIcon from "../../images/person_icon.png"

const UserCard = ({ pass, deletePass, handleOpen, setItem}) => {

    const UserCardContainer = styled.div`

        display: flex;
        flex-direction: column;

        margin: 5% 1rem 0 1rem;
    `;

    const StyledUserCard = styled.div`

    width: 350px;

    background-color: #FF9966;
    border-radius: 5px;

    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

    display: flex;

    transform: rotate(-2deg);

    `;

    const ClassName = styled.h2`

        margin: 0.5rem auto;

    `;

    const FlexColumn = styled.div`

        display: flex;
        flex-direction: column;
        justify-content: center;
        
    `;

    const FlexRow = styled.div`

        display: flex;
        justify-content: center;
    `;

    const ClassesRemainingText = styled.span`

        font-size: 1rem;
    `;

    const ClassesRemainingNumber = styled.span`

        font-size: 3rem;
        font-weight: bold;
        line-height: 6rem;

        margin-right: 1rem;
    `;
    const ClientName = styled.p`

        font-size: 1rem;
        font-style: oblique;
    `;

    const CirclePunches = styled.div`

        width: 200px;

        display: flex;
        flex-wrap: wrap;

        justify-content: space-between;
        align-items: space-between;

    `;

    const UnpunchedCircle = styled.div`

        width: 30px;
        height: 30px;

        margin: 2px;

        border-radius: 100%;

        background-color: #333333;

    `;


    const PunchedCircle = styled.div`

        width: 25px;
        height: 25px;

        border-radius: 100%;

        background-color: white;

        box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.5);

        position: relative;

    `;

    const EditDeleteButtons = styled.div`

        margin: 1rem auto;


        width: 50%;

        display: flex;
        justify-content: space-around;
    `;


    // make an array of 10 elements. For n of those elements, show a "used" icon
    function makeRemainingClassIcons(classesRemaining)
    {
        // basic error handling
        if (classesRemaining < 0) { classesRemaining = 0 }
        if (classesRemaining > 10) { classesRemaining = 10 }

        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ].map((item, index) => {

            // create punched-out circles to show used classes
            if (10 - index > classesRemaining)
                {
                    // generate a random offset for each punch
                    let offsetX = Math.random() * 2;
                    let offsetY = Math.random() * 2;

                    // decide whether to flip the direction of offset
                    if (Math.floor(Math.random() * 2) === 1) { offsetX *= -1; }
                    if (Math.floor(Math.random() * 2) === 1) { offsetY *= -1; }

                    return <UnpunchedCircle key={index}>
                    <PunchedCircle style={{left: `${offsetX}px`, top: `${offsetY}px`}}></PunchedCircle>
                    </UnpunchedCircle>
                }
            
            // create unpunched circles for unused classes
            return <UnpunchedCircle key={index}></UnpunchedCircle>
        });

    }

    return (
        <UserCardContainer>
            <StyledUserCard>

                <FlexColumn>
                    <img src={personIcon} alt={"generic person icon"} />
                    <ClientName>{pass.client}</ClientName>
                </FlexColumn>

                <FlexColumn>

                    <FlexRow>
                    
                        <FlexColumn>
                            <ClassesRemainingNumber>{pass.classesRemaining}</ClassesRemainingNumber>
                        </FlexColumn>

                        <FlexColumn>
                            <ClassName>{pass.className}</ClassName>
                            <ClassesRemainingText>class{pass.classesRemaining === 1 ? "" : "es"} remaining</ClassesRemainingText>
                        </FlexColumn>

                    </FlexRow>

                    <FlexRow>
                        <CirclePunches>
                            {makeRemainingClassIcons(pass.classesRemaining)}
                        </CirclePunches>
                    </FlexRow>

                </FlexColumn>
            </StyledUserCard>

            <EditDeleteButtons>
                <button
                    onClick={e => {
                    // console.log('click')
                    e.preventDefault();
                    deletePass(pass);
                    console.log(pass);
                    }}
                >
                    delete
                </button>
                <button
                    onClick={e => {
                    //   props.editPass(pass);
                    // props.editPass(pass);

                    // }}>
                    //   {" "}
                    //   edit
                    //   {/* <Link to="/EditPost/:postID">Edit Post</Link> */}
                    e.preventDefault();
                    handleOpen();
                    setItem(pass);

                    console.log(pass);
                    }}
                >
                    edit
                </button>
            </EditDeleteButtons>
        </UserCardContainer>
    )

}

export default UserCard;