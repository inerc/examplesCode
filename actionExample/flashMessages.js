export const ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
export const DELETE_FLASH_MESSAGE = 'DELETE_FLASH_MESSAGE';

export function addFlashMessage(message, message_type) {
  return {
    type: ADD_FLASH_MESSAGE,
    message,
    message_type
  }
}

export function deleteFlashMessage(id) {
  return {
    type: DELETE_FLASH_MESSAGE,
    id
  }
}
