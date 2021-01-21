import Head from "../utils/Head"
import Layout from "../components/layout"
import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  center: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  notfonud: {
    color: '#fff',
    fontSize: '96px',
    letterSpacing: '-7px',
    animation: '$glitch 1s linear infinite',
  },
  '@keyframes glitch': {
      '2%, 64%': {
      transform: 'translate(2px,0) skew(0deg)'
    },
    '4%,60%': {
      transform: 'translate(-2px,0) skew(0deg)'
    },
    '62%': {
      transform: 'translate(0,0) skew(5deg)'
    }
  }
}));

export default function NotFound() {
  const classes = useStyles();

  return (
    <div>
      <Head />

      <Layout>
        <div className={classes.center}>
          <div className={classes.notfonud}>404 Not Found</div>
        </div>

      </Layout>
    </div>
  )
}