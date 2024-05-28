import { useState } from "react";

const AddMentor = () => {

  const [ count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(c => c + 1)} className="bg-gray-500 p-2 rounded-lg">Click</button>
    </div>
  )
}

export default AddMentor;