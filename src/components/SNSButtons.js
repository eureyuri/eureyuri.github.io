import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import "./SNSButton.css";

export default function SNSButtons() {
    library.add(fab)

    return (
        <div className="snsbuttons__container">
            {/* <!-- Icon list: https://fontawesome.com/icons -->
            <!-- Brand colours: https://brandcolors.net/ --> */}
            <a href="https://github.com/eureyuri" target="_blank">
                <FontAwesomeIcon className="icon__github" icon={['fab', 'github']} />
            </a>
            <a href="https://www.linkedin.com/in/eurey-noguchi/" target="_blank">
                <FontAwesomeIcon className="icon__linkedin" icon={['fab', 'linkedin']} />
            </a>
            <a href="https://www.youtube.com/channel/UCOScmlJ9J2xpLwuOYQu4n9Q" target="_blank">
                <FontAwesomeIcon className="icon__youtube" icon={['fab', 'youtube']} />
            </a>
        </div>
    )
}
