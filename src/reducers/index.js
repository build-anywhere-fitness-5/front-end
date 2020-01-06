const initialState = {
    classes: [
        {
            className: 'CrossFit Monday',
            type: 'CrossFit',
            startTime: '11:45PM',
            durationMinutes: 45,
            intensity: 'high',
            location: 'Studio Los Feliz',
            maxClassSize: 10,
            clients: [
                'susieclient'
            ],
            date: '2019-12-12',
            instructor: 'joeinstructor',
        },
        {
            className: 'Yoga Tues',
            type: 'Yoga',
            startTime: '12:45PM',
            durationMinutes: 30,
            intensity: 'low',
            location: 'Studio Los Feliz',
            maxClassSize: 5,
            clients: [
                'susieclient'
            ],
            date: '2019-12-12',
            instructor: 'joeinstructor',
        }
    ],
    passes: [
        {
            className: 'CrossFit',
            instructor: 'joeinstructor',
            client: 'susieclient',
            classesRemaining: 5
        }
    ]
}

export const classReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        default:
            return state
    }
}