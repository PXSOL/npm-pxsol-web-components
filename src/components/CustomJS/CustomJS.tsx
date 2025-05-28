import React, { useEffect, useRef } from "react";
import styles from "./CustomJS.module.css";

interface CustomJSProps {
  [key: string]: any; // Allow any props structure
}

export const CustomJS: React.FC<CustomJSProps> = (props) => {
  // Extract content from the props structure that comes from the system
  // The props come with numeric indices like "0", "1", "2"
  const propsValues = Object.keys(props).map(key => props[key]);
  const jsProp = propsValues.find(
    (prop: any) => prop?.dataType === "javascript",
  );

  const jsContent = jsProp?.content?.jsContent || "// Add your JavaScript here";
  const indicatorColor =
    jsProp?.styleData?.indicatorColor?.styleContent || "#666";

  const containerRef = useRef<HTMLDivElement>(null);

  // Function to get the correct document (iframe or main)
  const getTargetDocument = (): Document => {
    // Check if we're inside an iframe
    if (window.parent !== window) {
      return window.document;
    }
    return document;
  };

  useEffect(() => {
    try {
      const targetDocument = getTargetDocument();

      if (jsContent.trim() && jsContent !== "// Add your JavaScript here") {
        try {
          // Create a safer execution context with access to the container and iframe document
          const safeEval = new Function(
            "container",
            "document",
            "window",
            `
                    try {
                        ${jsContent}
                    } catch (error) {
                        console.error("Custom JS Error:", error);
                        // Don't re-throw to prevent breaking the parent component
                    }
                `,
          );

          // Execute the JavaScript with the container element, iframe document, and iframe window
          safeEval(containerRef.current, targetDocument, window);
        } catch (error) {
          console.error("Error executing custom JavaScript:", error);
          // Don't re-throw to prevent breaking the parent component
        }
      }
    } catch (error) {
      console.error("Critical error in CustomJS component:", error);
      // Don't re-throw to prevent breaking the parent component
    }
  }, [jsContent]);

  return (
    <div ref={containerRef} className={styles.customJsContainer}>
      <div className={styles.jsIndicator} style={{ color: indicatorColor }}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <span>JavaScript Active</span>
        {jsContent.trim() && jsContent !== "// Add your JavaScript here" && (
          <span className={styles.activeIndicator}>●</span>
        )}
      </div>
    </div>
  );
};

export default CustomJS;
