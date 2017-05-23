import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Map } from 'immutable'

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
        const { contacts, dialogs, messages, history } = this.props;

        const contactList = contacts.map( contact => {
            // ищем последнее сообщение в переписке
            const contactDialogs = dialogs
                .filter( dialog => dialog.get('contactId') == contact.get('id'))
                .filter( dialog => dialog.get('textType') == 'message')
                .sort( (a, b) => b.get('id') - a.get('id') )
                .first();

            const secondaryText = contactDialogs
                ? messages
                    .filter( message => message.get('id') == contactDialogs.get('textId') )
                    .first()
                    .get('text')
                : '...';

            return contact.set('secondaryText', secondaryText)
        });

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
                        contactList.map( (contact, key) =>
                            <div key={ contact.get('id') }>
                                <ListItem
                                    primaryText={ contact.get('name') }
                                    secondaryText={ contact.get('secondaryText') }
                                    leftAvatar={<Avatar src={'images/avatar/' + contact.get('photo')} />}
                                    onClick={ () => history.push(`/dialog/${contact.get('id')}`) }
                                />
                                <Divider inset={true} />
                            </div>
                        )
                    }
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



const mapStateToProps = (state) => {
    const { contacts, dialogs, messages } = state;

    return {
        contacts,
        dialogs,
        messages
    }
};

export default connect(mapStateToProps)(Contacts)