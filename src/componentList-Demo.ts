import HeaderBeats3 from "./components/HeaderBeats3/HeaderBeats3";
import HeroBeats3 from "./components/HeroBeats3/HeroBeats3";
import BrandsBeats3 from "./components/BrandsBeats3/BrandsBeats3";
import SpecsBeats3 from "./components/SpecsBeats3/SpecsBeats3";
import CaseBeats3 from "./components/CaseBeats3/CaseBeats3";
import OfferBeats3 from "./components/OfferBeats3/OfferBeats3";
import ProductsBeats3 from "./components/ProductsBeats3/ProductsBeats3";
import FooterBeats3 from "./components/FooterBeats3/FooterBeats3";

export const componentsList = [
  // Beats 3 - coponents
  { 
    name: "Header - Beats 3", 
    component: HeaderBeats3,
    props:{
      logoHeader: {
        name: "Header Logo",
        type: "imageSrc",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Beats_Electronics_logo.svg/1200px-Beats_Electronics_logo.svg.png",
      },
      groupTextHero: {
        name: "Group text",
        type: "group",
        content: [
            {
              ctaButtonHero: {
                name: "Cta button",
                type: "ctaButton",
                content: {
                    textButton: "Home",
                    link: "#home"
                }
              },
            },
            {
              ctaButtonHero: {
                name: "Cta button",
                type: "ctaButton",
                content: {
                    textButton: "Specs",
                    link: "#specs"
                }
              },
            },
            {
              ctaButtonHero: {
                name: "Cta button",
                type: "ctaButton",
                content: {
                    textButton: "Case",
                    link: "#case"
                }
              },
            },
        ],
      },
    },
  },
  { 
    name: "Hero - Beats 3", 
    component: HeroBeats3,
    props: {
      backgroundHero: {
        name: "Background section",
        type: "section",
        dataType: "section",
        styleData: {
          backgroundColor: {
            name: "Background color",
            styleType: "color",
            color: "#000",
          },
        }
      },
      titleHero: {
          name: "Title",
          type: "title",
          dataType: "flatText",
          content: "Lorem",
          styleData: {
            titleColor: {
              name: "Title 1 color",
              styleType: "color",
              color: "#fff",
            },
            titleSize: {
              name: "Size title",
              styleType: "fontSize",
              size: "70px",
            }
          }
      },
      subtitleHero: {
          name: "Title 2",
          type: "title",
          dataType: "flatText",
          content: "Ipsum",
          styleData: {
            titleTwoColor: {
              name: "Title 2 color",
              styleType: "color",
              color: "#fff",
            },
            titleTwoSize: {
              name: "Size title",
              styleType: "fontSize",
              size: "50px",
            }
          }
      },
      subtitleTextHero: {
        name: "Subtitle",
        type: "title",
        dataType: "flatText",
        content: "Lorem ipsum",
        styleData: {
          subtitleColor:{
            name: "Subtitle color",
            styleType: "color",
            color: "#fff",
          },
          subtitleSize: {
            name: "Subtitle size",
            styleType: "fontSize",
            size: "25px",
          }
        }
      },
      TextHero: {
          name: "Section text",
          type: "textParagraph",
          dataType: "textParagraph",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempore nulla odio ipsa. Minus in consectetur harum esse deserunt iure maiores eligendi pariatur",
          styleData: {
            textColor:{
              name: "Section text color",
              styleType: "color",
              color: "#fff",
            },
            textSize: {
              name: "Section text size",
              styleType: "fontSize",
              size: "14px",
            }
          }
      },
      ctaButtonHero: {
          name: "Cta button",
          type: "ctaButton",
          content: {
              textButton: "Offer",
              link: "https://your/link/here",
          },
          styleData: {
            textColor:{
              name: "Cta color",
              styleType: "color",
              color: "#fff",
            },
            backgroundColor:{
              name: "Button background",
              styleType: "color",
              color: "#fff",
            },
            buttonTextSize: {
              name: "Button font size",
              styleType: "fontSize",
              size: "14px",
            }
          }
      },
      priceButton: {
        name: "Offer Price",
        type: "title",
        dataType: "flatText",
        content: "$99",
        styleData: {
          priceColor:{
            name: "Price color",
            styleType: "color",
            color: "#fff",
          },
          buttonTextSize: {
            name: "Price font size",
            styleType: "fontSize",
            size: "14px",
          }
        }
      },
      imageHero: {
        name: "Main image",
        type: "imageSrc",
        imageSrc: "https://headpones-lp.vercel.app/assets/img/home.png",
        styleData: {
          filterImage:{
            name: "Filter image",
            styleType: "filterImage",
            value: [
              {name: "brightness", value: "0.5"}, 
              {name: "contrast", value: "0.5"}
            ],
          }
        }
      },
    }
  },
  { 
    name: "Brands - Beats 3", 
    component: BrandsBeats3,
    props:{
      groupTextHero: {
        name: "Brands group",
        type: "group",
        content: [
            {
              brandName: {
                name: "Brand name",
                type: "title",
                dataType: "flatText",
                content: "Apple"
              },
              imgBrand: {
                name: "Brand logo",
                type: "imageSrc",
                imageSrc: "https://headpones-lp.vercel.app/assets/img/sponsor1.png",
              },
            },
            {
              brandName: {
                name: "Brand name",
                type: "title",
                dataType: "flatText",
                content: "Spotify"
              },
              imgBrand: {
                name: "Brand logo",
                type: "imageSrc",
                imageSrc: "https://headpones-lp.vercel.app/assets/img/sponsor2.png",
              },
            },
            {
              brandName: {
                name: "Brand name",
                type: "title",
                dataType: "flatText",
                content: "Amazon"
              },
              imgBrand: {
                name: "Brand logo",
                type: "imageSrc",
                imageSrc: "https://headpones-lp.vercel.app/assets/img/sponsor3.png",
              },
            },
            {
              brandName: {
                name: "Brand name",
                type: "title",
                dataType: "flatText",
                content: "YouTube"
              },
              imgBrand: {
                name: "Brand logo",
                type: "imageSrc",
                imageSrc: "https://headpones-lp.vercel.app/assets/img/sponsor4.png",
              },
            },
        ],
      },
    },
  },
  { 
    name: "Specs - Beats 3", 
    component: SpecsBeats3,
    props:{
      titleHero: {
        name: "Section title",
        type: "title",
        dataType: "flatText",
        content: "Specs"
      },
      imgSection: {
        name: "Main image",
        type: "imageSrc",
        imageSrc: "https://headpones-lp.vercel.app/assets/img/specs.png",
      },
      groupSpecs: {
        name: "Specs group",
        type: "group",
        content: [
          {
            iconNameClass: {
              name: "Icon class",
              type: "title",
              dataType: "flatText",
              content: "ri-bluetooth-line"
            },
            specTitle: {
              name: "Specs title",
              type: "title",
              dataType: "flatText",
              content: "Spec 1"
            },
            specDescription: {
              name: "Specs text",
              type: "subtitle",
              dataType: "flatText",
              content: "Lorem ipsum"
            },
          },
          {
            iconNameClass: {
              name: "Icon class",
              type: "title",
              dataType: "flatText",
              content: "ri-bluetooth-line"
            },
            specTitle: {
              name: "Specs title",
              type: "title",
              dataType: "flatText",
              content: "Spec 1"
            },
            specDescription: {
              name: "Specs text",
              type: "subtitle",
              dataType: "flatText",
              content: "Lorem ipsum"
            },
          },
          {
            iconNameClass: {
              name: "Icon class",
              type: "title",
              dataType: "flatText",
              content: "ri-bluetooth-line"
            },
            specTitle: {
              name: "Specs title",
              type: "title",
              dataType: "flatText",
              content: "Spec 1"
            },
            specDescription: {
              name: "Specs text",
              type: "subtitle",
              dataType: "flatText",
              content: "Lorem ipsum"
            },
          },
          {
            iconNameClass: {
              name: "Icon class",
              type: "title",
              dataType: "flatText",
              content: "ri-bluetooth-line"
            },
            specTitle: {
              name: "Specs title",
              type: "title",
              dataType: "flatText",
              content: "Spec 1"
            },
            specDescription: {
              name: "Specs text",
              type: "subtitle",
              dataType: "flatText",
              content: "Lorem ipsum"
            },
          },
        ],
      },
    },
  },
  { 
    name: "Case - Beats 3", 
    component: CaseBeats3,
    props:{
      titleHero: {
        name: "Section title",
        type: "title",
        dataType: "flatText",
        content: "Case"
      },
      imgSection: {
        name: "Main image",
        type: "imageSrc",
        imageSrc: "https://headpones-lp.vercel.app/assets/img/case.png",
      },
      TextSection: {
        name: "Text",
        type: "subtitle",
        dataType: "flatText",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempore nulla odio ipsa. Minus in consectetur harum esse deserunt iure maiores eligendi pariatur"
      },
      ctaButtonHero: {
        name: "Cta button",
        type: "ctaButton",
        content: {
            textButton: "View more",
            link: "https://your/link/here/"
        }
      },
    },
  },
  {
    name: "Offer - Beats 3", 
    component: OfferBeats3,
    props:{
      titleOffer: {
        name: "Card title",
        type: "title",
        dataType: "flatText",
        content: "Lorem ipsum dolor sit amet"
      },
      TextSection: {
        name: "Text",
        type: "subtitle",
        dataType: "flatText",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      imgSection: {
        name: "Card image",
        type: "imageSrc",
        imageSrc: "https://headpones-lp.vercel.app/assets/img/discount.png",
      },
      ctaButtonCard: {
        name: "Cta button",
        type: "ctaButton",
        content: {
            textButton: "Buy Now",
            link: "https://your/link/here/"
        }
      },
    },
  },
  { 
    name: "Products - Beats 3", 
    component: ProductsBeats3,
    props:{
      titleHero: {
        name: "Section Title",
        type: "title",
        dataType: "flatText",
        content: "Choose your style"
      },
      groupProductsSection: {
        name: "Products group",
        type: "group",
        content: [
          {
            ctaButtonHero: {
              name: "Name And Product Link",
              type: "ctaButton",
              content: {
                  textButton: "Offer",
                  link: "https://tu/enlace/aqui/"
              }
            },
            imgProduct: {
              name: "Product image",
              type: "imageSrc",
              imageSrc: "https://headpones-lp.vercel.app/assets/img/product1.png",
            },
            productPrice: {
              name: "Product Price",
              type: "title",
              dataType: "flatText",
              content: "$199"
            },
          },
          {
            ctaButtonHero: {
              name: "Name And Product Link",
              type: "ctaButton",
              content: {
                  textButton: "Offer",
                  link: "https://tu/enlace/aqui/"
              }
            },
            imgProduct: {
              name: "Product image",
              type: "imageSrc",
              imageSrc: "https://headpones-lp.vercel.app/assets/img/product1.png",
            },
            productPrice: {
              name: "Product Price",
              type: "title",
              dataType: "flatText",
              content: "$199"
            },
          },
          {
            ctaButtonHero: {
              name: "Name And Product Link",
              type: "ctaButton",
              content: {
                  textButton: "Offer",
                  link: "https://tu/enlace/aqui/"
              }
            },
            imgProduct: {
              name: "Product image",
              type: "imageSrc",
              imageSrc: "https://headpones-lp.vercel.app/assets/img/product1.png",
            },
            productPrice: {
              name: "Product Price",
              type: "title",
              dataType: "flatText",
              content: "$199"
            },
          },
        ],
      },
    },
  },
  { 
    name: "Footer - Beats 3", 
    component: FooterBeats3,
    props:{
      imgLogoFooter: {
        name: "Footer Logo",
        type: "imageSrc",
        imageSrc: "https://headpones-lp.vercel.app/assets/img/logo.png",
      },
      titleColumn1: {
        name: "Column name 1",
        type: "title",
        dataType: "flatText",
        content: "Products"
      },
      groupColumn1: {
        name: "Products group",
        type: "group",
        content: [
          {
            ctaButtonHero: {
              name: "Product",
              type: "ctaButton",
              content: {
                  textButton: "Headphones",
                  link: "https://your/link/here"
              }
            },
          },
          {
            ctaButtonHero: {
              name: "Product",
              type: "ctaButton",
              content: {
                  textButton: "Headphones",
                  link: "https://your/link/here"
              }
            },
          },
          {
            ctaButtonHero: {
              name: "Product",
              type: "ctaButton",
              content: {
                  textButton: "Headphones",
                  link: "https://your/link/here"
              }
            },
          },
        ],
      },
      titleColumn2: {
        name: "Column name 2",
        type: "title",
        dataType: "flatText",
        content: "About Us"
      },
      groupColumn2: {
        name: "About items group",
        type: "group",
        content: [
          {
            ctaButtonHero: {
              name: "Item column 2",
              type: "ctaButton",
              content: {
                  textButton: "Name item",
                  link: "https://your/link/here/"
              }
            },
          },
          {
            ctaButtonHero: {
              name: "Item column 2",
              type: "ctaButton",
              content: {
                  textButton: "Name item",
                  link: "https://your/link/here/"
              }
            },
          },
          {
            ctaButtonHero: {
              name: "Item column 2",
              type: "ctaButton",
              content: {
                  textButton: "Name item",
                  link: "https://your/link/here/"
              }
            },
          },
        ],
      },
      groupSocialIcons: {
        name: "Social Media group",
        type: "group",
        content: [
          {
            ctaButtonHero: {
              name: "IconSocial network icon And Link",
              type: "ctaButton",
              content: {
                  textButton: "ri-facebook-fill",
                  link: "https://facebook.com"
              }
            },
          },
          {
            ctaButtonHero: {
              name: "IconSocial network icon And Link",
              type: "ctaButton",
              content: {
                  textButton: "ri-facebook-fill",
                  link: "https://facebook.com"
              }
            },
          },
          {
            ctaButtonHero: {
              name: "IconSocial network icon And Link",
              type: "ctaButton",
              content: {
                  textButton: "ri-facebook-fill",
                  link: "https://facebook.com"
              }
            },
          },
        ],
      },
      copyright: {
        name: "Copyright text",
        type: "title",
        dataType: "flatText",
        content: "© My Company. All right reserved"
      },
    }
  },
];