
import React, { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import PatientDataService from '../services/patient.service'
import AddFacture from './facture/add.cp'
const Patient = (props) => {
  let { id } = useParams()
  const idp=id 
  const [patients, setPatients] = useState([])
   const [patient1s, setPatient1s] = useState([])
   const patientsRef = useRef()
     patientsRef.current = patients
       useEffect(() => {
         retrievePatients(id)
       }, [])
        useEffect(() => {
          retrivepat(id)
        }, [])
       console.log(patient1s)
         const retrievePatients = () => {
         
           PatientDataService.getOnepatient(id)
             .then((response) => {
               setPatients(response.data)
             })
             .catch((e) => {
               console.log(e)
             })
         }
         const retrivepat =() => {
             PatientDataService.get(id)
               .then((response) => {
                 setPatient1s(response.data)
               })
               .catch((e) => {
                 console.log(e)
               })
         }
         const DetailCard = ({ id,n_assure,qualite, }) => {
           return (
             <div className='up-contents'>
               <h5 className='element-header'>Profile Details</h5>
               <div className='row m-b'>
                 <div className='col-lg-6'>
                   <div className='row'>
                     <div className='col-sm-6 b-r b-b'>
                       <div className='el-tablo centered padded'>
                         <div className='value'>{n_assure}</div>
                         <div className='label'>Numéro d'assure</div>
                       </div>
                     </div>
                     <div className='col-sm-6 b-b b-r'>
                       <div className='el-tablo centered padded'>
                         <div className='value'>{qualite}</div>
                         <div className='label'>Followers</div>
                       </div>
                     </div>
                   </div>
                   <div className='row'>
                     <div className='col-sm-6 b-r'>
                       <div className='el-tablo centered padded'>
                         <div className='value'>$95</div>
                         <div className='label'>Daily Earnings</div>
                       </div>
                     </div>
                     <div className='col-sm-6 b-r'>
                       <div className='el-tablo centered padded'>
                         <div className='value'>12</div>
                         <div className='label'>Products</div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className='col-lg-6'>
                   <div className='padded'>
                     <div className='element-info-with-icon smaller'>
                       <div className='element-info-icon'>
                         <div className='os-icon os-icon-bar-chart-stats-up'></div>
                       </div>
                       <div className='element-info-text'>
                         <h5 className='element-inner-header'>
                           Monthly Revenue
                         </h5>
                         <div className='element-inner-desc'>
                           Calculated every month
                         </div>
                       </div>
                     </div>
                     <div className='el-chart-w'>
                       <canvas
                         height='130'
                         id='liteLineChart'
                         width='300'
                       ></canvas>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           )
         }
    const PatientCard = ({
      id,
      nom,
      prenom,
      adresse,
      email,
      tel,
      n_assure,
      qualite,
    }) => {
      return (
        <div className='element-wrapper'>
          <div className='user-profile'>
            <div className='up-head-w' background-image='img/profile_bg1.jpg'>
              <div className='up-social'>
                <a href='#'>
                  <i className='os-icon os-icon-twitter'></i>
                </a>
                <a href='#'>
                  <i className='os-icon os-icon-facebook'></i>
                </a>
              </div>
              <div className='up-main-info'>
                <div className='user-avatar-w'>
                  <div className='user-avatar'>
                    <img alt='' src='img/avatar1.jpg' />
                  </div>
                </div>
                <h1 className='up-header'>{nom}{' '}{prenom}</h1>
                <h5 className='up-sub-header'>Patient</h5>
              </div>
            </div>
            <div className='up-controls'>
              <div className='row'>
                <div className='col-lg-6'>
                 
                </div>
                <div className='col-lg-6 text-right'>
                
                </div>
              </div>
            </div>
            {[...patient1s].reverse().map((patient1, i) => (
              <DetailCard key={i} {...patient1} />
            ))}
          </div>
        </div>
      )
    }
  return (
    <div classNameNameName='container'>
      <div className='content-i'>
        <div className='content-box'>
          {[...patients].reverse().map((patient, i) => (
            <PatientCard key={i} {...patient} />
          ))}

          <div className='floated-colors-btn second-floated-btn'>
            <div className='os-toggler-w'>
              <div className='os-toggler-i'>
                <div className='os-toggler-pill'></div>
              </div>
            </div>
            <span>Dark </span>
            <span>Colors</span>
          </div>

          <div className='floated-customizer-btn third-floated-btn'>
            <div className='icon-w'>
              <i className='os-icon os-icon-ui-46'></i>
            </div>
            <span>Customizer</span>
          </div>
          <div className='floated-customizer-panel'>
            <div className='fcp-content'>
              <div className='close-customizer-btn'>
                <i className='os-icon os-icon-x'></i>
              </div>
              <div className='fcp-group'>
                <div className='fcp-group-header'>Menu Settings</div>
                <div className='fcp-group-contents'>
                  <div className='fcp-field'>
                    <label for=''>Menu Position</label>
                    <select className='menu-position-selector'>
                      <option value='left'>Left</option>
                      <option value='right'>Right</option>
                      <option value='top'>Top</option>
                    </select>
                  </div>
                  <div className='fcp-field'>
                    <label for=''>Menu Style</label>
                    <select className='menu-layout-selector'>
                      <option value='compact'>Compact</option>
                      <option value='full'>Full</option>
                      <option value='mini'>Mini</option>
                    </select>
                  </div>
                  <div className='fcp-field with-image-selector-w'>
                    <label for=''>With Image</label>
                    <select className='with-image-selector'>
                      <option value='yes'>Yes</option>
                      <option value='no'>No</option>
                    </select>
                  </div>
                  <div className='fcp-field'>
                    <label for=''>Menu Color</label>
                    <div className='fcp-colors menu-color-selector'>
                      <div className='color-selector menu-color-selector color-bright selected'></div>
                      <div className='color-selector menu-color-selector color-dark'></div>
                      <div className='color-selector menu-color-selector color-light'></div>
                      <div className='color-selector menu-color-selector color-transparent'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='fcp-group'>
                <div className='fcp-group-header'>Sub Menu</div>
                <div className='fcp-group-contents'>
                  <div className='fcp-field'>
                    <label for=''>Sub Menu Style</label>
                    <select className='sub-menu-style-selector'>
                      <option value='flyout'>Flyout</option>
                      <option value='inside'>Inside/Click</option>
                      <option value='over'>Over</option>
                    </select>
                  </div>
                  <div className='fcp-field'>
                    <label for=''>Sub Menu Color</label>
                    <div className='fcp-colors'>
                      <div className='color-selector sub-menu-color-selector color-bright selected'></div>
                      <div className='color-selector sub-menu-color-selector color-dark'></div>
                      <div className='color-selector sub-menu-color-selector color-light'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='fcp-group'>
                <div className='fcp-group-header'>Other Settings</div>
                <div className='fcp-group-contents'>
                  <div className='fcp-field'>
                    <label for=''>Full Screen?</label>
                    <select className='full-screen-selector'>
                      <option value='yes'>Yes</option>
                      <option value='no'>No</option>
                    </select>
                  </div>
                  <div className='fcp-field'>
                    <label for=''>Show Top Bar</label>
                    <select className='top-bar-visibility-selector'>
                      <option value='yes'>Yes</option>
                      <option value='no'>No</option>
                    </select>
                  </div>
                  <div className='fcp-field'>
                    <label for=''>Above Menu?</label>
                    <select className='top-bar-above-menu-selector'>
                      <option value='yes'>Yes</option>
                      <option value='no'>No</option>
                    </select>
                  </div>
                  <div className='fcp-field'>
                    <label for=''>Top Bar Color</label>
                    <div className='fcp-colors'>
                      <div className='color-selector top-bar-color-selector color-bright selected'></div>
                      <div className='color-selector top-bar-color-selector color-dark'></div>
                      <div className='color-selector top-bar-color-selector color-light'></div>
                      <div className='color-selector top-bar-color-selector color-transparent'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='floated-chat-btn'>
            <i className='os-icon os-icon-mail-07'></i>
            <span>Demo Chat</span>
          </div>
          <div className='floated-chat-w'>
            <div className='floated-chat-i'>
              <div className='chat-close'>
                <i className='os-icon os-icon-close'></i>
              </div>
              <div className='chat-head'>
                <div className='user-w with-status status-green'>
                  <div className='user-avatar-w'>
                    <div className='user-avatar'>
                      <img alt='' src='img/avatar1.jpg' />
                    </div>
                  </div>
                  <div className='user-name'>
                    <h6 className='user-title'></h6>
                    <div className='user-role'>Account </div>
                  </div>
                </div>
              </div>
              <div className='chat-messages'>
                <div className='message'>
                  <div className='message-content'>Hi, how can I help you?</div>
                </div>
                <div className='date-break'>Mon 10:20am</div>
                <div className='message'>
                  <div className='message-content'>
                    Hi, my name is Mike, I will be happy to assist you
                  </div>
                </div>
                <div className='message self'>
                  <div className='message-content'>
                    Hi, I tried ordering this product and it keeps showing me
                    error code.
                  </div>
                </div>
              </div>
              <div className='chat-controls'>
                <input
                  className='message-input'
                  placeholder='Type your message here...'
                  type='text'
                />
                <div className='chat-extra'>
                  <a href='#'>
                    <span className='extra-tooltip'>Attach Document</span>
                    <i className='os-icon os-icon-documents-07'></i>
                  </a>
                  <a href='#'>
                    <span className='extra-tooltip'>Insert Photo</span>
                    <i className='os-icon os-icon-others-29'></i>
                  </a>
                  <a href='#'>
                    <span className='extra-tooltip'>Upload Video</span>
                    <i className='os-icon os-icon-ui-51'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='content-panel'>
          <div className='content-panel-close'>
            <i className='os-icon os-icon-close'></i>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Patient
