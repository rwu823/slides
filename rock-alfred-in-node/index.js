// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const theme = createTheme({
  primary: '#561e72'
})

class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme} >
        <Deck transition={['zoom', 'slide']} transitionDuration={500} >
          {require('./1-cover')}
          {require('./2-workflow')}
          {require('./3-hot-inputs')}
        </Deck>
      </Spectacle>
    );
  }
}

ReactDOM.render(<Presentation />, document.getElementById('root'))