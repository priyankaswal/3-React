import {Camera, Trash2} from "lucide-react";
import { Icon } from 'lucide-react';
import { barbecue, burger } from '@lucide/lab';


function App() {
  return (
    <>
      <Camera color="red" size={48} strokeWidth={1}/>
      <Trash2 />
      <Icon iconNode={barbecue} />
      <Icon iconNode={burger} />
    </>
  )
}

export default App
