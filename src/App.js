import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";
import "./App.css";

const ImageGallery = ({ images, galleryId  }) => {
  const [index, setIndex] = useState(0);
  const nextImage = () => setIndex((index + 1) % images.length);
  const prevImage = () => setIndex((index - 1 + images.length) % images.length);
  useEffect(() => {
    setIndex(0); // Resetuje index do 0 po zmianie projektu
  }, [galleryId]);
  return (
    <div>
      <div className="gallery-container" >
        <button className="gallery-button" onClick={prevImage}>◀️</button>
        <img className="center-image" src={images[index]} alt={`gallery_image_${index + 1}`} />
        <button className="gallery-button" onClick={nextImage}>▶️</button>
      </div>
      <div className="gallery-counter">
          <span>[{index + 1} / {images.length}]</span>
        </div>
    </div>
  );
};


const Home = () => <div><h2 className="headertext">O mnie</h2><hr></hr>
<p className="headertext">Witaj na mojej stronie internetowej! </p>
<p className="headertext">Kliknij w przyciski powyżej, aby dowiedzieć się o mnie więcej! :) </p>
<div className="gallery-container">
  <a href="https://github.com/MeHow2k"> Mój profil na GitHub</a>
  <img width="50" height="50" src="/images/githublogo.png" alt="GitHub logo"></img>
</div>
</div>;
const Contact = () => <div><h2 className="headertext">Kontakt</h2><hr></hr>
<p className="headertext">Email: michalpasieka2000@gmail.com</p></div>;
const Education = () => <div><h2 className="headertext">Wykształcenie</h2><hr></hr>
  <div>
    <h3 className="headertext">Studia inżynierskie</h3>
    <p className="headertext">Państwowa Akademia Nauk Stosowanych w Krośnie</p>
    <p className="headertext">Informatyka - specjalność: Sieciowe Systemy Informatyczne</p>
    <p className="headertext">2021-2025</p>
    <hr></hr>
  </div>
  <div>
    <h3 className="headertext">Szkoła średnia</h3>
    <p className="headertext">Zespół Szkół Elektrycznych nr 5 w Krośnie</p>
    <p className="headertext">Techink elektronik</p>
    <p className="headertext">2016-2020</p>
    <hr></hr>
  </div>
</div>;
const Skills = () => <div><h2 className="headertext">Umiejętności</h2><hr></hr>
  <div>
    <p className="headertext">Java - Swing, SpringBoot, JPA, Hibernate, JavaDoc, JUnit, Maven, Android, JDA</p>
    <p className="headertext">Unreal Engine 5 - Blueprint</p>
    <p className="headertext">SQL HTML Javascript C C++ C# </p>
    <p className="headertext">Docker GIT</p>
    <p className="headertext">Windows Linux</p>
    <p className="headertext">Sieci komputerowe Narzędzia AI Pakiet Office</p>
    <hr></hr>
  </div>
  <div>
    <h2 className="headertext">Certyfikaty</h2><hr></hr>
    <h3 className="headertext">Microsoft IT Academy</h3>
    <p className="headertext">ITA-103 - Bazy danych</p>
    <p className="headertext">ITA-105 - Programowanie obiektowe</p><hr></hr>
    <h3 className="headertext">Okręgowa Komisja Egzaminacyjna w Krakowie</h3>
    <p className="headertext">E.06- Wykonywanie instalacji urządzeń elektronicznych</p>
    <p className="headertext">E.20- Eksploatacja urządzeń elektronicznych</p>
    <hr></hr>
  </div>
</div>;

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
  { id: "java1", name: "📚 System biblioteczny w SpringBoot/React", description:(<>
   <div>
    <h2 className="headertext">System biblioteczny z bazą danych</h2>
    <img className="center-banner" alt="bibliotekabanner" src="images/java/biblioteka/spring1.png"></img>
  </div>

  <div className="vertical-container">
    <div className="vertical-text">
      <p>System biblioteczny z bazą danych, pozwalający na zarządzanie czytelnikami, księgozbiorem oraz wypożyczeniami.
         Implementacja zawiera też dziennik zdarzeń, autoryzację z użytkownikami z różnymi uprawnieniami.</p>
      <p>Backend został stworzony za pomocą SpringBoot'a zintegrowanego z bazą danych PostgreSQL. Frontend jest webową aplikacją jednookienkową stworzoną za pomocą biblioteki React.</p>
      <p>Projekt zawiera przykładowe testy jednostkowe JUnit oraz dokumentację JavaDoc. Projekt może być wdrożony za pomocą Dockera (3 zintegrowane kontenery: serwer, klient, baza danych)</p>
        <a href="https://github.com/MeHow2k/SpringBootProjekt" >Repozytorium projektu</a>
    </div>

    {/* <div className="vertical-video" id="video_embed">
          <iframe title="gemtamervideo" frameborder="0" allowfullscreen="" src="//www.youtube.com/embed/yucfgeoYGic" ></iframe>
    </div> */}
  </div>

  <div>
    <p className="headertext"> Zrzuty ekranu z aplikacji: </p>
    <ImageGallery images={[
            "/images/java/biblioteka/spring2.png",
            "/images/java/biblioteka/spring3.png",
            "/images/java/biblioteka/spring4.png",
            "/images/java/biblioteka/spring1.png",
            
          ]} galleryId={"java1"} />
    <div>

   
      
       <div className="gallery-container">
        <a href="https://github.com/MeHow2k/SpringBootProjekt" >Repozytorium GitHub</a>
        <img width="32" height="32" src="/images/githublogo.png" alt="GitHub logo"></img>
       </div>
     
      <p className="subtitle"> Wykorzystane technologie: </p>
      <p className="subtitle"> Java, Spring Boot, REST, React, SpringSecurity, JPA, Hibernate, PostgeSQL, JavaDoc, JUnit, Docker </p>
      <p className="subtitle"> Projekt wykonany samodzielnie. Listopad 2024r</p>
    </div>
  </div>
   </>)},
  { id: "java2", name: "🛸 Gra Shoot 'em up w Swing", description:(<>
    <div>
     <h2 className="headertext">Gra Shoot 'em up "Space Game"</h2>  
   </div>
 
   <div className="vertical-container">
     <div className="vertical-text">
       <p>Prosta gra z gatunku shoot 'em up, w której gracz wciela się w statek kosmiczny. 
        Celem gry jest zestrzeliwanie przeciwników-kosmitów, unikając przy tym ich ataków oraz zbierając różne bonusy.</p>
        <p>Gra zawiera:</p>
        <p>-50 poziomów</p>
        <p>-5 bossów</p>
        <p>-3 rodzaje przeciwników</p>
        <p>-5 statków do wyboru</p>
        <p>-8 bonusów do zbierania</p>      
        <p>-tabela najlepszych wyników</p>   
        <p>-języki: angielski i polski</p>  
       
         <a href="https://github.com/MeHow2k/SpaceGame/releases/tag/v1.0.3" >Pobierz grę!</a>
     </div>
 
      <div className="vertical-video" id="video_embed">
           <iframe title="spacegamevideo" frameborder="0" allowfullscreen="" src="//www.youtube.com/embed/Sk6LjUUlLeI " ></iframe>
     </div> 
   </div>
 
   <div>
     <p className="headertext"> Zrzuty ekranu z aplikacji: </p>
     <ImageGallery images={[        
             "/images/java/spacegame/sg0.jpg",
             "/images/java/spacegame/sg1.jpg",
             "/images/java/spacegame/sg2.jpg",
             "/images/java/spacegame/sg3.jpg",
             "/images/java/spacegame/sg4.jpg",
             "/images/java/spacegame/sg5.jpg",
           ]} galleryId={"java2"}/>
     <div>
 
     <div>
       <p className="subtitle"> Strona gry: </p>       
        <div className="gallery-container" id="itchio_embed">
          <iframe title="spacegameembed" width="552" height="167" frameborder="0" src="https://itch.io/embed/2690131"><a href="https://teampdm.itch.io/space-game">Space Game by TeamPDM</a></iframe>
        </div>    
       </div>
       <div className="gallery-container">
        <a href="https://github.com/MeHow2k/SpaceGame" >Repozytorium GitHub</a>
        <img width="32" height="32" src="/images/githublogo.png" alt="GitHub logo"></img>
       </div>
       <p className="subtitle"> Wykorzystane technologie: </p>
       <p className="subtitle"> Java, Swing, Intellij </p>
       <p className="subtitle"> Projekt wykonany w 3 osobowym zespole. Moja rola: Programista, Game Designer, Product Owner. Maj 2024r</p>
     </div>
   </div>
    </>)},
  { id: "java3", name: "🖱 Auto Clicker", description:(<>
    <div>
     <h2 className="headertext">Auto Clicker</h2>
   </div>
 
   <div className="vertical-container">
     <div className="vertical-text">
       <p>Prosta desktopowa aplikacja do automatycznego klikania przyciskami myszy.</p>
       <p></p>
         <a href="https://github.com/MeHow2k/JavaAutoClicker/releases/tag/v1.0.1" >Kliknij tutaj, aby pobrać aplikację!</a>
     </div>
 
    
   </div>
   <div>
     <p className="headertext"> Zrzuty ekranu z aplikacji: </p>
     <ImageGallery images={[
             "/images/java/autoclicker/autoclick1.png",
             "/images/java/autoclicker/autoclick2.png",
           ]} galleryId={"java3"}/>
     <div>
 
     <div>
         <div className="gallery-container">
           <a href="https://github.com/MeHow2k/JavaAutoClicker/">Repozytorium GitHub</a>
           <img width="32" height="32" src="/images/githublogo.png" alt="GitHub logo"></img>
         </div>
       </div>
       <p className="subtitle"> Wykorzystane technologie: </p>
       <p className="subtitle"> Java, Swing, AWT</p>
       <p className="subtitle"> Projekt wykonany samodzielnie. Marzec 2024r</p>
     </div>
   </div>
   </>)},
  { id: "java4", name: "🤖 Bot dla serwera Discord", description:(<>
    <div>
     <h2 className="headertext">Bot dla serwera Discord</h2>
   </div>
 
   <div className="vertical-container">
     <div className="vertical-text">
       <p>Bot dla serwera komunikatora Discord.</p><p> Bot posiada komendy dzięki którym użytkownicy serwera mogą m.in.:</p>
       <p>-uzyskać informacje o pogodzie w dowolnej miejscowości</p>
       <p>-zadawać pytania i otrzymywać odpowiedź (ChatGPT)</p>
       <p>-odsłuchiwać utowry przez wpisanie linka, bot dołącza do kanału głosowego użytkownika i odgrywa utwory.</p>
       <p>-bot pozwala na dodawanie playlist oraz zarządzanie kolejką utworów. </p>
       <p>-aktualnie bot wpiera linki z serwisu SoundCloud (obsługa YouTube została wycofana) </p>
       <p></p>
         <a href="https://github.com/MeHow2k/DiscordBot/" >Repozytorium projektu</a>
     </div>
 
    
   </div>
   <div>
     <p className="headertext"> Zrzuty ekranu z aplikacji: </p>
     <ImageGallery images={[
             "/images/java/botdiscord/bot2.png",
             "/images/java/botdiscord/bot3.png",
             "/images/java/botdiscord/bot4.png",
           ]} galleryId={"java4"}/>
     <div>
 
     <div>     
         <div className="gallery-container" id="itchio_embed">
           <a href="https://github.com/MeHow2k/DiscordBot/">Repozytorium GitHub</a>
           <img width="32" height="32" src="/images/githublogo.png" alt="GitHub logo"></img>
         </div>
       </div>
       <p className="subtitle"> Wykorzystane technologie: </p>
       <p className="subtitle"> Java, JDA (Java Discord API), Swing, AWT, Lavaplayer, REST, ChatGPT API</p>
       <p className="subtitle"> Projekt wykonany samodzielnie. Luty 2024r</p>
     </div>
   </div>
   </>)},
  { id: "java5", name: "🖥 Klient/Serwer Telnet RMI", description:(<>
    <div>
     <h2 className="headertext">Java RMI Telnet Client/Server</h2>
   </div>
 
   <div className="vertical-container">
     <div className="vertical-text">
       <p>Konsolowe aplikacje serwera i klienta realizujące funkcję uproszczonego telnetu z opcjonalnym szyfrowaniem połączenia.</p>
       <p></p>
         <a href="https://github.com/MeHow2k/Java_RMI_Telnet_ClientServer/" >Repozytorium projektu</a>
     </div>
 
    
   </div>
   <div>
     <p className="headertext"> Zrzuty ekranu z aplikacji: </p>
     <ImageGallery images={[
             "/images/java/rmi/rmi1.png",
             "/images/java/rmi/rmi2.png",
           ]} galleryId={"java5"}/>
     <div>
 
     <div>
       <p className="subtitle"> Strona aplikacji: </p>
         <div className="gallery-container" id="itchio_embed">
           <a href="https://github.com/MeHow2k/Java_RMI_Telnet_ClientServer/">Repozytorium GitHub</a>
           <img width="32" height="32" src="/images/githublogo.png" alt="GitHub logo"></img>
         </div>
       </div>
       <p className="subtitle"> Wykorzystane technologie: </p>
       <p className="subtitle"> Java, RMI, Socket, Cipher</p>
       <p className="subtitle"> Projekt wykonany samodzielnie. Luty 2024r</p>
     </div>
   </div>
   </>)},
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
          ]} galleryId={"project1"} />
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
      <p>2 Player React to gra dwuosobowa, której celem jest zbieranie punktów, otrzymywanych za wykazywaniem się szybszą reakcją w zadaniach.</p>
      <p>Ekran gry jest podzielony na 3 części: 2 przyciski dla każdego z graczy oraz środka. Gra polega na przyciśnięciu przycisku przez gracza w odpowiednim momencie, wtedy otrzymuje punkt. Jeśli gracz wciśnie przycisk w złym momencie, zostaje mu odjęty jeden punkt.
      </p> <p>Gra posiada zaimplementowane 3 mini-gry:</p>
      <p>- „Biały kolor” – gracz musi przycisnąć przycisk w momencie, gdy środek zmieni kolor na biały. Punkt uzyskuje gracz, który wcisnął przycisk szybciej.</p>
      <p>- „Dopasuj kolor” - gracz musi przycisnąć przycisk w momencie, gdy na środku wyświetli się nazwa koloru, która jest tożsama z kolorem czcionki. </p>
      <p>- „Państwa Miasta”- gracz musi przycisnąć przycisk w momencie, gdy na środku wyświetli się nazwa państwa wraz z poprawną stolicą tego państwa.</p>

        <a href="https://github.com/MeHow2k/2_Player_React/" >Kliknij tutaj, aby pobrać grę!</a>
    </div>

    <div className="vertical-video" id="video_embed">
          <iframe title="2playerreactvideo" frameborder="0" allowfullscreen="" src="//www.youtube.com/embed/s-uMuRWAYEU" ></iframe>
    </div>
  </div>
  <div>
    <p className="headertext"> Zrzuty ekranu z gry: </p>
    <ImageGallery images={[
            "/images/android/android1.jpg",
            "/images/android/android2.jpg",
            "/images/android/android3.jpg",
            "/images/android/android4.jpg",
            "/images/android/android5.jpg",
            "/images/android/android6.jpg",
            "/images/android/android7.jpg",
            "/images/android/android8.jpg",
            "/images/android/android9.jpg",
          ]} galleryId={"project3"}/>
    <div>

    <div>      
        <div className="gallery-container" id="itchio_embed">
          <a href="https://github.com/MeHow2k/2_Player_React/">Repozytorium GitHub</a>
          <img width="32" height="32" src="/images/githublogo.png" alt="GitHub logo"></img>
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
            "/images/csharp/chat1.png",
            "/images/csharp/chat2.png",
            "/images/csharp/chat3.png",
            "/images/csharp/chat4.png",
            "/images/csharp/chat5.png"
          ]} galleryId={"project4"}/>
    <div>

    <div>
        <div className="gallery-container" id="itchio_embed">
          <a href="https://github.com/MeHow2k/Client-Server-TCP-Chat/">Repozytorium GitHub</a>
          <img width="32" height="32" src="/images/githublogo.png" alt="GitHub logo"></img>
        </div>
      </div>
      <p className="subtitle"> Wykorzystane technologie: </p>
      <p className="subtitle"> C#, Windows Forms</p>
      <p className="subtitle"> Projekt wykonany samodzielnie. Maj 2023r</p>
    </div>
  </div>
  </>) },
  { id: "projekt5", name: "👨🏻‍💻 C/C++", description: (<>
  <div>
      <div>
      <h2 className="headertext">Stacja pogodowa ESP32</h2>
    </div>
  
    <div className="vertical-container">
      <div className="vertical-text">
        <p>Stacja pogodowa wykonana na ESP32. Stacja wykonuje pomiary: temperatury powietrza, ciśnienia, wilgotności, zaćmienia, pyłów zawieszonych: PM1.0, PM2.5, PM10.0</p>
        <p>ESP32 wysyła wyniki pomiarów na serwer MQTT za pośrednictwem WiFi.</p>
          <a href="https://github.com/MeHow2k/Client-Server-TCP-Chat/" >Repozytorium projektu</a>
      </div>
  
      
    </div>
    <div>
      <p className="headertext"> Galeria projektu </p>
      <ImageGallery images={[
              "/images/ccpp/esp32/esp1.png",
              "/images/ccpp/esp32/esp2.png",
              "/images/ccpp/esp32/esp3.png",
            ]} galleryId={"project51"}/>
      <div>
  
      <div>
          <div className="gallery-container" id="itchio_embed">
            <a href="https://github.com/MeHow2k/StacjaPogodowaESP32">Repozytorium GitHub</a>
            <img width="32" height="32" src="/images/githublogo.png" alt="GitHub logo"></img>
          </div>
        </div>
        <p className="subtitle"> Wykorzystane technologie: </p>
        <p className="subtitle"> C++, Arduino IDE, ESP32, MQTT</p>
        <p className="subtitle"> Projekt wykonany w zespole dwuosobowym. Styczeń 2024</p>
      </div>
    </div>
   </div>
<hr></hr>
   <div>
      <div>
      <h2 className="headertext">Client/Serwer FTP</h2>
    </div>
  
    <div className="vertical-container">
      <div className="vertical-text">
        <p>Aplikacje konsolowe klienta i serwera FTP dla Windows oraz Linux.</p>
        <p>Możliwe jest przesyłanie plików binarnych zarówno pomiędzy tymi samymi, jak i różnymi systemami operacyjnymi.</p>
          <a href="https://github.com/MeHow2k/FTP_ClientServer/" >Repozytorium projektu</a>
      </div>
  
      
    </div>
    <div>
      <p className="headertext"> Galeria projektu </p>
      <ImageGallery images={[
              "/images/ccpp/ftp/ftp1.png",
              "/images/ccpp/ftp/ftp2.png",
              "/images/ccpp/ftp/ftp3.png",
            ]} galleryId={"project52"}/>
      <div>
  
      <div>
          <div className="gallery-container" >
            <a href="https://github.com/MeHow2k/FTP_ClientServer">Repozytorium GitHub</a>
            <img width="32" height="32" src="/images/githublogo.png" alt="GitHub logo"></img>
          </div>
        </div>
        <p className="subtitle"> Wykorzystane technologie: </p>
        <p className="subtitle"> C, Socket, TCP</p>
        <p className="subtitle"> Projekt wykonany samodzielnie. Grudzień 2023</p>
      </div>
    </div>
   </div>
   </>) },
    { id: "projekt6", name: "⚛ React", description: (<>
    <div>
        <h2 className="subtitle"> Ta strona :) </h2>
        <div>
          <div className="gallery-container" >
            <a href="https://github.com/MeHow2k/Portfolio-Website-React">Repozytorium GitHub</a>
            <img width="32" height="32" src="/images/githublogo.png" alt="GitHub logo"></img>
          </div>
        </div>
      </div>
    </>)}
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
      <button className="nav-button" onClick={() => navigate("/")}>👨🏻‍💻 O mnie</button>
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
