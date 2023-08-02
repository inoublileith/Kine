import React, { useState, useEffect, useMemo, useRef } from 'react'
import FactureDataService from '../../services/facture.service'
import BordDataService from '../../services/bord.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
import { useDispatch, useSelector } from 'react-redux'
const ShowBords = (props) => {
    const { user: currentUser } = useSelector((state) => state.auth)
  const [factures, setFactures] = useState([])
  const [bords, setBords] = useState([])
  const [searchDate, setSearchDate] = useState('')
  const bordsRef = useRef()
  const facturesRef = useRef()
  bordsRef.current = bords
  facturesRef.current = factures
  const navigate = useNavigate()

  useEffect(() => {
    retrieveFactures()
    retrieveBords()
  }, [])

  const onChangeSearchDate = (e) => {
    const searchDate = e.target.value
    setSearchDate(searchDate)
  }
  const retrieveFactures = (id) => {
    FactureDataService.getbybord(id)
      .then((response) => {
        setFactures(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const retrieveBords = () => {
    BordDataService.getAll(currentUser.id)
      .then((response) => {
        setBords(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const refreshList = () => {
    retrieveBords()
  }
const calcule = () => {
  let somme = 0
  {
    factures.map((facture, i) => (somme = somme + facture.prix_ht))
  }
  return somme
}
  const removeAllBords = () => {
    BordDataService.deleteAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByDate = () => {
    BordDataService.findByDate(searchDate)
      .then((response) => {
        setBords(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const deleteBord = (rowIndex) => {
    const id = bordsRef.current[rowIndex].id
    BordDataService.delete(id)
      .then((response) => {
        navigate('/bords')
        let newBords = [...bordsRef.current]
        newBords.splice(rowIndex, 1)
        setBords(newBords)
      })
      .catch((e) => {
        console.log(e)
      })
  }
const openBordNonAffect = (rowIndex) => {
   const x = bordsRef.current[rowIndex].id
   navigate('/FacturesNonAffect/' + x)
}

  const openBord = (rowIndex) => {
    const id = bordsRef.current[rowIndex].id
    navigate('/editBord/' + id)
  }
    const openFactures = (rowIndex) => {
      const id = bordsRef.current[rowIndex].id
      navigate('/FacturesBord/' + id)
    }
  const columns = useMemo(
    () => [
      {
        Header: 'Total',
        accessor: 'total',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
      // {
      //   Header: 'Etat',
      //   accessor: 'etat',
      // },

      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              <button
                onClick={() => openBord(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                <i className='os-icon os-icon-ui-49'></i>
              </button>

              <button
                onClick={() => deleteBord(rowIdx)}
                className='m-3 btn btn-sm btn-warning'
              >
                <i className='os-icon os-icon-ui-15'></i>
              </button>
              <button
                onClick={() => openFactures(rowIdx)}
                className='m-3 btn btn-sm btn-warning'
                value='liste des factures'
              >
                liste des factures
              </button>
              <button
                onClick={() => openBordNonAffect(rowIdx)}
                className='m-3 btn btn-sm btn-warning'
              >
                Ajouter des factures
              </button>
            </div>
          )
        },
      },
    ],
    []
  )
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: bords,
    })
  return (
    <div className='row'>
      <div className='col-sm-12'>
        <div className='element-wrapper'>
          <h6 className='element-header'>Bordereaux</h6>
          <div className='element-box-tp'>
            <div className='controls-above-table'>
              <div className='row'>
                <div className='col-sm-6'>
                  <Link to={'/addBord'} className='m-3 btn btn-sm btn-primary'>
                    <i class='bi bi-plus-circle'>Ajouter</i>
                  </Link>

                  <button
                    className='m-3 btn btn-sm btn-danger'
                    onClick={removeAllBords}
                  >
                    Remove All
                  </button>
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
              <div className='table-responsive'>
                <table
                  className='table table-bordered table-lg table-v2 table-striped'
                  {...getTableProps()}
                >
                  <thead>
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th
                            className='text-center'
                            {...column.getHeaderProps()}
                          >
                            {column.render('Header')}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                      prepareRow(row)
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                            return (
                              <td
                                className='text-center'
                                {...cell.getCellProps()}
                              >
                                {cell.render('Cell')}
                              </td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              <div className='controls-below-table'>
                <div className='table-records-info'>Showing records 1 - 5</div>
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
                Hi, I tried ordering this product and it keeps showing me error
                code.
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
  )
}
export default ShowBords
