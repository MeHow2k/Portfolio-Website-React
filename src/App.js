import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";
import "./App.css";

const ImageGallery = ({ images }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((index + 1) % images.length);
  const prevImage = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div>
      <div className="gallery-container" >
        <button className="gallery-button" onClick={prevImage}>◀️</button>
        <img className="center-image" src={images[index]} alt={`gemtamer${index + 1}`} />
        <button className="gallery-button" onClick={nextImage}>▶️</button>
      </div>
      <div className="gallery-counter">
          <span>[{index + 1} / {images.length}]</span>
        </div>
    </div>
  );
};

const Home = () => <div><h2 className="headertext">Home</h2><hr></hr>
<p>Witaj na moim portfolio!</p></div>;
const Contact = () => <div><h2 className="headertext">Kontakt</h2><hr></hr>
<p>Email: example@example.com</p></div>;
const Education = () => <div><h2 className="headertext">Wykształcenie</h2><hr></hr>
<p>szkole skonczylem xd</p></div>;
const Skills = () => <div><h2 className="headertext">Umiejętności</h2><hr></hr>
<p>grać w kąkuter</p></div>;

const projects = [
  { id: "projekt1", name: "🎮 Unreal Engine 5", description: (<>
  <div>
    <h2 className="headertext">Platformowo-logiczna gra 3D w perspektywie trzeciej osoby</h2>
    <img className="center-banner" alt="gemtamerbanner" src="https://img.itch.zone/aW1nLzIwMDc0ODM3LnBuZw==/original/phov94.png"></img>
  </div>

  <div className="vertical-container">
    <div className="vertical-text">
      <p>Gem Tamer to gra platformowo-logiczna 3D. Głównym celem jest zbieranie białych klejnotów, aby dotrzeć do mety.
        Poziomy zawierają przeszkody: wrogów, pułapki i kolorowe drzwi blokujące przejścia. Główny bohater może zbierać kolorowe klejnoty,
          aby otwierać drzwi, eliminować wrogów lub mieszać je z innymi, aby tworzyć nowe kolory.</p>
      <p>Gra zawiera 5 ciekawych poziomów, zawierających zarówno elementy zręcznościowe jak i zagadki logiczne. 
        Plansze skrywają też sekrety, które gracz może odkrywać w ramach dodatkowego wyzwania.</p>
        <a href="https://mehow2k.itch.io/gem-tamer" >Kliknij tutaj, aby pobrać grę!</a>
    </div>

    <div className="vertical-video" id="video_embed">
          <iframe title="gemtamervideo" frameborder="0" allowfullscreen="" src="//www.youtube.com/embed/yucfgeoYGic" ></iframe>
    </div>
  </div>

  <div>
    <p className="headertext"> Zrzuty ekranu z gry: </p>
    <ImageGallery images={[
            "https://img.itch.zone/aW1hZ2UvMzM2MjIyNi8yMDA3NDUxMC5wbmc=/original/F6DX9i.png",
            "https://img.itch.zone/aW1hZ2UvMzM2MjIyNi8yMDA3NDUwNi5wbmc=/original/DRNNfh.png",
            "https://img.itch.zone/aW1hZ2UvMzM2MjIyNi8yMDA3NDUwOC5wbmc=/original/IoigE4.png",
            "https://img.itch.zone/aW1hZ2UvMzM2MjIyNi8yMDA3NDUxMS5wbmc=/original/EIvZB8.png",
            "https://img.itch.zone/aW1hZ2UvMzM2MjIyNi8yMDA3NDUwOS5wbmc=/original/Tfh03%2F.png",
            "https://img.itch.zone/aW1hZ2UvMzM2MjIyNi8yMDA3NDUwNy5wbmc=/original/I7wC%2Bb.png"
          ]} />
    <div>

    <div>
      <p className="subtitle"> Strona gry: </p>
        <div className="gallery-container" id="itchio_embed">
          <iframe title="GemTamerFrame" frameborder="0" src="https://itch.io/embed/3362226" width="552" height="167">
          <a href="https://mehow2k.itch.io/gem-tamer">Gem Tamer by MeHow2k</a></iframe> 
        </div>
      </div>
      <p className="subtitle"> Wykorzystane technologie: </p>
      <p className="subtitle"> Unreal Engine 5, Blueprint, Unreal Montion Graphics, Behaviour Trees, Sequencer, Niagara System, Lumen, FAB. </p>
      <p className="subtitle"> Projekt inżynierski, wykonany samodzielnie. Grudzień 2024r</p>
    </div>
  </div>
</>)},
  { id: "projekt2", name: "☕ Java", description: "Opis projektu 2" },
  { id: "projekt3", name: "📱 Android", description: "Opis projektu 3" },
  { id: "projekt4", name: "💿 C#", description: "Opis projektu 4" },
  { id: "projekt5", name: "👨🏻‍💻 C/C++", description: "Opis projektu 4" },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState("projekt1");
  
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };
  return (
    <div>
      <h2 className="headertext">Projekty</h2><hr></hr>
      <div>
      <nav className="nav-container">
          {projects.map((project) => (
            <button 
              key={project.id} 
              onClick={() => handleProjectClick(project)} 
              className="project-button"
            >
              {project.name}
            </button>
          ))}
        </nav><hr></hr>
        {selectedProject && (
          <div>         
            <p>{selectedProject.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};


const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  return project ? (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  ) : (
    <h2>Projekt nie znaleziony</h2>
  );
};

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav-container">
      <button className="nav-button" onClick={() => navigate("/")}>🏠 Home</button>
      <button className="nav-button" onClick={() => navigate("/education")}>🎓 Wykształcenie</button>
      <button className="nav-button" onClick={() => navigate("/projects")}>💼 Projekty</button>
      <button className="nav-button" onClick={() => navigate("/skills")}>🏆 Umiejętności</button>
      <button className="nav-button" onClick={() => navigate("/contact")}>📧 Kontakt</button>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
