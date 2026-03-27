// Clean wave divider — fill must exactly match the NEXT section's bg color
export default function WaveDivider({ fill = '#ffffff', flip = false }) {
  return (
    <div
      className="w-full leading-none block"
      style={{
        marginBottom: '-2px',
        transform: flip ? 'scaleY(-1)' : 'none',
        lineHeight: 0,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '70px' }}
      >
        <path
          fill={fill}
          fillOpacity="1"
          d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z"
        />
      </svg>
    </div>
  )
}
