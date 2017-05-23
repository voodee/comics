import { fromJS } from 'immutable'

export default {
    dialogs: fromJS([
        {
            id: 1,
            contactId: 1,
            textType: 'message',
            textId: 1
        },
        {
            id: 2,
            contactId: 2,
            textType: 'message',
            textId: 3
        }
    ]),
    contacts: fromJS([
        {
            id: 1,
            name: 'Арсений Петров',
            photo: '3.jpg'
        },
        {
            id: 2,
            name: 'Наталья Кательникова',
            photo: '2.jpg'
        }
    ]),
    messages: fromJS([
        {
            id: 1,
            contactId: 1,
            text: 'Привет. Хорошо что ты в сети.',
        },
        {
            id: 2,
            contactId: 1,
            text: 'Какую таблетку ты выберешь?',
        },
        {
            id: 3,
            contactId: 2,
            text: '...',
        }
    ]),
    answers: fromJS([
        {
            id: 1,
            messageIdSource: 1,
            messageIdTarget: 2,
            text: 'О чём ты говоришь?'
        },
        {
            id: 2,
            messageIdSource: 1,
            messageIdTarget: 2,
            text: 'Псих, иди в бан!'
        },
        {
            id: 3,
            messageIdSource: 1,
            messageIdTarget: 2,
            text: 'Хорошо, удиви меня :D'
        },
        {
            id: 4,
            messageIdSource: 2,
            messageIdTarget: 2,
            text: 'красную'
        },
        {
            id: 5,
            messageIdSource: 2,
            messageIdTarget: 2,
            text: 'синию'
        }
    ])
}
