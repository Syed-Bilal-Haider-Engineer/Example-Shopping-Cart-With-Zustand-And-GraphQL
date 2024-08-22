import { gql } from "@apollo/client";
const AddDirectory = gql`
mutation itemDirectory {
  itemDirectory {
    addUpdateItemDirectory(parameters: {
    itemUnitofWeightId: 1,
    itemUnitofDimensionId: 1,
    merchantId: 1,
    }) 
  }
}
`;

const UpdateDirectory = gql`
mutation itemDirectory($rowGuid: UUID) {
  itemDirectory {
    addUpdateItemDirectory(parameters: { rowGuid:$rowGuid}) 
  }
}
`
export { AddDirectory, UpdateDirectory };