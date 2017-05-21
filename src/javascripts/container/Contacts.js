import React, { Component } from 'react'
import {connect} from 'react-redux'


import Avatar from 'material-ui/Avatar'
import {List, ListItem} from 'material-ui/List'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble'

import Divider from 'material-ui/Divider'

import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import IconAdd from 'material-ui/svg-icons/content/add'
import IconShare from 'material-ui/svg-icons/social/share'

class Contacts extends Component {

    render() {
        const { contacts, history } = this.props;


        return (
            <div>

                <AppBar
                    title="Список контактов"
                    iconElementLeft={ <div /> }

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

                <List>
                    {
                        contacts.map( (contact, key) =>
                            <div key={key}>
                                <ListItem
                                    primaryText={contact.get('name')}
                                    secondaryText="..."
                                    leftAvatar={<Avatar src={'images/avatar/' + contact.get('photo')} />}
                                    onClick={ () => history.push(`/dialog/${contact.get('id')}`) }
                                />
                                <Divider inset={true} />
                            </div>
                        )
                    }
                    <ListItem
                        primaryText="Арсений Петров"
                        secondaryText="Кто я? Хороший вопрос! Я это ты!"
                        leftAvatar={<Avatar src="images/avatar/3.jpg" />}
                        onClick={ () => history.push('/dialog') }
                    />
                    <Divider inset={true} />
                    <ListItem
                        primaryText="Наталья Кательникова"
                        secondaryText="А как можно не верить самому себе?! Ладно я расскажу тебе то, что можешь знать только ты."
                        leftAvatar={<Avatar src="images/avatar/2.jpg" />}
                        rightIcon={<CommunicationChatBubble />}
                        onClick={ () => history.push('/dialog') }
                    />
                </List>

                <BottomNavigation selectedIndex={0} style={{ position: 'absolute', bottom: 0 }}>
                    <BottomNavigationItem
                        label="Добавить"
                        icon={ <IconAdd /> }
                        onTouchTap={() => {}}
                    />
                    <BottomNavigationItem
                        label="Поделиться"
                        icon={ <IconShare /> }
                        onTouchTap={() => {}}
                    />
                </BottomNavigation>
            </div>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    const { contacts } = state;

    return {
        contacts
    }
};

export default connect(mapStateToProps)(Contacts)