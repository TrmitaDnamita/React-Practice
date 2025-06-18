import '../styles/ResetButton.css';

export const ResetButton = ({isBoardEmpty, resetBoard }) => {
	if (isBoardEmpty) return null;
	
	const retry = 'Play Again';
	
	return (
		<section className='replay'>
			<button id="play-again" onClick={resetBoard}>
				{retry}
			</button>
		</section>
	);
};