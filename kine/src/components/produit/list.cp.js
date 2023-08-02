import React, { useState, useEffect, useMemo, useRef } from 'react'
import ProduitDataService from '../../services/produit.service'
import { Link, useNavigate } from 'react-router-dom'
import { useTable } from 'react-table'
const ShowProduits = (props) => {
  const [produits, setProduits] = useState([])
  const [searchNom, setSearchNom] = useState('')
  const produitsRef = useRef()
  produitsRef.current = produits
  const navigate = useNavigate()
  useEffect(() => {
    retrieveProduits()
  }, [])
  const onChangeSearchNom = (e) => {
    const searchNom = e.target.value
    setSearchNom(searchNom)
  }
  const retrieveProduits = () => {
    ProduitDataService.getAll()
      .then((response) => {
        setProduits(response.data.produits)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const refreshList = () => {
    retrieveProduits()
  }
  const removeAllProduits = () => {
    ProduitDataService.removeAll()
      .then((response) => {
        console.log(response.data)
        refreshList()
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const findByNom = () => {
    ProduitDataService.findByNom(searchNom)
      .then((response) => {
        setProduits(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const deleteProduit = (rowIndex) => {
    const id = produitsRef.current[rowIndex].id
    ProduitDataService.delete(id)
      .then((response) => {
        navigate('/produits')
        let newProduits = [...produitsRef.current]
        newProduits.splice(rowIndex, 1)
        setProduits(newProduits)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  const img = (i) => {
    console.log(i)
  }
  const openProduit = (rowIndex) => {
    const id = produitsRef.current[rowIndex].id
    navigate('/editProduit/' + id)
  }
  const columns = useMemo(
    () => [
      {
        Header: 'Nom',
        accessor: 'nom',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Image',
        accessor: 'image',
        Cell: (row) => {
          console.log(row.value)
          return (
            <div>
              <img height={50} width={50} src={`./uploads/${row.value}`} />
            </div>
          )
        },
      },
      {
        Header: 'Promoted',
        accessor: 'promoted',
        Cell: (props) => {
          return props.value === 1 ? 'En promotion' : 'NewCollection'
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
                onClick={() => openProduit(rowIdx)}
                className='m-3 btn btn-sm btn-danger'
              >
                EDIT
              </button>

              <button
                onClick={() => deleteProduit(rowIdx)}
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
      data: produits,
    })
  return (
    <div className='list row'>
      <div className='col-md-8'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search by Nom'
            value={searchNom}
            onChange={onChangeSearchNom}
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-secondary'
              type='button'
              onClick={findByNom}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className='col-md-6'>
        <button
          className='m-3 btn btn-sm btn-danger'
          onClick={removeAllProduits}
        >
          Remove All
        </button>
      </div>{' '}
      <div className='col-md-6'>
        <Link to={'/addProduit'} className='m-3 btn btn-sm btn-primary'>
          New
        </Link>
      </div>
      <div className='col-md-12 list'>
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
export default ShowProduits
