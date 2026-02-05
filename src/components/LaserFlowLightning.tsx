// import LaserFlow from '@/components/LaserFlow';
// import { useRef } from 'react';

// export function LaserFlowLightning() {
//   const revealImgRef = useRef(null);
//   return (
//     <div 
//       style={{ 
//         height: '800px', 
//         position: 'relative', 
//         overflow: 'hidden',
//         backgroundColor: '#000814', // Dark blue-black to match top image
//         background: 'linear-gradient(to bottom, #000814 0%, #001529 50%, #000814 100%)' // Subtle gradient
//       }}
//       onMouseMove={(e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         const el = revealImgRef.current;
//         if (el) {
//           el.style.setProperty('--mx', `${x}px`);
//           el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
//         }
//       }}
//       onMouseLeave={() => {
//         const el = revealImgRef.current;
//         if (el) {
//           el.style.setProperty('--mx', '-9999px');
//           el.style.setProperty('--my', '-9999px');
//         }
//       }}
//     >
//       <LaserFlow
//               horizontalBeamOffset={0.1}
//               verticalBeamOffset={0.0}
//               color="#00ff9d" // Bright cyan/turquoise to match the lightning
//               horizontalSizing={0.5}
//               verticalSizing={2}
//               wispDensity={1.5}
//               wispSpeed={15}
//               wispIntensity={6} // Increased for brighter lightning
//               flowSpeed={0.35}
//               flowStrength={0.25}
//               fogIntensity={0.3} // Reduced for clearer lightning
//               fogScale={0.3}
//               fogFallSpeed={0.6}
//               decay={0.9} // Reduced decay for brighter effect
//               falloffStart={1.2} className={undefined} style={undefined} dpr={undefined}      />
      
//       <div style={{
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translateX(-50%)',
//         width: '86%',
//         height: '60%',
//         backgroundColor: 'rgba(6, 0, 16, 0.8)', // Semi-transparent dark background
//         borderRadius: '20px',
//         border: '2px solid #00ff9d', // Match lightning color
//         boxShadow: '0 0 20px rgba(0, 255, 157, 0.3)', // Glow effect
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: 'white',
//         fontSize: '2rem',
//         zIndex: 6
//       }}>
//         {/* Your content here */}
//       </div>
      
//       <img
//         ref={revealImgRef}
//         src="/path/to/image.jpg"
//         alt="Reveal effect"
//         style={{
//           position: 'absolute',
//           width: '100%',
//           top: '-50%',
//           zIndex: 5,
//           mixBlendMode: 'lighten',
//           opacity: 0.3,
//           pointerEvents: 'none',
//           '--mx': '-9999px',
//           '--my': '-9999px',
//           WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
//           maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
//           WebkitMaskRepeat: 'no-repeat',
//           maskRepeat: 'no-repeat'
//         }}
//       />
//     </div>
//   );
// }