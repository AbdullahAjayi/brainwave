import { useEffect, useState } from "react"

export default function useHash() {
  const [hash, setHash] = useState("")

  useEffect(() => {
    setHash(window.location.hash)
    const handleHashChange = () => {
      setHash(window.location.hash)
    }
    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [hash])
  return hash
}
