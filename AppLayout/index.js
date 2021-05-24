// Styles
import { globalStyles } from './styles'

export default function AppLayout ({ children }) {

  return (
    <div className="app-layout" >
      {children}
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}