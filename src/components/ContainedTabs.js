import React from "react";
import PropTypes from "prop-types";
import Color from "color";
import { makeStyles } from "@material-ui/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

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

const ContainedTabs = ({ tabs, tabStyle, tabProps, ...props }) => {
  const tabsClasses = useTabsStyles(props);
  const tabClasses = useTabStyles({ ...tabProps, ...tabStyle });
  return (
    <Tabs {...props} classes={tabsClasses}>
      {tabs.map((tab) => (
        <Tab key={tab.label} {...tabProps} {...tab} classes={tabClasses} />
      ))}
    </Tabs>
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
