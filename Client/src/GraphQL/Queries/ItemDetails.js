import { gql } from "@apollo/client";

export const QueryItemsDetails = gql`
query itemDirectory($rowGuid: UUID!) {
  itemDirectory {
    itemDirectoryByGuid(parameters: {rowGuid:$rowGuid,  pageSize: 1, pageNumber: 1}) {
      barcode
      capacity
      createdBy
      createdDate
      currentLoggedInUser
      damageQuantity
      expiryDays
      id
      inHandQuantity
      isAdmin
      isExpirable
      itemDesArabic
      itemDesEnglish
      itemHeight
      itemHeightName
      itemImageUrl
      itemLength
      itemLengthName
      itemNameArabic
      itemNameEnglish
      itemUnitofDimensionId
      itemUnitofWeightId
      rowGuid
    }
  }
}`;
