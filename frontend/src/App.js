import React, { Component, Fragment } from 'react'
import { Container } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { Link } from '@material-ui/core'

import './App.css';

import SearchInput from './components/searchInput/SearchInput'
import WordContainer from './components/wordContainer/WordContainer'
import API from './utils/API'

const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2196f3',
    },
    secondary: {
      light: '#cc33ff',
      main: '#e699ff',
      contrastText: '#ffcc00',
    }
  },
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hans: [],
      showCards: false,
      loading: false,
      queryTime: 0
    }
  }

  performSearch = (data) => {
    const { query } = data

    this.setState({ loading: true, showErrorMsg: false }, async () => {
      try {
        const response = await API.post(
          '/han_search',
          { query }
        )
        this.setState({
          hans: response.data.hans,
          showCards: true,
          loading: false
        })
      } catch (error) {
        console.error(error)
        this.setState({
          loading: false
        })
      }
    })
  }

  render() {
    const { showCards, hans, loading, queryTime } = this.state

    return (
      <ThemeProvider theme={darkTheme}>
        <Container className="app">
          <h3>
            <Link color="primary" underline="none" variant="inherit" onClick={() => window.location.reload()}>
              HanPoly
            </Link>
          </h3>
          <div className="search-container">
            <SearchInput
              performSearch={this.performSearch}
            />
          </div>
          <Fragment>
            {loading ?
              <Fragment>
                {Array.apply(null, { length: 5 }).map((e, i) => (
                  <Skeleton variant="rect" width={790} height={170} className="skeleton-card" />
                ))}
              </Fragment>
              : showCards && <WordContainer data={hans} queryTime={queryTime} />
            }
          </Fragment>
        </Container>
      </ThemeProvider>
    )
  }
}