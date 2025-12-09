import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { 
  Home as HomeIcon, Building2, ShieldCheck, Factory, GraduationCap, 
  ShoppingBag, Truck, Landmark, BarChart3, Check, Menu, X, ArrowRight,
  Cpu, Activity, Zap, Database, Globe, Lock, Scan, Disc
} from "lucide-react";
import heroBg from "@assets/generated_images/dark_futuristic_mesh_gradient_background.png";
import logoImg from "@assets/generated_images/futuristic_abstract_eye_logo_symbol.png";

// Data Structure
const products = [
  {
    id: "01",
    category: "Home & Family",
    sku_count: 12,
    icon: HomeIcon,
    features: ["Smart Gate", "Face ID", "Elder Care"]
  },
  {
    id: "02",
    category: "City & Traffic",
    sku_count: 18,
    icon: Building2,
    features: ["Traffic OS", "e-Challan", "Crowd AI"]
  },
  {
    id: "03",
    category: "Enterprise",
    sku_count: 14,
    icon: ShieldCheck,
    features: ["Perimeter", "Access", "Fraud"]
  },
  {
    id: "04",
    category: "Industry 4.0",
    sku_count: 12,
    icon: Factory,
    features: ["Safety", "Compliance", "Hazards"]
  },
  {
    id: "05",
    category: "Education",
    sku_count: 8,
    icon: GraduationCap,
    features: ["Attendance", "Safety", "Proctoring"]
  },
  {
    id: "06",
    category: "Retail",
    sku_count: 10,
    icon: ShoppingBag,
    features: ["Footfall", "Theft", "Heatmaps"]
  },
  {
    id: "07",
    category: "Transport",
    sku_count: 10,
    icon: Truck,
    features: ["Fleet", "Driver", "Cargo"]
  },
  {
    id: "08",
    category: "Gov & Defence",
    sku_count: 12,
    icon: Landmark,
    features: ["Border", "Intel", "Disaster"]
  },
  {
    id: "09",
    category: "Data & Insights",
    sku_count: 16,
    icon: BarChart3,
    features: ["Analytics", "Prediction", "API"]
  }
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-black cursor-crosshair">
      
      {/* Global Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left shadow-[0_0_10px_var(--primary)]"
        style={{ scaleX }}
      />

      {/* Grid Overlay Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20"
           style={{ 
             backgroundImage: `linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)`,
             backgroundSize: '40px 40px'
           }}
      />

      {/* Header / HUD */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : ""}`}>
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-primary/50 flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-primary/20 scale-0 group-hover:scale-100 transition-transform"/>
              <Scan className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl tracking-widest leading-none">DEEPLOOK</span>
              <span className="font-mono text-[10px] text-primary tracking-[0.3em]">SYSTEMS v2.0</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-12">
            {["Modules", "Intelligence", "Network"].map((item) => (
              <ScrollLink 
                key={item}
                to={item.toLowerCase()} 
                smooth={true} 
                className="font-mono text-xs uppercase tracking-widest text-white/60 hover:text-primary cursor-pointer transition-colors relative group"
              >
                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary">&gt;</span>
                {item}
              </ScrollLink>
            ))}
          </div>

          <button className="hidden md:flex items-center gap-2 px-6 py-2 border border-primary/30 bg-primary/10 hover:bg-primary/20 text-primary font-mono text-xs tracking-widest uppercase transition-all">
            <Lock className="w-3 h-3" />
            Access Terminal
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col justify-center items-center pt-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-primary/30 bg-black/50 backdrop-blur-sm rounded-none mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-xs text-primary tracking-widest uppercase">System Online • Monitoring 500M+ Nodes</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-bold leading-none tracking-tighter mb-6 mix-blend-screen">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">VISION</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-primary bg-[200%_auto] animate-border-flow">INTELLIGENCE</span>
            </h1>

            <p className="max-w-2xl mx-auto text-xl md:text-2xl font-light text-white/60 mb-12 leading-relaxed">
              The operating system for a billion eyes. <br/>
              <span className="text-primary font-mono text-sm tracking-widest uppercase mt-2 block">[ DeepLook India Core ]</span>
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <ScrollLink to="modules" smooth={true} className="cursor-pointer group relative px-10 py-4 bg-primary text-black font-bold font-mono uppercase tracking-widest hover:bg-white transition-colors">
                Initialize
                <div className="absolute -inset-1 border border-primary opacity-30 group-hover:scale-105 transition-transform" />
              </ScrollLink>
              <a href="mailto:founder@deeplook.in" className="px-10 py-4 border border-white/20 text-white font-mono uppercase tracking-widest hover:bg-white/5 transition-colors">
                Contact H.Q.
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom Ticker */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/80 border-t border-white/10 flex items-center overflow-hidden">
          <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap font-mono text-xs text-white/40">
             {Array(10).fill("Analyzing Stream... Identifying Patterns... Optimizing Traffic Flow... Detecting Anomalies...").map((text, i) => (
               <span key={i}>{text}</span>
             ))}
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section id="modules" className="py-32 relative bg-black">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-20 border-b border-white/10 pb-8">
            <div>
              <span className="text-primary font-mono text-xs tracking-widest mb-2 block">/// SECTOR GRID</span>
              <h2 className="text-4xl md:text-6xl text-white font-heading font-bold">ACTIVE MODULES</h2>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-2xl font-mono text-primary font-bold">09</div>
              <div className="text-xs text-white/40 font-mono">SECTORS ONLINE</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="holo-card group p-8 min-h-[280px] flex flex-col justify-between"
              >
                <div className="scanline" />
                <div className="hud-corners absolute inset-0 pointer-events-none" />
                
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 border border-white/10 text-primary">
                    <product.icon size={24} />
                  </div>
                  <span className="font-mono text-xs text-white/30">{product.id}</span>
                </div>

                <div>
                  <h3 className="text-2xl text-white font-bold mb-2 group-hover:text-primary transition-colors">
                    {product.category}
                  </h3>
                  <div className="h-px w-12 bg-primary/30 mb-4 group-hover:w-full transition-all duration-500" />
                  <ul className="space-y-1">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 font-mono text-xs text-white/60">
                        <span className="w-1 h-1 bg-primary/50" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-mono text-xs text-primary">{product.sku_count} SKUs DETECTED</span>
                  <ArrowRight size={16} className="text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence / Tech Section */}
      <section id="intelligence" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 clip-path-polygon" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
               <div className="inline-block px-3 py-1 border border-primary/30 text-primary font-mono text-xs mb-6">
                 CORE INFRASTRUCTURE
               </div>
               <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 leading-[0.9]">
                 NEURAL<br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-primary">NETWORK</span>
               </h2>
               <p className="text-lg text-white/60 mb-12 leading-relaxed font-light">
                 Our proprietary architecture processes video data at the edge, reducing latency to near-zero. 
                 We don't just record; we understand, analyze, and act.
               </p>

               <div className="space-y-6">
                 {[
                   { title: "Edge Computing", val: "10ms Latency" },
                   { title: "Encryption", val: "AES-256" },
                   { title: "Uptime", val: "99.999%" }
                 ].map((stat, i) => (
                   <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4 group hover:border-primary/50 transition-colors">
                     <span className="text-xl text-white font-heading">{stat.title}</span>
                     <span className="font-mono text-primary">{stat.val}</span>
                   </div>
                 ))}
               </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl animate-pulse-slow" />
              <div className="relative border border-white/10 bg-black/60 backdrop-blur-xl p-10">
                <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                  <Activity className="text-primary animate-pulse" />
                  <span className="font-mono text-sm text-white/80">LIVE SYSTEM DIAGNOSTICS</span>
                </div>
                
                <div className="space-y-4 font-mono text-xs text-green-400/80">
                  <div className="flex justify-between">
                    <span>{'>'} CORE_TEMP</span>
                    <span>42°C [NORMAL]</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{'>'} NODES_ACTIVE</span>
                    <span>542,109,221</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{'>'} THREAT_LEVEL</span>
                    <span className="text-white">LOW</span>
                  </div>
                  <div className="mt-4 p-4 bg-black/40 border border-green-500/20 rounded">
                    <span className="block mb-2 text-white/40">Console Output:</span>
                    <span className="typing-effect">Initializing deep learning models... DONE</span><br/>
                    <span className="typing-effect delay-75">Connecting to satellite grid... DONE</span><br/>
                    <span className="typing-effect delay-150 text-primary">System Ready. Waiting for input_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="network" className="py-20 border-t border-white/10 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Scan className="text-primary w-6 h-6" />
                <span className="font-heading font-bold text-2xl tracking-widest">DEEPLOOK</span>
              </div>
              <p className="max-w-xs text-white/40 font-mono text-xs leading-relaxed">
                ADVANCED VISUAL INTELLIGENCE SYSTEMS.<br/>
                MADE IN INDIA. DEPLOYED GLOBALLY.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="font-mono text-xs text-primary mb-4">SYSTEM</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="hover:text-white cursor-pointer transition-colors">Status</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
                  <li className="hover:text-white cursor-pointer transition-colors">API Keys</li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs text-primary mb-4">CONTACT</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li className="hover:text-white cursor-pointer transition-colors">founder@deeplook.in</li>
                  <li className="hover:text-white cursor-pointer transition-colors">Encrypted Mail</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/20 font-mono">
            <div>ID: 8829-AF-2026</div>
            <div>&copy; 2026 DEEPLOOK INDIA PRIVATE LIMITED</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
