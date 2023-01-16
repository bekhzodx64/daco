import InputMask from 'react-input-mask'
import { Controller } from 'react-hook-form'

const InputMaskNumber = ({ control }) => {
	return (
		<Controller
			name='phone'
			control={control}
			rules={{
				required: true,
			}}
			render={({ field }) => (
				<InputMask
					mask='+\9\98 (99) 999 99 99'
					value={field.value}
					maskChar='_'
					onChange={field.onChange}
				>
					{(inputProps) => (
						<input
							{...inputProps}
							type='text'
							className='w-full lg:w-auto px-5 py-4 outline-none rounded-xl bg-accent/50 placeholder:text-white placeholder:opacity-40 font-medium text-[15px]'
							placeholder='Phone number'
						/>
					)}
				</InputMask>
			)}
		/>
	)
}

export default InputMaskNumber
