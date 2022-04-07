export default function Solutions({solutions}){
  console.log('solutions ==', solutions)
  return (
    <div>
      {
        solutions.length > 0 
        ?
        <>
          <h3>Solutions found : {solutions.length}</h3>
          <p>Items in dictionary: {solutions.join().replaceAll(',',', ')}</p>
        </>
        :
        <h3>No solutions found</h3>
      }
    </div>
  )
}
