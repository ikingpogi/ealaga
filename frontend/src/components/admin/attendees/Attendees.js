import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from "../../../layouts/adminSideBarNav";
import Swal from 'sweetalert2'
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
import { QrReader } from 'react-qr-reader';
import SuccessAnimation from 'actually-accessible-react-success-animation';
import {
  HeroImageContainer,
  AppWrapper,
  App,
  TextWrapper,
  AppTitle,
  AppPara
} from "./QRElements";
import { Button } from 'reactstrap';
import { Circles } from  'react-loader-spinner'
function Attendees() {
 

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
  transition: "margin 0.2s ease"
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

  // filterrrrrrrr ================================================================================
  const [AllAttendees, setAllAttendees] = useState([]); 

  const [statuss, setStatus] = useState({status:""});
  const [getBarangay, setBarangay] = useState({barangay:""});
  const [getCategory, setCategory] = useState({category:""});
  const [getAll, setAll] = useState({all:""});

  const onChangeStatus = e => {
    setStatus({ status: e.target.value});
  };
  
  const onChangeBarangay = e => {
    setBarangay({ barangay: e.target.value});
  };

  const onChangeServices = e => {
    setCategory({ category: e.target.value});
  };
  

  const onAll = () => {
    setStatus({ status: ""});
    setBarangay({
      barangay: ""
    });
    setAll({
      all: ""
    });
    setCategory({ category: ""});
  };


  const { status} = statuss;
  const { barangay} = getBarangay;
  const { category} = getCategory;
  
  console.log(category);

var pat = status == "" ? "" : '^'+status+'$';
var pat2 = category == "" ? "" : new RegExp('\\b('+category+')\\b');

  const filteredAllAttendees = AllAttendees.filter(attendees => {

    return attendees.category.match(category) && attendees.status.toLowerCase().match(pat) 
    && attendees.user_id?.address?.barangay.match(barangay)
    
  });

  // console.log(filteredAllAttendees);
// console.log(filteredAllAttendees);


//================================================================================================================
        


          const fetchAttendees= () => {
            axios({
            method: "get",
            url: `/api/attendees`,
            headers: {
                "Content-Type" : "application/json",
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            },
            }).then(response => {
              setAllAttendees(response.data.allAttendees);
          }).catch((err) => console.log(err));
          };
          // console.log(AllHealthProblem)
          useEffect(() => {
            fetchAttendees();
            
          },[]);

          var data = {
            columns: ["ID",  {
              name: "Full Name",
              options: {
                filter: true,
                sort: true,
               }
             },"Category","Barangay","Gender","Email", "Status","Action"],
            rows: []
        }

        filteredAllAttendees?.forEach(user => {
          data.rows.push([
              user._id, 
              [user.user_id?.last_name,", ",user.user_id?.first_name,", ",user.user_id?.middle_name]
              ,user.category 
              , user.user_id?.address?.barangay ? user.user_id?.address?.barangay : "none",
              user.user_id?.gender ? user.user_id?.gender : "none",
              user.user_id?.email, 
              user.status == "not attended" ? <div className="redBg">
                  <span>to attend</span>
                </div> : <div className="greenBg">
                  <span>attended</span>
                </div>,
                 user.status == "not attended" ? <>
                <a href="#" onClick={() => acceptAttendees(user._id)} className="greenBgButton">
                <i className="fas fa-check"></i>
                </a> 
               </> : <>
                <a href="#" onClick={() => acceptAttendees(user._id)} style={{pointerEvents: "none"}} className="DisablegreenBgButton">
                <i className="fas fa-check"></i>
                </a> 
               </>
               

          ])
  })
    

        // verification =========================
        const acceptAttendees = _id => {
          console.log(_id);


          Swal.fire({
            title: 'Are you sure you want to accept this attendee?',
            icon: 'warning',
            color: '#EF3A47',
            showCancelButton: true,
            confirmButtonColor: '#EF3A47',
            cancelButtonColor: '#f8bb86',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
          }).then((result) => {
            if (result.isConfirmed) {
    
              axios({
                method: "put",
                url: `/api/user/attendees/${_id}`,
                headers: {
                  "Content-Type" : "application/json",
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Headers': '*',
                },
              }).then(response => {

                                  Swal.fire({
                                    title: 'Success!',
                                    text: 'You have successfully accept attendee.',
                                    imageUrl: 'https://media1.giphy.com/media/rxjNZHtke62I6Gz9mA/giphy.gif?cid=ecf05e473ser3at0y751oy413e5fqszku4ib8436jtok4cwj&rid=giphy.gif&ct=s',
                                    imageWidth: 200,
                                    imageHeight: 200,
                                    imageAlt: 'Custom image',
                                    confirmButtonColor: '#EF3A47',
                                    }).then((result) => {
                                      if (result.isConfirmed) {
                                        fetchAttendees();
                                          }
                                })
                              })
                    .catch(error => {
                                    console.log(error.response);
                                    // setError(error.response.data);
                                   
                                });
    
             
            }
          })

        }

        ////// =================== QR
        const [getOption, setOption] = useState('table');

        const [datas, setData] = useState('');

        const QRapprove = _id => {
          console.log(_id);

          axios({
            method: "put",
            url: `/api/user/qr/attendees/${_id}`,
            headers: {
              "Content-Type" : "application/json",
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': '*',
            },
          }).then(response => {

                              Swal.fire({
                                title: 'Success!',
                                text: 'You have successfully accept attendee.',
                                icon: 'success',
                                confirmButtonColor: '#EF3A47',
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    fetchAttendees();
                                      }
                            })
                          })
                .catch(error => {
                                console.log(error.response);
                                // setError(error.response.data);
                               
                            });

        }

        const [getLoading, setLoading] = useState({
          loading: true
        }); 

        const hideSpinner = () => {
          setLoading({
            loading: false
          });
        };

        moment.locale('en');


    return (
        <div style={contentStyle}>
        <br />
        <h1 style={{color:"rgb(239, 58, 71)"}}>ATTENDEES</h1>
        <h5>{moment(new Date()).format("MMMM DD, YYYY dddd ")}</h5>
        {getOption === "table" ?  <button onClick={()  => setOption("qrcode")} style={{background:"rgb(239, 58, 71)"}} className="btn btn-danger py-1 px-2 ml-2" >
                      QR Code Scanner</button> :  <button onClick={()  => setOption("table")} style={{background:"rgb(239, 58, 71)"}} className="btn btn-danger py-1 px-2 ml-2" >
                      Table</button>}
       
        <hr />
        <SideBar  setSideNavExpanded={setSideNavExpanded} sideNavExpanded={sideNavExpanded} /> 
        {getOption === "table" ? <>

        <div class="container-fluid">
        
        <ThemeProvider theme={theme}>
        <MUIDataTable
        title={<Row>

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
                                      <option value="attended">Attended</option>
                                      <option value="not attended">To Attend</option>
                                    </NativeSelect>
                                  </FormControl>
                        </Col>

                        <Col> <FormControl fullWidth> 
                                      <InputLabel color="secondary" shrink="true"  variant="standard" htmlFor="uncontrolled-native">
                                      Select Category
                                      </InputLabel>
                                      <NativeSelect
                                        onChange={onChangeServices}
                                        inputProps={{
                                          name: 'category',
                                          id: 'uncontrolled-native',
                                        }}
                                        color="secondary"
                                        value={category}
                                      >
                                         <option value="" selected disabled> <em>Select Category</em></option>
                                      <option value="Recreational Activity">Recreational Activity</option>
                                      <option value="Dialysis">Dialysis</option>
                                    </NativeSelect>
                                  </FormControl></Col>

                        <Col>
                        <FormControl fullWidth>
                                      <InputLabel color="secondary" shrink="true"  variant="standard" htmlFor="uncontrolled-native">
                                       Select Barangay
                                      </InputLabel>
                                      <NativeSelect
                                        onChange={onChangeBarangay}
                                        inputProps={{
                                          name: 'barangay',
                                          id: 'uncontrolled-native',
                                        }}
                                        color="secondary"
                                        value={barangay}
                                      >
                                          <option value="" selected disabled> <em>Select Barangay</em></option>
                                      <option value="Bagumbayan">Bagumbayan</option>
                                      <option value="Bambang">Bambang</option>
                                      <option value="Calzada">Calzada</option>
                                      <option value="Central Bicutan">Central Bicutan</option>
                                      <option value="Central Signal Village">Central Signal Village (Signal Village)</option>
                                      <option value="Fort Bonifacio">Fort Bonifacio</option>
                                      <option value="Hagonoy">Hagonoy</option>
                                      <option value="Ibayo-tipas">Ibayo-tipas</option>
                                      <option value="Lower Bicutan">Lower Bicutan</option>
                                      <option value="Maharlika Village">Maharlika Village</option>
                                      <option value="Napindan">Napindan</option>
                                      <option value="New Lower Bicutan">New Lower Bicutan</option>
                                      <option value="North Daang Hari">North Daang Hari</option>
                                      <option value="North Signal Village">North Signal Village</option>
                                      <option value="Palingon">Palingon</option>
                                      <option value="Pinagsama">Pinagsama</option>
                                      <option value="San Miguel">San Miguel</option>
                                      <option value="Santa Ana">Santa Ana</option>
                                      <option value="South Daang Har">South Daang Hari</option>
                                      <option value="South Signal Villag">South Signal Village</option>
                                      <option value="Tanyag">Tanyag</option>
                                      <option value="Tuktukan">Tuktukan</option>
                                      <option value="Upper Bicutan">Upper Bicutan</option>
                                      <option value="Ususan">Ususan</option>
                                      <option value="Wawa">Wawa</option>
                                      <option value="Western Bicutan">Western Bicutan</option>
                                    </NativeSelect>
                                  </FormControl>
                        
                        </Col>
                      
                        
                       <Col></Col>

                       
        </Row>}
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
        </> : 
        <> <HeroImageContainer>
  
        <TextWrapper>
          <AppTitle>
            <h1>SCAN QR CODE</h1>
            <h1><i className="fas fa-arrow-down"></i><i className="fas fa-arrow-down"></i><i className="fas fa-arrow-down"></i></h1>
          </AppTitle>
          {getLoading.loading ? (
               <div style={{ display: "flex",justifyContent: "center",
               alignItems: "center"}}><Circles color="#EF3A47" alignSelf='center'/></div>
        ) : null}

          <QrReader
          onResult={(result, error) => {
            hideSpinner()
            if (!!result) {
              setData(result?.text);
              QRapprove(result?.text)
              
            }
      
            if (!!error) {
              // console.info(error);
            }
          }}
          style={{ width: '100vh'}}
          className="qrCode"
          
        />
          
        </TextWrapper>
      
      </HeroImageContainer>
        </> 
        }

        
      

        <style>
        {`
        .qrCode{
          margin-top: -100px;
          
        }

        @media{
          .qrCode{
            margin-top: -50px;
          
          }
      }
      

        
        .colStyle{
          margin-right: -115px;
        }

        @media screen and (max-width : 1500px) {
          .colStyle{
            margin-right: 0px;
          
          }
      }
      
      @media screen and (min-width : 768px) and (max-width : 1024px) {
        .colStyle{
          margin-right: 0px;
        
        }
      }

        
        .vl {
          border-left: 2px solid #EF3A47;
          height: 50px;
        }

        .redBg {
            background-color: rgba(255, 0, 0, 0.2);
            color: red;
            padding: 0.3em 0.5em;
            margin: 0.5em;
            display: flex;
            text-decoration: none;
            border-radius: 2em;
            font-weight: bolder;
            justify-content: center;
          }
          .greenBgButton {
            background-color: rgba(0, 255, 0, 0.2);
            color: green;
            padding: 10px;
            margin: 0.5em;
            display: flex;
            text-decoration: none;
            border-radius: 2em;
            font-weight: bolder;
            justify-content: center;
            box-shadow: 0 5px 10px rgba(100, 100, 100, 0.6);
            
          }
          .greenBgButton:hover {
            text-decoration: none;
            color: white;
            background-color: green;
            box-shadow: 0 5px 10px rgba(0, 255, 0, 0.6);
          }

          .DisablegreenBgButton {
            background-color: rgba(0, 255, 0, 0.2);
            opacity: 0.2;
            color: green;
            padding: 10px;
            margin: 0.5em;
            display: flex;
            text-decoration: none;
            border-radius: 2em;
            font-weight: bolder;
            justify-content: center;
            box-shadow: 0 5px 10px rgba(100, 100, 100, 0.6);
            
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

export default Attendees;