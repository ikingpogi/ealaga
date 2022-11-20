import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from "../../../layouts/adminSideBarNav";
import { Card} from 'react-bootstrap';
import {TextField,createTheme,
  InputLabel,
  Select,
  MenuItem, FormControl, NativeSelect,FormLabel,FormControlLabel ,RadioGroup ,Radio

} from "@material-ui/core";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ThemeProvider } from '@material-ui/styles';
import MUIDataTable from 'mui-datatables';
import moment from 'moment';
import { Button } from 'reactstrap';

function User() {
 

const [sideNavExpanded, setSideNavExpanded] = React.useState(true);

function handleResize() {

  if (window.innerWidth <= 375) {
    setSideNavExpanded(false);

  }
}

React.useEffect(() => {
  window.addEventListener("resize", handleResize);

  handleResize(); // on-component-mount, check already to see if user has a small device

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []); // initialize event listeners on-mount & clean on-unmount

const contentStyle = {
  marginLeft: sideNavExpanded ? "250px" : "70px", // arbitrary values
  transition: "margin 0.2s ease",
  
};

const theme = createTheme({
  overrides: {
    MuiTableCell: {
      root: {
        border: [[1, 'solid', 'rgb(239, 58, 71)']],
        borderColor: '#d3d3d3',
        
      },
      head: {
        fontWeight:"bold",
        background: 'rgb(239, 58, 71) !important',
        color: "white"
    }
    
    },
    MuiTableSortLabel: {
      root: {
        alignItems: 'flex-start',
      },
    },
    // MuiTableFooter: {
    //   root: {
    //     background: 'rgb(239, 58, 71)',
    //   },
    // },
    // MUIDataTableToolbar: {
    //   root: {
    //     background: 'rgb(239, 58, 71)',
    //     boxShadow:"0 3px 5px rgb(255 0 0 / 60%)"
    //   },
    // },

    // MUIDataTable
    MUIDataTableHeadCell: {
      sortLabelRoot: {
        // height: undefined,
      },
    },
  },
});


//================================================================================================================

      const [getUsers, setgetUser] = useState(); 
      const [statuss, setStatus] = useState({status:""});

      const onAll = () => {
        setStatus({ status: ""});
      };

      const onChangeStatus = e => {
          setStatus({ status: e.target.value});
        };




      const { status} = statuss;


      var pat = status == "" ? "" : '^'+status+'$';

      const filteredUsers = getUsers?.filter(filterusers => {

        return filterusers.account_verified.match(pat)
        
      });

      console.log(filteredUsers)

//================================================================================================================




                    
            const fetchUser= () => {
                axios({
                method: "get",
                url: `/api/user/read`,
                headers: {
                    "Content-Type" : "application/json",
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                },
                }).then(response => {
                    
             setgetUser(response.data.user);
            }).catch((err) => console.log(err));
            };
            // console.log(AllHealthProblem)
            useEffect(() => {
            fetchUser();
            },[]);


                var data = {
                    columns: ["ID", "Full Name","Barangay","Gender","Email", "Status","Action"],
                    rows: []
                }
                filteredUsers?.forEach(user => {
                        data.rows.push([
                            user._id, 
                            [user.last_name,", ",user.first_name,", ",user.middle_name]
                        , user.address?.barangay ? user.address?.barangay : "none",
                        user?.gender ? user?.gender : "none",
                        user.email, 

                        user.account_verified == "not verified" ? <div className="redBg">
                        <span>{user.account_verified}</span>
                      </div>
                       : user.account_verified == "pending" ? <div className="yellowBg">
                       <span>{user.account_verified}</span>
                     </div> 
                        : <div className="greenBg">
                        <span>{user.account_verified}</span>
                      </div> ,


                        <div> <button className="btn btn-secondary py-1 px-2 ml-2" >
                        <i className="fas fa-eye"></i>
                        </button>&nbsp;
                        <button style={{background:"orange", color:"#fff"}}className="btn btn-warning py-1 px-2 ml-2" >
                        <i className="fas fa-pencil-alt"></i></button>&nbsp;
                        <button className="btn btn-danger py-1 px-2 ml-2" >
                        <i className="fas fa-trash-alt"></i>
                        </button>
                        </div>
                        ])
                })
             
            

             
            
// console.log(data);

    return (
        <div style={contentStyle}>
        <br />
        <h1 style={{color:"rgb(239, 58, 71)"}}>USER LIST</h1>
        <h5>{moment(new Date()).format("MMMM DD, YYYY dddd ")}</h5>
        <hr />
        <SideBar  setSideNavExpanded={setSideNavExpanded} sideNavExpanded={sideNavExpanded} /> 

        <div class="container-fluid">
       
        <ThemeProvider theme={theme}> 
        <MUIDataTable
        title={<>
        {/* <h3>USER LIST</h3> */}
        
         <Row>
           <Col>
           <button style={{marginTop: "10px"}} className="btn btn-dark py-1 px-2 ml-2" >&nbsp;&nbsp;
                        <i className="fas fa-plus"></i>&nbsp;&nbsp;</button>
           </Col>
         <Col className="colStyle" >
                        <Button outline color="danger" onClick={onAll} style={{marginTop: "10px"}}>&nbsp;Reset&nbsp;</Button>
                        </Col>

       <Col>
       <FormControl fullWidth> 
                                      <InputLabel color="secondary" shrink="true"  variant="standard" htmlFor="uncontrolled-native">
                                       Select Status
                                      </InputLabel>
                                      <NativeSelect
                                        onChange={onChangeStatus}
                                        inputProps={{
                                          name: 'status',
                                          id: 'uncontrolled-native',
                                        }}
                                        color="secondary"
                                        value={status}
                                      >
                                         <option value="" selected disabled> <em>Select Status</em></option>
                                      <option value="verified">Verified</option>
                                      <option value="not verified">Not Verified</option>
                                      <option value="pending">Pending</option>
                                    </NativeSelect>
                                  </FormControl>
                        </Col>      
                        <Col></Col>    
                        <Col></Col>  
                        <Col></Col>  
         </Row>               
        </>}
        data={data.rows}
        columns={data.columns}
        options={{
            filterType: "dropdown",
            responsive: "scroll",
            
            selectableRows: 'none',
            print: false,
            download: false,
            filter: false,
          }}
      />
       </ThemeProvider>
       </div>
 
       
         <style>
        {`
        .redBg {
            background-color: red;
            color: white;
            padding: 0.3em 0.5em;
            margin: 0.5em;
            display: flex;
            text-decoration: none;
            border-radius: 2em;
            font-weight: bolder;
            justify-content: center;
          }
        .greenBg {
            background-color: green;
            color: white;
            padding: 0.3em 0.5em;
            margin: 0.5em;
            display: flex;
            text-decoration: none;
            border-radius: 2em;
            font-weight: bolder;
            justify-content: center;
          }

        .yellowBg {
            background-color: orange;
            color: white;
            padding: 0.3em 0.5em;
            margin: 0.5em;
            display: flex;
            text-decoration: none;
            border-radius: 2em;
            font-weight: bolder;
            justify-content: center;
          }
        
        `}
      </style>
        </div>
    );

}

export default User;