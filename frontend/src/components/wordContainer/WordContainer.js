import React from 'react'

export default class WordContainer extends React.Component {
  constructor(props) {
          super(props)
          this.state = {
              data: [''],
          }
  }
  componentDidMount() {
    this.setState({ data: this.props.data })
  }

  render() {
      const { data } = this.state
      let data0 = data
      return (
      <div>
          <br/> unicode {data0[0]}
          <br/> mc {data0[1]}
          <br/> pu {data0[2]}
          <br/> ct {data0[3]}
          <br/> sh {data0[4]}
          <br/> mn {data0[5]}
          <br/> kr {data0[6]}
          <br/> vn {data0[7]}
          <br/> jp-go {data0[8]}
          <br/> jp-kan {data0[9]}
          <br/> jp-tou {data0[10]}
          <br/> jp-kwan {data0[11]}
          <br/> jp-other {data0[12]}
      </div>

      )
  }
}