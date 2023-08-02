import React, { useState, useEffect, useMemo, useRef } from 'react'
import RecommandationDataService from '../../services/recommandation.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
const ShowRecommandations = (props) => {
  // constructor(props) {
  //   super(props)
  //   this.onChangeSearchTitre = this.onChangeSearchTitre.bind(this)
  //   this.retrieveRecommandations = this.retrieveRecommandations.bind(this)
  //   this.refreshList = this.refreshList.bind(this)
  //   this.setActiveRecommandation = this.setActiveRecommandation.bind(this)
  //   this.removeAllRecommandations = this.removeAllRecommandation.bind(this)
  //   this.deleteRecommandation = this.deleteRecommandation.bind(this)
  //   this.searchTitre = this.searchTitre.bind(this)
  //   this.state = {
  //     recommandations: [],
  //     currentRecommandation: null,
  //     currentIndex: -1,
  //     searchTitre: '',
  //   }
  // }
  const [recommandations, setRecommandations] = useState([])
  const [searchTitre, setSearchTitre] = useState('')
  const recommandationsRef = useRef()
  recommandationsRef.current = recommandations
  const navigate = useNavigate()
  // componentDidMount() {
  //   this.retrieveRecommandations()
  // }
  useEffect(() => {
    retrieveRecommandations()
  }, [])
  // onChangeSearchTitre(e) {
  //   const searchTitre = e.target.value
  //   this.setState({
  //     searchTitre: searchTitre,
  //   })
  // }
  const onChangeSearchTitre = (e) => {
    const searchTitre = e.target.value
    setSearchTitre(searchTitre)
  }
  // retrieveRecommandations() {
  //   RecommandationDataService.getAll()
  //     .then((response) => {
  //       this.setState({
  //         recommandations: response.data,
  //       })
  //       console.log(response.data)
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  // }
  const retrieveRecommandations = () => {
    RecommandationDataService.getAll()
      .then((response) => {
        setRecommandations(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  // refreshList() {
  //   this.retrieverecommandations()
  //   this.setState({
  //     currentRecommandation: null,
  //     currentIndex: -1,
  //   })
  // }
  const refreshList = () => {
    retrieveRecommandations()
  }
  // setActiveRecommandation(recommandation, index) {
  //   this.setState({
  //     currentRecommandation: recommandation,
  //     currentIndex: index,
  //   })
  // }   ===> delete this one

  // removeAllRecommandation() {
  //   RecommandationDataService.deleteAll()
  //     .then((response) => {
  //       console.log(response.data)
  //       this.refreshList()
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  // }
  const removeAllRecommandations = () => {
    RecommandationDataService.removeAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }
  // searchTitre() {
  //   RecommandationDataService.findByTitre(this.state.searchTitre)
  //     .then((response) => {
  //       this.setState({
  //         recommandations: response.data,
  //       })
  //       console.log(response.data)
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  // }
  const findByTitre = () => {
    RecommandationDataService.findByTitre(searchTitre)
      .then((response) => {
        setRecommandations(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  // deleteRecommandation() {
  //   RecommandationDataService.delete(this.state.currentRecommandation.id)
  //     .then((response) => {
  //       console.log(response.data)
  //       return <Navigate to='/recommandations' />
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  // }
  const deleteRecommandation = (rowIndex) => {
    const id = recommandationsRef.current[rowIndex].id
    RecommandationDataService.delete(id)
      .then((response) => {
        navigate('/recommandations')
        let newRecommandations = [...recommandationsRef.current]
        newRecommandations.splice(rowIndex, 1)
        setRecommandations(newRecommandations)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const openRecommandation = (rowIndex) => {
    const id = recommandationsRef.current[rowIndex].id
    navigate('/editRecommandation/' + id)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'Titre',
        accessor: 'titre',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Domaine',
        accessor: 'domaine',
      },
      {
        Header: 'specification',
        accessor: 'specification',
      },
      {
        Header: 'Retenu',
        accessor: 'retenu',
        Cell: (props) => {
          return props.value === 1 ? 'Retenu' : 'Rejetee'
        },
      },
      {
        Header: 'Etat',
        accessor: 'etat',
        Cell: (props) => {
          return props.value === 0 ? 'Private' : 'Public'
        },
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: (props) => {
          const rowIdx = props.row.id
          return (
            <div>
              <button
                onClick={() => openRecommandation(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                EDIT
              </button>

              <button
                onClick={() => deleteRecommandation(rowIdx)}
                className='m-3 btn btn-sm btn-warning'
              >
                DELETE
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
      data: recommandations,
    })
  return (
    <div className='list row'>
      <div className='col-md-8'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search by titre'
            value={searchTitre}
            // onChange={this.onChangeSearchTitre}
            onChange={onChangeSearchTitre}
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-secondary'
              type='button'
              // onClick={this.searchTitre}
              onClick={findByTitre}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      {/* <div className='col-md-6'> */}
      <div className='col-md-6'>
        <button
          className='m-3 btn btn-sm btn-danger'
          onClick={removeAllRecommandations}
        >
          Remove All
        </button>
      </div>{' '}
      <div className='col-md-6'>
        <Link to={'/addRecommandation'} className='m-3 btn btn-sm btn-primary'>
          New
        </Link>
      </div>
      <div className='col-md-12 list'>
        {/* <ul className='list-group'>
            {recommandations &&
              recommandations.map((recommandation, index) => (
                <li
                  className={
                    'list-group-item ' +
                    (index === currentIndex ? 'active' : '')
                  }
                  onClick={() =>
                    this.setActiveRecommandation(recommandation, index)
                  }
                  key={index}
                >
                  {recommandation.titre}
                </li>
              ))}
          </ul> */}
        <table
          className='table table-bordered border-warning'
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
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
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default ShowRecommandations
