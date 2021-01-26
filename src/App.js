import Invoice from './components/Invoice';
import { ThemeProvider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import TableToolbar from './UI/TableToolbar';
import BackgroundImage from './UI/BackgroundImage';

import theme from './theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<TableToolbar />
				<BackgroundImage />
				<Invoice />
			</Container>
		</ThemeProvider>
	);
};

export default App;
