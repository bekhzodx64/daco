import InputMask from 'react-input-mask'
import { Controller } from 'react-hook-form'

const InputMaskNumber = ({ control, className }) => {
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
							className={className}
							placeholder='Phone number'
						/>
					)}
				</InputMask>
			)}
		/>
	)
}

export default InputMaskNumber
