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
<p className="headertext">Witaj na moim portfolio!</p></div>;
const Contact = () => <div><h2 className="headertext">Kontakt</h2><hr></hr>
<p className="headertext">Email: example@example.com</p></div>;
const Education = () => <div><h2 className="headertext">Wykształcenie</h2><hr></hr>
<p className="headertext">szkole skonczylem xd</p></div>;
const Skills = () => <div><h2 className="headertext">Umiejętności</h2><hr></hr>
<p className="headertext">grać w kąkuter</p></div>;

const JavaProjects = () => {
  const [selectedJavaProject, setSelectedJavaProject] = useState("java1");
  const handleJavaProjectClick = (project) => {
    setSelectedJavaProject(project);
  };
  return (
    <div>      
      <div>
      <nav className="nav-container">
          {javaprojects.map((project) => (
            <button 
              key={project.id} 
              onClick={() => handleJavaProjectClick(project)} 
              className="project-button"
            >
              {project.name}
            </button>
          ))}
        </nav><hr></hr>
        {selectedJavaProject && (
          <div>         
            <p>{selectedJavaProject.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const javaprojects = [
  { id: "java1", name: "System biblioteczny w SpringBoot/React", description:(<>
   <div>
    <h2 className="headertext">System biblioteczny z bazą danych</h2>
  </div>

  <div className="vertical-container">
    <div className="vertical-text">
      <p>plh</p>
      <p>plh</p>
        <a href="https://github.com/MeHow2k/SpringBootProjekt" >Repozytorium projektu</a>
    </div>

    <div className="vertical-video" id="video_embed">
          <iframe title="gemtamervideo" frameborder="0" allowfullscreen="" src="//www.youtube.com/embed/yucfgeoYGic" ></iframe>
    </div>
  </div>

  <div>
    <p className="headertext"> Zrzuty ekranu z aplikacji: </p>
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
        
      </div>
      <p className="subtitle"> Wykorzystane technologie: </p>
      <p className="subtitle"> Java, Spring Boot, REST, React, SpringSecurity, JPA, Hibernate, PostgeSQL, JavaDoc, JUnit, Docker </p>
      <p className="subtitle"> Projekt wykonany samodzielnie. Listopad 2024r</p>
    </div>
  </div>
   </>)},
  { id: "java2", name: "Gra Shoot 'em up w Swing", description:"plh"},
  { id: "java3", name: "Auto Clicker", description:"plh"},
  { id: "java4", name: "Bot dla Discord", description:"plh"},
  { id: "java5", name: "Klient/Serwer Telnet RMI", description:"plh"},
];

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

  { id: "projekt2", name: "☕ Java", description: (<>
    <JavaProjects />
  </>) },

  { id: "projekt3", name: "📱 Android", description: (<>
    <div>
    <h2 className="headertext">Dwuosobowa gra mobilna testująca reakcje graczy </h2>
  </div>

  <div className="vertical-container">
    <div className="vertical-text">
      <p>2 Player React to gra dwuosobowa, której celem jest zbieranie punktów, otrzymywanych za .
        Poziomy zawierają przeszkody: wrogów, pułapki i kolorowe drzwi blokujące przejścia. Główny bohater może zbierać kolorowe klejnoty,
          aby otwierać drzwi, eliminować wrogów lub mieszać je z innymi, aby tworzyć nowe kolory.</p>
      <p>Gra zawiera 3 tryby gry, zawierających zarówno elementy zręcznościowe jak i zagadki logiczne. 
        Plansze skrywają też sekrety, które gracz może odkrywać w ramach dodatkowego wyzwania.</p>
        <a href="https://mehow2k.itch.io/gem-tamer" >Kliknij tutaj, aby pobrać grę!</a>
    </div>

    <div className="vertical-video" id="video_embed">
          <iframe title="2playerreactvideo" frameborder="0" allowfullscreen="" src="//www.youtube.com/embed/yucfgeoYGic" ></iframe>
    </div>
  </div>
  <div>
    <p className="headertext"> Zrzuty ekranu z gry: </p>
    <ImageGallery images={[
            "https://private-user-images.githubusercontent.com/128099721/299999092-9b039a8d-c6e2-4e6f-aff5-6bf59bde3284.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDI0NjIzMjksIm5iZiI6MTc0MjQ2MjAyOSwicGF0aCI6Ii8xMjgwOTk3MjEvMjk5OTk5MDkyLTliMDM5YThkLWM2ZTItNGU2Zi1hZmY1LTZiZjU5YmRlMzI4NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMyMFQwOTEzNDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zNWRlY2YzMGQ2MDA1N2ZmODU4MTJjOTYyNzNhOTI2ZmMxZDZkYWVhZjQ1OWMyZTRiMTI5MjZjZDg1ODQzNjNkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.yR_6CW_r3x3xyedtkCSI6UXBZnYrTamwS83saw2BJpw",
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
          <a href="https://github.com/MeHow2k/2_Player_React/">2 Player React by MeHow2k</a>
        </div>
      </div>
      <p className="subtitle"> Wykorzystane technologie: </p>
      <p className="subtitle"> Java, Gradle, Android Studio</p>
      <p className="subtitle"> Projekt wykonany samodzielnie. Styczeń 2024r</p>
    </div>
  </div>
  </>) },
  { id: "projekt4", name: "💿 C#", description: (<>
   <div>
    <h2 className="headertext">Czat TCP/IP</h2>
  </div>

  <div className="vertical-container">
    <div className="vertical-text">
      <p>Prosta desktopowa aplikacja czatu wykorzystująca protokoły TCP i IP.</p>
      <p></p>
        <a href="https://github.com/MeHow2k/Client-Server-TCP-Chat/" >Kliknij tutaj, aby pobrać aplikację!</a>
    </div>

   
  </div>
  <div>
    <p className="headertext"> Zrzuty ekranu z aplikacji: </p>
    <ImageGallery images={[
            "images/csharp/chat1.png",
            "images/csharp/chat2.png",
            "images/csharp/chat3.png",
            "images/csharp/chat4.png",
            "images/csharp/chat5.png"
          ]} />
    <div>

    <div>
      <p className="subtitle"> Strona aplikacji: </p>
        <div className="gallery-container" id="itchio_embed">
          <a href="https://github.com/MeHow2k/Client-Server-TCP-Chat/">Client-Server-TCP-Chat by MeHow2k</a>
        </div>
      </div>
      <p className="subtitle"> Wykorzystane technologie: </p>
      <p className="subtitle"> C#, Windows Forms</p>
      <p className="subtitle"> Projekt wykonany samodzielnie. Maj 2023r</p>
    </div>
  </div>
  </>) },
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
