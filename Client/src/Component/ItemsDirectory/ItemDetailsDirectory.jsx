import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QueryItemsDetails } from '../../GraphQL/Queries/ItemDetails';
import './style/ItemDetailsDirectory.css';
import {context} from '../Utils/Headers/CustomHeader.js'
import Loading from '../Utils/Loading.jsx';
import Error from '../Utils/Error.jsx';
const DirectoryDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(QueryItemsDetails, {
    variables: { rowGuid: id },
    context
  });

  if (loading) return <Loading />;
  if (error) return <Error message={error?.message} />;

  
  if (!data || !data?.itemDirectory?.itemDirectoryByGuid) {
    return <p>No data available</p>;
  }
  const item = data?.itemDirectory.itemDirectoryByGuid;

  return (
    <div className="details-container">
      <h2>Item Details</h2>
      <ul>
        <li><strong>itemDesEnglish:</strong> {item?.itemDesEnglish}</li>
        <li><strong>itemHeightName:</strong> {item?.itemHeightName}</li>
        <li><strong>Created By:</strong> {item?.createdBy}</li>
        <li><strong>Created Date:</strong> {new Date(item?.createdDate).toLocaleDateString()}</li>
        <li><strong>itemLengthName:</strong> {item?.itemLengthName}</li>
      </ul>
    </div>
  );
};

export default DirectoryDetails;
