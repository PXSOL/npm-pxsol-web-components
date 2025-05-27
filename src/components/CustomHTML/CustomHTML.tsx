import React from "react";
import styles from "./CustomHTML.module.css";

interface CustomHTMLProps {
  [key: string]: any; // Allow any props structure
}

export const CustomHTML: React.FC<CustomHTMLProps> = (props) => {
  // Extract content from the props structure that comes from the system
  // The props come with numeric indices like "0", "1", "2"
  const propsValues = Object.keys(props).map(key => props[key]);
  const htmlProp = propsValues.find((prop: any) => prop?.dataType === "html");

  const htmlContent = htmlProp?.content?.htmlContent || "";
  const containerWidth =
    htmlProp?.styleData?.containerWidth?.styleContent || "100%";

  const createMarkup = () => {
    return { __html: htmlContent };
  };

  const containerStyle = {
    width: containerWidth,
    minHeight: htmlContent.trim() ? "auto" : "100px",
    border: !htmlContent.trim() ? "2px dashed #ddd" : "none",
    borderRadius: "8px",
    position: "relative" as const,
  };

  return (
    <div
      className={styles.customHtmlContainer}
      style={containerStyle}
      data-custom-html="true"
    >
      {/* Always render HTML content area */}
      <div
        dangerouslySetInnerHTML={createMarkup()}
        style={{
          minHeight: !htmlContent.trim() ? "60px" : "auto",
          width: "100%",
        }}
      />

      {/* Show placeholder only when there's no HTML content */}
      {!htmlContent.trim() && (
        <div className={styles.placeholderOverlay}>
          <div className={styles.placeholderContent}>
            <div className={styles.placeholderIcon}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V9H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 13H15M9 17H12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3>Custom HTML</h3>
            <p>Start typing HTML to see your content here.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomHTML;
