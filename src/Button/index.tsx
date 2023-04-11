type Props = {
	onSubmit: any
}

export const Button: React.FC<Props> = ({ onSubmit }) => {
	return <button onClick={onSubmit}>Buscar</button>
}
