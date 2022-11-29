import React from 'react'
import { useReducer } from 'react';
const initialState = {
	nombre: '',
	email: '',
	mensaje: ''
}
const reducer = (state, action) =>
{
	switch (action.type) {
		case 'CH_NOMBRE':
		return{
			...state,
			nombre:action.value
		}
		case 'CH_EMAIL':
		return{
			...state,
			email:action.value
		}
		case 'CH_MENSAJE':
			return{
				...state,
				mensaje:action.value
			}
			case 'RESET':
				return initialState
				
		default: {

			return state
		}

	}
}

const ReactUseReducer = () =>
{
	const [state, dispatch] = useReducer(reducer, initialState)

	const handleSubmit = (event)=>{
event.preventDefault()
console.log(state)
	}
	return (
		<div>
			<h1>useReducer</h1>

			<form onSubmit={handleSubmit}>
				<div>
					<label>Nombre</label>
					<input 
					type="text" 
					name='nombre' 
					value={state.nombre} 
					onChange={(event) => dispatch({ type: 'CH_NOMBRE', value: event.target.value })} />
				</div>
				<div>
					<label>Email</label>
					<input 
					type="text" 
					name='email' 
					value={state.email}
					onChange={(event) => dispatch({ type: 'CH_EMAIL', value: event.target.value })} />
					
				</div>
				<div>
					<label>Mensaje</label>
					<textarea 
					type='text' 
					name="mensaje" 
					id="" 
					cols="30" 
					rows="10" 
					value={state.mensaje} 
					onChange={(event) => dispatch({ type: 'CH_MENSAJE', value: event.target.value })} >

					</textarea>
				</div>
				<input 
				type="submit" 
				value="Enviar" />
				<button onClick={()=>dispatch({type:'RESET'})}>RESET</button>
			</form>
		</div>
	)
}

export default ReactUseReducer;
