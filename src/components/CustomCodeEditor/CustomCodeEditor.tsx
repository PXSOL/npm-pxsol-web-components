import React, { useEffect, useRef, useState } from "react";
import styles from "./CustomCodeEditor.module.css";

interface CustomCodeEditorProps {
  [key: string]: any; // Allow any props structure
}

export const CustomCodeEditor: React.FC<CustomCodeEditorProps> = (props) => {
  const propsValues = Object.values(props);

  const htmlProp = propsValues.find((prop: any) => prop?.dataType === "html");
  const cssProp = propsValues.find((prop: any) => prop?.dataType === "css");
  const jsProp = propsValues.find(
    (prop: any) => prop?.dataType === "javascript",
  );

  const htmlContent = htmlProp?.content?.htmlContent || "";
  const cssContent = cssProp?.content?.cssContent || "";
  const jsContent = jsProp?.content?.jsContent || "";

  const containerWidth =
    htmlProp?.styleData?.containerWidth?.styleContent || "100%";

  const containerRef = useRef<HTMLDivElement>(null);
  const styleElementRef = useRef<HTMLStyleElement | null>(null);
  const [forceUpdate, setForceUpdate] = useState(0);
  const lastCssContentRef = useRef<string>("");
  const uniqueId = useRef(
    `custom-code-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
  );

  // Function to get the correct document (iframe document)
  const getTargetDocument = (): Document => {
    // Since this component is rendered inside an iframe via react-frame-component,
    // we need to find which iframe contains our component
    const iframes = document.querySelectorAll("iframe");

    for (const iframe of Array.from(iframes)) {
      try {
        if (iframe.contentDocument && iframe.contentWindow) {
          // Check if this iframe contains our component
          const componentInIframe = iframe.contentDocument.querySelector(
            `[data-custom-code-id="${uniqueId.current}"]`,
          );
          if (componentInIframe) {
            console.log("Found component in iframe, using iframe document");
            return iframe.contentDocument;
          }
        }
      } catch (e) {
        // Cross-origin or access issues, skip this iframe
        continue;
      }
    }

    console.log("Component not found in any iframe, using main document");
    return document;
  };

  // Function to scope CSS to this specific component instance
  const scopeCSS = (css: string): string => {
    if (!css.trim()) return "";

    const scopeSelector = `[data-custom-code-id="${uniqueId.current}"]`;

    // Simple and direct scoping - just prepend the component selector
    return css
      .split("}")
      .map((rule) => {
        const trimmedRule = rule.trim();
        if (!trimmedRule) return "";

        // Skip @rules (media queries, keyframes, etc.)
        if (trimmedRule.startsWith("@")) {
          return trimmedRule + "}";
        }

        // Split selector and declarations
        const parts = trimmedRule.split("{");
        if (parts.length !== 2) return trimmedRule + "}";

        const selector = parts[0].trim();
        const declarations = parts[1].trim();

        // Simple scoping: just add the component selector before each selector
        if (selector.includes(",")) {
          // Handle multiple selectors
          const scopedSelectors = selector
            .split(",")
            .map((s) => `${scopeSelector} ${s.trim()}`)
            .join(", ");
          return `${scopedSelectors} { ${declarations} }`;
        } else {
          // Single selector
          return `${scopeSelector} ${selector} { ${declarations} }`;
        }
      })
      .join("\n");
  };

  // Force CSS re-injection when content changes
  useEffect(() => {
    if (cssContent !== lastCssContentRef.current) {
      lastCssContentRef.current = cssContent;
      setForceUpdate((prev) => prev + 1);
      console.log(
        `CSS content changed for component ${uniqueId.current}:`,
        cssContent,
      );
    }
  }, [cssContent]);

  useEffect(() => {
    // Use setTimeout to allow the component to render in the iframe first
    const timeoutId = setTimeout(() => {
      const targetDocument = getTargetDocument();

      console.log(`=== CSS INJECTION DEBUG for ${uniqueId.current} ===`);
      console.log("Target document:", targetDocument);
      console.log("CSS content:", cssContent);
      console.log("HTML content:", htmlContent);
      console.log("Container ref:", containerRef.current);

      // Handle CSS injection with scoping
      const styleId = `custom-code-editor-styles-${uniqueId.current}`;

      // Remove existing style element for this component
      if (styleElementRef.current) {
        try {
          styleElementRef.current.remove();
          console.log(
            `Removed existing style element for component ${uniqueId.current}`,
          );
        } catch (e) {
          console.log("Error removing existing style:", e);
        }
        styleElementRef.current = null;
      }

      // Remove any existing style elements with the same ID
      const existingStyle = targetDocument.querySelector(`#${styleId}`);
      if (existingStyle) {
        existingStyle.remove();
        console.log(`Removed existing style element with ID ${styleId}`);
      }

      if (cssContent.trim()) {
        // Create scoped CSS
        const scopedCSS = scopeCSS(cssContent);

        // Create new style element in the iframe document
        const styleElement = targetDocument.createElement("style");
        styleElement.id = styleId;
        styleElement.textContent = scopedCSS;

        // Inject into iframe's head
        targetDocument.head.appendChild(styleElement);
        styleElementRef.current = styleElement;

        console.log(`CSS injected for component ${uniqueId.current}:`);
        console.log("Original CSS:", cssContent);
        console.log("Scoped CSS:", scopedCSS);
        console.log("Style element:", styleElement);
        console.log(
          "Style element in DOM:",
          targetDocument.querySelector(`#${styleId}`),
        );
        console.log(
          "All style elements in head:",
          targetDocument.head.querySelectorAll("style"),
        );
        console.log(
          "Component element in DOM:",
          targetDocument.querySelector(
            `[data-custom-code-id="${uniqueId.current}"]`,
          ),
        );
      } else {
        console.log(
          `No CSS content to inject for component ${uniqueId.current}`,
        );
      }

      // Handle JavaScript execution with scoped context
      if (jsContent.trim()) {
        try {
          // Find the component in the target document
          const componentElement = targetDocument.querySelector(
            `[data-custom-code-id="${uniqueId.current}"]`,
          );

          if (componentElement) {
            // Create a scoped execution context
            const executeJS = new Function(
              "container",
              "document",
              "window",
              "componentId",
              `
              try {
                // Provide a scoped querySelector that only works within this component
                const $ = (selector) => container.querySelector(selector);
                const $$ = (selector) => container.querySelectorAll(selector);
                
                // Execute the user's JavaScript with scoped context
                ${jsContent}
              } catch (error) {
                console.error("Custom JS Error in component ${uniqueId.current}:", error);
              }
            `,
            );

            // Execute with the scoped container
            executeJS(
              componentElement,
              targetDocument,
              targetDocument.defaultView || window,
              uniqueId.current,
            );
            console.log(
              `JavaScript executed for component ${uniqueId.current}`,
            );
          } else {
            console.log(
              `Component element not found for JavaScript execution: ${uniqueId.current}`,
            );
          }
        } catch (error) {
          console.error(
            `Error executing custom JavaScript in component ${uniqueId.current}:`,
            error,
          );
        }
      }
    }, 100); // 100ms delay to allow iframe rendering

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      if (styleElementRef.current) {
        try {
          styleElementRef.current.remove();
        } catch (e) {
          // Element might already be removed
        }
        styleElementRef.current = null;
      }
    };
  }, [cssContent, jsContent, htmlContent, forceUpdate]);

  return (
    <div
      ref={containerRef}
      className={styles.customCodeEditorContainer}
      data-custom-code-id={uniqueId.current}
      style={{
        width: containerWidth,
        minHeight: htmlContent.trim() ? "auto" : "100px",
        border: !htmlContent.trim() ? "2px dashed #ddd" : "none",
        borderRadius: "8px",
        position: "relative",
        isolation: "isolate", // Create a new stacking context
      }}
    >
      {/* Always render HTML content area */}
      <div
        className={styles.htmlContent}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
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
            <h3>Custom Code Editor</h3>
            <p>
              Start typing HTML to see your content here.
              <br />
              CSS and JavaScript will be applied automatically.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomCodeEditor;
