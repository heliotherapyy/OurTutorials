import {
  GET_CHILDREN_REQUEST,
  GET_CHILDREN_SUCCESS,
  GET_CHILDREN_FAILURE,
  GET_ALL_LINKS_REQUEST,
  GET_ALL_LINKS_SUCCESS,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_ALL_LINKS_FAILURE,
  GET_CATEGORIES_FAILURE,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  TYPING,
} from 'types';


export default function category(state = {
  categories: [],
  currentCategory: {
    id: '',
    name: '',
    depth: 0
  },
  newCategory: '',
  links: []
},action) {
  switch (action.type) {
    case TYPING:
      return Object.assign({}, state, {
        newCategory: action.newCategory
      })
    case GET_CATEGORIES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_CATEGORIES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        categories: action.req.data,
        currentCategory: {
          id: '',
          name: '',
          depth: 0
        }
      });
    case GET_CATEGORIES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case GET_CHILDREN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_CHILDREN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        categories: action.req.data,
        currentCategory: {
          id: action.id,
          name: action.name,
          depth: 1
        }
      });
    case GET_CHILDREN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case GET_ALL_LINKS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_ALL_LINKS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        currentCategory: {
          id: action.id,
          name: action.name,
          depth: 2
        },
        links: action.req.data
      });
    case GET_ALL_LINKS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case ADD_CATEGORY_SUCCESS:
      return {
        categories: [...state.categories, {
          _id: action.id, name: action.name
        }],
        currentCategory: action.parentId
      };
    case ADD_CATEGORY_FAILURE:
      return {

      };

    default:
      return state;
  }
}
