import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Cpu, 
  Settings, 
  Terminal as TerminalIcon, 
  Eye,
  Layers,
  Award, 
  Briefcase, 
  Mail, 
  FileText, 
  Check, 
  ArrowUpRight, 
  MapPin, 
  GraduationCap, 
  Calendar,
  Code,
  Sparkles,
  ChevronDown
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Custom Brand SVGs
function Github({ size = 16, className = "" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      fill="currentColor" 
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function Linkedin({ size = 16, className = "" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      fill="currentColor" 
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const mainRef = useRef(null);

  // Monitor scroll for Navbar transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sleek entrance animations on mount
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.nav-pill', { y: -30, opacity: 0, duration: 0.6, ease: 'power2.out' });
      gsap.from('.hero-anim', { y: 20, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out' });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      e.target.reset();
    }, 4000);
  };

  return (
    <div ref={mainRef} className="relative min-h-screen bg-zinc-950 text-zinc-100 font-grotesk overflow-x-hidden selection:bg-cyan-500 selection:text-zinc-950">
      {/* Global CSS noise overlay */}
      <div className="noise-overlay" />

      {/* Modern Fixed Navbar */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className={`nav-pill flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full border transition-all duration-300 ${
          scrolled 
            ? 'bg-zinc-900/80 backdrop-blur-md border-zinc-800 shadow-lg shadow-black/40' 
            : 'bg-transparent border-transparent'
        }`}>
          {/* Logo / Initials */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="font-mono text-xs px-2 py-0.5 border border-cyan-500/40 text-cyan-400 rounded bg-cyan-500/10 tracking-widest uppercase">
              KJ
            </span>
            <span className="font-bold tracking-tight text-sm md:text-base hover:text-cyan-400 transition-colors">
              Kushagra Javeri
            </span>
          </a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-zinc-400">
            <a href="#about" className="hover-lift hover:text-zinc-100">About</a>
            <a href="#skills" className="hover-lift hover:text-zinc-100">Skills</a>
            <a href="#experience" className="hover-lift hover:text-zinc-100">Experience</a>
            <a href="#projects" className="hover-lift hover:text-zinc-100">Projects</a>
            <a href="#achievements" className="hover-lift hover:text-zinc-100">Awards</a>
            <a href="#contact" className="hover-lift hover:text-zinc-100">Contact</a>
          </div>

          {/* Quick CTA */}
          <a 
            href="/Kushagra_Javeri_Resume.pdf" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-200 px-4 py-2 rounded-full transition-all duration-200 shadow-sm"
          >
            <span>Resume</span>
            <FileText size={12} className="text-cyan-400" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center items-center px-6 pt-28 pb-12 overflow-hidden">
        {/* Soft elegant background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="w-full max-w-4xl text-center space-y-6 relative z-10">
          <div className="hero-anim inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles size={12} className="animate-pulse" />
            <span>Robotics &amp; Computer Science Double Degree</span>
          </div>

          <h1 className="hero-anim text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Kushagra Javeri
          </h1>

          <p className="hero-anim text-lg sm:text-xl md:text-2xl font-medium text-cyan-400 font-mono">
            Robotics Researcher &amp; Software Engineer
          </p>

          <p className="hero-anim text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            First-class honours graduate from UNSW. Specializing in autonomous underwater vehicles (AUVs), 
            robotic manipulator controllers, state estimation, reinforcement learning, and custom hardware integration. 
            Winner of 2nd Place Overall at the SAUVC 2026 International AUV Competition.
          </p>

          <div className="hero-anim flex flex-wrap justify-center items-center gap-4 pt-4">
            <a 
              href="#projects" 
              className="flex items-center gap-2 px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold font-mono text-xs uppercase tracking-wider rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/10 active:scale-[0.98]"
            >
              <span>View Projects</span>
              <Code size={14} />
            </a>

            <a 
              href="/Kushagra_Javeri_Resume.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-100 font-semibold font-mono text-xs uppercase tracking-wider rounded-xl transition-all duration-200 active:scale-[0.98]"
            >
              <span>Download Resume</span>
              <FileText size={14} className="text-cyan-400" />
            </a>

            <a 
              href="#contact" 
              className="flex items-center gap-2 px-6 py-3.5 bg-transparent hover:bg-zinc-900 border border-transparent text-zinc-300 font-mono text-xs uppercase tracking-wider rounded-xl transition-all duration-200"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-4 flex justify-center w-full animate-bounce">
          <a href="#about" className="text-zinc-500 hover:text-cyan-400 transition-colors">
            <ChevronDown size={24} />
          </a>
        </div>
      </section>

      {/* About & Education Section */}
      <section id="about" className="py-24 border-t border-zinc-900 bg-zinc-950 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-title mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Profile</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">About Me</h2>
            </div>
            <p className="text-zinc-400 font-mono text-sm max-w-md">
              A solid foundation in both mechanical design and complex software architectures.
            </p>
          </div>

          <div className="section-content grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                I hold a double degree in <strong>Bachelor of Engineering (Honours Class 1) in Mechatronics Engineering</strong> 
                and <strong>Bachelor of Science in Computer Science</strong> from the University of New South Wales (UNSW). 
                My focus lies at the intersection of robotics hardware design and autonomous control software.
              </p>
              <p>
                Whether it is building waterproof thruster housings, fabricating carbon fiber panels, programming closed-loop 
                manipulators using custom tactile feedback sensors, or formulating Model Predictive Control (MPC) inside ROS2 
                using Acados and CasADi, I design systems from first-principles to achieve robust physical execution.
              </p>
              <p>
                I thrive in competitive and research-focused environments. As a researcher at UNSW, I deploy multi-modal SLAM platforms 
                for underwater piling inspection. As a solo competitor at the SAUVC 2026 competition in Singapore, I designed, 
                fabricated, and programmed a fully custom autonomous submarine, securing <strong>2nd Place globally</strong>.
              </p>
            </div>

            {/* Education Summary Box */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                <GraduationCap className="text-cyan-400" size={20} />
                <span>Education</span>
              </h3>

              <div className="space-y-4">
                <div className="border-l-2 border-cyan-500/40 pl-4 space-y-1">
                  <span className="text-xs font-mono text-zinc-500">2021 - 2026</span>
                  <h4 className="font-bold text-white text-sm sm:text-base leading-snug">
                    UNSW Sydney
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono">
                    Mechatronics Eng. (First-Class Hons)<br />
                    &amp; Computer Science Double Degree
                  </p>
                  <p className="text-xs font-mono text-cyan-400 pt-1">
                    WAM: 85/100
                  </p>
                </div>

                <div className="border-l-2 border-zinc-850 pl-4 space-y-1">
                  <span className="text-xs font-mono text-zinc-500">Graduated 2020</span>
                  <h4 className="font-bold text-white text-sm">
                    Girraween High School
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono">
                    HSC: 97.70 ATAR
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-800 grid grid-cols-2 gap-4 text-center font-mono">
                <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-850">
                  <span className="block text-xl font-bold text-white">1st Class</span>
                  <span className="block text-[9px] text-zinc-500 uppercase">Honours</span>
                </div>
                <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-850">
                  <span className="block text-xl font-bold text-white">3x</span>
                  <span className="block text-[9px] text-zinc-500 uppercase">Dean's List</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-24 border-t border-zinc-900 bg-zinc-900/30 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-title mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">Technical Skills</h2>
            </div>
            <p className="text-zinc-400 font-mono text-sm max-w-md">
              A comprehensive toolkit spanning mechanical build, embedded hardware, and high-performance algorithms.
            </p>
          </div>

          <div className="section-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skill 1 */}
            <SkillCard 
              icon={<Settings className="text-cyan-400" size={20} />}
              title="Mechanical &amp; Manufacturing"
              skills={[
                "SolidWorks & Autodesk Fusion360",
                "CNC Milling & Laser Cutting",
                "3D Printing & Metalworking",
                "Rubber Molding & Castings",
                "Waterproofing Design",
                "Rapid Physical Prototyping"
              ]}
            />
            {/* Skill 2 */}
            <SkillCard 
              icon={<Cpu className="text-cyan-400" size={20} />}
              title="Electrical &amp; Embedded"
              skills={[
                "Embedded System Architecture",
                "Arduino, ESP32, Teensy, TM4C",
                "Jetson Orin Nano & Raspberry Pi",
                "CAN Bus & Serial Pipelines",
                "Circuit Wiring & Distribution Layouts",
                "Payloads (Sonar, DVL, USBL, Event Cam)"
              ]}
            />
            {/* Skill 3 */}
            <SkillCard 
              icon={<TerminalIcon className="text-cyan-400" size={20} />}
              title="Software &amp; Middleware"
              skills={[
                "C++, Python, C, Java, Assembly",
                "ROS2 (Humble/Iron) & ROS",
                "Nav2 (Navigation Stack)",
                "MoveIt (Manipulation Stack)",
                "slam_toolbox, EKF-SLAM",
                "ArduSub, MAVROS, Git, Docker"
              ]}
            />
            {/* Skill 4 */}
            <SkillCard 
              icon={<Code className="text-cyan-400" size={20} />}
              title="Control &amp; Algorithms"
              skills={[
                "Model Predictive Control (MPC)",
                "Sliding Mode Control (SMC) & PID",
                "CasADi & Acados Optimization",
                "Reinforcement Learning (PyTorch)",
                "Kinematics & Dynamics Modelling",
                "Algorithms & Advanced OOP"
              ]}
            />
            {/* Skill 5 */}
            <SkillCard 
              icon={<Eye className="text-cyan-400" size={20} />}
              title="Vision &amp; SLAM"
              skills={[
                "Extended Kalman Filters (EKF)",
                "Monocular & Stereo SLAM",
                "OpenCV & Point Cloud Processing",
                "CFAR Sonar Data Filtering",
                "YOLO (v11/v26) TFLite Deployments",
                "Edge Inference Optimization"
              ]}
            />
            {/* Skill 6 */}
            <SkillCard 
              icon={<Layers className="text-cyan-400" size={20} />}
              title="Simulation Tools"
              skills={[
                "NVIDIA IsaacSim",
                "OceanSim Simulation",
                "Gazebo & Webots Classic",
                "Dynamic Robot Rig Testing",
                "Sim-to-Real Deployment Tuning",
                "Visual & Acoustic Validation"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 border-t border-zinc-900 bg-zinc-950 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-title mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Chronology</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">Technical Experience</h2>
            </div>
            <p className="text-zinc-400 font-mono text-sm max-w-sm">
              Placements in underwater research, tactile automation, and academic instruction.
            </p>
          </div>

          <div className="section-content space-y-8">
            <ExperienceItem 
              role="Robotics Researcher"
              company="University of New South Wales (UNSW)"
              period="01/2025 - Present"
              location="Sydney, Australia"
              bullets={[
                "Executed hardware-software modifications on a BlueROV2, integrating USBL, Sonar, DVL, IMU, and event cameras via MAVROS/ArduPilot for harbour pile inspection.",
                "Fused multi-modal sensor data using EKF and CFAR sonar filtering to generate point clouds and enable SLAM; executed wharf field testing and hardware debugging.",
                "Designed and built a custom mecanum wheel mobile base from scratch, handling structural design, motor selection, and embedded integration.",
                "Trained RL control policies for the custom base in IsaacSim (PyTorch, CUDA) and achieved successful zero-shot sim-to-real physical deployment.",
                "Developed custom mobile robot navigation stacks in ROS2 Nav2; engineered integrated controllers (PID, SMC, MPC, RL) and modified OceanSim for pre-deployment acoustic/visual testing."
              ]}
              tech={["ROS2", "C++", "Python", "SLAM", "DVL/Sonar", "IsaacSim", "ArduSub", "CasADi", "Acados"]}
            />

            <ExperienceItem 
              role="Robotics Engineering Intern"
              company="Contactile Pty Ltd"
              period="09/2023 - 12/2023"
              location="Sydney, Australia"
              bullets={[
                "Designed custom mechanical CAD prototypes in SolidWorks/Fusion360, including linear gripper mounts and 2-DOF sensor brackets for tactile testing.",
                "Developed Python slip detection algorithms using PapillArray force/torque sensors to detect and differentiate translational slip and rotational slip for closed-loop control.",
                "Constructed an OpenCV and ROS2 vision verification rig to track tactile sensor pillar displacement and benchmark detection accuracy."
              ]}
              tech={["SolidWorks", "Python", "Robotic Grippers", "Tactile Sensors", "OpenCV", "ROS2", "Feedback Loops"]}
            />

            <ExperienceItem 
              role="Casual Academic (Tutor &amp; Marker)"
              company="UNSW Engineering &amp; Computer Science"
              period="09/2022 - 04/2026"
              location="Sydney, Australia"
              bullets={[
                "Mentored and instructed 500+ undergraduate students across six critical software and mechatronic courses.",
                "Courses taught: Robot Design (MTRN3100), Advanced Autonomous Systems (MTRN4010), Computing for Mechatronics (MTRN2500), Object-Oriented Programming (COMP2511), Algorithms and Programming Techniques (COMP3121), and Programming Challenges (COMP4128).",
                "Graded advanced robotics projects, marked programming submissions, ran lab demonstrations, and invigilated exams."
              ]}
              tech={["Robot Design", "Object-Oriented Design", "Algorithms & Structures", "C++", "Java", "Python"]}
            />

            <ExperienceItem 
              role="Early Experience &amp; Leadership"
              company="STEM Educator &amp; Hospitality Roles"
              period="2018 - 2024"
              location="Sydney, Australia"
              bullets={[
                "Student Ambassador & Educator: Led STEM robotics workshops and developed learning materials for CODE4FUN and Art of Smart Education.",
                "Hospitality: Worked as cocktail bartender (The Library Bar) and barista, proving ability to collaborate and manage high-pressure, client-facing environments."
              ]}
              tech={["Project Management", "STEM Outreach", "Team Communication", "High-Pressure Operations"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-zinc-900 bg-zinc-900/30 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-title mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Engineering Archive</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">Featured Projects</h2>
            </div>
            <p className="text-zinc-400 font-mono text-sm max-w-sm">
              A curated catalog of autonomous platforms, control schemes, and physical prototypes.
            </p>
          </div>

          <div className="section-content space-y-8">
            {/* Highlighted Project: OpenMantaClaus */}
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-cyan-500/30 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-500/10 transition-colors duration-500" />
              
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase rounded-md bg-cyan-500/10 border border-cyan-500/35 text-cyan-400">
                    SAUVC 2026 // 2nd Place Overall
                  </span>
                  <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase rounded-md bg-zinc-800 text-zinc-300">
                    Solo Submission
                  </span>
                </div>

                <a 
                  href="https://github.com/kushagrazaveri/OpenMantaClaus" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Github size={14} />
                  <span>github.com/kushagrazaveri/OpenMantaClaus</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  OpenMantaClaus Autonomous Submarine
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  A complete, low-cost autonomous underwater vehicle (AUV) built from scratch on a personal budget for the Singapore Autonomous Underwater Vehicle Challenge (SAUVC). 
                  Handled the full spectrum: CAD structural layout, hardware waterproofing seals, electrical power distribution, 
                  and the complete autonomous software framework.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-zinc-400 bg-zinc-950/60 border border-zinc-850 p-4 rounded-xl">
                <div>
                  <h4 className="text-zinc-200 font-bold mb-1.5 uppercase tracking-wider text-[10px]">Embedded &amp; Vision</h4>
                  <p>Deployed YOLOv11/v26 TFLite target inference models running at 10-15 Hz on a Raspberry Pi 4B. Formulated custom feature-based EKF monocular SLAM for undersea pipeline navigation.</p>
                </div>
                <div>
                  <h4 className="text-zinc-200 font-bold mb-1.5 uppercase tracking-wider text-[10px]">Mechanical &amp; Open Source</h4>
                  <p>Designed laser-cut and 3D printed thruster chassis housings. Open-sourced the full hardware BOM, CAD models, wiring schematics, datasets, and Dockerized ROS2 control stack.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {["EKF-SLAM", "ROS2", "YOLOv11/v26", "Raspberry Pi 4B", "ArduSub", "Mavlink", "SolidWorks", "Docker"].map((tag, i) => (
                  <span key={i} className="text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-2.5 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <a 
                  href="https://github.com/kushagrazaveri/OpenMantaClaus" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-mono text-xs uppercase tracking-wider px-5 py-3 rounded-lg border border-zinc-700 hover:border-zinc-600 transition-colors w-full sm:w-auto text-center"
                >
                  <Github size={14} className="text-cyan-400" />
                  <span>Inspect Github Codebase</span>
                </a>
              </div>
            </div>

            {/* Standard Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* RoboCup */}
              <ProjectCard 
                title="RoboCup@Work Autonomous Manipulator"
                subtitle="Thesis &amp; Ongoing Publication"
                desc="Mechanically integrated a 6-DOF robotic manipulator onto a custom holonomic mecanum wheel base. Designed and deployed a full-body Model Predictive Control (MPC) scheme from scratch using CasADi and Acados in ROS2. Formulated rigid-body system dynamics model in NVIDIA IsaacSim with detailed roller geometries to train reinforcement learning navigation and docking policies."
                tags={["CasADi", "Acados", "MPC", "ROS2 Gazebo", "IsaacSim", "6-DOF Arm"]}
              />

              {/* Droid Racing */}
              <ProjectCard 
                title="Inter-University Droid Racing Robot"
                subtitle="1st Place Best Droid &amp; 2nd Place Race"
                desc="Engineered an autonomous racing droid utilizing an OpenMV camera and Teensy microcontroller. Designed a custom path planning scheme modeled on artificial potential fields and magnetic fields to navigate tracks, identify road signs, and bypass static obstacles. Placed second in Australia as a solo entry and mentored subsequent winning team."
                tags={["Potential Fields", "Teensy 4.1", "OpenMV Cam", "Computer Vision", "CAD"]}
              />

              {/* Combat Robots */}
              <ProjectCard 
                title="Antweight Combat Robots"
                subtitle="Host &amp; Builder"
                desc="Designed and machined multiple 150g antweight combat robots using SolidWorks, CNC milling, sheet metal bending, and custom rubber wheel molding. Founded and hosted the first-ever inter-university antweight tournament in Australia, coordinating procurement, fabrication labs, and matches."
                tags={["CNC Milling", "SolidWorks", "Metalworking", "Event Management"]}
              />

              {/* Hexapod */}
              <ProjectCard 
                title="Hexapod Robot Platform"
                subtitle="Inverse Kinematics Codebase"
                desc="Developed a custom gaits and control codebase in C++ for a six-legged robot with 3 servos per leg. Coded inverse kinematics formulas, tripod/ripple gait schedules, and telemetry modules from scratch to support omnidirectional walking and spot-turning over uneven steps."
                tags={["C++", "Inverse Kinematics", "Gait Logic", "Servo Control", "OOP"]}
              />

              {/* Course Projects */}
              <ProjectCard 
                title="Course Projects Archive"
                subtitle="UNSW Engineering &amp; CS"
                desc="Includes: (1) An ML image classifier to distinguish penguins and turtles with 80% accuracy on Kaggle data. (2) An autonomous maze solver robot utilizing CV pathfinding and sensor fusion. (3) A ROS2 controller framework for a Jenga-playing robotic arm using a binary tactile sensor payload."
                tags={["PyTorch", "ROS2", "Tactile Feedback", "Pathfinding"]}
              />

              {/* SAUVC 2025 */}
              <ProjectCard 
                title="SAUVC 2025 Project Lead"
                subtitle="2nd Fastest Qualifier globally"
                desc="Served as Team Lead for the 11-member UNSW competitive robotics team. Conducted hands-on physical assembly, payload wiring, waterproofing verification, and developed the Finite State Machine (FSM) control modules in ROS2, helping the team qualify 2nd fastest into the top 15 international final."
                tags={["ROS2 FSM", "Team Management", "ArduSub", "Electrical Routing"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Awards Section */}
      <section id="achievements" className="py-24 border-t border-zinc-900 bg-zinc-950 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="section-title mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Merit</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">Honours &amp; Awards</h2>
            </div>
            <p className="text-zinc-400 font-mono text-sm max-w-sm">
              Competitions, hackathons, and academic distinctions.
            </p>
          </div>

          <div className="section-content grid grid-cols-1 md:grid-cols-2 gap-4">
            <AwardItem 
              award="2nd Place Overall - SAUVC 2026"
              sub="Singapore Autonomous Underwater Vehicle Challenge // Solo Entry"
            />
            <AwardItem 
              award="UNSW Dean's List Highly Commended"
              sub="Conferred: 2021, 2022, and 2023 // Faculty of Engineering"
            />
            <AwardItem 
              award="2nd Fastest Qualifier &amp; Top 15 Finalist"
              sub="SAUVC 2025 International Underwater Challenge // Team Lead"
            />
            <AwardItem 
              award="Best Overall Droid &amp; 2nd Place Race"
              sub="QUT Droid Racing Challenge // 2022 and 2024 Qualifiers"
            />
            <AwardItem 
              award="Silver Award in ANZAC Programming Contest"
              sub="Regional Competitive Programming Competition // 2023 &amp; 2024"
            />
            <AwardItem 
              award="Rank 10 - SPPC Programming Contest"
              sub="South Pacific Programming Contest // 2022 (Rank 50 in 2021)"
            />
            <AwardItem 
              award="Special Mention &amp; 3rd Place Hackathons"
              sub="CSE Hackathon 2021 &amp; Women in Tech (WIT) Hackathon 2021"
            />
            <AwardItem 
              award="Perfect Score &amp; High Distinction"
              sub="NCSS Advanced Programming Challenges // 2018 &amp; 2019 rounds"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-zinc-900 bg-zinc-900/30 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="section-title mb-12 text-center">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">Communication</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">Get In Touch</h2>
            <p className="text-zinc-400 font-mono text-sm mt-3 max-w-md mx-auto">
              Feel free to email me regarding research collaborations, robotics engineering opportunities, or code reviews.
            </p>
          </div>

          <div className="section-content grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
            {/* Direct Channels */}
            <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white font-mono mb-4">Direct Channels</h3>
                <div className="space-y-4 text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-cyan-400" />
                    <div>
                      <span className="block text-[10px] text-zinc-500 uppercase">Email</span>
                      <a href="mailto:kushagrazaveri@gmail.com" className="text-zinc-200 hover:text-cyan-400 transition-colors">
                        kushagrazaveri@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-cyan-400" />
                    <div>
                      <span className="block text-[10px] text-zinc-500 uppercase">Location</span>
                      <span className="text-zinc-200">Sydney, NSW, Australia</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText size={16} className="text-cyan-400" />
                    <div>
                      <span className="block text-[10px] text-zinc-500 uppercase">Documents</span>
                      <a href="/Kushagra_Javeri_Resume.pdf" target="_blank" rel="noreferrer" className="text-zinc-200 hover:text-cyan-400 transition-colors">
                        Kushagra_Javeri_Resume.pdf
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Buttons */}
              <div className="pt-4 border-t border-zinc-850 space-y-3">
                <a 
                  href="https://www.linkedin.com/in/kushagra-javeri-a87019207/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-950 text-xs font-mono text-zinc-300 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn Connections</span>
                </a>
                <a 
                  href="https://github.com/kushagrazaveri" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-950 text-xs font-mono text-zinc-300 hover:text-cyan-400 transition-colors"
                >
                  <Github size={14} />
                  <span>GitHub Repositories</span>
                </a>
              </div>
            </div>

            {/* Email Form */}
            <div className="md:col-span-3 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white font-mono mb-4">Send a Message</h3>
              
              {formSubmitted ? (
                <div className="h-[240px] flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Check size={24} />
                  </div>
                  <h4 className="font-bold text-white font-mono">Message Triggered!</h4>
                  <p className="text-xs text-zinc-400 max-w-[240px]">
                    Your client email composer was triggered. I will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-mono">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-zinc-400 uppercase tracking-wider text-[10px]">Name</label>
                      <input 
                        id="name" 
                        type="text" 
                        required 
                        placeholder="Your Name"
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500/50 rounded-lg p-2.5 text-zinc-100 outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-zinc-400 uppercase tracking-wider text-[10px]">Email Address</label>
                      <input 
                        id="email" 
                        type="email" 
                        required 
                        placeholder="email@example.com"
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500/50 rounded-lg p-2.5 text-zinc-100 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-zinc-400 uppercase tracking-wider text-[10px]">Message</label>
                    <textarea 
                      id="message" 
                      rows="4" 
                      required 
                      placeholder="Hi Kushagra, I'm interested in your work on..."
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500/50 rounded-lg p-2.5 text-zinc-100 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5 active:scale-[0.99]"
                  >
                    <span>Connect via Client SMTP</span>
                    <ArrowUpRight size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-500 border-t border-zinc-900 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2 py-0.5 border border-zinc-800 text-zinc-400 rounded">
              KJ
            </span>
            <span className="text-xs font-mono text-zinc-400">
              © {new Date().getFullYear()} Kushagra Javeri. Sydney, Australia.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">
              Status: Operational
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Helper Components */

function SkillCard({ icon, title, skills }) {
  return (
    <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 hover:border-cyan-500/30 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-850 text-cyan-400">
          {icon}
        </div>
        <h3 className="font-bold text-white text-base font-mono group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
      </div>
      <ul className="space-y-2 text-xs font-mono text-zinc-400">
        {skills.map((s, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/40" />
            <span>{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceItem({ role, company, period, location, bullets, tech }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700/80 rounded-2xl p-6 transition-all duration-300 text-left">
      <div 
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="space-y-1">
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">{company}</span>
          <h3 className="text-lg sm:text-xl font-bold text-white">{role}</h3>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1"><Calendar size={12} /> {period}</span>
            <span className="flex items-center gap-1"><MapPin size={12} /> {location}</span>
          </div>
        </div>
        
        <button 
          type="button"
          className="px-4 py-2 border border-zinc-800 bg-zinc-950 hover:bg-zinc-800 text-xs font-mono text-zinc-300 uppercase rounded-lg transition-colors"
        >
          {expanded ? 'Hide Details' : 'View Operations'}
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        expanded ? 'max-h-[500px] mt-6 pt-6 border-t border-zinc-800/80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <ul className="space-y-2.5 list-disc pl-5 text-sm text-zinc-300 leading-relaxed font-sans">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2 pt-2">
          {tech.map((t, idx) => (
            <span key={idx} className="text-[10px] font-mono bg-zinc-950 text-zinc-400 border border-zinc-850 px-2 py-0.5 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ title, subtitle, desc, tags }) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/20 rounded-2xl p-6 flex flex-col justify-between transition-all duration-350 text-left">
      <div className="space-y-3">
        <div className="flex justify-between items-start gap-2">
          <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider border border-cyan-500/10 bg-cyan-500/5 px-2 py-0.5 rounded">
            {subtitle}
          </span>
        </div>
        <h3 className="text-lg font-bold text-white font-mono">{title}</h3>
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">{desc}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
        {tags.map((tag, idx) => (
          <span key={idx} className="text-[9px] font-mono text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-850 uppercase">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function AwardItem({ award, sub }) {
  return (
    <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-xl flex items-start gap-3 hover:border-zinc-700 transition-colors">
      <div className="p-2 rounded bg-zinc-950 border border-zinc-850 text-cyan-400 mt-0.5">
        <Award size={16} />
      </div>
      <div>
        <h3 className="text-sm sm:text-base font-bold text-white font-mono">{award}</h3>
        <p className="text-xs text-zinc-500 font-mono mt-0.5">{sub}</p>
      </div>
    </div>
  );
}
