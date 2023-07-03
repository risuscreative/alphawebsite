import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import AboutPage from './components/Pages/AboutPage';
import BlogPage from './components/Pages/BlogPage';
import BlogDetailsPage from './components/Pages/BlogDetailsPage';
import ContactPage from './components/Pages/ContactPage';
import ErrorPage from './components/Pages/ErrorPage';
import Home from './components/Pages/Home';
import PortfolioDetailsPage from './components/Pages/PortfolioDetailsPage';
import ServiceDetailsPage from './components/Pages/ServiceDetailsPage';
import ServicesPage from './components/Pages/ServicesPage';
import TeamPage from './components/Pages/TeamPage';
import PortfolioPage from './components/Pages/PortfolioPage';
import TeamDetails from './components/Pages/TeamDetails';
import PhotographyAgencyHome from './components/Pages/PhotographyAgencyHome';
import CreativePortfolioHome from './components/Pages/CreativePortfolioHome';
import DigitalAgencyHome from './components/Pages/DigitalAgencyHome';
import MarketingAgencyHome from './components/Pages/MarketingAgencyHome';
import ShowcasePortfolioHome from './components/Pages/ShowcasePortfolioHome';
import CaseStudyShowcaseHome from './components/Pages/CaseStudyShowcaseHome';
import Layout from './components/Layout';
import CaseStudyDetailsPage from './components/Pages/CaseStudyDetailsPage';
import FaqPage from './components/Pages/FaqPage';

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  if (isLoading == true) return (<>
    <div style={{height: "100vh", width: "100%", backgroundColor: "BLACK", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "2rem", position: "relative"}}>
      <div style={{height: "20rem", width: "20rem", opacity: "0.3", backgroundColor: "RED", filter: "blur(96px)", position: "absolute", top: "0", left: "0"}}></div>
      <div style={{height: "20rem", width: "20rem", opacity: "0.3", backgroundColor: "RED", filter: "blur(96px)", position: "absolute", bottom: "0", right: "0"}}></div>
      <img style={{height: "25rem", width: "25rem"}} src="https://cdn.discordapp.com/attachments/977578170389778432/1125514769672179793/loader2.gif"/>

    </div>
  </>)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="photography-agency"
            element={<PhotographyAgencyHome />}
          />
          <Route path="digital-agency" element={<DigitalAgencyHome />} />
          <Route path="marketing-agency" element={<MarketingAgencyHome />} />
          <Route path="hakkimizdas" element={<AboutPage />} />
          <Route path="hizmetler" element={<ServicesPage />} />
          <Route
            path="service/:serviceDetailsId"
            element={<ServiceDetailsPage />}
          />
          <Route path="tasarimlar" element={<PortfolioPage />} />
          <Route
            path="portfolio/:portfolioDetailsId"
            element={<PortfolioDetailsPage />}
          />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:blogDetailsId" element={<BlogDetailsPage />} />
          <Route path="iletisim" element={<ContactPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="hakkimizda" element={<TeamDetails />} />
          <Route
            path="/case-study/:caseStudyDetailsId"
            element={<CaseStudyDetailsPage />}
          />
          <Route path="sss" element={<FaqPage />} />
        </Route>
        <Route
          path="/"
          element={<Layout headerVariant="cs-site_header_full_width" />}
        >
          <Route
            path="creative-portfolio"
            element={<CreativePortfolioHome />}
          />
          <Route
            path="deneme"
            element={<ShowcasePortfolioHome />}
          />
          <Route
            path="case-study-showcase"
            element={<CaseStudyShowcaseHome />}
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
