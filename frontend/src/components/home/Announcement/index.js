import CountUp from "react-countup";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import blue from "@material-ui/core/colors/blue";
import {
  AcheivementsContainer,
  AcheivementsText,
  AcheivementsContainerWave
} from "./AnnouncementElements";
import { makeStyles } from "@material-ui/core/styles";
import WaveBody from "../Wave/index2";
import { red } from "@material-ui/core/colors";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel, Card, Modal } from 'react-bootstrap';
import { Button } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(3),
      width: theme.spacing(32)
    }
  },
  container: {
    display: "flex"
  },

  customBorderRadius: {
    borderRadius: 25,
    border: `3px solid ${red[200]}`,
    height: 200,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    margin: 30,
    minWidth: 700,
    "margin-top": "5px",
    Color: "#FFBABA",
    ['@media screen and (max-width: 1024px)']: { 
      height: 200,
    },
    ['@media screen and (max-width: 768px)']: { 
      height: 200,
      minWidth: 450,
    },
    ['@media screen and (max-width: 480px)']: { 
      height: 200,
      minWidth: 350,
    },
  }
}));



const Acheivements = () => {
  const classes = useStyles();

  //================================================

  const [getAnnouncement, setgetAnnouncement] = useState(); 

            const fetchAnnouncement= () => {
              axios({
              method: "get",
              url: `/api/announcement/read`,
              headers: {
                  "Content-Type" : "application/json",
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Headers': '*',
              },
              }).then(response => {
                  
            setgetAnnouncement(response.data.announcement);
            }).catch((err) => console.log(err));
            };
            // console.log(AllHealthProblem)
            useEffect(() => {
            fetchAnnouncement();
            },[]);

            const handleAnnouncement = () => {
              handleShow()

            }

  ///modal--------------------------

  const [show, setShow] = useState(false);
  const handleClose =() => {
          setShow(false);
          // setAnimalComment([]);
          // setAnimalImage([]);
        } 
  const handleShow = () => setShow(true);

console.log(getAnnouncement)

  return (
    <AcheivementsContainerWave>
      <AcheivementsContainer>
        <AcheivementsText>
          <h1>ANNOUNCEMENT</h1>
          <div className={classes.container} justifyContent="center">
            <Grid container spacing={16} justify="flex-start">
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Paper className={classes.customBorderRadius} elevation={15}>
                  <Box p={1}>
                      { getAnnouncement?.map(announcement => { 
                        return <Typography variant="h5">{announcement.status == "set" ? 
                        announcement.announcement.length > 57 ? <>{announcement.announcement.substring(0, 57)}...<hr></hr><a onClick={() => handleAnnouncement()} href="javascript:void(0)" style={{color:"#EF3A47"}}>see more</a></> : announcement.announcement : ""
                        }</Typography>
                      })}
                  </Box>
                </Paper>
              </Grid>
             
            </Grid>
          </div>
        </AcheivementsText>
      </AcheivementsContainer>
      <WaveBody />

      <Modal size='lg' centered show={show} onHide={handleClose} animation={true}>
            <Modal.Header style={{background:'#CE3043'}}>
              <Modal.Title style={{color:'#ffff'}}><i class="fas fa-bullhorn"></i>&nbsp;&nbsp;Announcement</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{background:'#ffff'}}>
            <img src='https://res.cloudinary.com/du7wzlg44/image/upload/v1665936961/ezgif.com-gif-maker_jd433u.gif' style={{height:"100px"}} title="Night-life" alt="Night-life"/>
            { getAnnouncement?.map(announcement => { 
                        return <Typography variant="h5">{announcement.status == "set" ? announcement.announcement : ""
                        }</Typography>
                      })}
            </Modal.Body>
            <Modal.Footer style={{background:'linear-gradient(to bottom, rgba(255,186,186,50%), rgba(255,186,186,0%))'}}>
              <Button style={{background:'#EF3A47', color:'white'}} variant="light" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

    </AcheivementsContainerWave>
  );
};

export default Acheivements;
