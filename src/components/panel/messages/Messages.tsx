import React, {useState, useEffect, useRef} from "react";
import ListNoResult from "../dashboard/deadlines/ListNoResult";
import MessagesTable from "./MessagesTable";

const Messages = () => {
    // Tab
    const [activeTab, setActiveTab] = useState(0);
    const [visibleTab, setVisibleTab] = useState(activeTab);
    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    // Update visibleTab when activeTab changes
    useEffect(() => {
        setVisibleTab(activeTab);
    }, [activeTab]);

    return (
            <>
                <div className="tab tab__messages">
                    <div className="tab__header">
                        <div className="tab__buttons">
                            <button
                                    className={`tab__item subheading__regular ${activeTab === 0 ? "active" : ""}`}
                                    onClick={() => handleTabClick(0)}
                            >
                                <span className="button__text">Alle</span>
                            </button>
                            <button
                                    className={`tab__item subheading__regular ${activeTab === 1 ? "active" : ""}`}
                                    onClick={() => handleTabClick(1)}
                            >
                                <span className="button__text">Ungelesen</span>
                            </button>

                            <button
                                    className={`tab__item subheading__regular ${activeTab === 2 ? "active" : ""}`}
                                    onClick={() => handleTabClick(2)}
                            >
                                <span className="button__text">Gelesen</span>
                            </button>
                        </div>
                    </div>
                    <div className="tab__content">
                        {visibleTab === 0 && (
                                <div
                                        id="all-messages"
                                        className={`tab__content-item ${activeTab === 0 ? "active" : "close"}`}
                                >
                                    {MessagesTable ? <MessagesTable/> : <ListNoResult/>}
                                </div>
                        )}
                        {visibleTab === 1 && (
                                <div
                                        id="unread-messages"
                                        className={`tab__content-item ${activeTab === 1 ? "active" : "close"}`}
                                >
                                    {MessagesTable ? <MessagesTable/> : <ListNoResult/>}
                                </div>
                        )}
                        {visibleTab === 2 && (
                                <div
                                        id="read-messages"
                                        className={`tab__content-item ${activeTab === 2 ? "active" : "close"}`}
                                >
                                    {MessagesTable ? <MessagesTable/> : <ListNoResult/>}
                                </div>
                        )}
                    </div>
                </div>
            </>
    );
};

export default Messages;
