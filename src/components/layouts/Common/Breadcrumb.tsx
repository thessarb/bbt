import React from "react";
import PATHS from "src/routes/Paths";
import { useNavigate } from "react-router";

interface BreadcrumbProps {
  title?: string;
  subtitle?: string;
  detailstitle?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, subtitle, detailstitle }) => {
  const navigate = useNavigate();
  return (
    <div className="row breadcrumb">
        <div className="breadcrumb__container body-normal__regular">
          {title ? (
            <>
              <span onClick={() => navigate(PATHS.dashboard)} className="link-component">{title}</span>
              <span className="breadcrumb__divider">{" "}/</span>
              <span className="">{" "}{subtitle}</span>
              {/* <span className="body-normal__regular">{" "}/</span>
              <span className="body-normal__regular breadcrumb__title">{" "}{detailstitle}</span> */}
            </>
          ) : (
            ""
          )}
      </div>
    </div>
  );
};

export default Breadcrumb;
