import React, { useState } from 'react';
import clsx from 'clsx';

const InputOfGrace = ({
    InputFieldWidth = '100%',
    borderRadius = '',
    fixedValue = "",
    label = "Username",
    placeholder = "Whisper your Tarnished name…",
    helperText = "",
    errorMessage = "",
    disabled = false,
    invalid = false,
    variant = "",
    size = '',
    customClass = `
     block text-sm font-medium mb-1 transition-colors duration-200
    ${invalid ? 'text-red-600' : 'text-gray-700'}
    ${disabled ? 'text-gray-400' : ''}
    `,
    onChange = () => { },

}) => {

    const [showTooltip, setShowTooltip] = useState(false);

    // Variant styles
    const variantStyles = {
        outlined: `
      border-2 bg-white
      ${invalid
                ? 'border-red-500 focus:border-red-600'
                : 'border-gray-300 focus:border-blue-500'
            }
    `,
        filled: `
      border-2 bg-gray-50
      ${invalid
                ? 'border-red-500 focus:border-red-600 bg-red-50'
                : 'border-gray-400 focus:border-blue-500 focus:bg-[#cccccc4d]  '
            }
    `,
        ghost: `
      border-2 bg-transparent border-transparent
      ${invalid
                ? 'border-red-300 focus:border-red-500 focus:bg-red-50'
                : 'hover:border-gray-200 focus:border-blue-300 focus:bg-blue-50'
            }
    `
    };

    // Label styles based on variant and state


    // Input styles
    const inputStyles = clsx(
        'px-3 py-2 placeholder-gray-500 focus:outline-none focus:ring-0 transition-all duration-200',
        variantStyles[variant],
        disabled && 'bg-gray-100 text-gray-400 cursor-not-allowed',
        variant === 'outlined' && 'rounded-md',
        variant === 'filled' && 'rounded-t-md'
    );

    return (
        <div className={`w-full   `}>
            {/* Label */}

            {label && (

                <div className='flex gap-2 mb-1'>
                    <label style={{ color: invalid ? 'red' : 'black' }}>
                        {label}
                    </label>
                    {helperText && (
                        <div className=" relative  flex justify-center items-center  ">
                            <div className=" ">
                                <button
                                    type="button"
                                    className="w-4 h-4 rounded-full bg-gray-400 text-white text-xs flex items-center justify-center hover:bg-blue-600 transition-colors duration-200   shadow-sm"
                                    onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}
                                    tabIndex={-1}
                                >
                                    ?
                                </button>

                                {/* Tooltip */}
                                {showTooltip && (
                                    <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10 opacity-100 transition-opacity duration-200">
                                        {helperText}
                                        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Input Field */}
            <input
                type="text"
                value={fixedValue ? fixedValue : null}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
                className={inputStyles}
                style={{ borderRadius: borderRadius, width: InputFieldWidth, color: invalid ? 'red' : '' }}
            />
            {invalid &&
                <p className='text-red-500'>{errorMessage ? errorMessage : null}</p>
            }
            <div className="mt-6">
                <button className="w-full bg-gradient-to-r cursor-pointer from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Submit
                </button>
            </div>



        </div>
    );
};


export default InputOfGrace;