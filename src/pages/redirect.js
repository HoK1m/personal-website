import { useEffect } from "react"
import { navigate } from "@reach/router"

const Redirect = () => {
  useEffect(() => {
      navigate('/soon');
  }, [])
  return null;
}

export default Redirect