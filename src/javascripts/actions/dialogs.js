export const SELECT_ANSWER = 'SELECT_ANSWER'

export function selectAnswer( answerId, contactId, messageIdTarget ) {
    return {
        type: SELECT_ANSWER,
        payload: {
            answerId,
            contactId,
            messageIdTarget
        }
    }
}