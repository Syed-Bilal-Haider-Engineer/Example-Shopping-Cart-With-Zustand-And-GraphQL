import { gql } from "@apollo/client";

export const QueryItems = gql`
  query itemDirectory($pageSize: Int!, $pageNumber: Int!) {
    itemDirectory {
      allItemDirectory(
        parameters: {
          pageSize: $pageSize
          pageNumber: $pageNumber
        }
      ) {
        id
        barcode
        itemNameEnglish
        itemNameArabic
        itemDesEnglish
        itemDesArabic
        wareHouseName
        itemImageUrl
        merchantName
        sku
        capacity
        inHandQuantity
        status
      }
    }
  }
`;
