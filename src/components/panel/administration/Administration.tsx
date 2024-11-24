import React, {useEffect, useState} from "react";
import ListNoResult from "../dashboard/deadlines/ListNoResult";
import ActiveUsers from "./users/ActiveUsers";
import InactiveUsers from "./users/InactiveUsers";
import CreateUserModal from "./users/CreateUserModal";

const Administration = () => {
    // Tab
    const [activeTab, setActiveTab] = useState(0);
    const [visibleTab, setVisibleTab] = useState(activeTab);
    const handleTabClick = (index: number) => {
        setActiveTab(index);
        console.log(activeTab);
        console.log(visibleTab);
    };

    // Animate the content change
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleTab(activeTab);
        }, 350);

        return () => clearTimeout(timer); // cleanup function
    }, [activeTab]);


    // Create User Modal
    const [refreshUsersList, setRefreshUsersList] = useState( false);
    const [showCreateUser , setShowCreateUser] = useState(false);
    const handleShow = () => {
        setShowCreateUser(true);
    };

    return (
            <>
                <div className="administration__box">
                    <div className="button button-secondary button--grey button--big">
                        <span className="button__text">Filter öffnen</span>
                        <i className="button__icon icon-funnel-simple"></i>
                    </div>
                    <button onClick={handleShow} className="button button--green button--big">
                        <i className="button__icon icon-user-plus"></i>
                        <span className="button__text">Neuen Benutzer anlegen</span>
                    </button>
                    {showCreateUser && <CreateUserModal show={showCreateUser} setShow={setShowCreateUser} setRefreshUsersList={setRefreshUsersList} />}
                </div>

                <div className="tab administration__tab">
                    <div className="tab__header">
                        <div className="tab__buttons">
                            <button
                                    className={`tab__item subheading__regular ${activeTab === 0 ? "active" : ""}`}
                                    onClick={() => handleTabClick(0)}
                            >
                                <span className="button__text">Aktive Benutzer</span>
                            </button>
                            <button
                                    className={`tab__item subheading__regular ${activeTab === 1 ? "active" : ""}`}
                                    onClick={() => handleTabClick(1)}
                            >
                                <span className="button__text">Inaktive Benutzer</span>
                            </button>
                        </div>
                    </div>

                    <div className="tab__content">
                        {visibleTab === 0 ? (
                                <div
                                        id="active-users"
                                        className={`tab__content-item ${activeTab === 0 ? "active" : "close"}`}
                                >
                                    {ActiveUsers ? <ActiveUsers/> : <ListNoResult/>}
                                </div>
                        ) : (
                                <div
                                        id="inactive-users"
                                        className={`tab__content-item ${activeTab === 1 ? "active" : "close"}`}
                                >
                                    {InactiveUsers ? <InactiveUsers refreshUsersList={refreshUsersList} /> : <ListNoResult/>}
                                </div>
                        )}

                    </div>
                </div>
            </>
    )
};

export default Administration;