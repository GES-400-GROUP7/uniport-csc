function FormInput(props) {
    return (
        <div className='flex flex-col gap-1 mb-2'>
            <label className='text-lg font-medium'>
                {props.inputName}
                <span className='text-[#E3002F]'>*</span>
            </label>
            <input className='border p-4 focus:outline-[#7AD8FF]'
                type={props.inputType}
                placeholder={props.placeholder}
                name={props.name}
                required />
        </div>
    )
}

export default FormInput