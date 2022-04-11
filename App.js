import { ThemeProvider } from 'styled-components';
import theme from './theme';
import View1 from './components/View1'
export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <View1 /> 
    </ThemeProvider>
  );
}

