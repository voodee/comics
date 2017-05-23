import { Map } from 'immutable'

import { SELECT_ANSWER } from '../actions/dialogs'

export default function (state = Map(), action) {

    switch (action.type) {
        case SELECT_ANSWER:

            return state
                .push(
                    Map({
                        id: state.size + 1,
                        contactId: action.payload.contactId * 1,
                        textType: 'answer',
                        textId: action.payload.answerId
                    })
                ).push(
                    Map({
                        id: state.size + 2,
                        contactId: action.payload.contactId * 1,
                        textType: 'message',
                        textId: action.payload.messageIdTarget
                    })
                );
        default:
            return state
    }
}