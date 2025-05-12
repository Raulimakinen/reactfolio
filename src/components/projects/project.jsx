import React, { useState, useRef, useEffect } from "react";
import "./styles/project.css";

const Project = ({ logo, title, description, linkText, link }) => {
    const [expanded, setExpanded] = useState(false);
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("100px");

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(expanded ? `${contentRef.current.scrollHeight}px` : "100px");
        }
    }, [expanded]);

    const toggleExpanded = () => setExpanded(!expanded);

    // Truncate description if it's too long
    const shouldTruncate = description.length > 200;
    const truncatedDescription = shouldTruncate && !expanded 
        ? description.slice(0, 200) + "..." 
        : description;

    return (
        <div className="project">
            <div className="project-container">
                {logo && (
                    <div className="project-logo">
                        <img src={logo} alt={`${title} logo`} />
                    </div>
                )}
                <div className="project-title">{title}</div>

                <div 
                    className="project-description-wrapper"
                    style={{
                        maxHeight: expanded ? `${maxHeight}` : "100px",
                        overflow: "hidden",
                        transition: "max-height 0.3s ease-in-out"
                    }}
                >
                    <div 
                        ref={contentRef} 
                        className="project-description" 
                        dangerouslySetInnerHTML={{ __html: truncatedDescription }} 
                    />
                </div>

                {shouldTruncate && (
                    <button className="read-more-button" onClick={toggleExpanded}>
                        {expanded ? "Näytä vähemmän" : "Lue lisää"}
                    </button>
                )}

                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        <div className="project-link-text">{linkText || "Katso lisää"}</div>
                    </a>
                )}
            </div>
        </div>
    );
};

export default Project;