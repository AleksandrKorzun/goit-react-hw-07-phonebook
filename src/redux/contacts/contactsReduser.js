import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addItemsActionCreatorError, addItemsActionCreatorRequest, addItemsActionCreatorSuccess, deleteItemActionCreatorError, deleteItemActionCreatorRequest, deleteItemActionCreatorSuccess, getItemsActionCreatorError, getItemsActionCreatorRequest, getItemsActionCreatorSuccess, setFilterActionCreator } from "./contactsActions";
// import { addItemsActionCreator, deleteItemActionCreator, getItemsActionCreator, setFilterActionCreator} from "./contactsActions";

const itemsReducer = createReducer([], {
    [addItemsActionCreatorSuccess]: (state, action) => [...state, action.payload],
    [deleteItemActionCreatorSuccess]: (state, action) => state.filter(contact => contact.id !== Number(action.payload)),
    [getItemsActionCreatorSuccess]: (_, action) => [...action.payload],
    
})
const isLoader = createReducer(false, {
  [addItemsActionCreatorRequest]: () => true,
  [addItemsActionCreatorSuccess]: () => false,
  [addItemsActionCreatorError]: () => false,
  [getItemsActionCreatorRequest]: () => true,
  [getItemsActionCreatorSuccess]: () => false,
  [getItemsActionCreatorError]: () => false,
  [deleteItemActionCreatorRequest]: () => true,
  [deleteItemActionCreatorSuccess]: () => true,
  [deleteItemActionCreatorError]: () => true,

})
const error = createReducer(null, {
  [addItemsActionCreatorError]: (_, action) => action.payload,
  [deleteItemActionCreatorError]: (_, action) => action.payload,
  [getItemsActionCreatorError]: (_, action) => action.payload,
})
const filterReducer = createReducer("", {
    [setFilterActionCreator]: (_, action) => action.payload,
  });

  const contactsReduser = combineReducers({
    items: itemsReducer,
    isLoading: isLoader,
    error,
    filter: filterReducer,
  });

  export default contactsReduser;

