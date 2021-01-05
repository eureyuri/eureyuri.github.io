import React from "react";
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ProjectCard from "./ProjectCard";

const useTabsStyles = makeStyles(() => ({
    root: {
        borderRadius: "5px",
    },
    indicator: {
        backgroundColor: "#0075FF",
    }
}));

const useTabStyles = makeStyles(({ palette, spacing, breakpoints }) => {
  const defaultBgColor = "#BBD6FF";
  const defaultSelectedBgColor = "#BBD6FF";
  const defaultMinWidth = {
    md: 120
  };

  return {
    root: ({
      bgColor = defaultBgColor,
      minWidth = defaultMinWidth,
    }) => ({
      opacity: 1,
      overflow: "initial",
      color: "palette.text.secondary",
      backgroundColor: bgColor,
      transition: "0.2s",
      [breakpoints.up("md")]: {
        minWidth: minWidth.md
      },
      "&:before": {
        transition: "0.2s"
      },
      "& + $selected:before": {
        opacity: 0
      },
      "&:hover": {
        "&:not($selected)": {
          color: "#0075FF"
        },
        "&::before": {
          opacity: 0
        },
        "& + $root:before": {
          opacity: 0
        }
      }
    }),
    selected: ({ selectedBgColor = defaultSelectedBgColor }) => ({
      backgroundColor: selectedBgColor,
      color: "#0075FF",
      "& + $root": {
        zIndex: 1
      },
      "& + $root:before": {
        opacity: 0
      }
    }),
    wrapper: {
      zIndex: 2,
      textTransform: "initial"
    }
  };
});

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          {children}
        </div>
      )}
    </div>
  );
}

const ProjectPost = ({node}) => (
  <ProjectCard
    heading={node.title}
    secondaryHeading={node.subtitle}
    image={node.heroImage.file.url}
    body={node.description.description}
    demo={node.demo}
    github={node.github} />
)

const ContainedTabs = ({ tabs, tabStyle, tabProps, ...props }) => {
  const tabsClasses = useTabsStyles(props);
  const tabClasses = useTabStyles({ ...tabProps, ...tabStyle });

  return (
    <StaticQuery
      query={graphql`
        query tabsQuery {
          allContentfulProject (
            filter: {
              node_locale: {eq: "en-US"}
              },
              sort: {
                  fields: [publishDate], order: DESC
              }
          ) {
            edges {
              node {
                title
                subtitle
                heroImage {
                  file {
                    url
                  }
                }
                description {
                  description
                }
                demo
                github
                publishDate
                tags
              }
          }
          }
        }
      `}
      render={data => (
        <div style={{width: "100%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
          <Tabs {...props} classes={tabsClasses}>
            {tabs.map((tab) => (
              <Tab key={tab.label} {...tabProps} {...tab} classes={tabClasses} />
            ))}
          </Tabs>

          <TabPanel value={props.value} index={0}>
            {data.allContentfulProject.edges.map(edge =>
              <ProjectPost node={edge.node} key={edge.node.title} />)}
          </TabPanel>
          <TabPanel value={props.value} index={1}>
            {data.allContentfulProject.edges.map(edge =>
              (edge.node.tags.includes("Design") &&
                <ProjectPost node={edge.node} key={edge.node.title} />))}
          </TabPanel>
          <TabPanel value={props.value} index={2}>
            {data.allContentfulProject.edges.map(edge =>
              (edge.node.tags.includes("Web") &&
                <ProjectPost node={edge.node} key={edge.node.title} />))}
          </TabPanel>
          <TabPanel value={props.value} index={3}>
            {data.allContentfulProject.edges.map(edge =>
              (edge.node.tags.includes("Mobile") &&
                <ProjectPost node={edge.node} key={edge.node.title} />))}
          </TabPanel>
          <TabPanel value={props.value} index={4}>
            {data.allContentfulProject.edges.map(edge =>
              (edge.node.tags.includes("CLI") &&
                <ProjectPost node={edge.node} key={edge.node.title} />))}
          </TabPanel>
        </div>
      )}
    />
  );
};

ContainedTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired
    })
  ),
  tabStyle: PropTypes.shape({
    bgColor: PropTypes.string,
    minWidth: PropTypes.shape({})
  }),
  tabProps: PropTypes.shape({})
};
ContainedTabs.defaultProps = {
  tabs: [],
  tabStyle: {},
  tabProps: {}
};

export default ContainedTabs;
