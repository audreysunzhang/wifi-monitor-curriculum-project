import { Button } from '@mui/material';
import {useState} from 'react'

export default function SubButton() {
    // Your component logic here
    const[count, setCount] = useState(0);

    function handleClick(){
      setCount(count +1);
    }
    return (
      <div>
        <Button variant="contained" onClick={handleClick}>Clicked on {count} times</Button>
      </div>
    );
  }