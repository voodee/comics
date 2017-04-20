import React, { Component } from 'react'
import {connect} from 'react-redux'

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back'
import ContentAdd from 'material-ui/svg-icons/content/add'


import Divider from 'material-ui/Divider'
import {List, ListItem} from 'material-ui/List'

class Dialog extends Component {
    render() {
        const { history } = this.props;

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
                        <span>Today, 6:48 AM</span>
                    </div>
                    <div className="bubble you">
                        Привет.
                    </div>
                    <div className="bubble you">
                        Хорошо что ты в сети
                    </div>
                    <div className="bubble me">
                        Кто ты? Я тебя не знаю
                    </div>
                    <div className="bubble you">
                        Давай я расскажу всё по порядку
                    </div>
                    <div className="bubble you">
                        Когда ты совершал телепортацию,
                        произошел сбой в системе
                    </div>
                </div>

                <div>
                    <Divider />
                    <List>
                        <ListItem
                            primaryText="О чём ты говоришь?"
                            leftIcon={<ContentAdd />}
                        />
                        <Divider inset={true} />
                        <ListItem
                            primaryText="Псих, иди в бан!"
                            leftIcon={<ContentAdd />}
                        />
                        <Divider inset={true} />
                        <ListItem
                            primaryText="Хорошо, удиви меня :D"
                            leftIcon={<ContentAdd />}
                        />
                    </List>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    return {}
};

export default connect(mapStateToProps)(Dialog)