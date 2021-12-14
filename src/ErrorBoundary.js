import { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
	state = { hasError: false };
	static getDerivedStateFromError() {
		return { hasError: true };
	}
	componentDidCatch(error, info) {
		// Log to error monitoring
		console.error('ErrorBoundary caught an error', error, info);
	}
	componentDidUpdate() {
		if (this.state.hasError) {
			setTimeout(() => this.setState({ redirect: true }), 5000);
		}
	}

	render() {
		if (this.state.hasError) {
			return (
				<h2>
					This listing has an error. <Link to='/'>Click here</Link> to
					go back to the homepage.
				</h2>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
