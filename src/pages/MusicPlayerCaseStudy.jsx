import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import fullPage from "../images/MUSIC_PLAYER_SS/FullPage.png";
import upnext from "../images/MUSIC_PLAYER_SS/UPnext.png";
import volchange from "../images/MUSIC_PLAYER_SS/Volume_change.png";
import pause from "../images/MUSIC_PLAYER_SS/OtherTrack_Paused.png";


export function MusicPlayerCaseStudy({ onNavigate }) {
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
          <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700">
            UI/UX Design + Frontend Development
          </span>
        </div>
        
        
        <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Music Player Frontend
        </h1>
        
        <p className="text-slate-600 mb-8 max-w-3xl">
          A modern, minimalist music player web application featuring a clean interface, 
          smooth animations, and an intuitive user experience.
        </p>
        
        <div className="flex gap-4 mb-12 flex-wrap">
          <a
            href="#"
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
                src={fullPage}
                className="d-block w-100"
                alt="Music Player Interface"
              />
            </div>
            <div className="carousel-item">
              <img
                src={pause}
                className="d-block w-100"
                alt="Music Player Interface"
              />
            </div>
            <div className="carousel-item">
              <img
                src={volchange}
                className="d-block w-100"
                alt="Music Player Interface"
              />
            </div>
            <div className="carousel-item upnext_img_div">
              <img
                src={upnext}
                className="d-block w-auto upnext_img"
                alt="Music Player Interface"
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
            <p className="text-slate-600">1 weeks (Design & Development)</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-xl p-6">
            <h3 className="text-slate-900 mb-2">Tools</h3>
            <p className="text-slate-600">Figma, React, CSS</p>
          </div>
        </div>

        {/* Problem Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-slate-900">The Problem</h2>
          <div className="bg-red-50 border border-red-100 rounded-xl p-8">
            <p className="text-slate-700 mb-4">
              Most web-based music players suffer from poor user experience:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                <span>Cluttered interfaces with too many features fighting for attention</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                <span>Basic players lacking essential features like playlists</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                <span>Lack of visual feedback during interactions</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-slate-900">The Solution</h2>
          <div className="bg-green-50 border border-green-100 rounded-xl p-8">
            <p className="text-slate-700 mb-4">
              A minimalist music player that prioritizes the listening experience:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <span><strong>Centered player:</strong> Large album artwork as focal point</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <span><strong>Smooth animations:</strong> Transitions that feel natural and responsive. Rotating Background Artwork.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <span><strong>Playlist support:</strong> Easy browsing and management</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                <span><strong>Responsive design:</strong> Works beautifully on all screen sizes</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Design Process */}
        <div className="mb-16">
          <h2 className="mb-6 text-slate-900">Design Process</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-slate-900 mb-2">1. Competitive Analysis</h3>
              <p className="text-slate-600">
                Analyzed popular music players (Spotify Web, Apple Music, YouTube Music) to understand 
                industry patterns and identify gaps in user experience.
              </p>
            </div>
            
            <div className="border-l-4 border-pink-500 pl-6">
              <h3 className="text-slate-900 mb-2">2. User Flow Mapping</h3>
              <p className="text-slate-600">
                Mapped out core user journeys:Selecting Folder, playing music, browsing playlists. Focused on minimizing steps.
              </p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-slate-900 mb-2">3. Visual Design</h3>
              <p className="text-slate-600">
                Created a dark-mode-first design with dynamic accent colors accroding to artwork. Used glassmorphism 
                effects and subtle shadows for depth.
              </p>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-slate-900 mb-2">4. Interactive Prototype</h3>
              <p className="text-slate-600">
                Built clickable prototype to test micro-interactions: pause button animations, Choosing Other Track,
                progress bar dragging, and volume control.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-slate-900 mb-2">5. Development & Polish</h3>
              <p className="text-slate-600">
                Implemented using React with custom hooks for audio control. Added CSS transitions 
                and integrated Web Audio API for visualizations.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="mb-6 text-slate-900">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-xl p-6">
              <h3 className="text-slate-900 mb-3">Minimalist Player</h3>
              <p className="text-slate-600">
                Large album artwork centered, with clean playback controls and soundwave progress bar.
              </p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-xl p-6">
              <h3 className="text-slate-900 mb-3">Smooth Animations</h3>
              <p className="text-slate-600">
                Transitions between songs, rotating vinyl effect, and animated waveforms.
              </p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-md border border-white/60 rounded-xl p-6">
              <h3 className="text-slate-900 mb-3">Keyboard Shortcuts</h3>
              <p className="text-slate-600">
                Full keyboard control: spacebar to play/pause, arrow keys for seeking and volume.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="mb-16">
          <h2 className="mb-6 text-slate-900">Technical Highlights</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <span><strong>CSS Animations:</strong> Smooth transitions using CSS transforms and opacity</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <span><strong>Responsive Layout:</strong> Mobile-first approach with breakpoints for tablets and desktops</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <span><strong>LocalStorage:</strong> Persisting user preferences and playlist data</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Learnings */}
        <div className="mb-16">
          <h2 className="mb-6 text-slate-900">What I Learned</h2>
          <div className="space-y-4">
            <p className="text-slate-600">
              <strong className="text-slate-900">Performance matters:</strong> Animations need to run 
              at 60fps for a smooth experience. Used CSS transforms instead of position changes.
            </p>
            <p className="text-slate-600">
              <strong className="text-slate-900">Less is more:</strong> Removing features that didn't 
              serve the core experience made the player more enjoyable to use.
            </p>
            <p className="text-slate-600">
              <strong className="text-slate-900">Mobile-first thinking:</strong> Designing for mobile 
              constraints first resulted in a cleaner desktop experience too.
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
