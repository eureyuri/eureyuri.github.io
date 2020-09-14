import React from 'react';
import { Link } from "gatsby";
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';
import MemoryIcon from '@material-ui/icons/Memory';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import CodeIcon from '@material-ui/icons/Code';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
}));

const TimelineElement = ({ year, color, title, description, icon }) => {
  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineOppositeContent>
          {year}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot style={{backgroundColor: color}} >
          {icon}
        </TimelineDot>
        <TimelineConnector style={{backgroundColor: color}} />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={2} className={classes.paper}>
          {title}
          <hr style={{backgroundColor: color, height: "1px"}} />
          {description}
        </Paper>
      </TimelineContent>
    </TimelineItem>
  )
}

export default function CustomizedTimeline() {
  return (
    <Timeline align="alternate" style={{marginLeft: "0"}}>
      <TimelineElement
        year="2019 - 2021"
        color="#B9D9EB"
        title="Columbia University"
        description="B.S. Computer Engineering"
        icon={<SchoolIcon/>} />
      <TimelineElement
        year="June 2019"
        color="#234b8d"
        title="Micron Memory Japan"
        description="Failure Analysis Intern"
        icon={<MemoryIcon/>} />
      <TimelineElement
        year="July 2018"
        color="#4b84c4"
        title="National Instruments Japan"
        description="Software and Hardware Engineer Intern"
        icon={<VisibilityIcon/>} />
      <TimelineElement
        year="May - June 2018"
        color="#000000"
        title="teamLab Inc."
        description="Data Scientist at Machine Learning Team"
        icon={<ShowChartIcon/>} />
      <TimelineElement
        year="May - July 2017"
        color="#fe51a3"
        title="influ Inc."
        description="Software Engineer Intern"
        icon={<CodeIcon/>} />
      <TimelineElement
        year="2016 - 2019"
        color="#003478"
        title="Brandeis University"
        description="B.A. Computer Science"
        icon={<SchoolIcon/>} />

      <TimelineItem>
        <TimelineSeparator>
          <Link to="/more/">
            <TimelineDot style={{backgroundColor: "#ff5e71"}} >
              <MoreHorizIcon/>
            </TimelineDot>
          </Link>
        </TimelineSeparator>
        <TimelineContent>
        </TimelineContent>
      </TimelineItem>

    </Timeline>

  );
}
