import React, { useEffect } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Button from "@material-ui/core/Button";
import AOS from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
    marginBottom: "2rem",
    marginTop: "2rem",
    marginLeft: "0.7rem",
    marginRight: "0.7rem"
  },
  media: {
    borderRadius: 6,
  },
  linkButton: {
    color: 'white',
    transition: '0.4s',
    borderRadius: '5px 5px 5px 5px !important',
    marginRight: "0.5rem",
    marginLeft: "0.5rem",
  },
  githubButton: {
    backgroundColor: '#6a6a6a',
    '&:hover': {
      backgroundColor: '#393939',
    }
  },
  demoButton: {
    backgroundColor: '#4198FF',
    '&:hover': {
      backgroundColor: '#377fd7',
    }
  },
  blogButton: {
    backgroundColor: '#47c5a2',
    '&:hover': {
      backgroundColor: '#3eac8d',
    }
  }
}));

export const ProjectCard = function ProjectCard({image, heading, secondaryHeading, body, github, demo, blog}) {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });

  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 800
    })
  })

  return (
    <div data-aos="fade-in">
      <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={cx(styles.media, mediaStyles.root)}
        image={image}
      />
      <CardContent>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={secondaryHeading}
          heading={heading}
          body={body}
        />
        <div
            className="projectCard__buttons"
            style={{display:"flex", alignItems:"center", justifyContent: "center", marginTop: "1rem"}}>
            { github && (
                <Button
                    className={cx(styles.linkButton, styles.githubButton)}
                    variant="contained"
                    disableElevation
                    onClick={() => { window.open(github, '_blank') }}>Github</Button>
            ) }
            { demo && (
                <Button
                    className={cx(styles.linkButton, styles.demoButton)}
                    variant="contained"
                    disableElevation
                    onClick={() => { window.open(demo, '_blank') }}>Demo</Button>
            ) }
            { blog && (
                <Button
                    className={cx(styles.linkButton, styles.blogButton)}
                    variant="contained"
                    disableElevation
                    onClick={() => { window.open(blog, '_self') }}>Blog</Button>
            ) }
        </div>
      </CardContent>
    </Card>
    </div>

  );
};
export default ProjectCard