import React, { useState, useEffect } from 'react'
import UserService from '../services/user.service'
const Home = () => {
  const [content, setContent] = useState('en chargement!!')
  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data)
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString()
        setContent(_content)
      }
    )
  }, [])
  return (
    <div className='container'>
      <ul className='breadcrumb'>
        <li className='breadcrumb-item'>
          <a href='home.html'>Home</a>
        </li>
        <li className='breadcrumb-item'>
          <a href='home.html'>Products</a>
        </li>
        <li className='breadcrumb-item'>
          <span>Laptop with retina screen</span>
        </li>
      </ul>

      <div className='content-panel-toggler'>
        <i className='os-icon os-icon-grid-squares-22'></i>
        <span>Sidebar</span>
      </div>
      <div className='content-i'>
        <div className='content-box'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='element-wrapper'>
                <div className='element-actions'>
                  <form className='form-inline justify-content-sm-end'>
                    <select className='form-control form-control-sm rounded'>
                      <option value='Pending'>Today</option>
                      <option value='Active'>Last Week </option>
                      <option value='Cancelled'>Last 30 Days</option>
                    </select>
                  </form>
                </div>
                <h6 className='element-header'>Sales Dashboard</h6>
                <div className='element-content'>
                  <div className='row'>
                    <div className='col-sm-4 col-xxxl-3'>
                      <a className='element-box el-tablo' href='#'>
                        <div className='label'>Products Sold</div>
                        <div className='value'>57</div>
                        <div className='trending trending-up-basic'>
                          <span>12%</span>
                          <i className='os-icon os-icon-arrow-up2'></i>
                        </div>
                      </a>
                    </div>
                    <div className='col-sm-4 col-xxxl-3'>
                      <a className='element-box el-tablo' href='#'>
                        <div className='label'>Gross Profit</div>
                        <div className='value'>$457</div>
                        <div className='trending trending-down-basic'>
                          <span>12%</span>
                          <i className='os-icon os-icon-arrow-down'></i>
                        </div>
                      </a>
                    </div>
                    <div className='col-sm-4 col-xxxl-3'>
                      <a className='element-box el-tablo' href='#'>
                        <div className='label'>New Customers</div>
                        <div className='value'>125</div>
                        <div className='trending trending-down-basic'>
                          <span>9%</span>
                          <i className='os-icon os-icon-arrow-down'></i>
                        </div>
                      </a>
                    </div>
                    <div className='d-none d-xxxl-block col-xxxl-3'>
                      <a className='element-box el-tablo' href='#'>
                        <div className='label'>Refunds Processed</div>
                        <div className='value'>$294</div>
                        <div className='trending trending-up-basic'>
                          <span>12%</span>
                          <i className='os-icon os-icon-arrow-up2'></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-8 col-xxxl-6'>
              <div className='element-wrapper'>
                <h6 className='element-header'>New Orders</h6>
                <div className='element-box'>
                  <div className='table-responsive'>
                    <table className='table table-lightborder'>
                      <thead>
                        <tr>
                          <th>Customer</th>
                          <th>Products</th>
                          <th className='text-center'>Status</th>
                          <th className='text-right'>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className='nowrap'>John Mayers</td>
                          <td>
                            <div className='cell-image-list'>
                              <div className='cell-img'></div>
                              <div className='cell-img'></div>
                              <div className='cell-img'></div>
                              <div className='cell-img-more'>+ 5 more</div>
                            </div>
                          </td>
                          <td className='text-center'>
                            <div
                              className='status-pill green'
                              data-title='Complete'
                              data-toggle='tooltip'
                            ></div>
                          </td>
                          <td className='text-right'>$354</td>
                        </tr>
                        <tr>
                          <td className='nowrap'>Kelly Brans</td>
                          <td>
                            <div className='cell-image-list'>
                              <div className='cell-img'></div>
                              <div className='cell-img'></div>
                            </div>
                          </td>
                          <td className='text-center'>
                            <div
                              className='status-pill red'
                              data-title='Cancelled'
                              data-toggle='tooltip'
                            ></div>
                          </td>
                          <td className='text-right'>$94</td>
                        </tr>
                        <tr>
                          <td className='nowrap'>Tim Howard</td>
                          <td>
                            <div className='cell-image-list'>
                              <div className='cell-img'></div>
                              <div className='cell-img'></div>
                              <div className='cell-img'></div>
                            </div>
                          </td>
                          <td className='text-center'>
                            <div
                              className='status-pill green'
                              data-title='Complete'
                              data-toggle='tooltip'
                            ></div>
                          </td>
                          <td className='text-right'>$156</td>
                        </tr>
                        <tr>
                          <td className='nowrap'>Joe Trulli</td>
                          <td>
                            <div className='cell-image-list'>
                              <div className='cell-img'></div>
                              <div className='cell-img'></div>
                              <div className='cell-img'></div>
                              <div className='cell-img-more'>+ 2 more</div>
                            </div>
                          </td>
                          <td className='text-center'>
                            <div
                              className='status-pill yellow'
                              data-title='Pending'
                              data-toggle='tooltip'
                            ></div>
                          </td>
                          <td className='text-right'>$1,120</td>
                        </tr>
                        <tr>
                          <td className='nowrap'>Jerry Lingard</td>
                          <td>
                            <div className='cell-image-list'>
                              <div className='cell-img'></div>
                            </div>
                          </td>
                          <td className='text-center'>
                            <div
                              className='status-pill green'
                              data-title='Complete'
                              data-toggle='tooltip'
                            ></div>
                          </td>
                          <td className='text-right'>$856</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-4 d-xxxl-none'>
              <div className='element-wrapper'>
                <h6 className='element-header'>Top Selling Today</h6>
                <div className='element-box'>
                  <div className='el-chart-w'>
                    <canvas height='120' id='donutChart' width='120'></canvas>
                    <div className='inside-donut-chart-label'>
                      <strong>142</strong>
                      <span>Total Orders</span>
                    </div>
                  </div>
                  <div className='el-legend condensed'>
                    <div className='row'>
                      <div className='col-auto col-xxxxl-6 ml-sm-auto mr-sm-auto col-6'>
                        <div className='legend-value-w'>
                          <div className='legend-pin legend-pin-squared'></div>
                          <div className='legend-value'>
                            <span>Prada</span>
                            <div className='legend-sub-value'>14 Pairs</div>
                          </div>
                        </div>
                        <div className='legend-value-w'>
                          <div className='legend-pin legend-pin-squared'></div>
                          <div className='legend-value'>
                            <span>Maui Jim</span>
                            <div className='legend-sub-value'>26 Pairs</div>
                          </div>
                        </div>
                      </div>
                      <div className='col-6 d-lg-none d-xxl-block'>
                        <div className='legend-value-w'>
                          <div className='legend-pin legend-pin-squared'></div>
                          <div className='legend-value'>
                            <span>Gucci</span>
                            <div className='legend-sub-value'>17 Pairs</div>
                          </div>
                        </div>
                        <div className='legend-value-w'>
                          <div className='legend-pin legend-pin-squared'></div>
                          <div className='legend-value'>
                            <span>Armani</span>
                            <div className='legend-sub-value'>12 Pairs</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-none d-xxxl-block col-xxxl-6'>
              <div className='element-wrapper'>
                <div className='element-actions'>
                  <form className='form-inline justify-content-sm-end'>
                    <select className='form-control form-control-sm rounded'>
                      <option value='Pending'>Today</option>
                      <option value='Active'>Last Week </option>
                      <option value='Cancelled'>Last 30 Days</option>
                    </select>
                  </form>
                </div>
                <h6 className='element-header'>Inventory Stats</h6>
                <div className='element-box'>
                  <div className='os-progress-bar primary'>
                    <div className='bar-labels'>
                      <div className='bar-label-left'>
                        <span className='bigger'>Eyeglasses</span>
                      </div>
                      <div className='bar-label-right'>
                        <span className='info'>25 items / 10 remaining</span>
                      </div>
                    </div>
                    <div className='bar-level-1'>
                      <div className='bar-level-2'>
                        <div className='bar-level-3'></div>
                      </div>
                    </div>
                  </div>
                  <div className='os-progress-bar primary'>
                    <div className='bar-labels'>
                      <div className='bar-label-left'>
                        <span className='bigger'>Outwear</span>
                      </div>
                      <div className='bar-label-right'>
                        <span className='info'>18 items / 7 remaining</span>
                      </div>
                    </div>
                    <div className='bar-level-1'>
                      <div className='bar-level-2' width='40%'>
                        <div className='bar-level-3' width='20%'></div>
                      </div>
                    </div>
                  </div>
                  <div className='os-progress-bar primary'>
                    <div className='bar-labels'>
                      <div className='bar-label-left'>
                        <span className='bigger'>Shoes</span>
                      </div>
                      <div className='bar-label-right'>
                        <span className='info'>15 items / 12 remaining</span>
                      </div>
                    </div>
                    <div className='bar-level-1' width='100%'>
                      <div className='bar-level-2' width='60%'>
                        <div className='bar-level-3' width='30%'></div>
                      </div>
                    </div>
                  </div>
                  <div className='os-progress-bar primary'>
                    <div className='bar-labels'>
                      <div className='bar-label-left'>
                        <span className='bigger'>Jeans</span>
                      </div>
                      <div className='bar-label-right'>
                        <span className='info'>12 items / 4 remaining</span>
                      </div>
                    </div>
                    <div className='bar-level-1' width='100%'>
                      <div className='bar-level-2' width='30%'>
                        <div className='bar-level-3' width='10%'></div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-4 border-top pt-3'>
                    <div className='element-actions d-none d-sm-block'>
                      <form className='form-inline justify-content-sm-end'>
                        <select className='form-control form-control-sm form-control-faded'>
                          <option selected='true'>Last 30 days</option>
                          <option>This Week</option>
                          <option>This Month</option>
                          <option>Today</option>
                        </select>
                      </form>
                    </div>
                    <h6 className='element-box-header'>Inventory History</h6>
                    <div className='el-chart-w'>
                      <canvas
                        data-chart-data='13,28,19,24,43,49,40,35,42,46,38,32,45'
                        height='50'
                        id='liteLineChartV3'
                        width='300'
                      ></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-xxxl-9'>
              <div className='element-wrapper'>
                <h6 className='element-header'>Unique Visitors Graph</h6>
                <div className='element-box'>
                  <div className='os-tabs-w'>
                    <div className='os-tabs-controls'>
                      <ul className='nav nav-tabs smaller'>
                        <li className='nav-item'>
                          <a
                            className='nav-link active'
                            data-toggle='tab'
                            href='#tab_overview'
                          >
                            Overview
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a
                            className='nav-link'
                            data-toggle='tab'
                            href='#tab_sales'
                          >
                            Sales
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
                        <div className='el-tablo bigger'>
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
                      <div className='tab-pane' id='tab_sales'></div>
                      <div className='tab-pane' id='tab_conversion'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-none d-xxxl-block col-xxxl-3'>
              <div className='element-wrapper'>
                <h6 className='element-header'>Visitors by Browser</h6>
                <div className='element-box less-padding'>
                  <div className='el-chart-w'>
                    <canvas height='120' id='donutChart1' width='120'></canvas>
                    <div className='inside-donut-chart-label'>
                      <strong>1,248</strong>
                      <span>Visitors</span>
                    </div>
                  </div>
                  <div className='el-legend condensed'>
                    <div className='row'>
                      <div className='col-auto col-xxxxl-6 ml-sm-auto mr-sm-auto'>
                        <div className='legend-value-w'>
                          <div
                            className='legend-pin legend-pin-squared'
                            background-color='#6896f9;'
                          ></div>
                          <div className='legend-value'>
                            <span>Safari</span>
                            <div className='legend-sub-value'>
                              17%, 12 Visits
                            </div>
                          </div>
                        </div>
                        <div className='legend-value-w'>
                          <div
                            className='legend-pin legend-pin-squared'
                            background-color='#85c751;'
                          ></div>
                          <div className='legend-value'>
                            <span>Chrome</span>
                            <div className='legend-sub-value'>
                              22%, 763 Visits
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-sm-6 d-none d-xxxxl-block'>
                        <div className='legend-value-w'>
                          <div
                            className='legend-pin legend-pin-squared'
                            background-color='#806ef9;'
                          ></div>
                          <div className='legend-value'>
                            <span>Firefox</span>
                            <div className='legend-sub-value'>3%, 7 Visits</div>
                          </div>
                        </div>
                        <div className='legend-value-w'>
                          <div
                            className='legend-pin legend-pin-squared'
                            background-colo='#d97b70;'
                          ></div>
                          <div className='legend-value'>
                            <span>Explorer</span>
                            <div className='legend-sub-value'>
                              15%, 45 Visits
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='element-wrapper'>
                <h6 className='element-header'>Recent Orders</h6>
                <div className='element-box-tp'>
                  <div className='controls-above-table'>
                    <div className='row'>
                      <div className='col-sm-6'>
                        <a className='btn btn-sm btn-secondary' href='#'>
                          Download CSV
                        </a>
                        <a className='btn btn-sm btn-secondary' href='#'>
                          Archive
                        </a>
                        <a className='btn btn-sm btn-danger' href='#'>
                          Delete
                        </a>
                      </div>
                      <div className='col-sm-6'>
                        <form className='form-inline justify-content-sm-end'>
                          <input
                            className='form-control form-control-sm rounded bright'
                            placeholder='Search'
                            type='text'
                          />
                          <select className='form-control form-control-sm rounded bright'>
                            <option selected='selected' value=''>
                              Select Status
                            </option>
                            <option value='Pending'>Pending</option>
                            <option value='Active'>Active</option>
                            <option value='Cancelled'>Cancelled</option>
                          </select>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className='table-responsive'>
                    <table className='table table-bordered table-lg table-v2 table-striped'>
                      <thead>
                        <tr>
                          <th className='text-center'>
                            <input className='form-control' type='checkbox' />
                          </th>
                          <th>Customer Name</th>
                          <th>Country</th>
                          <th>Order Total</th>
                          <th>Referral</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className='text-center'>
                            <input className='form-control' type='checkbox' />
                          </td>
                          <td>John Mayers</td>
                          <td>
                            <img
                              alt=''
                              src='img/flags-icons/us.png'
                              width='25px'
                            />
                          </td>
                          <td className='text-right'>$245</td>
                          <td>Organic</td>
                          <td className='text-center'>
                            <div
                              className='status-pill green'
                              data-title='Complete'
                              data-toggle='tooltip'
                            ></div>
                          </td>
                          <td className='row-actions'>
                            <a href='#'>
                              <i className='os-icon os-icon-ui-49'></i>
                            </a>
                            <a href='#'>
                              <i className='os-icon os-icon-grid-10'></i>
                            </a>
                            <a className='danger' href='#'>
                              <i className='os-icon os-icon-ui-15'></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className='text-center'>
                            <input className='form-control' type='checkbox' />
                          </td>
                          <td>Mike Astone</td>
                          <td>
                            <img
                              alt=''
                              src='img/flags-icons/fr.png'
                              width='25px'
                            />
                          </td>
                          <td className='text-right'>$154</td>
                          <td>Organic</td>
                          <td className='text-center'>
                            <div
                              className='status-pill red'
                              data-title='Cancelled'
                              data-toggle='tooltip'
                            ></div>
                          </td>
                          <td className='row-actions'>
                            <a href='#'>
                              <i className='os-icon os-icon-ui-49'></i>
                            </a>
                            <a href='#'>
                              <i className='os-icon os-icon-grid-10'></i>
                            </a>
                            <a className='danger' href='#'>
                              <i className='os-icon os-icon-ui-15'></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className='text-center'>
                            <input className='form-control' type='checkbox' />
                          </td>
                          <td>Kira Knight</td>
                          <td>
                            <img
                              alt=''
                              src='img/flags-icons/us.png'
                              width='25px'
                            />
                          </td>
                          <td className='text-right'>$23</td>
                          <td>Adwords</td>
                          <td className='text-center'>
                            <div
                              className='status-pill green'
                              data-title='Complete'
                              data-toggle='tooltip'
                            ></div>
                          </td>
                          <td className='row-actions'>
                            <a href='#'>
                              <i className='os-icon os-icon-ui-49'></i>
                            </a>
                            <a href='#'>
                              <i className='os-icon os-icon-grid-10'></i>
                            </a>
                            <a className='danger' href='#'>
                              <i className='os-icon os-icon-ui-15'></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className='text-center'>
                            <input className='form-control' type='checkbox' />
                          </td>
                          <td>Jessica Bloom</td>
                          <td>
                            <img
                              alt=''
                              src='img/flags-icons/ca.png'
                              width='25px'
                            />
                          </td>
                          <td className='text-right'>$112</td>
                          <td>Organic</td>
                          <td className='text-center'>
                            <div
                              className='status-pill green'
                              data-title='Complete'
                              data-toggle='tooltip'
                            ></div>
                          </td>
                          <td className='row-actions'>
                            <a href='#'>
                              <i className='os-icon os-icon-ui-49'></i>
                            </a>
                            <a href='#'>
                              <i className='os-icon os-icon-grid-10'></i>
                            </a>
                            <a className='danger' href='#'>
                              <i className='os-icon os-icon-ui-15'></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className='text-center'>
                            <input className='form-control' type='checkbox' />
                          </td>
                          <td>Gary Lineker</td>
                          <td>
                            <img
                              alt=''
                              src='img/flags-icons/ca.png'
                              width='25px'
                            />
                          </td>
                          <td className='text-right'>$64</td>
                          <td>Organic</td>
                          <td className='text-center'>
                            <div
                              className='status-pill yellow'
                              data-title='Pending'
                              data-toggle='tooltip'
                            ></div>
                          </td>
                          <td className='row-actions'>
                            <a href='#'>
                              <i className='os-icon os-icon-ui-49'></i>
                            </a>
                            <a href='#'>
                              <i className='os-icon os-icon-grid-10'></i>
                            </a>
                            <a className='danger' href='#'>
                              <i className='os-icon os-icon-ui-15'></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className='controls-below-table'>
                    <div className='table-records-info'>
                      Showing records 1 - 5
                    </div>
                    <div className='table-records-pages'>
                      <ul>
                        <li>
                          <a href='#'>Previous</a>
                        </li>
                        <li>
                          <a className='current' href='#'>
                            1
                          </a>
                        </li>
                        <li>
                          <a href='#'>2</a>
                        </li>
                        <li>
                          <a href='#'>3</a>
                        </li>
                        <li>
                          <a href='#'>4</a>
                        </li>
                        <li>
                          <a href='#'>Next</a>
                        </li>
                      </ul>
                    </div>
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
                    <h6 className='user-title'>John Mayers</h6>
                    <div className='user-role'>Account Manager</div>
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
          <div className='element-wrapper'>
            <h6 className='element-header'>Quick Links</h6>
            <div className='element-box-tp'>
              <div className='el-buttons-list full-width'>
                <a className='btn btn-white btn-sm' href='#'>
                  <i className='os-icon os-icon-delivery-box-2'></i>
                  <span>Create New Product</span>
                </a>
                <a className='btn btn-white btn-sm' href='#'>
                  <i className='os-icon os-icon-window-content'></i>
                  <span>Customer Comments</span>
                </a>
                <a className='btn btn-white btn-sm' href='#'>
                  <i className='os-icon os-icon-wallet-loaded'></i>
                  <span>Store Settings</span>
                </a>
              </div>
            </div>
          </div>

          <div className='element-wrapper'>
            <h6 className='element-header'>Support Agents</h6>
            <div className='element-box-tp'>
              <div className='profile-tile'>
                <a className='profile-tile-box' href='users_profile_small.html'>
                  <div className='pt-avatar-w'>
                    <img alt='' src='img/avatar1.jpg' />
                  </div>
                  <div className='pt-user-name'>John Mayers</div>
                </a>
                <div className='profile-tile-meta'>
                  <ul>
                    <li>
                      Last Login:<strong>Online Now</strong>
                    </li>
                    <li>
                      Tickets:
                      <strong>
                        <a href='apps_support_home.html'>12</a>
                      </strong>
                    </li>
                    <li>
                      Response Time:<strong>2 hours</strong>
                    </li>
                  </ul>
                  <div className='pt-btn'>
                    <a
                      className='btn btn-success btn-sm'
                      href='apps_full_chat.html'
                    >
                      Send Message
                    </a>
                  </div>
                </div>
              </div>
              <div className='profile-tile'>
                <a className='profile-tile-box' href='users_profile_small.html'>
                  <div className='pt-avatar-w'>
                    <img alt='' src='img/avatar3.jpg' />
                  </div>
                  <div className='pt-user-name'>Ben Gossman</div>
                </a>
                <div className='profile-tile-meta'>
                  <ul>
                    <li>
                      Last Login:<strong>Offline</strong>
                    </li>
                    <li>
                      Tickets:
                      <strong>
                        <a href='apps_support_home.html'>9</a>
                      </strong>
                    </li>
                    <li>
                      Response Time:<strong>3 hours</strong>
                    </li>
                  </ul>
                  <div className='pt-btn'>
                    <a
                      className='btn btn-secondary btn-sm'
                      href='apps_full_chat.html'
                    >
                      Send Message
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='element-wrapper'>
            <h6 className='element-header'>Recent Activity</h6>
            <div className='element-box-tp'>
              <div className='activity-boxes-w'>
                <div className='activity-box-w'>
                  <div className='activity-time'>10 Min</div>
                  <div className='activity-box'>
                    <div className='activity-avatar'>
                      <img alt='' src='img/avatar1.jpg' />
                    </div>
                    <div className='activity-info'>
                      <div className='activity-role'>John Mayers</div>
                      <strong className='activity-title'>
                        Opened New Account
                      </strong>
                    </div>
                  </div>
                </div>
                <div className='activity-box-w'>
                  <div className='activity-time'>2 Hours</div>
                  <div className='activity-box'>
                    <div className='activity-avatar'>
                      <img alt='' src='img/avatar2.jpg' />
                    </div>
                    <div className='activity-info'>
                      <div className='activity-role'>Ben Gossman</div>
                      <strong className='activity-title'>Posted Comment</strong>
                    </div>
                  </div>
                </div>
                <div className='activity-box-w'>
                  <div className='activity-time'>5 Hours</div>
                  <div className='activity-box'>
                    <div className='activity-avatar'>
                      <img alt='' src='img/avatar3.jpg' />
                    </div>
                    <div className='activity-info'>
                      <div className='activity-role'>Phil Nokorin</div>
                      <strong className='activity-title'>
                        Opened New Account
                      </strong>
                    </div>
                  </div>
                </div>
                <div className='activity-box-w'>
                  <div className='activity-time'>2 Days</div>
                  <div className='activity-box'>
                    <div className='activity-avatar'>
                      <img alt='' src='img/avatar4.jpg' />
                    </div>
                    <div className='activity-info'>
                      <div className='activity-role'>Jenny Miksa</div>
                      <strong className='activity-title'>Uploaded Image</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='element-wrapper'>
            <h6 className='element-header'>Team Members</h6>
            <div className='element-box-tp'>
              <div className='input-search-w'>
                <input
                  className='form-control rounded bright'
                  placeholder='Search team members...'
                  type='search'
                />
              </div>
              <div className='users-list-w'>
                <div className='user-w with-status status-green'>
                  <div className='user-avatar-w'>
                    <div className='user-avatar'>
                      <img alt='' src='img/avatar1.jpg' />
                    </div>
                  </div>
                  <div className='user-name'>
                    <h6 className='user-title'>John Mayers</h6>
                    <div className='user-role'>Account Manager</div>
                  </div>
                  <a className='user-action' href='users_profile_small.html'>
                    <div className='os-icon os-icon-email-forward'></div>
                  </a>
                </div>
                <div className='user-w with-status status-green'>
                  <div className='user-avatar-w'>
                    <div className='user-avatar'>
                      <img alt='' src='img/avatar2.jpg' />
                    </div>
                  </div>
                  <div className='user-name'>
                    <h6 className='user-title'>Ben Gossman</h6>
                    <div className='user-role'>Administrator</div>
                  </div>
                  <a className='user-action' href='users_profile_small.html'>
                    <div className='os-icon os-icon-email-forward'></div>
                  </a>
                </div>
                <div className='user-w with-status status-red'>
                  <div className='user-avatar-w'>
                    <div className='user-avatar'>
                      <img alt='' src='img/avatar3.jpg' />
                    </div>
                  </div>
                  <div className='user-name'>
                    <h6 className='user-title'>Phil Nokorin</h6>
                    <div className='user-role'>HR Manger</div>
                  </div>
                  <a className='user-action' href='users_profile_small.html'>
                    <div className='os-icon os-icon-email-forward'></div>
                  </a>
                </div>
                <div className='user-w with-status status-green'>
                  <div className='user-avatar-w'>
                    <div className='user-avatar'>
                      <img alt='' src='img/avatar4.jpg' />
                    </div>
                  </div>
                  <div className='user-name'>
                    <h6 className='user-title'>Jenny Miksa</h6>
                    <div className='user-role'>Lead Developer</div>
                  </div>
                  <a className='user-action' href='users_profile_small.html'>
                    <div className='os-icon os-icon-email-forward'></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
