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


const AnchorListLink = ({link, title}) => (
  <li className="header__links">
    <AnchorLink to={`/#${link}`} title={title} />
  </li>
)

const ListLink = props => (
  <li className="header__links">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const useStyles = makeStyles({
  list: {
    width: "300px",
    display: "flex",
    justifyContent: "center"
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

export default function Header({ headerText }) {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  }

  const list = () => (
    <div
      className={clsx(classes.list)}
      role="presentation"
    >
      <List className={classes.textList}>
        <Link to={"/more/"}>
          <ListItem button key={'More About Me'} className={classes.drawerButton}>
            <ListItemText primary={'More About Me'} className={classes.drawerContent}/>
          </ListItem>
        </Link>
        <Link to={"/more/"}>
          <ListItem button key={'Interests'} className={classes.drawerButton}>
            <ListItemText primary={'Interests'} className={classes.drawerContent}/>
          </ListItem>
        </Link>
        <Link to={"/blog/"}>
          <ListItem button key={'Blog'} className={classes.drawerButton}>
            <ListItemText primary={'Blog'} className={classes.drawerContent}/>
          </ListItem>
        </Link>
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
          EN
        </AnchorLink>
        <ul className="header__nav">
          <AnchorListLink link="about" title="About" />
          <AnchorListLink link="projects" title="Projects" />
          <AnchorListLink link="contact" title="Contact" />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
          >
            <MenuIcon />
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