import React from 'react';
import {useMutation, useQuery} from '@apollo/client';
import {useNavigate} from 'react-router-dom';
import {QueryItems} from '../../GraphQL/Queries/ItemsDirectory';
import {AddDirectory,UpdateDirectory}  from '../../GraphQL/Mutations/AddUpdateItem.js';
import {context} from '../Utils/Headers/CustomHeader.js'
import './style/AllItemsDirectory.css';
import Loading from '../Utils/Loading.jsx';
import Error from '../Utils/Error.jsx';

const AllItemsDirectory = () => {
  const navigate = useNavigate();

  const [addDirectory] = useMutation(AddDirectory, {
    context,
    onCompleted: () => {
      alert('Item added successfully!');
    },
    onError: (error) => {
      console.error('Error adding item:', error);
    },
  });

  const [updateItemDirectory] = useMutation(UpdateDirectory, {
    context,
    onCompleted: () => {
      alert('Item updated successfully!');
    },
    onError: (error) => {
      console.error('Error updating item:', error);
    },
  });


  const {loading, error, data} = useQuery(QueryItems, {
    variables: {pageNumber: 1, pageSize: 10},
    context
  });

  const handleRowClick = (id) => {
    navigate(`/details/${id}`);
  };

  const handleUpdateItem = async (id) => {
      await updateItemDirectory({
        variables: {
          rowGuid: id,
        },
      });
   }

    const handleAddItem = async() => {
        await addDirectory();
    }

    if (loading) return <Loading />;
    if (error) return <Error message={error?.message} />;
  

  const items = data?.itemDirectory?.allItemDirectory;
  if (!items || items.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="table-container" style={{marginTop:"2rem"}}>
      <div className="header" style={{marginBlock:"1rem"}} >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h2>All Items Directory</h2>
          <button
            type="button"
            className="button"
            onClick={handleAddItem}
          >
            Add Item
          </button>
        </div>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Barcode</th>
            <th>Capacity</th>
            <th>Created By</th>
            <th>Created Date</th>
            <th>Status</th>
            <th>Merchant Name</th>
            <th>SKU</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.id}
              onClick={() => handleRowClick(item.rowGuid)}
              className="clickable-row"
            >
              <td>{item.barcode}</td>
              <td>{item.capacity}</td>
              <td>{item.createdBy}</td>
              <td>{new Date(item.createdDate).toLocaleDateString()}</td>
              <td>{item.status}</td>
              <td>{item.merchantName}</td>
              <td>{item.sku}</td>
              <td
                onClick={(e) => {
                  e.stopPropagation();
                  handleUpdateItem(item.rowGuid);
                }}
              >
                Update
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllItemsDirectory;
