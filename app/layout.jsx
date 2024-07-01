import "@styles/globals.css"

export const metadata = {
  title: "Braiwnwave",
  description: "Brainwave: building the next generation ai prompting service",
}

const layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/file-text.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}

export default layout
