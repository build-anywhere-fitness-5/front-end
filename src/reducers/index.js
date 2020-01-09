import {
  ADD_CLASS,
  SCHEDULE_CLASS,
  UNSCHEDULE_CLASS,
  DELETE_CLASS,
  ADD_PASS,
  EDIT_PASS,
  DELETE_PASS,
  EDIT_CLASS,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  EDIT_STUDIO_CLASS,
  DELETE_STUDIO_CLASS,
  FETCH_SUCCESS,
  FETCHCAT_SUCCESS,
  FETCH_CLASSES,
  FETCHCLASS_SUCCESS,
  ADD_STUDIO_CLASS,
  ADD_USER,
  REMOVE_USER
} from "../actions/index";

const initialState = {
  studioTwoClasses: [
    {
      id: 1,
      title: "Yoga",
      instructorId: 1,
      categoryId: 1,
      scheduleTime: '22:45',
      address: null,
      city: null,
      state: null,
      zipCode: null,
      created_at: "2019-10-21T12:51:44.173Z",
      updated_at: "2019-10-21T12:51:44.173Z"
    }
  ],
  classes: [
    {
      className: "CrossFit Monday",
      classType: "CrossFit",
      startTime: "12:45",
      durationMinutes: 45,
      intensity: "high",
      location: "Studio Los Feliz",
      maxClassSize: 10,
      clients: ["susieclient"],
      date: "2019-12-12",
      instructor: "joeinstructor",
      id: 1
      // id is a placeholder for now, I assume the API will generate that for us
    },
    {
      className: "Yoga Tues",
      classType: "Yoga",
      startTime: "12:45",
      durationMinutes: 30,
      intensity: "low",
      location: "Studio Los Feliz",
      maxClassSize: 5,
      clients: ["susieclient"],
      date: "2019-12-12",
      instructor: "joeinstructor",
      id: 2
      // id is a placeholder for now, I assume the API will generate that for us
    }
  ],
  passes: [
    {
      className: "Yoga",
      instructor: "joeinstructor",
      client: "orangeclient",
      classesRemaining: 9,
      id: 0
    },
    {
      className: "Jimmy",
      instructor: "papainstructor",
      client: "susieclient",
      classesRemaining: 2,
      id: 1
    },
    {
      className: "CrossFit",
      instructor: "mommainstructor",
      client: "willclient",
      classesRemaining: 7,
      id: 2
    }
  ],
  categories: [],
  scheduledClasses: [],
  user: ''
};

export const classReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case FETCHCAT_SUCCESS:
      return {
        ...state,
        categories: action.payload

      }
    case FETCHCLASS_SUCCESS:
      return {
        ...state,
        classes: action.payload

      }
    case ADD_CLASS:
      return {
        ...state,
        classes: [...state.classes, action.payload]
      };
    case SCHEDULE_CLASS:
      return {
        ...state,
        scheduledClasses: [...state.scheduledClasses, action.payload]
      };
    case UNSCHEDULE_CLASS:
      return {
        ...state,
        scheduledClasses: [
          ...state.scheduledClasses.filter((item, index) => {
            return item !== action.payload;
          })
        ]
      };
    case DELETE_CLASS:
      return {
        ...state,
        classes: state.classes.filter(c => c.id !== action.payload)
      };
    case ADD_PASS:
      return {
        ...state,
        passes: [...state.passes, action.payload]
      };
    case DELETE_PASS:
      return {
        ...state,
        passes: [
          ...state.passes.filter((item, index) => {
            return item !== action.payload;
          })
        ]
      };
    case EDIT_PASS:
      return {
        ...state,
        passes: state.passes.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        })
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload]
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: [
          ...state.categories.filter((item, index) => {
            return item !== action.payload;
          })
        ]
      };
    case EDIT_CATEGORY:
      return {
        ...state,
        categories: state.categories.map(item => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        })
      };
    case EDIT_CLASS:
      // console.log(state, action);
      return {
        ...state,
        classes: state.classes.map(item => {
          if (item.id === action.payload.id) {
            return { ...action.payload };
          }
          return item;
        })
      };
    case ADD_STUDIO_CLASS:
      return {
        ...state,
        studioTwoClasses: [...state.studioTwoClasses, action.payload]
      };
    case EDIT_STUDIO_CLASS:
      // console.log(state, action);
      return {
        ...state,
        studioTwoClasses: state.studioTwoClasses.map(item => {
          if (item.id === action.payload.id) {
            return { ...action.payload }
          }
          return item
        })
      };
    case DELETE_STUDIO_CLASS:
      return {
        ...state,
        studioTwoClasses: state.studioTwoClasses.filter(c => c.id !== action.payload)
      };
    case ADD_USER:
      return {
        ...state,
        user: action.payload
      }
    case REMOVE_USER:
      return {
        ...state,
        user: ''
      }
    default:
      return state;
  }
};
