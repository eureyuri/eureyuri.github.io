import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import "./SNSButton.css";

export default function SNSButtons({ isCover, buttonStyle }) {
    library.add(fab)

    function handleButtonOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop;
        const translateOn = 70;
        const buttonsCover = document.getElementsByClassName("snsbuttons__container")[0];
        const buttonsContainer = document.getElementsByClassName("snsbuttons__container")[1];

        if (distanceY > translateOn) {
            buttonsCover.classList.add("fadeOut");
            buttonsContainer.classList.add("fadeIn");
        } else {
            buttonsCover.classList.remove("fadeOut");
            buttonsContainer.classList.remove("fadeIn");
        }
    }

    useEffect(() => {
        if (isCover) {
            const buttonsContainer = document.getElementsByClassName("snsbuttons__container")[1];
            buttonsContainer.style.opacity = 0;
        }
    }, [isCover]);

    useEffect(() => {
        if (isCover) {
            window.addEventListener("scroll", handleButtonOnScroll);

            return () => {
                window.removeEventListener("scroll", handleButtonOnScroll);
            }
        }
    }, [isCover]);

    return (
        <div className="snsbuttons__container" style={buttonStyle}>
            {/* <!-- Icon list: https://fontawesome.com/icons -->
            <!-- Brand colours: https://brandcolors.net/ --> */}
            <a href="https://github.com/eureyuri" target="_blank" rel="noreferrer nofollow">
                <FontAwesomeIcon className="icon__github" icon={['fab', 'github']} />
            </a>
            <a href="https://www.linkedin.com/in/eurey-noguchi/" target="_blank" rel="noreferrer nofollow">
                <FontAwesomeIcon className="icon__linkedin" icon={['fab', 'linkedin']} />
            </a>
            <a href="https://www.youtube.com/channel/UCOScmlJ9J2xpLwuOYQu4n9Q"
               target="_blank"
               rel="noreferrer nofollow">
                <FontAwesomeIcon className="icon__youtube" icon={['fab', 'youtube']} />
            </a>
        </div>
    )
}
