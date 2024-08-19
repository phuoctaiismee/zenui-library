import React, {useState} from "react";

// react router dom
import { Route, Routes } from "react-router-dom";

// home page
import HomePage from "./Pages/HomePage";

// components page
import ComponentsPage from "./Pages/ComponentsPage";

// documentation page
import OverviewPage from "./Pages/OverviewPage";
import FaqPage from "./Pages/FaqPage";
import TempletePage from "./Pages/TempletePage";

// inputs
import InputTextPage from "./Pages/Components/Inputs/InputTextPage";
import InputTextareaPage from "./Pages/Components/Inputs/InputTextareaPage";
import InputRadioPage from "./Pages/Components/Inputs/InputRadioPage";
import InputSwitchPage from "./Pages/Components/Inputs/InputSwitchPage";
import InputSelectPage from "./Pages/Components/Inputs/InputSelectPage";
import InputFilePage from "./Pages/Components/Inputs/InputFilePage";

// buttons pages
import NormalPage from "./Pages/Components/Buttons/NormalPage";
import AnimatedButtonPage from "./Pages/Components/Buttons/AnimatedButtonPage";

// all components
import AllComponentsPage from "./Pages/Components/AllComponentsPage";

// navigation pages
import PaginationPage from "./Pages/Components/Navigation/PaginationPage";
import TabsPage from "./Pages/Components/Navigation/TabsPage";
import ModalPage from "./Pages/Components/Navigation/ModalPage";
import ChipPage from "./Pages/Components/Navigation/ChipPage";

// feedback pages
import SkeletonPage from "./Pages/Components/Feedback/SkeletonPage";
import AlertMessagePage from "./Pages/Components/Feedback/AlertMessagePage";
import DialogPage from "./Pages/Components/Feedback/DialogPage";
import TestimonialPage from "./Pages/Components/Feedback/TestimonialPage";
import NotificationPage from "./Pages/Components/Feedback/NotificationPage";
import LoaderPage from "./Pages/Components/Feedback/LoaderPage";

// data display
import BadgePage from "./Pages/Components/Data Display/BadgePage";
import TooltipPage from "./Pages/Components/Data Display/TooltipPage";

// surface pages
import CardPage from "./Pages/Components/Surfaces/CardPage";
import ImageGalleryPage from "./Pages/Components/Surfaces/ImageGalleryPage";
import AccordingPage from "./Pages/Components/Surfaces/AccordingPage";
import AppbarPage from "./Pages/Components/Surfaces/AppbarPage";

// randoms
import CodeSnippetPage from "./Pages/Components/Randoms/CodeSnippetPage";
import SnippetPage from "./Pages/Components/Randoms/SnippetPage";
import AboutUsPage from "./Pages/AboutUsPage.jsx";
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage.jsx";
import CookieModal from "./Shared/CookieModal.jsx";
import DropdownButtonPage from "./Pages/Components/Buttons/DropdownButtonPage.jsx";
import ResizableDivPage from "./Pages/Components/Surfaces/ResizableDivPage.jsx";
import OtpInputPage from "./Pages/Components/Inputs/OtpInputPage.jsx";

// blocks
import ResponsiveNavbarPage from "./Pages/Blocks/Sections/ResponsiveNavbarPage.jsx";
import EmptyMessagePage from "./Pages/Blocks/EmptyPages/EmptyPage.jsx"
import AllBlocksPage from "./Pages/Blocks/AllBlocksPage.jsx";
import HeroSectionPage from "./Pages/Blocks/Sections/HeroSectionPage.jsx";
import ProgressBarPage from "./Pages/Components/Navigation/ProgressBarPage.jsx";
import ContactFormPage from "./Pages/Blocks/Forms/ContactFormPage.jsx";
import ResponsiveSearchbarPage from "./Pages/Blocks/Randoms/ResponsiveSearchbarPage.jsx";
import BreadcrumbPage from "./Pages/Components/Navigation/BreadcrumbPage.jsx";
import RatingPage from "./Pages/Components/Navigation/RatingPage.jsx";
import TimelinePage from "./Pages/Components/Data Display/TimelinePage.jsx";
import NumberInputPage from "./Pages/Components/Inputs/NumberInputPage.jsx";
import StrongPasswordPage from "./Pages/Components/Inputs/StrongPasswordPage.jsx";
import CheckboxInputPage from "./Pages/Components/Inputs/CheckboxInputPage.jsx";
import EmptyPage from "./Pages/EmptyPage.jsx"
import StepsPage from "./Pages/Components/Navigation/StepsPage.jsx";

// icons page
import IconsPage from './Pages/IconsPages/IconsPage.jsx'
import ResponsiveFooterPage from "./Pages/Blocks/Randoms/ResponsiveFooterPage.jsx";
import AuthButtonPage from "./Pages/Components/Buttons/AuthButtonPage.jsx";

import OpacityPalettePage from "./Pages/OpacityPalettePage.jsx"
import WrongUrlErrorPage from "./Pages/Blocks/EmptyPages/WrongRoutePage.jsx";
import WrongRoutePage from "./Pages/Blocks/EmptyPages/WrongRoutePage.jsx";
import PricingSectionPage from "./Pages/Blocks/Sections/PricingSectionPage.jsx";
import TestimonialFeedbackPage from "./Pages/Blocks/Sections/TestimonialFeedbackPage.jsx";
import NewsletterSectionPage from "./Pages/Blocks/Forms/NewsletterSectionPage.jsx";

const App = () => {
  const [isCookie, setIsCookie] = useState(false)

  let Title = document.title;
  window.addEventListener('blur', ()=> {
    document.title = 'Get your components 😍';
  })

  window.addEventListener('focus', () => {
    document.title = Title;
  })

  return (
    <>
      {/* all routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        {/* documentation */}
        <Route path="/getting-started" element={<ComponentsPage />} />
        <Route path="/getting-started/overview" element={<OverviewPage />} />
        <Route path="/getting-started/faq" element={<FaqPage />} />
        <Route path="/getting-started/templates" element={<TempletePage />} />

        {/* components */}

        <Route
          path="/components/all-components"
          element={<AllComponentsPage />}
        />

        {/* inputs */}
        <Route path="/components/input-text" element={<InputTextPage />} />
        <Route
          path="/components/input-textarea"
          element={<InputTextareaPage />}
        />
        <Route path="/components/input-switch" element={<InputSwitchPage />} />
        <Route path="/components/otp-input" element={<OtpInputPage />} />
        <Route path="/components/input-select" element={<InputSelectPage />} />
        <Route path="/components/input-radio" element={<InputRadioPage />} />
        <Route path="/components/input-file" element={<InputFilePage />} />
        <Route path="/components/input-number" element={<NumberInputPage />} />
        <Route path="/components/strong-password" element={<StrongPasswordPage />} />
        <Route path="/components/input-checkbox" element={<CheckboxInputPage />} />

        {/* buttons */}
        <Route path="/components/normal-button" element={<NormalPage />} />
        <Route path="/components/auth-buttons" element={<AuthButtonPage />} />
        <Route path="/components/dropdown-button" element={<DropdownButtonPage />} />
        <Route
          path="/components/animated-button"
          element={<AnimatedButtonPage />}
        />

        {/* navigation */}
        <Route path="/components/pagination" element={<PaginationPage />} />
        <Route path="/components/tabs" element={<TabsPage />} />
        <Route path="/components/modal" element={<ModalPage />} />
        <Route path="/components/progress-bar" element={<ProgressBarPage />} />
        <Route path="/components/chip" element={<ChipPage />} />
        <Route path="/components/breadcrumb" element={<BreadcrumbPage />} />
        <Route path="/components/rating" element={<RatingPage />} />
        <Route path="/components/steps" element={<StepsPage />} />

        {/* feedback */}
        <Route path="/components/skeleton" element={<SkeletonPage />} />
        <Route
          path="/components/alert-message"
          element={<AlertMessagePage />}
        />
        <Route path="/components/dialog-message" element={<DialogPage />} />
        <Route path="/components/loader" element={<LoaderPage />} />
        <Route path="/components/testimonials" element={<TestimonialFeedbackPage />} />
        <Route path="/components/notification" element={<NotificationPage />} />

        {/* surface */}
        <Route path="/components/cards" element={<CardPage />} />
        <Route
          path="/components/image-gallery"
          element={<ImageGalleryPage />}
        />
        <Route path="/components/according" element={<AccordingPage />} />
        <Route path="/components/appbar" element={<AppbarPage />} />
        <Route path="/components/resizable-card" element={<ResizableDivPage />} />

        {/* data display */}
        <Route path="/components/badge" element={<BadgePage />} />
        <Route path="/components/tooltip" element={<TooltipPage />} />
        <Route path="/components/timeline" element={<TimelinePage />} />

        {/* randoms */}
        <Route path="/components/code" element={<CodeSnippetPage />} />
        <Route path="/components/snippet" element={<SnippetPage />} />


      {/*  all blocks route  */}
        <Route path="/blocks/all-blocks" element={<AllBlocksPage />} />
        <Route path="/blocks/responsive-navbar" element={<ResponsiveNavbarPage />} />
        <Route path="/blocks/hero-section" element={<HeroSectionPage />} />
        <Route path="/blocks/contact-form" element={<ContactFormPage />} />
        <Route path="/blocks/responsive-search-bar" element={<ResponsiveSearchbarPage />} />
        <Route path="/blocks/responsive-footer" element={<ResponsiveFooterPage />} />
        <Route path="/blocks/404-page" element={<WrongRoutePage />} />
        <Route path="/blocks/pricing-section" element={<PricingSectionPage />} />
        <Route path="/blocks/newsletter-form" element={<NewsletterSectionPage />} />
        <Route path="/blocks/empty-page" element={<WrongUrlErrorPage />} />


        {/*  icon route  */}
        <Route path="/icons" element={<IconsPage />} />

        {/* opacity palette */}
        <Route path='/opacity-palette' element={<OpacityPalettePage/>}/>

        {/*  empty route  */}
        <Route path="*" element={<EmptyPage />} />

      </Routes>

      <CookieModal isModalOpen={isCookie} setisModalOpen={setIsCookie}/>
    </>
  );
};

export default App;
