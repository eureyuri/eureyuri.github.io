import React from 'react'
import { Tooltip, Button } from "@material-ui/core";
import Zoom from '@material-ui/core/Zoom';
import "./tools.css";


export default function Tools() {
    return (
        <div className="tooltips">
            <Tooltip
                title={
                    <React.Fragment>
                        <div>Flask</div>
                        <div>Jinja2</div>
                    </React.Fragment>
                }
                maxWidth={"none"}
                backgroundColor={'white'}
                arrow interactive TransitionComponent={Zoom}>
                <Button className="tooltip__button">Python</Button>
            </Tooltip>
            <Tooltip title="Add" arrow interactive TransitionComponent={Zoom}>
                <Button className="tooltip__button">JavaScript</Button>
            </Tooltip>
            <Tooltip title="Add" arrow interactive TransitionComponent={Zoom}>
                <Button className="tooltip__button">Java</Button>
            </Tooltip>
            <Tooltip title="Add" arrow interactive TransitionComponent={Zoom}>
                <Button className="tooltip__button">PostgreSQL</Button>
            </Tooltip>
            <Tooltip title="Add" arrow interactive TransitionComponent={Zoom}>
                <Button className="tooltip__button">HTML5</Button>
            </Tooltip>
            <Tooltip title="Add" arrow interactive TransitionComponent={Zoom}>
                <Button className="tooltip__button">CSS3</Button>
            </Tooltip>
            <Tooltip title="Add" arrow interactive TransitionComponent={Zoom}>
                <Button className="tooltip__button">Firebase</Button>
            </Tooltip>
        </div>
    )
}
