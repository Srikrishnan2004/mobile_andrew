import { useEffect, useRef, useState } from "react";
import { driver, Driver } from "driver.js";
import "driver.js/dist/driver.css";
import styles from "@/UI/UI.module.scss";
import ChatbotModal from "./Components/Chatbot";
import { useComponentStore, useDriverStore, useSearchStore, useTourStore } from "../stores/ZustandStores";
import { ShopifyProvider, CartProvider } from "@shopify/hydrogen-react";
import Modal from "@/UI/Modals/NewModal";
import Cart from "@/UI/Components/Cart";
import Wishlist from "@/UI/Components/Wishlist";
import InfoModal from "@/UI/Modals/InfoModal";
import DiscountModal from "@/UI/Modals/DiscountModal";
import SettingsModal from "@/UI/Modals/SettingsModal";
import TermsConditionsModal from "@/UI/Modals/TermsModal";
import ContactUsModal from "@/UI/Modals/ContactUsModal";
import ReactAudioPlayer from "react-audio-player";
import ModalWrapper from "@/UI/Components/ModalWrapper";
import ProductSearcher from "@/UI/Components/ProductSearcher";


const customDriverStyles = `
  .driver-popover {
    font-family: 'Poppins', sans-serif !important;
  }
  
  .driver-popover * {
    font-family: 'Poppins', sans-serif !important;
  }
  
  .driver-popover-title {
    font-family: 'Poppins', sans-serif !important;
    font-weight: 600 !important;
    font-size: 18px !important;
  }
  
  .driver-popover-description {
    font-family: 'Poppins', sans-serif !important;
    font-weight: 400 !important;
    font-size: 14px !important;
  }
  
  .driver-popover-progress-text {
    font-family: 'Poppins', sans-serif !important;
    font-weight: 400 !important;
  }
  
  .driver-popover-footer button {
    font-family: 'Poppins', sans-serif !important;
    font-weight: 500 !important;
  }
`;

const shopifyConfig = {
  storeDomain: "htphzk-um.myshopify.com",
  storefrontToken: "446cb8f8327b9074dcc7c158332ca146",
  storefrontApiVersion: "2024-10",
};

const UI = () => {
  const {
    crosshairVisible, hideCrosshair,
    isModalOpen, closeModal,
    isCartOpen, openCart, closeCart,
    isWishlistOpen, openWishlist, closeWishlist,
    isInfoModalOpen, openInfoModal, closeInfoModal,
    discountCode, isDiscountModalOpen, closeDiscountModal,
    isSettingsModalOpen , openSettingsModal, closeSettingsModal,
    isAudioPlaying,
    isTermsModalOpen,isContactModalOpen,
    isProductSearcherOpen,openProductSearcher,closeProductSearcher
  } = useComponentStore();
  const {setSearchResult, startSearchGSAP} = useSearchStore();
  const { activateDriver, deactivateDriver} = useDriverStore();
  const { setTourComplete } = useTourStore();

  const driverRef = useRef<Driver>(undefined);
  const audioPlayerRef = useRef<any>(null);
  const shouldMoveCamera = useRef(false);

  
  const [ChatbotOpen, setChatbotOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|Opera Mini|Kindle|Silk|Mobile|Tablet|Touch/i.test(
      navigator.userAgent
    )
  );

  const openChatbotModal = () => {
    setChatbotOpen(true);
  };

  const closeChatbotModal = () => {
    setChatbotOpen(false);
  };


  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = customDriverStyles;
    document.head.appendChild(styleSheet);

    driverRef.current = driver({
      showProgress: true,
      steps: [
        {
          element: ".iconsContainer",
          popover: {
            title: "Navigation & Controls",
            description: isMobile
              ? "Use the virtual joystick to move around and interact with products"
              : "Use WASD keys to navigate: W (up), A (left), S (down), D (right)",
            side: "left",
            align: "start",
          },
        },
        {
          element: '[alt="Search"]',
          popover: {
            title: "Search Bar",
            description: "Simply search the products within the experience and we'll take you there!",
            side: "bottom",
          },
        },
        {
          popover: {
            title: "Find products across the experience",
            description: "Walk to these products to essentially buy or add them to cart, I'll drop you off for now!",
          },
          onHighlightStarted: () => {
            shouldMoveCamera.current = true; 
            setTourComplete(true);
          },
        },
        {
          element: '[alt="Cart"]',
          popover: {
            title: "Shopping Cart",
            description: "View and manage items in your shopping cart",
            side: "bottom",
          },
        },
        {
          element: '[alt="Wishlist"]',
          popover: {
            title: "Wishlist",
            description: "Save items for later in your wishlist",
            side: "bottom",
          },
        },
        {
          element: '[alt="Settings"]',
          popover: {
            title: "Settings",
            description: "Manage your preferences, explore app features, and customize your experience.",
            side: "bottom",
          },
        },
        {
          element: '[alt="Chatbot"]',
          popover: {
            title: "Chat Assistant",
            description: "Need help? Chat with our virtual assistant",
            side: "left",
          },
        },
      ],
    });

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [isMobile]);

  useEffect(() => {
    if(isAudioPlaying)
    {
      audioPlayerRef.current.audioEl.current.play();
    }
    else {
      audioPlayerRef.current.audioEl.current.pause();
    }
  },[isAudioPlaying])


  const startTour = () => {

    if (isModalOpen) closeModal();
    if (isCartOpen) closeCart();
    if (isWishlistOpen) closeWishlist();
    if (isInfoModalOpen) closeInfoModal();
    if (ChatbotOpen) closeChatbotModal();
    if (isDiscountModalOpen) closeDiscountModal();
    if (isSettingsModalOpen) closeSettingsModal();
    if (isProductSearcherOpen) closeProductSearcher();

 
    if (driverRef.current) {
      driverRef.current.drive();
      activateDriver(); 
    }
  };

  useEffect(() => {

    let lastState = driverRef.current?.isActive();
    const checkDriverState = () => {
      const currentState = driverRef.current?.isActive();
      if(currentState !== lastState){
        lastState = currentState;
        if (currentState) {
          activateDriver();
        } else {
          deactivateDriver();
        }
      }
    };

    const interval = setInterval(checkDriverState, 100);

    return () => clearInterval(interval);
  }, [activateDriver, deactivateDriver]);

  return (
    <div className="ui-root">
      {crosshairVisible && !isMobile && <div className={styles.aim} />}

      <div className={styles.iconsContainer}>
        <img src="/icons/Search.svg" alt="Search" className={styles.icon} onClick={openProductSearcher} />
        <img src="/icons/Cart.svg" alt="Cart" className={styles.icon} onClick={openCart} />
        <img src="/icons/Wishlist.svg" alt="Wishlist" className={styles.icon} onClick={openWishlist} />
        <img src="/icons/Settings.svg"  alt="Settings" className={styles.icon} onClick={openSettingsModal} />
        <img src="/icons/Help.svg" alt="Help" className={styles.icon} onClick={startTour}/>
      </div>

  
      <div className={styles.brandLogoContainer}>
        <img
          src="/logo.avif"
          alt="Brand Logo"
          className={styles.brandLogo}
        />
      </div>

    
      {/* <div className={styles.clientContainer}>
        <img
          src="/deyga.avif"
          alt="Client"
          className={styles.clientLogo}
        />
      </div> */}

      <div className={styles.chatLogoContainer}>
        <img
          src="/icons/Chatbot.svg"
          alt="Chatbot"
          className={styles.chatLogo}
          onPointerDown={(e) => {
            openChatbotModal();
            hideCrosshair();
          }}
        />
      </div>

      <ShopifyProvider
        countryIsoCode="ID"
        languageIsoCode="ID"
        {...shopifyConfig}
      >
        <CartProvider>
          {isModalOpen && (
            <Modal />
          )}
          {isCartOpen && (
            <Cart></Cart>
          )}
        </CartProvider>
      </ShopifyProvider>
      {isWishlistOpen && (
        <Wishlist></Wishlist>
      )}
      {isInfoModalOpen && (
        <InfoModal></InfoModal>
      )}
      {isTermsModalOpen && (
        <TermsConditionsModal />
      )}
      {isContactModalOpen && (
        <ContactUsModal />
      )}
      <DiscountModal
        isOpen={isDiscountModalOpen}
        onClose={closeDiscountModal}
        discountCode={discountCode}
      />
      {isSettingsModalOpen && <ModalWrapper><SettingsModal /></ModalWrapper>}
      {isProductSearcherOpen && <ProductSearcher></ProductSearcher>}
      <div>
        <ChatbotModal
          isChatbotModalOpen={ChatbotOpen}
          onChatbotModalClose={() => {
            closeChatbotModal();
          }}
        />
      </div>
      <ReactAudioPlayer
          ref={audioPlayerRef}
          src="/media/Soundtrack.mp3" 
          autoPlay={false}
          loop
      />
    </div>
  );
};

export default UI;
