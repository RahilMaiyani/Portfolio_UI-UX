import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import home from "../images/Cafe_Kiosk_SS/Home.png";
import login from "../images/Cafe_Kiosk_SS/Login.png";
import menupage from "../images/Cafe_Kiosk_SS/MenuPage.png";
import detail from "../images/Cafe_Kiosk_SS/ItemDetails.png";
import cart from "../images/Cafe_Kiosk_SS/Cart.png";
import confirm from "../images/Cafe_Kiosk_SS/OrderConfirmation.png";
import admin from "../images/Cafe_Kiosk_SS/AdminPanel.png";


export function CafeKioskCaseStudy({ onNavigate }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <button 
            onClick={() => onNavigate("home")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/60 hover:bg-white/80 transition-all duration-300 text-slate-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="mb-8">
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700">
            UI/UX Design + MERN
          </span>
        </div>
        
        <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Café Kiosk Web Application
        </h1>
        
        <p className="text-slate-600 mb-8 max-w-3xl">
          A self-service kiosk interface designed to streamline the ordering process at small cafés, 
          reducing wait times and improving customer experience.
        </p>
        
        <div className="flex gap-4 mb-12 flex-wrap">
          <a
            href="https://github.com/RahilMaiyani/Cafe-Kiosk-MERN"
            className="px-6 py-3 rounded-full bg-white/60 backdrop-blur-md border border-white/60 hover:bg-white/80 transition-all duration-300 flex items-center gap-2 text-slate-800"
          >
            <Github className="h-4 w-4" />
            GitHub Repo
          </a>
        </div>

          {/* Project Images Carousel */}
          <div id="musicPlayerCarousel" className="carousel slide mb-16 rounded-2xl overflow-hidden shadow-2xl" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={home}
                className="d-block w-auto"
                alt="Cafe Kiosk Interface"
              />
            </div>
            <div className="carousel-item">
              <img
                src={login}
                className="d-block w-auto"
                alt="Cafe Kiosk Interface"
              />
            </div>
            <div className="carousel-item">
              <img
                src={menupage}
                className="d-block w-auto"
                alt="Cafe Kiosk Interface"
              />
            </div>
            <div className="carousel-item ">
              <img
                src={detail}
                className="d-block w-auto "
                alt="Cafe Kiosk Interface"
              />
            </div>
            <div className="carousel-item ">
              <img
                src={cart}
                className="d-block w-auto "
                alt="Cafe Kiosk Interface"
              />
            </div>
            <div className="carousel-item ">
              <img
                src={confirm}
                className="d-block w-auto "
                alt="Cafe Kiosk Interface"
              />
            </div>
            <div className="carousel-item ">
              <img
                src={admin}
                className="d-block w-auto "
                alt="Cafe Kiosk Interface"
              />
            </div>
          </div>

          {/* Prev / Next Buttons */}
          <button className="carousel-control-prev" type="button" data-bs-target="#musicPlayerCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#musicPlayerCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


        {/* Overview Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-xl p-6">
            <h3 className="text-slate-900 mb-2">My Role</h3>
            <p className="text-slate-600">UI/UX Designer & Frontend Developer</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-xl p-6">
            <h3 className="text-slate-900 mb-2">Timeline</h3>
            <p className="text-slate-600">4 weeks (Design & Development)</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-xl p-6">
            <h3 className="text-slate-900 mb-2">Tools</h3>
            <p className="text-slate-600">Figma, MERN, CSS, Javascript, Bootstrap</p>
          </div>
        </div>

        {/* Problem Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-slate-900">The Problem</h2>
          <div className="bg-red-50 border border-red-100 rounded-xl p-8">
            <p className="text-slate-700 mb-4">
              Small cafés often struggle with slow ordering processes during peak hours. Traditional counter 
              ordering creates bottlenecks, leading to:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                <span>Long wait times and customer frustration</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                <span>Order errors due to miscommunication</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                <span>Limited upselling opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                <span>Confusing menu navigation for first-time customers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-slate-900">The Solution</h2>
          <div className="bg-green-50 border border-green-100 rounded-xl p-8">
            <p className="text-slate-700 mb-4">
              A self-service kiosk interface that simplifies the ordering experience through:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <span><strong>Clear visual menu:</strong> Large product images with descriptions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <span><strong>Various Categories :</strong> Options to choose categories</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <span><strong>Streamlined checkout:</strong> Simple 3-step payment flow</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Design Process */}
        <div className="mb-16">
          <h2 className="mb-6 text-slate-900">Design Process</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-slate-900 mb-2">1. Research & Discovery</h3>
              <p className="text-slate-600">
                Observed customer behavior at local cafés. Created user personas representing typical customers.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-slate-900 mb-2">2. Wireframing</h3>
              <p className="text-slate-600">
                Sketched low-fidelity wireframes focusing on information architecture and user flow. 
                Prioritized simplicity and reduced decision-making steps.
              </p>
            </div>
            
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-slate-900 mb-2">3. UI Design in Figma</h3>
              <p className="text-slate-600">
                Created high-fidelity mockups with a clean, modern aesthetic.
                high contrast colors, and clear typography for accessibility.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-slate-900 mb-2">4. Prototyping & Testing</h3>
              <p className="text-slate-600">
                Built interactive prototype in Figma and conducted usability testing with 5 users. 
                Iterated based on feedback to improve navigation clarity.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-slate-900 mb-2">5. Frontend Development</h3>
              <p className="text-slate-600">
                Translated designs into code using React and CSS. Implemented smooth transitions, 
                responsive layout, and cart functionality.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="mb-6 text-slate-900">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-xl p-6">
              <h3 className="text-slate-900 mb-3">Visual Menu Browser</h3>
              <p className="text-slate-600">
                Category-based navigation with high-quality product images and clear pricing.
              </p>
            </div>
            
            
            <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-xl p-6">
              <h3 className="text-slate-900 mb-3">Real-time Cart</h3>
              <p className="text-slate-600">
                Persistent cart view showing running total, with easy item modification.
              </p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-xl p-6">
              <h3 className="text-slate-900 mb-3">Simple Checkout</h3>
              <p className="text-slate-600">
                Three-step process: Review → Payment → Confirmation with order number.
              </p>
            </div>
          </div>
        </div>

        
        {/* Learnings */}
        <div className="mb-16">
          <h2 className="mb-6 text-slate-900">What I Learned</h2>
          <div className="space-y-4">
            <p className="text-slate-600">
              <strong className="text-slate-900">User testing is crucial:</strong> Early testing revealed 
              that users needed larger touch targets and clearer category labels than initially designed.
            </p>
            <p className="text-slate-600">
              <strong className="text-slate-900">Balance simplicity with features:</strong> Finding the 
              right balance between offering customization options and keeping the interface simple was key.
            </p>
            <p className="text-slate-600">
              <strong className="text-slate-900">Accessibility matters:</strong> Designing for various 
              abilities (vision, motor skills) improved the experience for all users.
            </p>
          </div>
        </div>

        {/* Back to Portfolio */}
        <div className="text-center pt-8 border-t border-slate-200">
          <button 
            onClick={() => onNavigate("home")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl transition-all duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
