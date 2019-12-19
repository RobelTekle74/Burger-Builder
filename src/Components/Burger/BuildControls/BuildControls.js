import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]
// console.log(type);
const buildControls = (props) => (
    
    <div className={classes.BuildControls}>
        <p>
            Current Price: {props.price}
        </p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                lable={ctrl.label} 
                added={() => props.ingredientsAdded(ctrl.type)} 
                removed={() => props.ingredientsDeducted(ctrl.type)}
                disabled = {props.disabled[ctrl.type]} 
                />
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}>ORDER NOW
        </button>
        
    </div>

)

export default buildControls;