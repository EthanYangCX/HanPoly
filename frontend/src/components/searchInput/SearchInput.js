import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Button } from '@material-ui/core'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete'

export default class SearchInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      invalidMessage: '',
      suggestions: []
    }
  }

  componentDidMount() {
    this.setState({ showErrorMsg: false, invalidMessage: '' })
  }

  onSearchChange = e => {
    const query = e.target.value

    this.setState({ query }, async () => {
        this.setState({ suggestions: [] })
    })
  }

  setSearchInput = (event) => {
    this.setState({ query: event.target.text }, this.selectSearch)
  }

  /**
   * Select between a quote search or movie search
   * @param  {Event} e - event from submitting the button
   */
  selectSearch = e => {
    e && e.preventDefault()
    const { query } = this.state
    this.props.performSearch({query})
  }

  render() {
    const { suggestions } = this.state

    return (
      <Grid item xs={12}>
        <form noValidate autoComplete="off" onSubmit={this.selectSearch}>
          <div className="search-form">
            <div className="search-input">
              <Autocomplete
                id="outlined-basic"
                getOptionLabel={option => (typeof option === 'string' ? option : option.description)}
                options={suggestions}
                autoComplete
                includeInputInList
                disableopenonfocus="true"
                disableListWrap
                freeSolo
                className="suggestions"
                renderInput={params => {
                  return(
                  <TextField
                    {...params}
                    variant="outlined"
                    fullWidth
                    onChange={this.onSearchChange}
                  />
                )}}
                renderOption={option => {
                  console.log(option)

                  return (
                    <div>{option}</div>
                  );
                }}
              />
            </div>

            <Button
              className="search-button"
              variant="outlined"
              color="primary"
              type="submit"
            >Search</Button>
          </div>
        </form>
      </Grid>
    )
  }
}

SearchInput.propTypes = {
  performSearch: PropTypes.func.isRequired,
}