
interface ListResponseProps {
  totalItems?: number;
  loading?: boolean;
  searched?: boolean;
}

const ListResponse: React.FC<ListResponseProps> = ({
  totalItems,
  loading,
  searched,
}) => {

  if (totalItems === 0 && !loading && searched) {
    return <div className="table-list-results">No result found</div>;
  }
  if (totalItems === 0 && !loading && !searched) {
    return <div className="table-list-results">No result found</div>;
  }

  return null;
};

export default ListResponse;
