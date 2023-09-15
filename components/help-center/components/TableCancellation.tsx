import React from 'react'

function TableCancellation() {
  return (
      <div className='w-full m-auto'>
          <table className='m-auto mb-12 border-4 text-center'>
                <tr className='m-auto mb-12 border-2'>
                    <th></th>
                    <th className="px-8 py-3 bg-orangePrimary text-black border-2">Nomad</th>
                    <th className="px-8 py-3 bg-black text-orangePrimary border-2">Business</th>
                </tr>
                <tr>
                    <td className="px-8 py-3 text-green-500 font-bold border-2">More than 48hs</td>
                    <td  className="px-8 py-3 border-2">No penalty</td>
                    <td className="px-8 py-3 border-2">No Penalty</td>
                </tr>
                <tr>
                    <td className="px-8 py-3 font-bold border-2">Between 48 to 24hs</td>
                    <td className="px-8 py-3 border-2">24hs of account suspension</td>
                    <td className="px-8 py-3 border-2">20% from total shift value</td>
              </tr>
                <tr>
                    <td  className="px-8 py-3 font-bold border-2">Less than 24hs</td>
                    <td className="px-8 py-3 border-2">Review rate 0</td>
                    <td className="px-8 py-3 border-2">Total shift value (without commission)</td>
                </tr>
                <tr>
                    <td className="px-8 py-3 text-red-600 font-bold border-2">No show #1</td>
                  <td className="px-8 py-3 border-2">Account suspended for 72 hs + review rate 0 (zero)</td>
                  <td className="px-8 py-3 border-2" rowSpan={3} >Total shift value (including commission)</td>
                </tr>
                <tr>
                    <td className="px-8 py-3 text-red-600 font-bold border-2">No show #3</td>
                  <td className="px-8 py-3 border-2">Account suspended for 1 week + review rate 0 (zero)</td>                  
                </tr>
                <tr>
                    <td className="px-8 py-3 text-red-600 font-bold border-2">No show #3</td>
                  <td className="px-8 py-3 border-2">Account blocked via SSN</td>                  
                </tr>            
          </table>
    </div>
  )
}

export default TableCancellation