import React , {useState , useEffect} from 'react'
import "./Checkbox.css" 

export default function Checkbox() {

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const setChecked = async () => {
      const checked = false
      setChecked(checked)
    }
  })
 

  return ( 
  <>
    <label class="containerr">
      <input type="checkbox" checked="false" onClick={async () => setChecked()} />
      <span class="checkmark"></span>
    </label>
   
    </>
  )
}
