import Axios from 'axios';
import { api } from '../settings';

/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}

/* thunk creators */ // fetchFromAPI nie przyjmuje argumentów i zwraca thunka, czyli funkcję
export const fetchFromAPI = () => { // dispatch podobnie ja w mapDispatchToProps służy do dispatchowania akcji
  return (dispatch, getState) => {  // getState pozwala na pobranie stanu aplikacji
    dispatch(fetchStarted()); // dispatchujemy akcję tyou FETCH_START

    Axios // uruchamiamy połączenie z API za pomocą Axiosa
      .get(`${api.url}/api/${api.tables}`) // .get służy do wysyłania zapytań metodą GET
      .then(res => { // używamy .then do zareagowania na odpowiedź z serwera
        dispatch(fetchSuccess(res.data)); // reakcja to zdispatchowanie akcji typu FETCH_SUCCESS, której jako argument przekazujemy dane otrzymane z serwera
      })
      .catch(err => { // jeśli wystąpił błąd połączenia, zamiast funkcji z .then, wykona się funkcja z .catch
        dispatch(fetchError(err.message || true));
      });
  };
};
