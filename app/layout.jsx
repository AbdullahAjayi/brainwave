import "@styles/globals.css"

export const metadata = {
  title: "Braiwnwave",
  description: "Built by Abdullah Ajayi",
}

const layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/brainwave-symbol.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}

export default layout
