import './App.css';
import useStatus from '../../hooks/useStatus';
import { Analytics } from '@vercel/analytics/react';

export function History (props: any) {
	const handleButton = (id: number) => {
		props.resetHistory(id);
	};
	return (
		<div className='history'>
				<ol>
						{props.history.map((_item: any , index: number) => 
							<li key={index}>
									<button onClick={() => handleButton(index)}>
								go to game 
									{index === 0 ? ' start': ' move #' + index}
									</button>
							</li>)}
				 </ol>
			</div>
	)
}

// Игровое поле с клетками
export function Board (props: any) {
	return (
		<div className='board'>
			{props.field.map((player: string, index: number) => 
				<button className='square' key={index} onClick={() => props.move(index)}>{player}</button>
				)}
		</div>
	)
}

export function Status (props: any) {
	return (
		<div className="status-screen" role='status'>
				<span>{props.isDraw() ? 'Ничья!' 
					: (props.gameOver() ? 
							('Победил игрок ' + (props.whichPlayer() === 'X' ? 'O' : 'X')) : 
							('Ходит игрок: ' + props.whichPlayer())
							)}
				</span>
				<History move={props.move} field={props.field} history={props.history} resetHistory={props.resetHistory}/>
		</div>);
}

export function Game () {
	const [field, move, gameOver, isDraw, whichPlayer, history, resetHistory] = useStatus(Array(9).fill('')); // инкапсуляция (инициализация происходит внутри)

	return (
		<div className='game'>
				<Board field={field} move={move}/>
				<Status field={field} move={move} gameOver={gameOver} isDraw={isDraw} whichPlayer={whichPlayer} history={history} resetHistory={resetHistory}/>
		</div>
	);
}

// Всё приложение
export function App () {
	return (
  		<div className="App" role="appcontainer">
      		<Game />
					<Analytics />
      	</div>
    	);
};
