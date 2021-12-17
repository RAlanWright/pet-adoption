// eslint-disable
import { Component } from 'react';

class Carousel extends Component {
	state = {
		active: 0,
	};

	static defaultProps = {
		images: ['http://pets-images.dev-apis.com/pets/none.jpg'],
	};

	handleIndexClick = (event) => {
		this.setState({
			active: +event.target.dataset.index,
		});
	};

	render() {
		const { active } = this.state;
		const { images } = this.props;

		return (
			<div className='grid grid-rows-2'>
				<div className='place-self-center'>
					<img
						className='p-2 m-2 w-1/2 rounded-lg'
						src={images[active]}
						alt='animal'
					/>
				</div>
				<div className='flex flex-wrap place-content-center place-items-center'>
					{images.map((photo, index) => (
						<div className='p-5 m-2 w-1/6'>
							<img
								key={photo}
								src={photo}
								data-index={index}
								onClick={this.handleIndexClick}
								className={
									index === active
										? 'rounded-full opacity-75'
										: 'rounded-lg'
								}
								alt='animal thumbnail'
							/>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default Carousel;
