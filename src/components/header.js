import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "./header.css";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import logo from "../images/logo.png";


const AnchorListLink = ({link, title, className}) => (
  <li className={`header__links ${className.nav}`}>
    <AnchorLink to={`/#${link}`} title={title} className={className.li} />
  </li>
)

const useStyles = makeStyles({
  list: {
    width: "300px",
    display: "flex",
    justifyContent: "center"
  },
  hamburgerIcon: {
    fontSize: "2rem",
  },
  MuiDrawerPaper: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
  drawerHeader: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "flex-start",
  },
  drawerButton: {
    '&:hover': {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  },
  drawerContent: {
    textAlign: "center",
    marginTop: "15px",
    marginBottom: "15px",
    color: "#4198FF"
  },
  textList: {
    width: "100%"
  },
  menuButton: {
    marginLeft: "5px"
  }
});

export default function Header() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const ListLink = ({link, title, className}) => {
    if (className) {
      return (
        <AnchorLink to={`/#${link}`} title={title} className={className.nav}>
          <ListItem button key={title} className={classes.drawerButton}>
            <ListItemText primary={title} className={classes.drawerContent} />
          </ListItem>
        </AnchorLink>
      )
    } else {
      return (
        <Link to={link}>
          <ListItem button key={title} className={classes.drawerButton}>
            <ListItemText primary={title} className={classes.drawerContent} />
          </ListItem>
        </Link>
      )
    }
  }

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
    >
      <List className={classes.textList}>
        <ListLink link="about" title="About" className={{nav:  "header__nav__mobile", li: "hamburger__item__mobile" }} />
        <ListLink link="experiences" title="Experiences" className={{nav:  "header__nav__mobile", li: "hamburger__item__mobile" }} />
        <ListLink link="projects" title="Projects" className={{nav:  "header__nav__mobile", li: "hamburger__item__mobile" }} />
        <ListLink link="contact" title="Contact" className={{nav:  "header__nav__mobile", li: "hamburger__item__mobile" }} />

        <ListLink link={"/more/"} title={"More About Me"} />
        <ListLink link={"/more/"} title={"Interests"} />
        <ListLink link={"/blog/"} title={"Blog"} />
        <a href="https://drive.google.com/file/d/1MApQ9pWocj6k5_2tNM3QoAqmVE220OFC/view" target="_blank" rel="noreferrer nofollow">
          <ListItem button key={'Resume'} className={classes.drawerButton}>
            <ListItemText primary={'Resume'} className={classes.drawerContent}/>
          </ListItem>
        </a>
      </List>
    </div>
  )

  useEffect(() => {
    function resizeHeaderOnScroll() {
      const distanceY = window.pageYOffset || document.documentElement.scrollTop;
      const shrinkOn = 10;
      const headerLogo = document.getElementsByClassName("header__logo")[0];
      const headerContainer = document.getElementsByClassName("header__container")[0];
      const header = document.querySelector("header");
      const hamburgers = document.querySelectorAll(".hamburger_line");

      if (distanceY > shrinkOn) {
        headerLogo.classList.add("scrolled");
        headerContainer.classList.add("scrolled");
        header.classList.add("scrolled");
        hamburgers.forEach(hamburger => hamburger.classList.add("scrolled"));
      } else {
        headerLogo.classList.remove("scrolled");
        headerContainer.classList.remove("scrolled");
        header.classList.remove("scrolled");
        hamburgers.forEach(hamburger => hamburger.classList.remove("scrolled"));
      }
    }

    window.addEventListener("scroll", resizeHeaderOnScroll);
  }, []);

  return (
    <div className="header__container">
      <header>
        <AnchorLink to="/" title="EN" className="header__logo">
          <img className="logo" src={logo} alt="Logo written as EN for Eurey Noguchi" />
        </AnchorLink>
        <ul className="header__nav">
          <AnchorListLink link="about" title="About" className={{ nav: "header__nav__desktop" }} />
          <AnchorListLink link="experiences" title="Experiences" className={{ nav: "header__nav__desktop" }} />
          <AnchorListLink link="projects" title="Projects" className={{ nav: "header__nav__desktop" }} />
          <AnchorListLink link="contact" title="Contact" className={{ nav: "header__nav__desktop" }} />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
          >
            <MenuIcon className={classes.hamburgerIcon} />
          </IconButton>
          <Drawer
            classes={{ paper: classes.MuiDrawerPaper }}
            anchor="right"
            elevation={1000}
            open={openDrawer}
            onClose={toggleDrawer}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={toggleDrawer} className={classes.menuButton}>
                <ChevronRightIcon />
              </IconButton>
            </div>
            {list()}
          </Drawer>
        </ul>
      </header>
    </div>
  )
}