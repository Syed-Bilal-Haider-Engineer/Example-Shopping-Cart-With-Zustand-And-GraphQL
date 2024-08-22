import { gql } from "@apollo/client";

export const QueryItems = gql`
query itemDirectory($pageNumber: Int!, $pageSize: Int!) {
  itemDirectory {
    allItemDirectory(parameters: { pageNumber: $pageNumber, pageSize: $pageSize }) {
      barcode
      capacity
      createdBy
      createdDate
      currentLoggedInUser
      damageQuantity
      expiryDays
      id
      itemWeight
      itemWeightName
      itemWidth
      itemWidthName
      merchantId
      merchantName
      rowGuid
      sku
      status
      wareHouseName
    }
  }
}`;
