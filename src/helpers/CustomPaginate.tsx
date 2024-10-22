import Pagination from "react-js-pagination";

interface CustomPaginationProps {
  data: {
    total: number;
    current_page: number;
    per_page: number;
    last_page: number;
  };
  setActivePage: (page: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  data,
  setActivePage,
}) => {
  return data.total > 10 ? (
    <div className="pagination-block">
      <Pagination
        activePage={data.current_page}
        itemsCountPerPage={data.per_page}
        totalItemsCount={data.total}
        pageRangeDisplayed={5}
        onChange={(e) => setActivePage(e)}
        itemClass="pagination__page-item"
        linkClass="pagination__page-link"
        hideFirstLastPages={true}
        itemClassPrev="prev-item"
        itemClassNext="next-item"
        prevPageText={<i className="icon-arrow-left" />}
        nextPageText={<i className="icon-arrow-right" />}
      />
    </div>
  ) : null;
};

export default CustomPagination;
