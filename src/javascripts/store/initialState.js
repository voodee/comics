import { fromJS } from 'immutable'

export default {
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
            text: 'Давай я расскажу всё по порядку',
        }
    ]),
    answers: fromJS([
        {
            id: 1,
            messageId: 1,
            text: 'О чём ты говоришь?'
        },
        {
            id: 2,
            messageId: 1,
            text: 'Псих, иди в бан!'
        },
        {
            id: 3,
            messageId: 1,
            text: 'Хорошо, удиви меня :D'
        },
        {
            id: 4,
            messageId: 2,
            text: 'ответ1'
        },
        {
            id: 5,
            messageId: 2,
            text: 'ответ2'
        }
    ])
}