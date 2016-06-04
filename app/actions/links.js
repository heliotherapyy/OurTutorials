/* eslint consistent-return: 0, no-else-return: 0 */
import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from 'types';

polyfill();

// 아래에서 쓰일 util 함수. /link/:id 로 data를 넘기는 promise를 리턴한다.
export function makeLinkRequest(method, data, currentCategoryName, api = '/put') {
  // return request[method](api + (id ? ('/' + id) : ''), data);
  return request[method](api + '/' + currentCategoryName + '/' + data.title, data);
}

export function increment(index) {
  return { type: types.INCREMENT_LIKE, index };
}

export function decrement(index) {
  return { type: types.DECREMENT_LIKE, index };
}

export function destroy(index) {
  return { type: types.DESTROY_LINK, index };
}


export function typing(text) {
  return {
    type: types.TYPING,
    newLink: text
  };
}

/*
 * @param data
 * @return a simple JS object
 */
export function createLinkRequest(data) {
  return {
    type: types.CREATE_LINK_REQUEST,
    data: data
  };
}

export function createLinkSuccess(data) {
  return {
    type: types.CREATE_LINK_SUCCESS,
  };
}

export function createLinkFailure() {
  return {
    type: types.CREATE_LINK_FAILURE,
    data: data
  };
}

export function createLinkDuplicate() {
  return {
    type: types.CREATE_LINK_DUPLICATE
  };
}

// This action creator returns a function,
// which will get executed by Redux-Thunk middleware
// This function does not need to be pure, and thus allowed
// to have side effects, including executing asynchronous API calls.
export function createLink(data, currentCategoryName) {
  console.log('createLink');
  return (dispatch) => {
    // If the text box is empty
    // if (text.trim().length <= 0) return;

    // const id = md5.hash(text);
    // Redux thunk's middleware receives the store methods `dispatch`
    // and `getState` as parameters
    // const { link } = getState();


    // Conditional dispatch
    // If the link already exists, make sure we emit a dispatch event
    // if (link.links.filter(linkItem => linkItem.id === id).length > 0) {
    //   // Currently there is no reducer that changes state for this
    //   // For production you would ideally have a message reducer that
    //   // notifies the user of a duplicate link
    //   return dispatch(createLinkDuplicate());
    // }

    // First dispatch an optimistic update
    console.log('?????');

    return makeLinkRequest('put', data, currentCategoryName)
      .then(res => {
        if (res.status === 200) {
          // We can actually dispatch a CREATE_LINK_SUCCESS
          // on success, but I've opted to leave that out
          // since we already did an optimistic update
          // We could return res.json();
          console.log('SUCCESS?');
          return dispatch(createLinkSuccess(res.data));
        }
      })
      .catch((err) => {
        console.log('failure: ',err);
        return dispatch(createLinkFailure());
      });
  };
}

// Fetch posts logic
export function fetchLinks() {
  return {
    type: types.GET_LINKS,
    promise: makeLinkRequest('get')
  };
}


export function incrementLike(id, index) {
  return dispatch => {
    dispatch(increment(index));

    return makeLinkRequest('put', id, {
        isFull: false,
        isIncrement: true
      });
    // do something with the ajax response
    // You can also dispatch here
    // E.g.
    // .then(response => {});
  };
}

export function decrementLike(id, index) {
  return dispatch => {
    dispatch(decrement(index));
    return makeLinkRequest('put', id, {
        isFull: false,
        isIncrement: false
      });
    // do something with the ajax response
    // You can also dispatch here
    // E.g.
    // .then(response => {});
  };
}

export function destroyLink(id, index) {
  return dispatch => {
    dispatch(destroy(index));
    return makeLinkRequest('delete', id);
    // do something with the ajax response
    // You can also dispatch here
    // E.g.
    // .then(response => {});
  };
}
