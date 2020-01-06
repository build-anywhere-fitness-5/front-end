import { ADD_CLASS } from '../actions/index'

const initialState = {
    classes: [
        {
            className: 'CrossFit Monday',
            classType: 'CrossFit',
            startTime: '12:45',
            durationMinutes: 45,
            intensity: 'high',
            location: 'Studio Los Feliz',
            maxClassSize: 10,
            clients: [
                'susieclient'
            ],
            date: '2019-12-12',
            instructor: 'joeinstructor',
            id: null,
        },
        {
            className: 'Yoga Tues',
            classType: 'Yoga',
            startTime: '12:45',
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
        case ADD_CLASS:
            return {
                ...state,
                classes: [
                    ...state.classes,
                    action.payload
                ]
            };
        default:
            return state
    }
}