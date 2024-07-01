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
        <meta
          property="og:image"
          content="https://unsplash.com/photos/black-and-green-full-face-helmet-on-white-wooden-table-IGa3Md8wP6g"
        />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}

export default layout
