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

    const LanguageButton = ({language}) => (
        <Button
            className="tooltip__button"
            style={{ pointerEvents: "none" }}>
                {language}
        </Button>
    );

    return (
        <div className="tooltips">
            <LanguageTooltip
                language="Python"
                frameworks={["Flask", "Keras", "Requests", "OpenCV", "Pandas", "Matplotlib", "Numpy", "and more..."]} />
            <LanguageTooltip
                language="JavaScript"
                frameworks={["React", "Redux", "Gatsby", "Node", "Express"]} />
            <LanguageButton language="Java" />
            <LanguageButton language="GraphQL" />
            <LanguageButton language="PostgreSQL" />
            <LanguageButton language="HTML5" />
            <LanguageButton language="CSS3" />
            <LanguageButton language="Firebase" />
            <LanguageTooltip
                language="Japanese"
                frameworks={["Native"]} />
            <LanguageTooltip
                language="English"
                frameworks={["Native"]} />
            <LanguageTooltip
                language="Spanish"
                frameworks={["Intermediate"]} />
            <LanguageTooltip
                language="Chinese"
                frameworks={["Beginner"]} />
        </div>
    )
}
