import ButtonSvg from "@public/assets/svg/ButtonSvg"

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`
  const spanClasses = "relative z-10"

  const renderButton = () => (
    <button
      className={`button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
        px || "px-7"
      } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`}
      onClick={onClick}
    >
      {ButtonSvg(white)}
      <span className={spanClasses}>{children}</span>
    </button>
  )

  const renderLink = () => (
    <a href={href} className={classes}>
      {ButtonSvg(white)}
      <span className={spanClasses}>{children}</span>
    </a>
  )

  return href ? renderLink() : renderButton()
}

export default Button
