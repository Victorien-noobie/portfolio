import {
  BootstrapIcon,
  Card,
  CLogo,
  CSSIcon,
 
  GitIcon,
  HtmlIcon,
  JavaICon,
  JavaScriptIcon,
  KotlinIcon,
 
  NetIcon,
  NodeJsLogo,
  NPMIcon,
 CiscoIcon,
  PythonIcon,
  ReactIcon,


  TailwindIcon,
  KaliIcon,
  
} from "../../components";
import {
 
  GitHubLogo,
  LinkedIn,
  RoundCircle,
} from "../../components";

import paradiseBeaches from "../../assets/paradiseBeaches.png";
import moProf from "../../assets/moProf.png";
import niomParts from "../../assets/niomParts.png";
import profilePic from "../../assets/profilePic.png";
import textImg from "../../assets/text.png";


const goGitHub = () => {
  window.open("https://github.com/Victorien-noobie", "_blank");
};
const goLinkedIn = () => {
  window.open("https://www.linkedin.com/in/victorien-romuald-daniel-brigitte-a34668377/", "_blank");
};

const phoneNumber = "23058843793";

const message =
  "Hello Victorien! I came across your portfolio and would like to discuss a potential project or opportunity with you. Are you available to chat?";

const handleSendMessage = () => {
  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};

function Home() {
  return (
    <>
      <main className="hero">
        <nav className="flex items-center justify-between p-2 text-left">
          <p className="header text-white">Victorien Brigitte</p>
          <div className="flex flex-row items-center gap-4">
            
            <button className="hover:scale-110" onClick={goGitHub}>
              <GitHubLogo className="size-6" />
            </button>
            <button className="hover:scale-110" onClick={goLinkedIn}>
              <LinkedIn className="size-6" />
            </button>
            <button className="flex flex-row items-center gap-1 rounded-lg border border-white px-4 py-1 text-xs text-white transition-colors hover:bg-gray-700">
              <RoundCircle className="size-2.5" color="green" />
              <span>Open to work</span>
            </button>
          </div>
        </nav>

        <div
          className="
          absolute inset-x-0 bottom-0
          flex flex-col
          px-6 pb-10
          sm:px-8 sm:pb-12
          lg:px-10 lg:pb-16
          textsection
          
        "
        >
          <p className="text-primary/55 text-sm sm:text-base ">
            -Technology Passionate
          </p>
          <div className="hero-name text-primary">
  <p>
    <span className="glitch" data-text="Victorien">
      Victorien
    </span>
  </p>
  <p>
    <span className="glitch" data-text="Brigitte">
      Brigitte
    </span>
  </p>
</div>
          <div className="mb-10 w-full max-w-3xl rounded-xl border border-white/0.5 bg-slate-950/25 p-4 shadow-lg backdrop-blur-sm lg:mb-1">
            <p className="text-sm font-semibold leading-relaxed text-white sm:text-base">
              - Developer | Software Engineering Student | Technology enthusiast 
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/90 sm:text-base">
              Software Engineering student passionate about building modern web
              apps and AI-driven solutions. Skilled in Java, C#, React,
              TypeScript, Python, and Cisco Networking. I enjoy creating
              innovative solutions and exploring new technologies to enhance
              user experiences.
            </p>
          </div>
        </div>
      </main>

      <section className="card-container textsection">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-4">
          <p className="text-yellow whitespace-nowrap">Featured Projects</p>
          <p className="text-primary/70 text-base sm:text-[10px] ">
            -- A section of recent projects, from idea to interactive
            experience{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 pb-10 sm:grid-cols-2 lg:grid-cols-3">
          
          <Card
            title="Niom Parts"
            description="An e-commerce website is under construction. More products and features are coming soon!
"
            link="underconstruction"
            img={niomParts}
            avatars={[
              {
                src: "https://avatars.githubusercontent.com/u/240051129?s=64&v=4",
                link: "https://github.com/WizzRizz",
              },
              {
                src: "https://avatars.githubusercontent.com/u/122863540?v=4",
                link: "https://github.com/Nomekuma",
              },
              {
                src: "https://avatars.githubusercontent.com/u/249419605?v=4",
                link: "https://github.com/Victorien-noobie?tab=overview&from=2026-08-01&to=2026-08-31",
              },
            ]}
          />

          

          <Card
            title="MoProf"
            description="An online teaching platform where students can seek help from teachers and tutors from around Mauritius."
            link="https://github.com/Victorien-noobie/MoProf_BSE_29132_SOL.git"
            img={moProf}
            avatars={[
              
              {
                src: "https://avatars.githubusercontent.com/u/249419605?v=4",
                link: "https://github.com/Victorien-noobie?tab=overview&from=2026-08-01&to=2026-08-31",
              },
            ]}
          />

          <Card
            title="Paradise Beaches"
            description="An online platform that provides information about the best beaches in Mauritius, including reviews, photos, and travel tips."
            link="https://github.com/Victorien-noobie/web-design-project.git"
            img={paradiseBeaches}
            avatars={[
              
              {
                src: "https://avatars.githubusercontent.com/u/249419605?v=4",
                link: "https://github.com/Victorien-noobie?tab=overview&from=2026-08-01&to=2026-08-31",
              },
            ]}
          />
          
        </div>
      </section>

      <section className="card-container textsection">
        <div className="mb-6">
          <p className="mb-2 text-[10px] tracking-[0.3em] text-primary/60">
            02 <span className="text-yellow">—</span> WHAT I WORK WITH
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
            <h2 className="text-3xl text-primary sm:text-4xl">
              Skills <span className="text-yellow">Preview</span>
            </h2>
            <p className="text-xs text-primary/70">
              -- Built through real projects, client work, and continuous
              learning.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(220px,0.8fr)_2fr] lg:items-center">
          <div className="mx-auto w-full max-w-sm lg:mx-0">
            <img
              src={profilePic}
              alt="Victorien Brigitte"
              className="aspect-square w-full rounded-lg object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-5 min-[360px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {[
              { name: "React", category: "Frontend", level: 35 },
              { name: "Cisco Packet Tracer", category: "Networking", level: 40 },
              { name: "HTML5", category: "Frontend", level: 55 },
              { name: "CSS3", category: "Frontend", level: 55 },
              { name: "Tailwind", category: "Frontend", level: 19},
              { name: "Java", category: "Applications", level: 60 },
              { name: "C#", category: "Backend", level: 55 },
              { name: "Bootstrap", category: "Frontend", level: 46 },
              { name: "JavaScript", category: "Frontend", level: 48 },
              { name: "Github", category: "Version Control", level: 45 },
              { name: "node.js", category: "Backend", level: 30 },
              { name: "MYSQL", category: "Backend", level: 39 },
              { name: "Python", category: "Coding", level: 30 },
              { name: "NPM", category: "Pakage Manager", level: 25 },
              { name: "Kotlin", category: "Mobile Development", level: 15 },
              { name: "KaliLinux", category: "Linux", level: 10 },
            ].map((skill) => (
              <div key={skill.name} className="min-w-0">
                <div className="mb-2 flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-primary">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] text-primary/60">
                    {skill.level}%
                  </span>
                </div>
                <p className="mb-2 truncate text-[9px] uppercase tracking-[0.12em] text-primary/60">
                  {skill.category}
                </p>
                <div
                  className="h-1 w-full overflow-hidden rounded-full bg-primary/10"
                  role="meter"
                  aria-label={`${skill.name} proficiency`}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={skill.level}
                >
                  <div
                    className="h-full rounded-full bg-yellow"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 py-10 [&>svg]:shrink-0 ">
          <HtmlIcon />
          <ReactIcon />
          <CSSIcon />
          <TailwindIcon />
          <JavaICon />
          <BootstrapIcon />
          <CLogo />
          <JavaScriptIcon />
          <GitIcon />
          <NetIcon />
          <NodeJsLogo />
          <PythonIcon />
          <NPMIcon />
          <KotlinIcon />
          <CiscoIcon />
          <KaliIcon />
        </div>
      </section>

      <footer className="textsection card-container footer-shrine flex flex-col">
        <div className="relative z-10 flex w-full flex-row items-start justify-between gap-3 sm:gap-10">
          {/* Left: title + text + button */}
          <div className="flex min-w-0 flex-1 flex-col items-start">
            <h2 className="text-xl leading-tight text-primary sm:text-3xl lg:text-4xl">
              Let's create something{" "}
              <span className="text-yellow">amazing.</span>
            </h2>
            <p className="mt-3 max-w-2xl text-xs leading-relaxed text-primary/60 sm:text-base">
              Open to new opportunities, collaborations, and building the next
              big thing. Let's create something amazing together—or at least
              something that doesn't crash on launch.
            </p>
            <button
              className="self-start text-black bg-yellow flex flex-row rounded-sm p-2 mt-4 hover:bg-yellow/50"
              onClick={handleSendMessage}
            >
              Get In Touch
            </button>
          </div>

          <img
            src={textImg}
            className="h-auto w-[35%] max-w-40 shrink-0 sm:w-[25%] sm:max-w-120"
            alt=""
          />
        </div>

        <p className="mt-auto flex w-full justify-center text-[#bfdbfe]">
          © Victorien Brigitte
        </p>
      </footer>
    </>
  );
}

export default Home;
