import '../styles/ResetButton.css';

export const ResetButton = ({isBoardEmpty, resetGame }) => {
	if (isBoardEmpty) return null;
	
	const retry = 'Play Again';
	
	return (
		<section className='replay'>
			<button id="play-again" onClick={resetGame}>
				{retry}
			</button>
		</section>
	);
};