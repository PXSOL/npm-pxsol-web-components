import HeroTravel1 from "./components/HeroTravel1/HeroTravel1";
import HeroSlider1 from "./components/HeroSlider1/HeroSlider1";
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
import RoomsPxsol1 from "./components/RoomsPxsol/RoomsPxsol1";
import MapPxsol1 from "./components/MapPxsol/MapPxsol1";
import ServicesPxsol1 from "./components/ServicesPxsol/ServicesPxsol1";
import PugsPxsol1 from "./components/PugsPxsol/PugsPxsol1";
import ReviewsPxsol1 from "./components/ReviewsPxsol/ReviewsPxsol1";
import BookingPxsol1 from "./components/BookingPxsol/BookingPxsol1";
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
// Add your interactive features here
document.addEventListener('DOMContentLoaded', () => {
  // Your code here
});`,
                },
            },
        },
    },
    // Pxsol 3 - coponents
    {
        name: "Hero - travel 1 (Primary)",
        type: "module",
        component: HeroTravel1,
        props: {
            Section: {
                name: "Section",
                type: "section",
                dataType: "section",
                content: "",
                styleData: {
                    backgroundColor: {
                        name: "Background color",
                        styleType: "backgroundColor",
                        styleContent: "#fff",
                        backgroundType: "solid",
                        gradientDirection: "45",
                        gradientShape: "circle",
                        gradientColors: [
                            { color: "#ffffff", position: "0" },
                            { color: "#000000", position: "100" },
                        ],
                    },
                    margin: {
                        name: "Margin",
                        styleType: "margin",
                        styleContent: "0px 0px 0px 0px",
                    },
                    padding: {
                        name: "Padding",
                        styleType: "padding",
                        styleContent: "0px 0px 0px 0px",
                    },
                    borderRadius: {
                        name: "Border radius",
                        styleType: "borderRadius",
                        styleContent: "0px 0px 0px 0px",
                    },
                },
            },
            Title: {
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
            Text: {
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
            CtaButton: {
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
                        styleContent: "#5692f1",
                    },
                    buttonTextSize: {
                        name: "Button font size",
                        styleType: "fontSize",
                        styleContent: "14px",
                    },
                },
            },
            MainImage: {
                name: "Main image",
                type: "imageSrc",
                dataType: "imageSrc",
                content: "",
                imageSrc: "https://i.postimg.cc/D0c2FLPM/hero-banner.jpg",
                styleData: {
                    filterImage: {
                        name: "Filter image",
                        styleType: "filterImage",
                        styleContent: "",
                    },
                    imageWidth: {
                        name: "Image Width",
                        styleType: "number",
                        styleContent: "1920",
                    },
                    imageHeight: {
                        name: "Image Height",
                        styleType: "number",
                        styleContent: "1080",
                    },
                },
            },
        },
    },
    {
        name: "Hero Slider - Pxsol 1",
        type: "module",
        component: HeroSlider1,
        props: {
            Section: {
                name: "Section",
                type: "section",
                dataType: "section",
                content: "",
                styleData: {
                    backgroundColor: {
                        name: "Background color",
                        styleType: "backgroundColor",
                        styleContent: "#000",
                        backgroundType: "solid",
                        gradientDirection: "45",
                        gradientShape: "circle",
                        gradientColors: [
                            { color: "#000000", position: "0" },
                            { color: "#ffffff", position: "100" },
                        ],
                    },
                    margin: {
                        name: "Margin",
                        styleType: "margin",
                        styleContent: "0px 0px 0px 0px",
                    },
                    padding: {
                        name: "Padding",
                        styleType: "padding",
                        styleContent: "0px 0px 0px 0px",
                    },
                    borderRadius: {
                        name: "Border radius",
                        styleType: "borderRadius",
                        styleContent: "0px 0px 0px 0px",
                    },
                },
            },
            // 4 Imágenes individuales
            Image1: {
                name: "Image 1",
                type: "imageSrc",
                dataType: "imageSrc",
                imageSrc: "https://i.postimg.cc/D0c2FLPM/hero-banner.jpg",
                styleData: {
                    filterImage: {
                        styleContent: "",
                    },
                },
            },
            Image2: {
                name: "Image 2",
                type: "imageSrc",
                dataType: "imageSrc",
                imageSrc: "https://i.postimg.cc/7YQK2Jvf/hero-banner-2.jpg",
                styleData: {
                    filterImage: {
                        styleContent: "",
                    },
                },
            },
            Image3: {
                name: "Image 3",
                type: "imageSrc",
                dataType: "imageSrc",
                imageSrc: "https://i.postimg.cc/9FKZnHPT/hero-banner-3.jpg",
                styleData: {
                    filterImage: {
                        styleContent: "",
                    },
                },
            },
            Image4: {
                name: "Image 4",
                type: "imageSrc",
                dataType: "imageSrc",
                imageSrc: "https://i.postimg.cc/D0c2FLPM/hero-banner.jpg",
                styleData: {
                    filterImage: {
                        styleContent: "",
                    },
                },
            },
            // 4 Títulos individuales
            Title1: {
                name: "Title 1",
                type: "title",
                dataType: "flatText",
                content: "Hospedate en Hotel Demaz",
                styleData: {
                    titleColor: {
                        styleContent: "#fff",
                    },
                    titleSize: {
                        styleContent: "3.5rem",
                    },
                },
            },
            Title2: {
                name: "Title 2",
                type: "title",
                dataType: "flatText",
                content: "Ocean Views",
                styleData: {
                    titleColor: {
                        styleContent: "#fff",
                    },
                    titleSize: {
                        styleContent: "3.5rem",
                    },
                },
            },
            Title3: {
                name: "Title 3",
                type: "title",
                dataType: "flatText",
                content: "Urban Life",
                styleData: {
                    titleColor: {
                        styleContent: "#fff",
                    },
                    titleSize: {
                        styleContent: "3.5rem",
                    },
                },
            },
            Title4: {
                name: "Title 4",
                type: "title",
                dataType: "flatText",
                content: "Forest Trails",
                styleData: {
                    titleColor: {
                        styleContent: "#fff",
                    },
                    titleSize: {
                        styleContent: "3.5rem",
                    },
                },
            },
            // 4 Descripciones individuales
            Description1: {
                name: "Description 1",
                type: "textParagraph",
                dataType: "textParagraph",
                content: "Discover breathtaking mountain landscapes and pristine hiking trails.",
                styleData: {
                    titleColor: {
                        styleContent: "#fff",
                    },
                    titleSize: {
                        styleContent: "1.2rem",
                    },
                },
            },
            Description2: {
                name: "Description 2",
                type: "textParagraph",
                dataType: "textParagraph",
                content: "Experience crystal clear waters and stunning coastal adventures.",
                styleData: {
                    titleColor: {
                        styleContent: "#fff",
                    },
                    titleSize: {
                        styleContent: "1.2rem",
                    },
                },
            },
            Description3: {
                name: "Description 3",
                type: "textParagraph",
                dataType: "textParagraph",
                content: "Explore vibrant cities with rich culture and modern attractions.",
                styleData: {
                    titleColor: {
                        styleContent: "#fff",
                    },
                    titleSize: {
                        styleContent: "1.2rem",
                    },
                },
            },
            Description4: {
                name: "Description 4",
                type: "textParagraph",
                dataType: "textParagraph",
                content: "Immerse yourself in lush forests and peaceful nature walks.",
                styleData: {
                    titleColor: {
                        styleContent: "#fff",
                    },
                    titleSize: {
                        styleContent: "1.2rem",
                    },
                },
            },
        },
    },
    {
        name: "Rooms - Pxsol 1",
        type: "module",
        component: RoomsPxsol1,
        props: {
            Section: {
                name: "Section",
                type: "section",
                dataType: "section",
                content: "",
                styleData: {
                    backgroundColor: {
                        name: "Background color",
                        styleType: "backgroundColor",
                        styleContent: "#fff",
                        backgroundType: "solid",
                        gradientDirection: "45",
                        gradientShape: "circle",
                        gradientColors: [
                            { color: "#ffffff", position: "0" },
                            { color: "#000000", position: "100" },
                        ],
                    },
                    margin: {
                        name: "Margin",
                        styleType: "margin",
                        styleContent: "0px 0px 0px 0px",
                    },
                    padding: {
                        name: "Padding",
                        styleType: "padding",
                        styleContent: "0px 0px 0px 0px",
                    },
                    borderRadius: {
                        name: "Border radius",
                        styleType: "borderRadius",
                        styleContent: "0px 0px 0px 0px",
                    },
                },
            },
            Title: {
                name: "Title",
                type: "title",
                dataType: "flatText",
                content: "Nuestras Habitaciones",
                styleData: {
                    titleColor: {
                        name: "Title 1 color",
                        styleType: "color",
                        styleContent: "#2d3748",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "2rem",
                    },
                },
            },
            Text: {
                name: "Text",
                type: "textParagraph",
                dataType: "textParagraph",
                content: "Descubre el confort y la elegancia en cada una de nuestras habitaciones",
                styleData: {
                    titleColor: {
                        name: "Text color",
                        styleType: "color",
                        styleContent: "#718096",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "1rem",
                    },
                },
            },
            idPos: {
                name: "idPos",
                type: "idCharacter",
                dataType: "flatText",
                content: "undefined",
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
            SliderMode: {
                name: "Slider Mode",
                type: "boolean",
                dataType: "boolean",
                content: "true",
                styleData: {},
            },
        },
    },
    {
        name: "Cta - travel 1",
        component: CtaTravel1,
        type: "module",
        props: {
            Section: {
                name: "Section",
                type: "section",
                dataType: "section",
                content: "",
                styleData: {
                    backgroundColor: {
                        name: "Background color",
                        styleType: "backgroundColor",
                        styleContent: "#c00001",
                        backgroundType: "solid",
                        gradientDirection: "45",
                        gradientShape: "circle",
                        gradientColors: [
                            { color: "#ffffff", position: "0" },
                            { color: "#000000", position: "100" },
                        ],
                    },
                    margin: {
                        name: "Margin",
                        styleType: "margin",
                        styleContent: "0px 0px 0px 0px",
                    },
                    padding: {
                        name: "Padding",
                        styleType: "padding",
                        styleContent: "0px 0px 0px 0px",
                    },
                    borderRadius: {
                        name: "Border radius",
                        styleType: "borderRadius",
                        styleContent: "0px 0px 0px 0px",
                    },
                },
            },
        },
    },
    {
        name: "Engine Form - travel 1",
        component: EngineFormTravel1,
        type: "module",
        props: {
            Section: {
                name: "Section",
                type: "section",
                dataType: "section",
                content: "",
                styleData: {
                    backgroundColor: {
                        name: "Background color",
                        styleType: "backgroundColor",
                        styleContent: "#fff",
                        backgroundType: "solid",
                        gradientDirection: "45",
                        gradientShape: "circle",
                        gradientColors: [
                            { color: "#ffffff", position: "0" },
                            { color: "#000000", position: "100" },
                        ],
                    },
                    margin: {
                        name: "Margin",
                        styleType: "margin",
                        styleContent: "0px 0px 0px 0px",
                    },
                    padding: {
                        name: "Padding",
                        styleType: "padding",
                        styleContent: "0px 0px 0px 0px",
                    },
                    borderRadius: {
                        name: "Border radius",
                        styleType: "borderRadius",
                        styleContent: "0px 0px 0px 0px",
                    },
                },
            },
        },
    },
    {
        name: "Footer - travel 1",
        component: FooterTravel1,
        type: "module",
        props: {
            Section: {
                name: "Section",
                type: "section",
                dataType: "section",
                content: "",
                styleData: {
                    backgroundColor: {
                        name: "Background color",
                        styleType: "backgroundColor",
                        styleContent: "#fff",
                        backgroundType: "solid",
                        gradientDirection: "45",
                        gradientShape: "circle",
                        gradientColors: [
                            { color: "#ffffff", position: "0" },
                            { color: "#000000", position: "100" },
                        ],
                    },
                    margin: {
                        name: "Margin",
                        styleType: "margin",
                        styleContent: "0px 0px 0px 0px",
                    },
                    padding: {
                        name: "Padding",
                        styleType: "padding",
                        styleContent: "0px 0px 0px 0px",
                    },
                    borderRadius: {
                        name: "Border radius",
                        styleType: "borderRadius",
                        styleContent: "0px 0px 0px 0px",
                    },
                },
            },
        },
    },
    {
        name: "Gallery - travel 1",
        component: GalleryTravel1,
        type: "module",
        props: {
            Section: {
                name: "Section",
                type: "section",
                dataType: "section",
                content: "",
                styleData: {
                    backgroundColor: {
                        name: "Background color",
                        styleType: "backgroundColor",
                        styleContent: "#fff",
                        backgroundType: "solid",
                        gradientDirection: "45",
                        gradientShape: "circle",
                        gradientColors: [
                            { color: "#ffffff", position: "0" },
                            { color: "#000000", position: "100" },
                        ],
                    },
                    margin: {
                        name: "Margin",
                        styleType: "margin",
                        styleContent: "0px 0px 0px 0px",
                    },
                    padding: {
                        name: "Padding",
                        styleType: "padding",
                        styleContent: "0px 0px 0px 0px",
                    },
                    borderRadius: {
                        name: "Border radius",
                        styleType: "borderRadius",
                        styleContent: "0px 0px 0px 0px",
                    },
                },
            },
        },
    },
    {
        name: "Promos - travel 1",
        component: PromosTravel1,
        type: "module",
        props: {
            Section: {
                name: "Section",
                type: "section",
                dataType: "section",
                content: "",
                styleData: {
                    backgroundColor: {
                        name: "Background color",
                        styleType: "backgroundColor",
                        styleContent: "#fff",
                        backgroundType: "solid",
                        gradientDirection: "45",
                        gradientShape: "circle",
                        gradientColors: [
                            { color: "#ffffff", position: "0" },
                            { color: "#000000", position: "100" },
                        ],
                    },
                    margin: {
                        name: "Margin",
                        styleType: "margin",
                        styleContent: "0px 0px 0px 0px",
                    },
                    padding: {
                        name: "Padding",
                        styleType: "padding",
                        styleContent: "0px 0px 0px 0px",
                    },
                    borderRadius: {
                        name: "Border radius",
                        styleType: "borderRadius",
                        styleContent: "0px 0px 0px 0px",
                    },
                },
            },
        },
    },
    {
        name: "Header - travel 1",
        component: HeaderTravel1,
        type: "module",
        props: {
            Section: {
                name: "Section",
                type: "section",
                dataType: "section",
                content: "",
                styleData: {
                    backgroundColor: {
                        name: "Background color",
                        styleType: "backgroundColor",
                        styleContent: "#fff",
                        backgroundType: "solid",
                        gradientDirection: "45",
                        gradientShape: "circle",
                        gradientColors: [
                            { color: "#ffffff", position: "0" },
                            { color: "#000000", position: "100" },
                        ],
                    },
                    margin: {
                        name: "Margin",
                        styleType: "margin",
                        styleContent: "0px 0px 0px 0px",
                    },
                    padding: {
                        name: "Padding",
                        styleType: "padding",
                        styleContent: "0px 0px 0px 0px",
                    },
                    borderRadius: {
                        name: "Border radius",
                        styleType: "borderRadius",
                        styleContent: "0px 0px 0px 0px",
                    },
                },
            },
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
        props: {
            Section: {
                name: "Section",
                type: "section",
                dataType: "section",
                content: "",
                styleData: {
                    backgroundColor: {
                        name: "Background color",
                        styleType: "backgroundColor",
                        styleContent: "#fff",
                        backgroundType: "solid",
                        gradientDirection: "45",
                        gradientShape: "circle",
                        gradientColors: [
                            { color: "#ffffff", position: "0" },
                            { color: "#000000", position: "100" },
                        ],
                    },
                    margin: {
                        name: "Margin",
                        styleType: "margin",
                        styleContent: "0px 0px 0px 0px",
                    },
                    padding: {
                        name: "Padding",
                        styleType: "padding",
                        styleContent: "0px 0px 0px 0px",
                    },
                    borderRadius: {
                        name: "Border radius",
                        styleType: "borderRadius",
                        styleContent: "0px 0px 0px 0px",
                    },
                },
            },
            Title: {
                name: "Title",
                type: "title",
                dataType: "flatText",
                content: "Habitaciones Disponibles",
                styleData: {
                    titleColor: {
                        name: "Title 1 color",
                        styleType: "color",
                        styleContent: "#35374B",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "2.5rem",
                    },
                },
            },
            Text: {
                name: "Text",
                type: "textParagraph",
                dataType: "textParagraph",
                content: "Descubre nuestras habitaciones",
                styleData: {
                    titleColor: {
                        name: "Text color",
                        styleType: "color",
                        styleContent: "#0077b6",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "1.2rem",
                    },
                },
            },
            idPos: {
                name: "idPos",
                type: "idCharacter",
                dataType: "flatText",
                content: "undefined",
                styleData: {
                    titleColor: {
                        name: "Title 1 color",
                        styleType: "color",
                        styleContent: "#35374B",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "2.5rem",
                    },
                },
            },
        },
    },
    {
        name: "Map - Pxsol 1",
        type: "module",
        component: MapPxsol1,
        props: {
            Section: {
                name: "Section",
                type: "section",
                dataType: "section",
                content: "",
                styleData: {
                    backgroundColor: {
                        name: "Background color",
                        styleType: "backgroundColor",
                        styleContent: "#fff",
                        backgroundType: "solid",
                        gradientDirection: "45",
                        gradientShape: "circle",
                        gradientColors: [
                            { color: "#ffffff", position: "0" },
                            { color: "#000000", position: "100" },
                        ],
                    },
                    margin: {
                        name: "Margin",
                        styleType: "margin",
                        styleContent: "0px 0px 0px 0px",
                    },
                    padding: {
                        name: "Padding",
                        styleType: "padding",
                        styleContent: "0px 0px 0px 0px",
                    },
                    borderRadius: {
                        name: "Border radius",
                        styleType: "borderRadius",
                        styleContent: "0px 0px 0px 0px",
                    },
                },
            },
            Title: {
                name: "Title",
                type: "title",
                dataType: "flatText",
                content: "Nuestra Ubicación",
                styleData: {
                    titleColor: {
                        name: "Title 1 color",
                        styleType: "color",
                        styleContent: "#2d3748",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "2rem",
                    },
                },
            },
            Text: {
                name: "Text",
                type: "textParagraph",
                dataType: "textParagraph",
                content: "Encuentra la mejor ruta para llegar a nuestras instalaciones",
                styleData: {
                    titleColor: {
                        name: "Text color",
                        styleType: "color",
                        styleContent: "#718096",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "1rem",
                    },
                },
            },
            mapIframe: {
                name: "Map Iframe",
                type: "idCharacter",
                dataType: "flatText",
                content: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.3354966283405!2d-68.85213078849135!3d-32.88929686888474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090489def92b%3A0x89f0a84aa8829689!2sDiplomatic%20Hotel!5e0!3m2!1ses!2sar!4v1749000907898!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
                styleData: {
                    titleColor: {
                        name: "Title 1 color",
                        styleType: "color",
                        styleContent: "#2d3748",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "2rem",
                    },
                },
            },
        },
    },
    {
        name: "Services - Pxsol 1",
        type: "module",
        component: ServicesPxsol1,
        props: {
            Section: {
                name: "Section",
                type: "section",
                dataType: "section",
                content: "",
                styleData: {
                    backgroundColor: {
                        name: "Background color",
                        styleType: "backgroundColor",
                        styleContent: "#fff",
                        backgroundType: "solid",
                        gradientDirection: "45",
                        gradientShape: "circle",
                        gradientColors: [
                            { color: "#ffffff", position: "0" },
                            { color: "#000000", position: "100" },
                        ],
                    },
                    margin: {
                        name: "Margin",
                        styleType: "margin",
                        styleContent: "0px 0px 0px 0px",
                    },
                    padding: {
                        name: "Padding",
                        styleType: "padding",
                        styleContent: "0px 0px 0px 0px",
                    },
                    borderRadius: {
                        name: "Border radius",
                        styleType: "borderRadius",
                        styleContent: "0px 0px 0px 0px",
                    },
                },
            },
            Title: {
                name: "Title",
                type: "title",
                dataType: "flatText",
                content: "Nuestros Servicios",
                styleData: {
                    titleColor: {
                        name: "Title 1 color",
                        styleType: "color",
                        styleContent: "#2d3748",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "2rem",
                    },
                },
            },
            Text: {
                name: "Text",
                type: "textParagraph",
                dataType: "textParagraph",
                content: "Descubre todos los servicios que tenemos para ofrecerte",
                styleData: {
                    titleColor: {
                        name: "Text color",
                        styleType: "color",
                        styleContent: "#718096",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "1rem",
                    },
                },
            },
            idPos: {
                name: "idPos",
                type: "idCharacter",
                dataType: "flatText",
                content: "21966",
                styleData: {
                    titleColor: {
                        name: "Title 1 color",
                        styleType: "color",
                        styleContent: "#2d3748",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "2rem",
                    },
                },
            },
        },
    },
    {
        name: "Pugs - Pxsol 1",
        type: "module",
        component: PugsPxsol1,
        props: {
            Section: {
                name: "Section",
                type: "section",
                dataType: "section",
                content: "",
                styleData: {
                    backgroundColor: {
                        name: "Background color",
                        styleType: "backgroundColor",
                        styleContent: "#fff",
                        backgroundType: "solid",
                        gradientDirection: "45",
                        gradientShape: "circle",
                        gradientColors: [
                            { color: "#ffffff", position: "0" },
                            { color: "#000000", position: "100" },
                        ],
                    },
                    margin: {
                        name: "Margin",
                        styleType: "margin",
                        styleContent: "0px 0px 0px 0px",
                    },
                    padding: {
                        name: "Padding",
                        styleType: "padding",
                        styleContent: "0px 0px 0px 0px",
                    },
                    borderRadius: {
                        name: "Border radius",
                        styleType: "borderRadius",
                        styleContent: "0px 0px 0px 0px",
                    },
                },
            },
            Title: {
                name: "Title",
                type: "title",
                dataType: "flatText",
                content: "Nuestras Promociones",
                styleData: {
                    titleColor: {
                        name: "Title 1 color",
                        styleType: "color",
                        styleContent: "#2d3748",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "2rem",
                    },
                },
            },
            Text: {
                name: "Text",
                type: "textParagraph",
                dataType: "textParagraph",
                content: "Descubre todas las promociones disponibles",
                styleData: {
                    titleColor: {
                        name: "Text color",
                        styleType: "color",
                        styleContent: "#718096",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "1rem",
                    },
                },
            },
            idPos: {
                name: "idPos",
                type: "idCharacter",
                dataType: "flatText",
                content: "21966",
                styleData: {
                    titleColor: {
                        name: "Title 1 color",
                        styleType: "color",
                        styleContent: "#2d3748",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "2rem",
                    },
                },
            },
        },
    },
    {
        name: "Reviews - Pxsol 1",
        type: "module",
        component: ReviewsPxsol1,
        props: {
            Section: {
                name: "Section",
                type: "section",
                dataType: "section",
                content: "",
                styleData: {
                    backgroundColor: {
                        name: "Background color",
                        styleType: "backgroundColor",
                        styleContent: "#fff",
                        backgroundType: "solid",
                        gradientDirection: "45",
                        gradientShape: "circle",
                        gradientColors: [
                            { color: "#ffffff", position: "0" },
                            { color: "#000000", position: "100" },
                        ],
                    },
                    margin: {
                        name: "Margin",
                        styleType: "margin",
                        styleContent: "0px 0px 0px 0px",
                    },
                    padding: {
                        name: "Padding",
                        styleType: "padding",
                        styleContent: "0px 0px 0px 0px",
                    },
                    borderRadius: {
                        name: "Border radius",
                        styleType: "borderRadius",
                        styleContent: "0px 0px 0px 0px",
                    },
                },
            },
            Title: {
                name: "Title",
                type: "title",
                dataType: "flatText",
                content: "Opiniones de nuestros huéspedes",
                styleData: {
                    titleColor: {
                        name: "Title 1 color",
                        styleType: "color",
                        styleContent: "#2d3748",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "2rem",
                    },
                },
            },
            Text: {
                name: "Text",
                type: "textParagraph",
                dataType: "textParagraph",
                content: "Descubre lo que opinan nuestros huéspedes sobre su experiencia",
                styleData: {
                    titleColor: {
                        name: "Text color",
                        styleType: "color",
                        styleContent: "#718096",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "1rem",
                    },
                },
            },
            idPos: {
                name: "idPos",
                type: "idCharacter",
                dataType: "flatText",
                content: "21966",
                styleData: {
                    titleColor: {
                        name: "Title 1 color",
                        styleType: "color",
                        styleContent: "#2d3748",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "2rem",
                    },
                },
            },
            "Review Settings": {
                name: "Review Settings",
                type: "reviewSettings",
                dataType: "object",
                content: {
                    showAverage: true,
                    showDate: true,
                    showUserName: true,
                    showScores: {
                        service: true,
                        building: true,
                        staff: true,
                        cleanliness: true,
                        comfort: true,
                        location: true,
                        facilities: true,
                        value: true,
                    },
                    maxReviews: 5,
                    minScore: 80,
                },
                styleData: {},
            },
        },
    },
    {
        name: "Booking - Pxsol 1",
        type: "module",
        component: BookingPxsol1,
        props: {
            Section: {
                name: "Section",
                type: "section",
                dataType: "section",
                content: "",
                styleData: {
                    backgroundColor: {
                        name: "Background color",
                        styleType: "backgroundColor",
                        styleContent: "#fff",
                        backgroundType: "solid",
                        gradientDirection: "45",
                        gradientShape: "circle",
                        gradientColors: [
                            { color: "#ffffff", position: "0" },
                            { color: "#000000", position: "100" },
                        ],
                    },
                    margin: {
                        name: "Margin",
                        styleType: "margin",
                        styleContent: "0px 0px 0px 0px",
                    },
                    padding: {
                        name: "Padding",
                        styleType: "padding",
                        styleContent: "0px 0px 0px 0px",
                    },
                    borderRadius: {
                        name: "Border radius",
                        styleType: "borderRadius",
                        styleContent: "0px 0px 0px 0px",
                    },
                },
            },
            Title: {
                name: "Title",
                type: "title",
                dataType: "flatText",
                content: "Reserva tu estadía",
                styleData: {
                    titleColor: {
                        name: "Title 1 color",
                        styleType: "color",
                        styleContent: "#2d3748",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "2rem",
                    },
                },
            },
            Text: {
                name: "Text",
                type: "textParagraph",
                dataType: "textParagraph",
                content: "Asegura tu lugar y disfruta de una experiencia inolvidable. Reserva ahora y obtén las mejores tarifas disponibles.",
                styleData: {
                    titleColor: {
                        name: "Text color",
                        styleType: "color",
                        styleContent: "#718096",
                    },
                    titleSize: {
                        name: "Size title",
                        styleType: "fontSize",
                        styleContent: "1rem",
                    },
                },
            },
            "Cta button": {
                name: "Cta button",
                type: "ctaButton",
                dataType: "ctaButton",
                content: {
                    textButton: "Reservar Ahora",
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
                        styleContent: "#3b82f6",
                    },
                    buttonTextSize: {
                        name: "Button font size",
                        styleType: "fontSize",
                        styleContent: "16px",
                    },
                },
            },
        },
    },
];
