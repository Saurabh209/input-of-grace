import { useState } from 'react'
import InputOfGrace from './InputOfGrace'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <main className='flex justify-center items-center min-h-screen p-8'>
          <div className='bg-white  rounded-xl shadow-2xl border border-gray-200 w-[60%] max-w-2xl p-8 backdrop-blur-sm bg-opacity-95'>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">InputOfGrace Demo</h1>
              <p className="text-gray-600">  input component with customizable styles</p>
            </div>

            <InputOfGrace
              InputFieldWidth='300px'
              borderRadius='5px'
              // fixedValue={""}
              // label={""}
              // placeholder={""}
              helperText={"Input Field for your name "}
              errorMessage={"Something wrong"}
              disabled={false}
              invalid={false}
              variant={'filled'}
            
            />

            
            <div className="mt-12 bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Available Props</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>InputFieldWidth:</strong> '100%', '300px', etc.
                </div>
                <div>
                  <strong>borderRadius:</strong> '5px', '10px', '15px', etc.
                </div>
                <div>
                  <strong>fixedValue:</strong> Pre-filled value
                </div>
                <div>
                  <strong>label:</strong> Input label text
                </div>
                <div>
                  <strong>placeholder:</strong> Placeholder text
                </div>
                <div>
                  <strong>helperText:</strong> Tooltip helper text
                </div>
                <div>
                  <strong>errorMessage:</strong> Error message text
                </div>
                <div>
                  <strong>disabled:</strong> true/false
                </div>
                <div>
                  <strong>invalid:</strong> true/false (shows error state)
                </div>
                <div>
                  <strong>variant:</strong> 'outlined', 'filled', 'ghost'
                </div>

              </div>
            </div>
          </div>

        </main>
      </div>



    </>
  )
}

export default App
