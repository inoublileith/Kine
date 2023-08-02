import React from 'react'

import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
const Profile = () => {
  const navigate = useNavigate()
  const { user: currentUser } = useSelector((state) => state.auth)
  if (!currentUser) {
    return navigate('/login')
  }
  return (
    <div classNameNameName='container'>
      <div className='content-i'>
        <div className='content-box'>
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
                  <h1 className='up-header'>{currentUser.login}</h1>
                  <h5 className='up-sub-header'>Kinésithérapeute</h5>
                </div>
              </div>
              <div className='up-controls'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='value-pair'>
                      <div className='label'>Status:</div>
                      <div className='value badge badge-pill badge-success'>
                        Online{' '}
                      </div>
                    </div>
                    <div className='value-pair'>
                      <div className='label'>Member Since:</div>
                      <div className='value'>2011</div>
                    </div>
                  </div>
                  <div className='col-lg-6 text-right'>
                   
                    <a className='btn btn-secondary btn-sm' href='#'>
                   
                      <span>Modifier Profile</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className='up-contents'>
                <h5 className='element-header'>Profile Statistics</h5>
                <div className='row m-b'>
                  <div className='col-lg-6'>
                    <div className='row'>
                      <div className='col-sm-6 b-r b-b'>
                        <div className='el-tablo centered padded'>
                          <div className='value'>3814</div>
                          <div className='label'>Products Sold</div>
                        </div>
                      </div>
                      <div className='col-sm-6 b-b b-r'>
                        <div className='el-tablo centered padded'>
                          <div className='value'>47.5K</div>
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
                <div className='os-tabs-w'>
                  <div className='os-tabs-controls'>
                    <ul className='nav nav-tabs bigger'>
                      <li className='nav-item'>
                        <a
                          className='nav-link active'
                          data-toggle='tab'
                          href='#tab_overview'
                        >
                          Activity
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          className='nav-link'
                          data-toggle='tab'
                          href='#tab_sales'
                        >
                          Daily Sales
                        </a>
                      </li>
                    </ul>
                    <ul className='nav nav-pills smaller d-none d-md-flex'>
                      <li className='nav-item'>
                        <a className='nav-link' data-toggle='tab' href='#'>
                          Today
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a
                          className='nav-link active'
                          data-toggle='tab'
                          href='#'
                        >
                          7 Days
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' data-toggle='tab' href='#'>
                          14 Days
                        </a>
                      </li>
                      <li className='nav-item'>
                        <a className='nav-link' data-toggle='tab' href='#'>
                          Last Month
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='tab-content'>
                    <div className='tab-pane active' id='tab_overview'>
                      <div className='timed-activities padded'>
                        <div className='timed-activity'>
                          <div className='ta-date'>
                            <span>21st Jan, 2017</span>
                          </div>
                          <div className='ta-record-w'>
                            <div className='ta-record'>
                              <div className='ta-timestamp'>
                                <strong>11:55</strong> am
                              </div>
                              <div className='ta-activity'>
                                Created a post called{' '}
                                <a href='#'>Register new symbol</a> in Rogue
                              </div>
                            </div>
                            <div className='ta-record'>
                              <div className='ta-timestamp'>
                                <strong>2:34</strong> pm
                              </div>
                              <div className='ta-activity'>
                                Commented on story{' '}
                                <a href='#'>How to be a leader</a> in{' '}
                                <a href='#'>Financial</a> category
                              </div>
                            </div>
                            <div className='ta-record'>
                              <div className='ta-timestamp'>
                                <strong>7:12</strong> pm
                              </div>
                              <div className='ta-activity'>
                                Added <a href='#'>John Silver</a> as a friend
                              </div>
                            </div>
                            <div className='ta-record'>
                              <div className='ta-timestamp'>
                                <strong>9:39</strong> pm
                              </div>
                              <div className='ta-activity'>
                                Started following user{' '}
                                <a href='#'>Ben Mosley</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='timed-activity'>
                          <div className='ta-date'>
                            <span>3rd Feb, 2017</span>
                          </div>
                          <div className='ta-record-w'>
                            <div className='ta-record'>
                              <div className='ta-timestamp'>
                                <strong>9:32</strong> pm
                              </div>
                              <div className='ta-activity'>
                                Added <a href='#'>John Silver</a> as a friend
                              </div>
                            </div>
                            <div className='ta-record'>
                              <div className='ta-timestamp'>
                                <strong>5:14</strong> pm
                              </div>
                              <div className='ta-activity'>
                                Commented on story{' '}
                                <a href='#'>How to be a leader</a> in{' '}
                                <a href='#'>Financial</a> category
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='timed-activity'>
                          <div className='ta-date'>
                            <span>21st Jan, 2017</span>
                          </div>
                          <div className='ta-record-w'>
                            <div className='ta-record'>
                              <div className='ta-timestamp'>
                                <strong>11:55</strong> am
                              </div>
                              <div className='ta-activity'>
                                Created a post called{' '}
                                <a href='#'>Register new symbol</a> in Rogue
                              </div>
                            </div>
                            <div className='ta-record'>
                              <div className='ta-timestamp'>
                                <strong>2:34</strong> pm
                              </div>
                              <div className='ta-activity'>
                                Commented on story{' '}
                                <a href='#'>How to be a leader</a> in{' '}
                                <a href='#'>Financial</a> category
                              </div>
                            </div>
                            <div className='ta-record'>
                              <div className='ta-timestamp'>
                                <strong>9:39</strong> pm
                              </div>
                              <div className='ta-activity'>
                                Started following user{' '}
                                <a href='#'>Ben Mosley</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='tab-pane' id='tab_sales'>
                      <div className='el-tablo'>
                        <div className='label'>Unique Visitors</div>
                        <div className='value'>12,537</div>
                      </div>
                      <div className='el-chart-w'>
                        <canvas
                          height='150px'
                          id='lineChart'
                          width='600px'
                        ></canvas>
                      </div>
                    </div>
                    <div className='tab-pane' id='tab_conversion'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                    <h6 className='user-title'>{currentUser.login}</h6>
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
export default Profile
