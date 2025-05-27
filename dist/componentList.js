import HeroTravel1 from "./components/HeroTravel1/HeroTravel1";
import CtaTravel1 from "./components/CtaTravel1/CtaTravel1";
import EngineFormTravel1 from "./components/EngineFormTravel1/EngineFormTravel1";
import FooterTravel1 from "./components/FooterTravel1/FooterTravel1";
import GalleryTravel1 from "./components/GalleryTravel1/GalleryTravel1";
import HeaderTravel1 from "./components/HeaderTravel1/HeaderTravel1";
import PromosTravel1 from "./components/PromosTravel1/PromosTravel1";
import RoomsTravel1 from "./components/RoomsTravel1/RoomsTravel1";
import CustomCodeEditor from "./components/CustomCodeEditor/CustomCodeEditor";
import CustomHTML from "./components/CustomHTML/CustomHTML";
import CustomCSS from "./components/CustomCSS/CustomCSS";
import CustomJS from "./components/CustomJS/CustomJS";
export const componentsList = [
    // Super Custom Component (HTML + CSS + JS)
    {
        name: "Custom Module",
        component: CustomCodeEditor,
        type: "customModule",
        props: {
            htmlContent: {
                name: "HTML Content",
                type: "code",
                dataType: "html",
                content: {
                    htmlContent: `<div class="demo-container">
  <h2>Hello World!</h2>
  <p>This is a live preview. Edit the HTML, CSS, and JavaScript to see changes in real-time.</p>
  <button onclick="showMessage()">Click me!</button>
</div>`,
                },
            },
            cssContent: {
                name: "CSS Content",
                type: "code",
                dataType: "css",
                content: {
                    cssContent: `.demo-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  color: white;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  margin: 20px 0;
}

.demo-container h2 {
  font-size: 28px;
  margin: 0 0 15px 0;
  font-weight: 600;
}

.demo-container p {
  font-size: 16px;
  margin: 0 0 20px 0;
  opacity: 0.9;
  line-height: 1.5;
}

.demo-container button {
  background: rgba(255,255,255,0.2);
  border: 2px solid rgba(255,255,255,0.3);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.demo-container button:hover {
  background: rgba(255,255,255,0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}`,
                },
            },
            jsContent: {
                name: "JavaScript Content",
                type: "code",
                dataType: "javascript",
                content: {
                    jsContent: `// Interactive JavaScript for the demo
function showMessage() {
  alert('Hello from the Custom Code Editor! 🚀\\n\\nThis demonstrates real-time HTML, CSS, and JavaScript editing.');
}

// Add some interactive features when the page loads
document.addEventListener('DOMContentLoaded', () => {
  console.log('Custom Code Editor loaded successfully!');
  
  // Add hover effects to buttons
  const buttons = document.querySelectorAll('.demo-container button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0) scale(1)';
    });
  });
});`,
                },
            },
        },
    },
    // Custom Components
    {
        name: "Custom HTML",
        component: CustomHTML,
        type: "customCode",
        props: {
            htmlContent: {
                name: "HTML Content",
                type: "code",
                dataType: "html",
                content: {
                    htmlContent: "<div style='padding: 30px; background: linear-gradient(135deg, #ff6b6b, #4ecdc4); border-radius: 12px; text-align: center; color: white; box-shadow: 0 4px 12px rgba(0,0,0,0.1);'><h2 style='margin: 0 0 15px 0; font-size: 24px;'>Custom HTML Component</h2><p style='margin: 0; font-size: 16px; opacity: 0.9;'>Edit this component to add your custom HTML code. Changes appear in real-time!</p></div>",
                },
            },
        },
    },
    {
        name: "Custom CSS",
        component: CustomCSS,
        type: "customCode",
        props: {
            cssContent: {
                name: "CSS Content",
                type: "code",
                dataType: "css",
                content: {
                    cssContent: `/* Example CSS */
.custom-style {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  padding: 20px;
  border-radius: 8px;
  color: white;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}`,
                },
            },
        },
    },
    {
        name: "Custom JavaScript",
        component: CustomJS,
        type: "logic",
        props: {
            jsContent: {
                name: "JavaScript Content",
                type: "code",
                dataType: "javascript",
                content: {
                    jsContent: `// Example JavaScript
console.log('Custom JS Component Loaded');
// Add your interactive features here
document.addEventListener('DOMContentLoaded', () => {
  // Your code here
});`,
                },
            },
        },
    },
    // Beats 3 - coponents
    {
        name: "Hero - travel 1",
        type: "module",
        component: HeroTravel1,
        props: {
            titleHero: {
                name: "Title",
                type: "title",
                dataType: "flatText",
                content: "Hospedate en Hotel Demaz",
                styleData: {
                    titleColor: {
                        name: "Title 1 color",
                        styleType: "color",
                        styleContent: "#fff",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "70px",
                    },
                },
            },
            textHero: {
                name: "Text",
                type: "textParagraph",
                dataType: "textParagraph",
                content: "En Hotel Demo, combinamos confort, estilo y atención personalizada para que vivas una estadía inolvidable. Disfrutá de nuestras habitaciones, desayuno casero y una ubicación privilegiada. Bienvenido al descanso que merecés",
                styleData: {
                    titleColor: {
                        name: "Text color",
                        styleType: "color",
                        styleContent: "#fff",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "12px",
                    },
                },
            },
            ctaButtonHero: {
                name: "Cta button",
                type: "ctaButton",
                dataType: "ctaButton",
                content: {
                    textButton: "Offer",
                    link: "https://your/link/here",
                },
                styleData: {
                    textColor: {
                        name: "Cta color",
                        styleType: "color",
                        styleContent: "#fff",
                    },
                    backgroundColor: {
                        name: "Button background",
                        styleType: "color",
                        styleContent: "#fff",
                    },
                    buttonTextSize: {
                        name: "Button font size",
                        styleType: "fontSize",
                        styleContent: "14px",
                    },
                },
            },
            buttonGroup: {
                name: "Button group",
                type: "group",
                dataType: "group",
                content: [
                    {
                        name: "Cta button",
                        type: "ctaButton",
                        dataType: "ctaButton",
                        content: {
                            textButton: "Offer",
                            link: "https://your/link/here",
                        },
                        styleData: {
                            textColor: {
                                name: "Cta color",
                                styleType: "color",
                                styleContent: "#fff",
                            },
                            backgroundColor: {
                                name: "Button background",
                                styleType: "color",
                                styleContent: "#fff",
                            },
                            buttonTextSize: {
                                name: "Button font size",
                                styleType: "fontSize",
                                styleContent: "14px",
                            },
                        },
                    },
                    {
                        name: "Cta button",
                        type: "ctaButton",
                        dataType: "ctaButton",
                        content: {
                            textButton: "Offer",
                            link: "https://your/link/here",
                        },
                        styleData: {
                            textColor: {
                                name: "Cta color",
                                styleType: "color",
                                styleContent: "#fff",
                            },
                            backgroundColor: {
                                name: "Button background",
                                styleType: "color",
                                styleContent: "#fff",
                            },
                            buttonTextSize: {
                                name: "Button font size",
                                styleType: "fontSize",
                                styleContent: "14px",
                            },
                        },
                    },
                ],
            },
        },
    },
    {
        name: "Cta - travel 1",
        component: CtaTravel1,
        type: "module",
        props: {},
    },
    {
        name: "Engine Form - travel 1",
        component: EngineFormTravel1,
        type: "module",
        props: {},
    },
    {
        name: "Footer - travel 1",
        component: FooterTravel1,
        type: "module",
        props: {},
    },
    {
        name: "Gallery - travel 1",
        component: GalleryTravel1,
        type: "module",
        props: {},
    },
    {
        name: "Promos - travel 1",
        component: PromosTravel1,
        type: "module",
        props: {},
    },
    {
        name: "Header - travel 1",
        component: HeaderTravel1,
        type: "module",
        props: {
            buttonGroup: {
                name: "buttonGroup",
                type: "group",
                dataType: "group",
                content: [
                    {
                        name: "Cta button",
                        type: "ctaButton",
                        dataType: "ctaButton",
                        content: {
                            textButton: "Offer",
                            link: "https://your/link/here",
                        },
                        styleData: {
                            textColor: {
                                name: "Cta color",
                                styleType: "color",
                                styleContent: "#fff",
                            },
                            backgroundColor: {
                                name: "Button background",
                                styleType: "color",
                                styleContent: "#fff",
                            },
                            buttonTextSize: {
                                name: "Button font size",
                                styleType: "fontSize",
                                styleContent: "14px",
                            },
                        },
                    },
                    {
                        name: "Cta button",
                        type: "ctaButton",
                        dataType: "ctaButton",
                        content: {
                            textButton: "Offer",
                            link: "https://your/link/here",
                        },
                        styleData: {
                            textColor: {
                                name: "Cta color",
                                styleType: "color",
                                styleContent: "#fff",
                            },
                            backgroundColor: {
                                name: "Button background",
                                styleType: "color",
                                styleContent: "#fff",
                            },
                            buttonTextSize: {
                                name: "Button font size",
                                styleType: "fontSize",
                                styleContent: "14px",
                            },
                        },
                    },
                ],
            },
        },
    },
    {
        name: "Rooms - travel 1",
        component: RoomsTravel1,
        type: "module",
        props: {},
    },
];
