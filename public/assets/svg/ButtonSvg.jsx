const ButtonSvg = (white) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={44}
      viewBox="0 0 21 44"
      fill={white ? "white" : "none"}
      className="absolute top-0 left-0"
    >
      <path
        d="M21 1H8C4.13401 1 1 4.13401 1 8V36C1 39.866 4.13401 43 8 43H21"
        stroke={white ? 'white' : "url(#paint0_linear_238_6)"}
        strokeWidth={2}
      />
    </svg>
    <svg
      className="absolute top-0 left-[20px] w-[calc(100%-41px)]"
      height="44"
      viewBox="0 0 100 44"
      preserveAspectRatio="none"
      fill={white ? "white" : "none"}
    >
      {white ? (
        <polygon fill="white" fillRule="nonzero" points='0 0 100 0 100 44 0 44' />
      ) : (
        <>
          <polygon
            fill="url(#btn-top)" // mentioned in ButtonGradient.jsx
            fillRule="nonzero"
            points="100 42 100 44 0 44 0 42"
          />
          <polygon
            fill="url(#btn-bottom)" // mentioned in ButtonGradient.jsx
            fillRule="nonzero"
            points="100 0 100 2 0 2 0 0"
          />
        </>
      )}
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={44}
      viewBox="0 0 21 44"
      fill={white ? "white" : "none"}
      className="absolute right-0 top-0"
    >
      <path
        d="M0 1H6.60066C9.19054 1 11.5688 2.42997 12.7833 4.71743L19.1826 16.7704C19.7193 17.7813 20 18.9084 20 20.053V36C20 39.866 16.866 43 13 43H0"
        stroke={white ? 'white' : "url(#paint0_linear_241_8)"}
        strokeWidth={2}
      />
    </svg>
  </>
)

export default ButtonSvg
