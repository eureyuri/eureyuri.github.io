import React from 'react'
import { Tooltip, Button } from "@material-ui/core";
import Zoom from '@material-ui/core/Zoom';
import "./tools.css";


export default function Tools() {
    const LanguageTooltip = (props) => {
        return (
            <Tooltip
                title={
                    <React.Fragment>
                        {
                            props.frameworks.map(framework => (
                                <div>{framework}</div>
                            ))
                        }
                    </React.Fragment>
                }
                maxWidth={"none"}
                backgroundColor={'white'}
                arrow TransitionComponent={Zoom}>
                <Button className="tooltip__button">{props.language}</Button>
            </Tooltip>
        )
    }

    return (
        <div className="tooltips">
            <LanguageTooltip language="Python" frameworks={["Flask", "Jinja2"]} />
            <LanguageTooltip language="JavaScript" frameworks={["React", "Gatsby", "GraphQL"]} />
            <Button className="tooltip__button">Java</Button>
            <Button className="tooltip__button">PostgreSQL</Button>
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
