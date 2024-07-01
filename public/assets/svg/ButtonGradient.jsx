const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        <linearGradient
          id="paint0_linear_238_6"
          x1={11.4762}
          y1={-5.20455}
          x2={11.4762}
          y2={43}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#89F9E8" />
          <stop offset={1} stopColor="#FACB7B" />
        </linearGradient>
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#D87CEE" />
          <stop offset="100%" stopColor="#FACB7B" />
        </linearGradient>
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#9099FC" />
          <stop offset="100%" stopColor="#89F9E8" />
        </linearGradient>
        <linearGradient
          id="paint0_linear_241_8"
          x1={10.4762}
          y1={-2.81818}
          x2={10.4762}
          y2={48.7273}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9099FC" />
          <stop offset={1} stopColor="#D87CEE" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default ButtonGradient
