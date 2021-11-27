import { deleteContactsApi, getContactsApi, setContactsApi } from "../../services/api-contacts"
import {  getItemsActionCreatorRequest, getItemsActionCreatorSuccess, getItemsActionCreatorError, addItemsActionCreatorRequest, addItemsActionCreatorError, deleteItemActionCreatorRequest, deleteItemActionCreatorError, addItemsActionCreatorSuccess, deleteItemActionCreatorSuccess } from "./contactsActions"

export const getContactsOperation = () => async (dispatch, getState) => {
    dispatch(getItemsActionCreatorRequest())
    try {
        const contacts = await getContactsApi()
        dispatch(getItemsActionCreatorSuccess(contacts))
    } catch (error) {
        dispatch(getItemsActionCreatorError())
    }

}
export const addContactOperation = (contact) => async (dispatch, getState) => {
    dispatch(addItemsActionCreatorRequest())
    try {
        const data = await setContactsApi(contact)
        dispatch(addItemsActionCreatorSuccess(data))
    } catch (error) {
        dispatch(addItemsActionCreatorError())
    }
}
export const deleteContactOperation = (id) => async (dispatch, getState) => {
    dispatch(deleteItemActionCreatorRequest())
    try {
        await deleteContactsApi(id)
        dispatch(deleteItemActionCreatorSuccess(id))
    } catch (error) {
        dispatch(deleteItemActionCreatorError())
    }
}