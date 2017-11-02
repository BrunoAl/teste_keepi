import React, { Component } from 'react'
import styled from 'styled-components'
import { listRepoFilesRequest } from '../Requests'

const TableContainer = styled.table `
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  color: #ef3e68;

  tr {
    background: #f8f8f8;
    border: 1px solid #ddd;
    padding: .35em;
  }

  th, td {
    padding: .625em;
    text-align: center;
  }

  th {
    font-size: .85em;
    letter-spacing: .1em;
    text-transform: uppercase;
  }
`
const Section = styled.section `
  box-sizing: border-box;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 80px;
  margin-top: 50px;
  padding: 25px 40px;
  background-color: #ffffff;
  border-radius: 6px;
`

const Caption = styled.caption `
  font-size: 1.3em;
  margin: .5em 0 .75em;
`

class Table extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }

    this.listRepoFiles = this.listRepoFiles.bind(this)
  }

  listRepoFiles() {
    listRepoFilesRequest('BrunoAl', 'newedenfaces-react', 'app')
      .then(response => console.log('response ', response))
  }

  render() {
    return (
      <Section>
        <TableContainer>
          <Caption>Meu Git, Minha Vida</Caption>
          <tbody>
            <tr>
              <td>
                <p><a href="">Row 1</a></p>
              </td>
            </tr>
            <tr>
              <td onClick={this.listRepoFiles}>Row 2</td>
            </tr>
          </tbody>
        </TableContainer>
      </Section>
    );
  }
}
export default Table
