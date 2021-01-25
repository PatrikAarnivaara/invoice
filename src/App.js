import Invoice from './components/Invoice';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Invoice />
		</ThemeProvider>
	);
};

export default App;
