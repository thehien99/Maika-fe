import Banner from "../homePage/banner/banner"
import MainProducts from "../homePage/mainProducts/mainProducts"
import MainAI from "./main-AI/main-AI"
import MainSercure from "./main-sercure/main-sercure"
import MainStory from "./main-story/main-story"
import MainTa from "./main-ta/mainTa"
import MainCta from "./mainCta/mainCta"
import MainQuesTion from "./mainQuesTion/mainQuesTion"
import UserFeedback from "./user-feedback/user-feedback"

const HomePage = () => {
  return (
    <div className="homepage">
      <Banner />
      <MainProducts />
      <MainTa />
      <MainStory />
      <MainAI />
      <UserFeedback />
      <MainSercure />
      <MainQuesTion />
      <MainCta />
    </div>
  )
}

export default HomePage