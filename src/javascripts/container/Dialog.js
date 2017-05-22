import React, { Component } from 'react'
import {connect} from 'react-redux'
import moment from 'moment'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import ContentAdd from 'material-ui/svg-icons/content/add'

import Divider from 'material-ui/Divider'
import {List, ListItem} from 'material-ui/List'

import { selectAnswer } from '../actions/dialogs'


class Dialog extends Component {

    constructor() {
        super();
        moment.locale('ru');
    }

    scrollIntoLastBubble() {
        const bubbles = document.getElementsByClassName('bubble');
        bubbles[bubbles.length - 1].scrollIntoView();
    }

    componentDidMount() {
        this.scrollIntoLastBubble()
    }

    componentDidUpdate() {
        this.scrollIntoLastBubble()
    }

    handlerClickAnswer = (id) => {
        this.props.selectAnswer(id)
    }

    render() {
        const { history, messages, answers } = this.props;

        return (
            <div className="dialog">
                <AppBar
                    title="Александр Меньшиков"
                    iconElementLeft={
                        <IconButton>
                            <NavigationArrowBack onClick={ () => history.push('/') } />
                        </IconButton>
                    }

                    iconElementRight={
                        <IconMenu
                            iconButtonElement={
                                <IconButton><MoreVertIcon /></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        >
                            <MenuItem primaryText="Помощь" />
                            <MenuItem primaryText="Выход" />
                        </IconMenu>
                    }
                />
                <div className="chat">
                    <div className="conversation-start">
                        <span>{moment().format('dddd, DD MMMM')}</span>
                    </div>
                    {
                        messages.map( message =>
                            <div key={ message.get('id') }>
                                <div className="bubble you">{ message.get('text') }</div>
                            </div>
                        )
                    }
                </div>

                <div>
                    <Divider />
                    <List>
                        {
                            answers.map( (answer, key) =>
                                <div key={ answer.get('id') }>
                                    <ListItem
                                        primaryText={ answer.get('text') }
                                        leftIcon={<ContentAdd />}
                                        onClick={ () => this.handlerClickAnswer( answer.get('id') ) }
                                    />
                                    { answers.size - 1 != key &&
                                        <Divider inset={true} />
                                    }
                                </div>
                            )
                        }
                    </List>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    const contactId = ownProps.match.params.id;
    let currentMessage = null;

    return {
        messages: state.messages
            // выбираем сообщения этого контакта
            .filter( message => message.get('contactId') == contactId)
            // показываем только сообщения с ответами + 1 без ответа
            .filter( message => {
                if ( !currentMessage && !message.get('answerId') ) {
                    currentMessage = message.get('id');
                    return true;
                }
                return !currentMessage;
            })
            //
            .sort((a, b) => a.get('id') - b.get('id')),

        answers: state.answers
            // ToDo оптимизнуть, тут всегда будет только один элемент
            .filter( answer => answer.get('messageId') == currentMessage)
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         selectAnswer: id => dispatch( selectAnswer(id) )
//     }
// };

export default connect(mapStateToProps, {selectAnswer})(Dialog)