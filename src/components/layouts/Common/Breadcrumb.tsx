import React from "react";
import PATHS from "src/routes/Paths";
import { useNavigate } from "react-router";

interface BreadcrumbProps {
  title?: string;
  subtitle?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, subtitle }) => {
  const navigate = useNavigate();
  return (
    <div className="row breadcrumb">
        <div className="breadcrumb__page-title-box">
          {title ? (
            <div>
              <span onClick={() => navigate(PATHS.dashboard)} className="body-normal__regular breadcrumb__home">{title}{" "}/</span>
              <span className="body-normal__medium breadcrumb__title">{" "}{subtitle}</span>
            </div>
          ) : (
            ""
          )}
      </div>
    </div>
  );
};

export default Breadcrumb;
