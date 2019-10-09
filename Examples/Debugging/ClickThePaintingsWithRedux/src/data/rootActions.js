import * as ActionTypes from './rootActionTypes';
import axios from 'axios';

const objectID_url =
  'https://collectionapi.metmuseum.org/public/collection/v1/search?departmentIds=11&isHighlight=true&q=vincent+van+gogh';
const object_url =
  'https://collectionapi.metmuseum.org/public/collection/v1/objects';

export function fetchPaintings() {
  return async function(dispatch) {
    try {
      dispatch({
        type: ActionTypes.SHOW_LOADING,
      });
      const result = await axios.get(objectID_url);

      const ids = result.data.objectIDs.slice(0, 10);

      let paintings = [];

      for (let id of ids) {
        const url = `${object_url}/${id}`;
        const painting = await axios.get(url);
        paintings.push(painting.data);
      }

      dispatch({
        type: ActionTypes.FETCH_PAINTINGS,
        paintings,
      });
    } catch (e) {
      console.error(e);
    } finally {
      dispatch({
        type: ActionTypes.HIDE_LOADING,
      });
    }
  };
}

export function showLoading() {
  return {
    type: ActionTypes.SHOW_LOADING,
  };
}

export function hideLoading() {
  return {
    type: ActionTypes.HIDE_LOADING,
  };
}
