import React from 'react';
import Aux from '../../Hoc/Aux';
import classes from './Layout.css'
const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className= {classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;