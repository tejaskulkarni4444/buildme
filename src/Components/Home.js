import React, { Component } from 'react';
import logo from 'logo.svg'
import Navbar from './Navbar'
import { withStyles } from '@material-ui/core/styles'
import ServiceGrid from './ServiceGrid'

const styles = theme => ({
    container: {
        width: '100%'
    }
})

class Home extends Component {
    render() {
        const { name, classes } = this.props
        return (
            <div className={classes.container}>
                <p>{name}</p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                </a>
                <ServiceGrid />
            </div>
        );
    }
}

export default withStyles(styles)(Home)